import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/siteConfig";
import { getBlogs } from "@/lib/blogs";
import { getCaseStudies } from "@/lib/caseStudies";

// Revalidate sitemap periodically (every 1 hour)
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs();
  const caseStudies = await getCaseStudies();

  const blogUrls: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${siteConfig.url}/blogs/${post.slug}`,
    lastModified: new Date(
      post.lastUpdated || post.publishedDate || Date.now()
    ),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const caseStudyUrls: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${siteConfig.url}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/custom-software-development-company`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/blogs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...caseStudyUrls,
    ...blogUrls,
  ];
}
