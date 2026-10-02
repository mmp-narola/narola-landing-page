"use server";

import { connectToDatabase } from "@/lib/mongodb";
import { CaseStudy as CaseStudyModel } from "@/models/CaseStudy";
import { Blog as BlogModel } from "@/models/Blog";

export interface SearchResultItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  type: "Blog" | "Case Study";
}

export async function globalSearchAction(
  query: string,
): Promise<SearchResultItem[] | null> {
  if (!query) return null;

  try {
    await connectToDatabase();
    // Using a simple case-insensitive regex for demo purposes.
    const regex = new RegExp(query, "i");

    // Search case studies (title, client, industry)
    const caseStudies = await CaseStudyModel.find({
      $or: [{ title: regex }, { client: regex }, { industry: regex }],
    })
      .limit(3)
      .lean();

    console.log("caseStudies", caseStudies);

    // Search blogs (title, excerpt)
    const blogs = await BlogModel.find({
      $or: [{ title: regex }, { excerpt: regex }],
    })
      .limit(3)
      .lean();

    console.log("blogs", blogs);

    const results: SearchResultItem[] = [];

    if (caseStudies.length > 0) {
      results.push(
        ...caseStudies.map((cs: any) => ({
          id: cs._id.toString(),
          title: cs.title,
          summary: cs.overview?.challenge || cs.headline || cs.title,
          url: `/case-studies/${cs.slug}`,
          type: "Case Study" as const,
        })),
      );
    }

    if (blogs.length > 0) {
      results.push(
        ...blogs.map((b: any) => ({
          id: b._id.toString(),
          title: b.title,
          summary: b.excerpt || b.title,
          url: `/blogs/${b.slug}`,
          type: "Blog" as const,
        })),
      );
    }

    return results;
  } catch (error) {
    console.error("Search action error:", error);
    return null;
  }
}
