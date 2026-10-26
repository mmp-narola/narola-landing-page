"use client";

import { useEffect, useState } from "react";

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
 * homepage disciplines. Smoothly tracks the active discipline section
 * relative to the viewport vertical center, highlighting the matching dot + label.
 * Hidden entirely while none of the three sections are in view (e.g. on the hero or footer),
 * and hidden on small screens where a fixed side rail would crowd the layout.
 */
export function SectionProgressIndicator() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      const nodes = SECTIONS.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
      })).filter((item): item is { id: string; el: HTMLElement } => Boolean(item.el));

      if (nodes.length === 0) return;

      const triggerPoint = window.innerHeight * 0.5;
      const firstTop = nodes[0].el.getBoundingClientRect().top;
      const lastBottom = nodes[nodes.length - 1].el.getBoundingClientRect().bottom;

      // Hidden if user is above the first discipline (Hero) or below the last (Our Work / Footer)
      if (firstTop > triggerPoint || lastBottom < triggerPoint) {
        setActiveId(null);
        return;
      }

      // Current section is the last section whose top is at or above the trigger line
      let currentId: string = nodes[0].id;
      for (let i = 0; i < nodes.length; i++) {
        const rect = nodes[i].el.getBoundingClientRect();
        if (rect.top <= triggerPoint) {
          currentId = nodes[i].id;
        }
      }

      setActiveId(currentId);
    };

    updateActiveSection();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveId(id);
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
            className={`group flex items-center gap-3 ${activeId ? "pointer-events-auto" : "pointer-events-none"
              }`}
          >
            <span
              className={`whitespace-nowrap text-xs font-semibold tracking-wide transition-all duration-300 ${section.activeText} ${isActive
                ? "translate-x-0 opacity-100"
                : "pointer-events-none translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
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
