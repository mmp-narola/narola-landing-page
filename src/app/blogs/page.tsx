import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { BlogListClient } from "@/components/blogs/BlogListClient";
import { BlogNewsletter } from "@/components/blogs/BlogNewsletter";
import { getBlogs } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blogs & Tech Insights",
  description:
    "Explore the latest trends, technology guides, engineering best practices, and enterprise insights from Narola Infotech's expert software engineering team.",
  openGraph: {
    title: "Blogs & Tech Insights | Narola Infotech",
    description:
      "Explore the latest trends, technology guides, engineering best practices, and enterprise insights from Narola Infotech's expert software engineering team.",
    url: "/blogs",
    type: "website",
  },
  alternates: {
    canonical: "/blogs",
  },
};

// Revalidate blog listings every 60 seconds from MongoDB
export const revalidate = 60;

function ListingStateMessage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center py-20 text-center">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-black/[0.08] bg-surface-muted">
        <svg
          className="h-5 w-5 text-subtle-gray"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      </div>
      <h2 className="text-lg font-semibold text-light-gray">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-subtle-gray">
        {description}
      </p>
    </div>
  );
}

export default async function BlogsPage() {
  let posts: Awaited<ReturnType<typeof getBlogs>> = [];
  let loadError = false;

  try {
    posts = await getBlogs();
  } catch {
    loadError = true;
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Site Header with updated navigation */}
      <Header />

      <main className="flex-1">
        {/* Hero & Banner Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-surface-muted via-white to-white py-12 md:py-16">
          {/* Subtle Ambient Decorative Gradients */}
          {/* <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-full max-w-4xl rounded-full bg-brand-blue/5 blur-3xl" /> */}

          <Container className="relative">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs font-medium text-subtle-gray">
                <li>
                  <Link
                    href="/"
                    className="flex items-center gap-1.5 transition-colors hover:text-interactive-blue"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <svg
                    className="h-3.5 w-3.5 text-subtle-gray/40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </li>
                <li className="font-semibold text-light-gray" aria-current="page">
                  Blogs
                </li>
              </ol>
            </nav>

            {/* Banner Content */}
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-interactive-blue/20 bg-interactive-blue/5 px-3.5 py-1 text-xs font-semibold text-interactive-blue">
                <span className="h-1.5 w-1.5 rounded-full bg-interactive-blue" />
                Knowledge Base & Insights
              </div>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-light-gray md:text-5xl md:leading-tight">
                Read About the Latest Topics & Trends in Technology
              </h1>

              <p className="mt-4 text-base text-subtle-gray md:text-lg leading-relaxed">
                When you are investing in digital transformation, staying ahead of emerging technologies is essential. Explore expert guides, comparisons, and engineering insights.
              </p>
            </div>
          </Container>
        </section>

        {/* Interactive Blog Listing Section */}
        <section className="pb-16 pt-4 md:pb-24">
          <Container>
            {loadError ? (
              <ListingStateMessage
                title="Something went wrong"
                description="We couldn't load these articles right now — please try again shortly."
              />
            ) : posts.length === 0 ? (
              <ListingStateMessage
                title="No blog posts published yet"
                description="New articles and guides are on the way — check back soon."
              />
            ) : (
              <BlogListClient posts={posts} />
            )}
          </Container>
        </section>

        {/* Newsletter Callout */}
        <BlogNewsletter />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
