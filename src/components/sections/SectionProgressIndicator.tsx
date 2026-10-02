"use client";

import { useEffect, useRef, useState } from "react";

interface TrackedSection {
  id: string;
  label: string;
  dot: string;
  activeText: string;
}

const SECTIONS: TrackedSection[] = [
  { id: "ecommerce", label: "eCommerce", dot: "bg-bright-blue", activeText: "text-bright-blue" },
  { id: "ai-automation", label: "AI & Automation", dot: "bg-accent-violet", activeText: "text-accent-violet" },
  { id: "product-engineering", label: "Product Engineering", dot: "bg-accent-orange", activeText: "text-accent-orange" },
];

/**
 * Lightweight, desktop-only "which section am I in" indicator for the three
 * homepage disciplines. Pure IntersectionObserver (no scroll listener, no
 * animation library) — tracks whichever tracked section currently has the
 * most overlap with a horizontal band near the vertical center of the
 * viewport, and highlights the matching dot + label. Hidden entirely while
 * none of the three sections are in view (e.g. on the hero or footer), and
 * hidden on small screens where a fixed side rail would crowd the layout.
 */
export function SectionProgressIndicator() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const ratiosRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const nodes = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratiosRef.current.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let bestId: string | null = null;
        let bestRatio = 0;
        ratiosRef.current.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        setActiveId(bestRatio > 0.08 ? bestId : null);
      },
      {
        // Narrow band around the vertical middle of the viewport — the
        // section whose content fills that band the most is "current".
        rootMargin: "-40% 0px -40% 0px",
        threshold: Array.from({ length: 21 }, (_, i) => i / 20),
      }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      aria-label="Homepage section progress"
      className={`pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-5 transition-opacity duration-500 lg:flex ${activeId ? "opacity-100" : "opacity-0"
        }`}
    >
      {SECTIONS.map((section) => {
        const isActive = section.id === activeId;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={handleClick(section.id)}
            aria-current={isActive ? "true" : undefined}
            className="pointer-events-auto group flex items-center gap-3"
          >
            <span
              className={`whitespace-nowrap text-xs font-semibold tracking-wide transition-all duration-300 ${isActive
                ? `translate-x-0 opacity-100 ${section.activeText}`
                : "pointer-events-none translate-x-1 opacity-0"
                }`}
            >
              {section.label}
            </span>
            <span
              className={`block rounded-full border border-black/[0.12] transition-all duration-300 ${isActive ? `h-2.5 w-2.5 border-transparent ${section.dot}` : "h-2 w-2 bg-black/[0.12] group-hover:bg-black/[0.25]"
                }`}
              aria-hidden="true"
            />
          </a>
        );
      })}
    </nav>
  );
}
