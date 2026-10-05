"use server";

import { connectToDatabase } from "@/lib/mongodb";
import { CaseStudy as CaseStudyModel } from "@/models/CaseStudy";
import { Blog as BlogModel } from "@/models/Blog";
import { navItems } from "@/content/navigation";

export interface SearchResultItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  type: "Blog" | "Case Study" | "Page";
}

export async function globalSearchAction(
  query: string,
): Promise<SearchResultItem[] | null> {
  if (!query) return null;

  try {
    await connectToDatabase();
    // Extract meaningful slugs (keywords) from the query
    const stopWords = new Set([
      "i",
      "need",
      "a",
      "with",
      "and",
      "or",
      "to",
      "for",
      "the",
      "an",
      "of",
      "in",
      "on",
      "build",
      "me",
      "have",
      "my",
      "is",
      "are",
      "what",
      "how",
      "can",
      "you",
      "do",
      "we",
      "want",
    ]);
    const words = query
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)
      .filter((word) => word.length > 2 && !stopWords.has(word));

    // Fallback to the original query if no meaningful words are left
    const searchTerms =
      words.length > 0 ? words : [query.replace(/[^\w\s]/g, "")];

    // Create an array of regexes for each keyword
    const regexes = searchTerms.map((term) => new RegExp(term, "i"));

    // Search case studies (matching any of the keywords)
    const caseStudies = await CaseStudyModel.find({
      $or: [
        { title: { $in: regexes } },
        { clientName: { $in: regexes } },
        { industry: { $in: regexes } },
        { service: { $in: regexes } },
        { summary: { $in: regexes } },
        { tagline: { $in: regexes } },
      ],
    })
      .limit(3)
      .lean();

    // Search blogs (matching any of the keywords)
    const blogs = await BlogModel.find({
      $or: [
        { title: { $in: regexes } },
        { excerpt: { $in: regexes } },
        { categoryLabel: { $in: regexes } },
      ],
    })
      .limit(3)
      .lean();

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

    const pageResults: SearchResultItem[] = [];
    const navigation = await import("@/content/navigation");
    const seenLinks = new Set<string>();
    const existingUrls = new Set(results.map((r) => r.url));

    const extractLinksFromObj = (obj: any) => {
      if (!obj || typeof obj !== "object") return;

      if (Array.isArray(obj)) {
        obj.forEach(extractLinksFromObj);
        return;
      }

      const href = obj.href;
      if (typeof href === "string" && !href.includes("?")) {
        const label = obj.label || obj.title;
        const desc = obj.description || "";

        if (label && !seenLinks.has(href) && !existingUrls.has(href)) {
          if (
            regexes.some((r) => r.test(label) || r.test(desc) || r.test(href))
          ) {
            seenLinks.add(href);

            let itemType: "Page" | "Blog" | "Case Study" = "Page";
            if (href.startsWith("/case-studies/")) itemType = "Case Study";
            else if (href.startsWith("/blogs/")) itemType = "Blog";

            pageResults.push({
              id: href,
              title: label,
              summary: desc || `Explore our ${label} page.`,
              url: href,
              type: itemType,
            });
          }
        }
      }

      for (const key of Object.keys(obj)) {
        extractLinksFromObj(obj[key]);
      }
    };

    extractLinksFromObj(navigation);
    results.push(...pageResults);

    return results;
  } catch (error) {
    console.error("Search action error:", error);
    return null;
  }
}
