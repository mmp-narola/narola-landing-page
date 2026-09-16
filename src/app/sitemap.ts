import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/siteConfig";
import { blogPosts } from "@/content/blogs";
import { getBlogs } from "@/lib/blogs";

// Revalidate sitemap periodically (every 1 hour)
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dbPosts = await getBlogs();
  const allPosts = [...dbPosts, ...blogPosts];
  const uniquePosts = Array.from(
    new Map(allPosts.map((p) => [p.slug, p])).values()
  );

  const blogUrls = uniquePosts.map((post) => ({
    url: `${siteConfig.url}/blogs/${post.slug}`,
    lastModified: new Date(
      post.lastUpdated || post.publishedDate || Date.now()
    ),
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/blogs`,
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}
