import { connectToDatabase } from "@/lib/mongodb";
import { Blog } from "@/models/Blog";
import { blogPosts, BlogPost } from "@/content/blogs";

/**
 * Fetch all blogs from MongoDB. If DB is unavailable or empty, fallback to static blogPosts.
 */
export async function getBlogs(): Promise<BlogPost[]> {
  try {
    await connectToDatabase();
    // Query MongoDB blogs sorted by createdAt descending
    const dbBlogs = await Blog.find({}).sort({ createdAt: -1 }).lean();

    if (dbBlogs && dbBlogs.length > 0) {
      // Serialize Mongoose documents into plain BlogPost objects
      return JSON.parse(JSON.stringify(dbBlogs)) as BlogPost[];
    }
  } catch (error) {
    console.warn(
      "⚠️ Could not fetch blogs from MongoDB, using static content:",
      error instanceof Error ? error.message : error
    );
  }

  // Fallback to static blog data
  return blogPosts;
}

/**
 * Fetch a single blog by slug from MongoDB, with fallback to static content.
 */
export async function getBlogBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    await connectToDatabase();
    const dbBlog = await Blog.findOne({ slug }).lean();

    if (dbBlog) {
      return JSON.parse(JSON.stringify(dbBlog)) as BlogPost;
    }
  } catch (error) {
    console.warn(
      `⚠️ Could not fetch blog '${slug}' from MongoDB, using static content:`,
      error instanceof Error ? error.message : error
    );
  }

  // Fallback to static blog data
  return blogPosts.find((p) => p.slug === slug);
}

/**
 * Fetch related blog posts from MongoDB.
 */
export async function getRelatedBlogs(
  slug: string,
  limit = 3
): Promise<BlogPost[]> {
  const current = await getBlogBySlug(slug);
  const allBlogs = await getBlogs();

  if (!current) {
    return allBlogs.slice(0, limit);
  }

  const related = (current.relatedSlugs || [])
    .map((s) => allBlogs.find((b) => b.slug === s))
    .filter((p): p is BlogPost => Boolean(p));

  if (related.length < limit) {
    const others = allBlogs.filter(
      (p) => p.slug !== slug && !related.some((r) => r.slug === p.slug)
    );
    related.push(...others.slice(0, limit - related.length));
  }

  return related.slice(0, limit);
}
