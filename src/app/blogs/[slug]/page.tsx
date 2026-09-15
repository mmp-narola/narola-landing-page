import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BlogCard } from "@/components/blogs/BlogCard";
import { TableOfContents } from "@/components/blogs/TableOfContents";
import { ShareButtons } from "@/components/blogs/ShareButtons";
import {
  blogPosts,
} from "@/content/blogs";
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
        {/* Article Banner Header */}
        <section className="relative overflow-hidden bg-gradient-to-b from-surface-muted via-white to-white pb-8 pt-10 md:pb-12 md:pt-14">
          <Container>
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate">
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
                    className="h-3.5 w-3.5 text-slate/40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="transition-colors hover:text-interactive-blue"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <svg
                    className="h-3.5 w-3.5 text-slate/40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </li>
                <li className="font-semibold text-ink truncate max-w-[200px] md:max-w-xs" aria-current="page">
                  {post.title}
                </li>
              </ol>
            </nav>

            {/* Post Title & Meta Header */}
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center rounded-full bg-interactive-blue/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-interactive-blue">
                  {post.categoryLabel}
                </span>
                <span className="text-xs text-slate">•</span>
                <span className="text-xs font-medium text-slate">
                  {post.readTime}
                </span>
              </div>

              <h1 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl md:text-4xl lg:text-5xl md:leading-tight">
                {post.title}
              </h1>

              {/* Author & Date Bar */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-slate/10 py-4">
                <div className="flex items-center gap-3">
                  {/* Author Avatar */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.author.avatarUrl || "/images/favicon.png"}
                    alt={post.author.name}
                    className="h-10 w-10 rounded-full border border-slate/20 bg-surface-muted p-1.5 object-contain"
                  />
                  <div>
                    <p className="text-sm font-bold text-ink">{post.author.name}</p>
                    <p className="text-xs text-slate">{post.author.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate">
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="h-4 w-4 text-slate/70"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>Updated: {post.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 2-Column Article Layout */}
        <section className="pb-16 pt-2 md:pb-24">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
              {/* Main Content Area (8 Cols) */}
              <article className="lg:col-span-8">
                {/* Visual Header Banner */}
                <div
                  className={`relative mb-10 overflow-hidden rounded-3xl bg-gradient-to-br ${post.gradient} p-8 md:p-12 text-white shadow-lg`}
                >
                  <div className="relative z-10 max-w-xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                      Overview & Key Highlights
                    </span>
                    <p className="mt-3 text-lg font-medium leading-relaxed text-white/95 md:text-xl">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Geometric backdrop elements */}
                  <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
                </div>

                {/* Article Introduction */}
                <div className="space-y-4 text-base leading-relaxed text-slate md:text-lg">
                  {post.introduction.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Article Content Sections */}
                <div className="mt-10 space-y-12 border-t border-slate/10 pt-8">
                  {post.sections.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-28">
                      <h2 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
                        {section.heading}
                      </h2>

                      <div className="mt-4 space-y-4 text-base leading-relaxed text-slate">
                        {section.content.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>

                      {/* Bullet points if available */}
                      {section.bulletPoints && section.bulletPoints.length > 0 && (
                        <ul className="mt-4 space-y-2.5 rounded-2xl bg-surface-muted p-5 text-sm text-ink md:text-base">
                          {section.bulletPoints.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5">
                              <svg
                                className="mt-1 h-4 w-4 shrink-0 text-interactive-blue"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Callout box if available */}
                      {section.callout && (
                        <div className="mt-6 rounded-2xl border-l-4 border-interactive-blue bg-interactive-blue/5 p-5 text-sm leading-relaxed text-ink md:text-base">
                          {section.callout.title && (
                            <h4 className="mb-1 font-bold text-interactive-blue">
                              {section.callout.title}
                            </h4>
                          )}
                          <p className="text-slate">{section.callout.text}</p>
                        </div>
                      )}
                    </section>
                  ))}
                </div>

                {/* FAQs Section (if present) */}
                {post.faqs && post.faqs.length > 0 && (
                  <div className="mt-12 space-y-4 border-t border-slate/10 pt-8">
                    <h3 className="text-xl font-bold text-ink md:text-2xl">
                      Frequently Asked Questions
                    </h3>
                    <div className="space-y-3">
                      {post.faqs.map((faq, fIdx) => (
                        <div
                          key={fIdx}
                          className="rounded-2xl border border-slate/10 bg-surface-muted p-5"
                        >
                          <h4 className="text-base font-bold text-ink">
                            {faq.question}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-slate">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Conclusion */}
                {post.conclusion && (
                  <div className="mt-10 rounded-3xl border border-slate/10 bg-gradient-to-r from-surface-muted to-white p-6 md:p-8">
                    <h3 className="text-lg font-bold text-ink md:text-xl">
                      Summary & Next Steps
                    </h3>
                    <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate md:text-base">
                      {post.conclusion.map((cPara, cIdx) => (
                        <p key={cIdx}>{cPara}</p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share Buttons & Tags */}
                <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-slate/10 py-6">
                  <ShareButtons title={post.title} />

                  <Link
                    href="/blogs"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-interactive-blue hover:underline"
                  >
                    <span>← Back to all blogs</span>
                  </Link>
                </div>
              </article>

              {/* Sidebar (4 Cols) */}
              <aside className="lg:col-span-4 space-y-8">
                {/* Table of Contents Sticky Component */}
                <div className="lg:sticky lg:top-24 space-y-6">
                  <TableOfContents items={post.tableOfContents} />

                  {/* CTA Card */}
                  <div className="rounded-3xl border border-slate/10 bg-gradient-to-br from-ink to-slate-900 p-6 text-white shadow-md">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-interactive-blue/30 px-3 py-1 text-xs font-semibold text-brand-blue">
                      Engineering Experts
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-white">
                      Need custom software or ecommerce development?
                    </h3>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      Narola Infotech brings 1500+ successful projects and top 1% vetted developers to scale your product roadmap.
                    </p>
                    <div className="mt-5">
                      <Button href="/#footer" className="w-full text-center">
                        Schedule a Free Call
                      </Button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-slate/10 bg-surface-muted py-14 md:py-16">
            <Container>
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-ink md:text-2xl">
                    More Articles You Might Like
                  </h2>
                  <p className="mt-1 text-xs text-slate md:text-sm">
                    Continue exploring related technology guides and industry insights.
                  </p>
                </div>
                <Link
                  href="/blogs"
                  className="hidden text-xs font-bold text-interactive-blue transition-colors hover:underline sm:block"
                >
                  View All Blogs →
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((rPost) => (
                  <BlogCard key={rPost.slug} post={rPost} />
                ))}
              </div>
            </Container>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
