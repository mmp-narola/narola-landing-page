"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import React from "react";

export interface ProblemSolutionSectionProps {
  title: string;
  subtitle: string;
  paragraphs: string[];
  visual?: React.ReactNode;
  theme?: "white" | "muted";
}

export function ProblemSolutionSection({
  title,
  subtitle,
  paragraphs,
  visual,
  theme = "muted",
}: ProblemSolutionSectionProps) {
  const bgClass = theme === "muted" ? "bg-surface-muted" : "bg-white";

  return (
    <section className={`${bgClass} py-16 md:py-24`}>
      <Container>
        <div>
          <Reveal>
            <h2 className="text-xs font-bold tracking-widest text-slate uppercase mb-4">
              {title}
            </h2>
            <h3 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl lg:leading-tight max-w-4xl">
              {subtitle}
            </h3>
          </Reveal>
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <Reveal className="flex flex-col w-full">
            {visual ? (
              visual
            ) : (
              <div className="w-full aspect-[4/3] bg-surface-muted rounded-2xl flex items-center justify-center border border-black/[0.08]">
                <span className="text-slate font-medium">Image Placeholder</span>
              </div>
            )}
          </Reveal>

          {/* Right Column */}
          <Reveal delay={0.2} className="flex flex-col">
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              {paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={idx === 0 ? "text-xl font-medium text-ink md:text-2xl" : ""}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
