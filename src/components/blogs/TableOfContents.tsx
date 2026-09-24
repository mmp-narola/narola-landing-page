"use client";

import { useEffect, useState } from "react";
import { TableOfContentItem } from "@/content/blogs";

interface TableOfContentsProps {
  items: TableOfContentItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0% -60% 0%", threshold: 0.1 }
    );

    const headingElements = items
      .flatMap((item) => [item.id, ...(item.subItems?.map((s) => s.id) || [])])
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Table of Contents" className="w-full">
      {/* Mobile Toggle Dropdown */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpenMobile((prev) => !prev)}
          className="flex w-full items-center justify-between rounded-2xl border border-slate/15 bg-surface-muted p-4 text-sm font-semibold text-ink"
          aria-expanded={isOpenMobile}
        >
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 text-interactive-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
            Table of Contents
          </span>
          <svg
            className={`h-4 w-4 text-slate transition-transform duration-200 ${isOpenMobile ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {isOpenMobile && (
          <div className="mt-2 rounded-2xl border border-slate/15 bg-white p-4 shadow-md">
            <ul className="space-y-2.5">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsOpenMobile(false)}
                    className={`block text-xs font-medium transition-colors ${
                      activeId === item.id ? "font-semibold text-interactive-blue" : "text-slate hover:text-ink"
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Sticky Card */}
      <div className="hidden lg:block">
        <div className="rounded-2xl border border-slate/10 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 border-b border-slate/10 pb-3 text-sm font-semibold text-ink">
            <svg className="h-4 w-4 text-interactive-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
            <span>Table of Contents</span>
          </div>

          <ul className="mt-4 space-y-2.5 text-xs">
            {items.map((item) => {
              const isActive = activeId === item.id;

              return (
                <li key={item.id} className="space-y-1.5">
                  <a
                    href={`#${item.id}`}
                    className={`block rounded-lg px-2.5 py-1.5 transition-all duration-150 ${
                      isActive
                        ? "bg-interactive-blue/10 font-semibold text-interactive-blue"
                        : "text-slate hover:bg-surface-muted hover:text-ink"
                    }`}
                  >
                    {item.title}
                  </a>

                  {item.subItems && item.subItems.length > 0 && (
                    <ul className="ml-3 space-y-1 border-l border-slate/15 pl-2.5">
                      {item.subItems.map((sub) => {
                        const isSubActive = activeId === sub.id;

                        return (
                          <li key={sub.id}>
                            <a
                              href={`#${sub.id}`}
                              className={`block py-1 text-[11px] transition-colors ${
                                isSubActive
                                  ? "font-semibold text-interactive-blue"
                                  : "text-slate/80 hover:text-ink"
                              }`}
                            >
                              • {sub.title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
