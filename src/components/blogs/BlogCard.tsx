import Link from "next/link";
import { BlogPost } from "@/content/blogs";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-interactive-blue/5 ${featured ? "md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-12 lg:items-center" : ""
        }`}
    >
      {/* Visual Header / Cover */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${post.gradient || "from-blue-600 to-indigo-800"} ${
          featured
            ? "h-64 lg:col-span-5 lg:h-full min-h-[260px]"
            : "h-48 w-full"
        }`}
      >
        {post.coverImage ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Dark overlay gradient for readable pills */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />
          </>
        ) : (
          <>
            {/* Subtle background decorative shapes */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay">
              <svg className="h-full w-full" viewBox="0 0 400 240" fill="none">
                <defs>
                  <pattern
                    id={`pattern-${post.slug}`}
                    width="30"
                    height="30"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 30 0 L 0 0 0 30"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.8"
                    />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill={`url(#pattern-${post.slug})`}
                />
              </svg>
            </div>

            {/* Ambient Glow */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl transition-transform duration-500 group-hover:scale-125" />
          </>
        )}

        {/* Category Pill Over Visual */}
        <div className="absolute left-4 top-4 z-10 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink backdrop-blur-md shadow-xs">
            {post.categoryLabel}
          </span>
          {featured && (
            <span className="inline-flex items-center rounded-full bg-accent-orange px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-xs">
              Featured Article
            </span>
          )}
        </div>

        {/* Reading Time Tag */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 rounded-lg bg-black/40 px-2.5 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
          <svg className="h-3.5 w-3.5 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Card Content */}
      <div
        className={`flex flex-1 flex-col justify-between p-6 md:p-7 ${featured ? "lg:col-span-7 lg:p-10" : ""
          }`}
      >
        <div>
          {/* Metadata: Date & Category */}
          <div className="flex items-center gap-3 text-xs text-slate">
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-slate/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {post.publishedDate}
            </span>
          </div>

          {/* Title */}
          <h3
            className={`mt-3 font-semibold text-ink transition-colors duration-200 group-hover:text-interactive-blue ${featured
              ? "text-xl md:text-2xl lg:text-3xl leading-snug"
              : "text-lg md:text-xl line-clamp-2 leading-snug"
              }`}
          >
            <Link href={`/blogs/${post.slug}`} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p
            className={`mt-3 text-slate leading-relaxed ${featured
              ? "text-base line-clamp-3 md:line-clamp-4"
              : "text-sm line-clamp-2"
              }`}
          >
            {post.excerpt}
          </p>
        </div>

        {/* Footer: Author & Read CTA */}
        <div className="mt-6 flex items-center justify-between border-t border-slate/10 pt-4">
          <div className="flex items-center gap-3">
            {/* Author Avatar */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.author.avatarUrl || "/images/favicon.png"}
              alt={post.author.name}
              className="h-8 w-8 rounded-full border border-slate/20 bg-surface-muted p-1 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-ink">{post.author.name}</span>
              <span className="text-[11px] text-slate">{post.author.role.split(" ")[0]}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-bold text-interactive-blue transition-transform duration-200 group-hover:translate-x-1">
            <span>Read Article</span>
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}
