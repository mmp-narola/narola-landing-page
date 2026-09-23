"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";

const subNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Why Us", href: "#why-us" },
  { label: "Services Matrix", href: "#services-breakdown" },
  { label: "Engagement Models", href: "#engagement-models" },
  { label: "Agile Process", href: "#process" },
  { label: "FAQs", href: "#faqs" },
];

export function CustomSoftwareSubnav() {
  const [activeHash, setActiveHash] = useState("#overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const item of subNavItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.getBoundingClientRect().height;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveHash(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-16 z-40 hidden border-y border-slate/10 bg-white/95 backdrop-blur-md md:block">
      <Container>
        <nav aria-label="Page Sections" className="flex items-center justify-between gap-2 overflow-x-auto py-3 no-scrollbar">
          <div className="flex items-center gap-1 sm:gap-2">
            {subNavItems.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-interactive-blue text-white shadow-sm"
                      : "text-slate hover:bg-surface-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <a
            href="#consultation-cta"
            className="shrink-0 rounded-lg bg-interactive-blue/10 px-3.5 py-1.5 text-xs font-medium text-interactive-blue transition-colors hover:bg-interactive-blue hover:text-white"
          >
            Get Free Quote →
          </a>
        </nav>
      </Container>
    </div>
  );
}
