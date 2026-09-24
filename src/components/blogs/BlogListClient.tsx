"use client";

import { useState, useMemo } from "react";
import { BlogPost, BlogCategoryInfo } from "@/content/blogs";
import { BlogCard } from "@/components/blogs/BlogCard";
import { BlogSearchAndFilter } from "@/components/blogs/BlogSearchAndFilter";

interface BlogListClientProps {
  posts: BlogPost[];
}

export function BlogListClient({ posts }: BlogListClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<BlogCategoryInfo["id"]>("all");
  const [visibleCount, setVisibleCount] = useState(6);

  // Calculate category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    posts.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [posts]);

  // Filter posts based on category & search query
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchesTitle = post.title.toLowerCase().includes(q);
      const matchesExcerpt = post.excerpt.toLowerCase().includes(q);
      const matchesCategoryName = post.categoryLabel.toLowerCase().includes(q);

      return matchesTitle || matchesExcerpt || matchesCategoryName;
    });
  }, [posts, selectedCategory, searchQuery]);

  // Determine featured post (only in default "all" state without active search)
  const isDefaultView = selectedCategory === "all" && !searchQuery.trim();
  const featuredPost = isDefaultView ? filteredPosts.find((p) => p.featured) : null;
  const gridPosts = isDefaultView && featuredPost
    ? filteredPosts.filter((p) => p.slug !== featuredPost.slug)
    : filteredPosts;

  const visibleGridPosts = gridPosts.slice(0, visibleCount);
  const hasMore = visibleCount < gridPosts.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setVisibleCount(6);
  };

  return (
    <div className="space-y-12">
      {/* Search & Filter Component */}
      <BlogSearchAndFilter
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          setVisibleCount(6);
        }}
        selectedCategory={selectedCategory}
        onCategoryChange={(cat) => {
          setSelectedCategory(cat);
          setVisibleCount(6);
        }}
        categoryCounts={categoryCounts}
        totalCount={posts.length}
      />

      {/* Featured Blog Card (if present) */}
      {featuredPost && (
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-interactive-blue" />
            <h2 className="text-xs font-semibold uppercase tracking-wide text-subtle-gray">
              Editor&apos;s Pick & Spotlight
            </h2>
          </div>
          <BlogCard post={featuredPost} featured />
        </div>
      )}

      {/* Main Grid View */}
      {filteredPosts.length > 0 ? (
        <div className="space-y-10">
          {isDefaultView && featuredPost && (
            <div className="flex items-center justify-between border-b border-black/[0.10] pb-4">
              <h2 className="text-lg font-semibold text-light-gray md:text-xl">
                All Latest Articles
              </h2>
              <span className="text-xs font-medium text-subtle-gray">
                Showing {Math.min(visibleGridPosts.length + 1, filteredPosts.length)} of {filteredPosts.length} articles
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {visibleGridPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center pt-6">
              <button
                type="button"
                onClick={handleShowMore}
                className="group inline-flex items-center gap-2.5 rounded-full border border-interactive-blue/30 bg-white px-8 py-3.5 text-sm font-medium text-interactive-blue shadow-sm transition-all duration-200 hover:border-interactive-blue hover:bg-interactive-blue hover:text-white hover:shadow-md"
              >
                <span>Show More Articles</span>
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Empty State */
        <div className="mx-auto max-w-md rounded-2xl border border-black/[0.08] bg-white p-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-surface-muted text-subtle-gray">
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-light-gray">No articles found</h3>
          <p className="mt-2 text-sm text-subtle-gray">
            We couldn&apos;t find any blog posts matching &ldquo;{searchQuery}&rdquo; in this category.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-interactive-blue px-5 py-2.5 text-xs font-medium text-white shadow-xs transition-colors hover:bg-interactive-blue/90"
          >
            Reset Search & Filters
          </button>
        </div>
      )}
    </div>
  );
}
