"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { customSoftwareContent } from "@/content/customSoftwareDevelopment";

export function CustomSoftwareEngagementModels() {
  const { engagementModels } = customSoftwareContent;
  const [selectedModel, setSelectedModel] = useState<number>(0);

  const model = engagementModels[selectedModel];

  return (
    <section id="engagement-models" className="scroll-mt-24 bg-surface-muted py-16 md:py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-interactive-blue/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-interactive-blue">
            Engagement Frameworks
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl">
            Flexible, Business-Friendly Engagement Models
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
            Choose the collaboration model that perfectly aligns with your project timeline, budget structure, and internal resource requirements.
          </p>
        </div>

        {/* Model Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {engagementModels.map((item, idx) => {
            const isSelected = selectedModel === idx;
            return (
              <button
                key={item.id}
                type="button"
                className={`rounded-2xl px-6 py-3 text-xs font-bold transition-all sm:text-sm ${
                  isSelected
                    ? "bg-interactive-blue text-white shadow-lg shadow-interactive-blue/25 scale-105"
                    : "bg-white text-slate border border-slate/10 hover:border-interactive-blue/30 hover:text-ink"
                }`}
                onClick={() => setSelectedModel(idx)}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Active Model Detailed Card */}
        <div className="mt-8 rounded-3xl border border-slate/10 bg-white p-6 shadow-sm sm:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Column: Model Details */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-interactive-blue/10 px-3 py-1 text-xs font-bold text-interactive-blue">
                {model.subtitle}
              </div>

              <h3 className="mt-4 text-2xl font-extrabold text-ink sm:text-3xl">
                {model.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
                {model.overview}
              </p>

              <div className="mt-6 rounded-2xl bg-surface-muted/60 p-4 border border-slate/10">
                <span className="text-xs font-bold uppercase tracking-wider text-slate">
                  Best Suited For:
                </span>
                <p className="mt-1 text-sm font-medium text-ink">
                  {model.bestFor}
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="#consultation-cta"
                  className="inline-flex items-center justify-center rounded-xl bg-interactive-blue px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-interactive-blue/20 transition-all hover:bg-interactive-blue/90"
                >
                  {model.ctaText} →
                </a>
              </div>
            </div>

            {/* Right Column: Key Benefits Checklist */}
            <div className="rounded-2xl border border-slate/10 bg-surface-muted/30 p-6 lg:col-span-5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-ink">
                Key Model Advantages
              </h4>
              <ul className="mt-4 space-y-3.5">
                {model.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 font-bold text-xs mt-0.5">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm text-slate leading-snug">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
