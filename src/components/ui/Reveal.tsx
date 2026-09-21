"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Visual treatment: fade+rise (default), scale, or directional entry */
  variant?: "up" | "down" | "top" | "bottom" | "left" | "right" | "scale";
  /** Extra delay in ms, for staggering siblings. */
  delay?: number;
}

const variantClassMap: Record<string, string> = {
  up: "reveal-up",
  down: "reveal-down",
  top: "reveal-top",
  bottom: "reveal-bottom",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

/**
 * Lightweight scroll-reveal wrapper. Uses IntersectionObserver (no animation
 * library) to add a "reveal-visible" class the first time the element enters
 * the viewport. Actual motion (opacity/transform) lives in globals.css as
 * plain CSS transitions, and is disabled entirely under
 * prefers-reduced-motion via the global rule in globals.css.
 */
export function Reveal({ children, className = "", variant = "up", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let rafId1: number;
    let rafId2: number;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Double rAF ensures the browser paints the initial unrevealed state
          // before adding the reveal-visible class, guaranteeing the CSS transition runs
          // even when the component is remounted while already in viewport.
          rafId1 = requestAnimationFrame(() => {
            rafId2 = requestAnimationFrame(() => {
              setVisible(true);
            });
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (rafId1) cancelAnimationFrame(rafId1);
      if (rafId2) cancelAnimationFrame(rafId2);
    };
  }, []);

  const variantClass = variantClassMap[variant] || "reveal-up";

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: visible ? `${delay}ms` : "0ms" } : undefined}
      className={`reveal ${variantClass} ${visible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
