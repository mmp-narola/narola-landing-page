"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Visual treatment: fade+rise (default) or fade+scale */
  variant?: "up" | "scale";
  /** Extra delay in ms, for staggering siblings. */
  delay?: number;
}

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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: visible ? `${delay}ms` : "0ms" } : undefined}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
