import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogDetailRenderer } from "@/components/blogs/layouts";
import { blogPosts } from "@/content/blogs";
import { getBlogs, getBlogBySlug, getRelatedBlogs } from "@/lib/blogs";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// In static export mode (output: "export"), only allow pre-generated static params
export const dynamicParams = false;

export async function generateStaticParams() {
  const dbPosts = await getBlogs();
  const allPosts = [...dbPosts, ...blogPosts];

  // Deduplicate slugs so all MongoDB and static fallback slugs are generated
  const uniqueSlugs = Array.from(
    new Set(allPosts.map((post) => post.slug).filter(Boolean))
  );

  return uniqueSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Narola Infotech",
    };
  }

  return {
    title: `${post.title} | Narola Infotech`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedBlogs(slug, 3);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <BlogDetailRenderer post={post} relatedPosts={relatedPosts} />
      </main>
      <Footer />
    </div>
  );
}
