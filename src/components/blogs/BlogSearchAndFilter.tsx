"use client";

import { blogCategories, BlogCategoryInfo } from "@/content/blogs";

interface BlogSearchAndFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: BlogCategoryInfo["id"]) => void;
  categoryCounts: Record<string, number>;
  totalCount: number;
}

export function BlogSearchAndFilter({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categoryCounts,
  totalCount,
}: BlogSearchAndFilterProps) {
  return (
    <div className="space-y-6">
      {/* Search Input Bar */}
      <div className="relative mx-auto max-w-2xl">
        <div className="relative flex items-center">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-subtle-gray">
            <svg
              className="h-5 w-5 text-subtle-gray/70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search articles by title, topic, or keyword..."
            className="w-full rounded-2xl border border-black/[0.10] bg-white py-3.5 pl-11 pr-12 text-sm text-light-gray placeholder:text-subtle-gray/60 transition-all focus:border-interactive-blue focus:outline-none focus:ring-3 focus:ring-interactive-blue/10 md:text-base"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-subtle-gray transition-colors hover:text-light-gray"
              aria-label="Clear search"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        {blogCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count = cat.id === "all" ? totalCount : categoryCounts[cat.id] || 0;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onCategoryChange(cat.id)}
              className={`group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 md:text-sm ${isActive
                ? "bg-interactive-blue text-white shadow-md shadow-interactive-blue/20"
                : "border border-black/[0.08] bg-white text-subtle-gray hover:border-interactive-blue/40 hover:bg-surface-muted hover:text-light-gray"
                }`}
            >
              <span>{cat.label}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${isActive
                  ? "bg-white/20 text-white"
                  : "bg-surface-muted text-subtle-gray group-hover:bg-black/[0.15] group-hover:text-light-gray"
                  }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
