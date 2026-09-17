"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { customSoftwareContent } from "@/content/customSoftwareDevelopment";

export function CustomSoftwareTechStack() {
  const { techStack } = customSoftwareContent;
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="tech-stack" className="scroll-mt-24 bg-surface-muted py-16 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-interactive-blue/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-interactive-blue">
            {techStack.badge}
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl">
            {techStack.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
            {techStack.description}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {techStack.categories.map((cat, idx) => {
            const isSelected = selectedCategory === idx;
            return (
              <button
                key={cat.name}
                type="button"
                className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm ${
                  isSelected
                    ? "bg-interactive-blue text-white shadow-md shadow-interactive-blue/25 scale-105"
                    : "bg-white text-slate border border-slate/10 hover:border-interactive-blue/30 hover:text-ink"
                }`}
                onClick={() => setSelectedCategory(idx)}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Matrix */}
        <div className="mt-8 rounded-3xl border border-slate/10 bg-white p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate/10 pb-5">
            <div>
              <h3 className="text-lg font-bold text-ink">
                {techStack.categories[selectedCategory].name} Stack
              </h3>
              <p className="mt-0.5 text-xs text-slate">
                Production-grade technologies engineered by our dedicated specialists
              </p>
            </div>
            <span className="mt-2 sm:mt-0 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Verified Enterprise Readiness
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {techStack.categories[selectedCategory].skills.map((skill) => (
              <div
                key={skill}
                className="group flex items-center gap-3 rounded-2xl border border-slate/10 bg-surface-muted/50 p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-interactive-blue/30 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-interactive-blue/10 text-interactive-blue font-bold text-xs">
                  {skill.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-xs font-semibold text-ink sm:text-sm group-hover:text-interactive-blue">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
