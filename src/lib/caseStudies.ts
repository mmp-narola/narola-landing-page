import { connectToDatabase } from "@/lib/mongodb";
import { CaseStudy as CaseStudyModel } from "@/models/CaseStudy";
import { caseStudies as staticCaseStudies, CaseStudy } from "@/content/caseStudies";

/**
 * Fetch all case studies from MongoDB. If DB is unavailable or empty, fallback to static caseStudies.
 */
export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    await connectToDatabase();
    const dbStudies = await CaseStudyModel.find({}).sort({ createdAt: -1 }).lean();

    if (dbStudies && dbStudies.length > 0) {
      // Serialize Mongoose documents into plain CaseStudy objects
      return JSON.parse(JSON.stringify(dbStudies)) as CaseStudy[];
    }
  } catch (error) {
    console.warn(
      "⚠️ Could not fetch case studies from MongoDB, using static content:",
      error instanceof Error ? error.message : error
    );
  }

  // Fallback to static case study data
  return staticCaseStudies;
}

/**
 * Fetch a single case study by slug from MongoDB, with fallback to static content.
 */
export async function getCaseStudyBySlug(
  slug: string
): Promise<CaseStudy | undefined> {
  try {
    await connectToDatabase();
    const dbStudy = await CaseStudyModel.findOne({ slug }).lean();

    if (dbStudy) {
      return JSON.parse(JSON.stringify(dbStudy)) as CaseStudy;
    }
  } catch (error) {
    console.warn(
      `⚠️ Could not fetch case study '${slug}' from MongoDB, using static content:`,
      error instanceof Error ? error.message : error
    );
  }

  // Fallback to static case study data
  return staticCaseStudies.find((cs) => cs.slug === slug);
}

/**
 * Fetch related case studies from MongoDB with fallback.
 */
export async function getRelatedCaseStudies(
  slug: string,
  limit = 3
): Promise<CaseStudy[]> {
  const current = await getCaseStudyBySlug(slug);
  const allStudies = await getCaseStudies();

  if (!current) {
    return allStudies.slice(0, limit);
  }

  const related = (current.relatedSlugs || [])
    .map((s) => allStudies.find((cs) => cs.slug === s))
    .filter((cs): cs is CaseStudy => Boolean(cs));

  if (related.length < limit) {
    const others = allStudies.filter(
      (cs) => cs.slug !== slug && !related.some((r) => r.slug === cs.slug)
    );
    related.push(...others.slice(0, limit - related.length));
  }

  return related.slice(0, limit);
}
