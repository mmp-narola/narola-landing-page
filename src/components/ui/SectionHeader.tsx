"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

export type SectionAccent = "blue" | "violet" | "orange";

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  indexBadge?: string;
  className?: string;
  align?: "center" | "left";
  /** Gives each homepage discipline (eCommerce / AI & Automation / Product
   *  Engineering) its own accent color on the badge + eyebrow, so a section
   *  reads as visually distinct the moment it enters the viewport. Classes
   *  are static per-accent (not interpolated) so Tailwind can see them. */
  accent?: SectionAccent;
}

const ACCENT_STYLES: Record<
  SectionAccent,
  {
    badgeBorder: string;
    badgeBgInactive: string;
    badgeRingInactive: string;
    badgeBgActive: string;
    badgeRingActive: string;
    badgeShadowActive: string;
    text: string;
    dot: string;
  }
> = {
  blue: {
    badgeBorder: "border-bright-blue/30",
    badgeBgInactive: "bg-[#0084ff]/5",
    badgeRingInactive: "ring-[#0084ff]/10",
    badgeBgActive: "bg-[#0084ff]/20",
    badgeRingActive: "ring-[#0084ff]/50",
    badgeShadowActive: "shadow-[0_0_20px_-3px_rgba(0,132,255,0.5)]",
    text: "text-bright-blue",
    dot: "bg-bright-blue",
  },
  violet: {
    badgeBorder: "border-accent-violet/30",
    badgeBgInactive: "bg-accent-violet/5",
    badgeRingInactive: "ring-accent-violet/10",
    badgeBgActive: "bg-accent-violet/20",
    badgeRingActive: "ring-accent-violet/50",
    badgeShadowActive: "shadow-[0_0_20px_-3px_rgba(139,92,246,0.5)]",
    text: "text-accent-violet",
    dot: "bg-accent-violet",
  },
  orange: {
    badgeBorder: "border-accent-orange/30",
    badgeBgInactive: "bg-accent-orange/5",
    badgeRingInactive: "ring-accent-orange/10",
    badgeBgActive: "bg-accent-orange/20",
    badgeRingActive: "ring-accent-orange/50",
    badgeShadowActive: "shadow-[0_0_20px_-3px_rgba(233,133,42,0.5)]",
    text: "text-accent-orange",
    dot: "bg-accent-orange",
  },
};

export function SectionHeader({
  title,
  subtitle,
  eyebrow,
  indexBadge,
  className = "mb-16 md:mb-20",
  align = "center",
  accent = "blue",
}: SectionHeaderProps) {
  const accentStyle = ACCENT_STYLES[accent];
  const [isVisible, setIsVisible] = useState(false);
  const [hasReached, setHasReached] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!titleRef.current) return;
      const rect = titleRef.current.getBoundingClientRect();
      const clampTop = 120;
      const clampBottom = window.innerHeight - 120;

      const y = rect.top + rect.height / 2;

      if (y >= clampTop && y <= clampBottom) {
        setHasReached(true);
      } else {
        setHasReached(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const alignmentClasses =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left";

  return (
    <div ref={containerRef} className={`${alignmentClasses} ${className} relative z-40`}>
      <style>{`
        @keyframes custom-shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-4px) rotate(-3deg); }
          40%, 80% { transform: translateX(4px) rotate(3deg); }
        }
        .animate-custom-shake {
          animation: custom-shake 1.2s cubic-bezier(.36,.07,.19,.97) both;
        }
        .title-highlight {
          text-shadow: 0 0 30px rgba(0, 132, 255, 0.4);
          color: #ffffff;
        }
      `}</style>

      {indexBadge && (
        <Reveal variant="scale" delay={0}>
          <div className="relative mb-4 inline-flex items-center justify-center" data-pointer-target="true">
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold tracking-wide shadow-sm ring-1 ring-inset transition-all duration-1000 ${accentStyle.badgeBorder} ${accentStyle.text} ${hasReached
                ? `${accentStyle.badgeBgActive} ${accentStyle.badgeRingActive} ${accentStyle.badgeShadowActive} animate-custom-shake`
                : `${accentStyle.badgeBgInactive} ${accentStyle.badgeRingInactive}`
                }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${accentStyle.dot}`} aria-hidden="true" />
              <span>{indexBadge}</span>
            </div>
          </div>
        </Reveal>
      )}

      {eyebrow && (
        <Reveal delay={100}>
          <span className={`mb-3 block text-xs font-semibold uppercase tracking-wide ${accentStyle.text}`}>
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal delay={150}>
        <div className="relative inline-block">
          <h2
            ref={titleRef}
            className={`text-display font-semibold tracking-tight md:text-display-lg text-balance transition-all duration-[1500ms] ease-in-out ${!indexBadge
              ? "text-light-gray"
              : hasReached
                ? "text-light-gray"
                : `${accentStyle.text} drop-shadow-sm`
              }`}
          >
            {title}
          </h2>
        </div>
      </Reveal>

      {subtitle && (
        <Reveal delay={250}>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-gray md:text-xl text-balance">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
