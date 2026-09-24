import { connectToDatabase } from "@/lib/mongodb";
import { Blog } from "@/models/Blog";
import { BlogPost } from "@/content/blogs";

/**
 * Fetch all blogs directly from MongoDB (the 'blogs' collection is the single
 * source of truth). On a connection error, or when the collection is empty,
 * this returns an empty array so pages can render their own empty/error
 * state rather than crashing.
 */
export async function getBlogs(): Promise<BlogPost[]> {
  try {
    await connectToDatabase();
    const dbBlogs = await Blog.find({}).sort({ createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(dbBlogs)) as BlogPost[];
  } catch (error) {
    console.error(
      "Could not fetch blogs from MongoDB:",
      error instanceof Error ? error.message : error
    );
    return [];
  }
}

/**
 * Fetch a single blog by slug directly from MongoDB. A slug that is
 * genuinely absent from the DB, or any connection error, resolves to
 * `undefined` so the caller can render a 404 / friendly error state.
 */
export async function getBlogBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    await connectToDatabase();
    const dbBlog = await Blog.findOne({ slug }).lean();
    return dbBlog ? (JSON.parse(JSON.stringify(dbBlog)) as BlogPost) : undefined;
  } catch (error) {
    console.error(
      `Could not fetch blog '${slug}' from MongoDB:`,
      error instanceof Error ? error.message : error
    );
    return undefined;
  }
}

/**
 * Fetch related blog posts, sourced entirely from getBlogs()/getBlogBySlug()
 * above (i.e. MongoDB-first).
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
