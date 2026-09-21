"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Visual treatment: fade+rise (default) or fade+scale, for larger hero-style elements. */
  variant?: "up" | "scale";
  /** Stagger delay in ms — use for sequential reveal of items within a group. */
  delay?: number;
  className?: string;
}

// Lightweight scroll-reveal: toggles a class via IntersectionObserver (native browser
// API, no animation library added) once an element enters the viewport. Content is
// always present in the DOM/accessibility tree — only opacity/transform are affected —
// and the global `prefers-reduced-motion` rule in globals.css collapses the transition
// to ~instant for users who request it.
export function Reveal({ children, variant = "up", delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

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

  const revealClass = variant === "scale" ? "reveal-scale" : "reveal";

  return (
    <div
      ref={ref}
      className={`${revealClass} ${visible ? "reveal-visible" : ""} ${className}`}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
