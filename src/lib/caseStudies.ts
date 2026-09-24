import { connectToDatabase } from "@/lib/mongodb";
import { CaseStudy as CaseStudyModel } from "@/models/CaseStudy";
import { CaseStudy } from "@/types/caseStudy";

/**
 * Slugs that should never be shown, even if a stale document for one still
 * exists in MongoDB.
 */
const HIDDEN_SLUGS = new Set(["shipping-adaptor", "safiri-salama", "e-star"]);

/**
 * Slugs that should always be pinned to the front of the listing, in this
 * exact order, ahead of everything else (which otherwise keeps whatever order
 * it arrived in — newest-first from MongoDB).
 */
const FEATURED_ORDER = ["tournament-fantasy", "rayco-group", "zocular"];

/**
 * Applies the hidden-slug filter and featured-first ordering to any list of
 * case studies, regardless of source.
 */
function applyVisibilityAndOrder(list: CaseStudy[]): CaseStudy[] {
  const visible = list.filter((cs) => !HIDDEN_SLUGS.has(cs.slug));

  const featured: CaseStudy[] = [];
  for (const slug of FEATURED_ORDER) {
    const match = visible.find((cs) => cs.slug === slug);
    if (match) featured.push(match);
  }

  const featuredSlugs = new Set(featured.map((cs) => cs.slug));
  const rest = visible.filter((cs) => !featuredSlugs.has(cs.slug));

  return [...featured, ...rest];
}

/**
 * Fetch all case studies directly from MongoDB (the 'case_studies' collection
 * is the single source of truth). On a connection error, or when the
 * collection is empty, this returns an empty array so pages can render their
 * own empty/error state rather than crashing.
 */
export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    await connectToDatabase();
    const dbStudies = await CaseStudyModel.find({}).sort({ createdAt: -1 }).lean();
    const dbList = JSON.parse(JSON.stringify(dbStudies)) as CaseStudy[];
    return applyVisibilityAndOrder(dbList);
  } catch (error) {
    console.error(
      "Could not fetch case studies from MongoDB:",
      error instanceof Error ? error.message : error
    );
    return [];
  }
}

/**
 * Fetch a single case study by slug directly from MongoDB. A slug that is
 * genuinely absent from the DB, or any connection error, resolves to
 * `undefined` so the caller can render a 404 / friendly error state.
 */
export async function getCaseStudyBySlug(
  slug: string
): Promise<CaseStudy | undefined> {
  if (HIDDEN_SLUGS.has(slug)) {
    return undefined;
  }

  try {
    await connectToDatabase();
    const dbStudy = await CaseStudyModel.findOne({ slug }).lean();
    return dbStudy ? (JSON.parse(JSON.stringify(dbStudy)) as CaseStudy) : undefined;
  } catch (error) {
    console.error(
      `Could not fetch case study '${slug}' from MongoDB:`,
      error instanceof Error ? error.message : error
    );
    return undefined;
  }
}

/**
 * Fetch related case studies, sourced entirely from getCaseStudies()/
 * getCaseStudyBySlug() above (i.e. MongoDB-first).
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
    .filter((s) => !HIDDEN_SLUGS.has(s))
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
