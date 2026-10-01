"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  indexBadge?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  title,
  subtitle,
  eyebrow,
  indexBadge,
  className = "mb-16 md:mb-20",
  align = "center",
}: SectionHeaderProps) {
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
    <div ref={containerRef} className={`${alignmentClasses} ${className} relative`}>
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
          <div className="relative mb-4 inline-flex items-center justify-center">
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-bright-blue/30 px-4 py-1.5 text-xs font-bold tracking-wide text-bright-blue shadow-sm ring-1 ring-inset transition-all duration-1000 ${
                hasReached
                  ? "bg-[#0084ff]/20 ring-[#0084ff]/50 shadow-[0_0_20px_-3px_rgba(0,132,255,0.5)] animate-custom-shake"
                  : "bg-[#0084ff]/5 ring-[#0084ff]/10"
              }`}
            >
              <span>{indexBadge}</span>
            </div>
          </div>
        </Reveal>
      )}
      
      {eyebrow && (
        <Reveal delay={100}>
          <span className="mb-3 block text-xs font-semibold uppercase tracking-wide text-bright-blue">
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal delay={150}>
        <div className="relative inline-block">
          <h2 
            ref={titleRef}
            data-pointer-target={indexBadge ? "true" : undefined}
            className={`text-display font-semibold tracking-tight md:text-display-lg text-balance transition-all duration-1000 ${
              !indexBadge 
                ? "text-light-gray" 
                : hasReached 
                  ? "text-light-gray" 
                  : "text-white drop-shadow-sm"
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
