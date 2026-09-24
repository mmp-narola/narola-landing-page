"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { customSoftwareContent } from "@/content/customSoftwareDevelopment";

export function CustomSoftwareServicesTabs() {
  const { servicesMatrix } = customSoftwareContent;
  const [activeTab, setActiveTab] = useState(0);

  const currentTab = servicesMatrix.tabs[activeTab];

  return (
    <section id="services-breakdown" className="scroll-mt-24 bg-surface-muted py-16 md:py-24">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-interactive-blue/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-interactive-blue">
            {servicesMatrix.badge}
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
            {servicesMatrix.title}
          </h2>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {servicesMatrix.tabs.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                type="button"
                className={`rounded-2xl px-5 py-3 text-xs font-medium transition-all sm:text-sm ${
                  isActive
                    ? "bg-interactive-blue text-white shadow-lg shadow-interactive-blue/25"
                    : "bg-white text-slate border border-slate/10 hover:border-interactive-blue/30 hover:text-ink"
                }`}
                onClick={() => setActiveTab(idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Card */}
        <div className="mt-8 rounded-3xl border border-slate/10 bg-white p-6 shadow-sm sm:p-10">
          <div className="border-b border-slate/10 pb-5">
            <h3 className="text-xl font-semibold text-ink sm:text-2xl">
              {currentTab.headline}
            </h3>
            <p className="mt-1 text-xs text-slate sm:text-sm">
              Tailored execution frameworks designed to accelerate delivery
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {currentTab.items.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col justify-between rounded-2xl border border-slate/10 bg-surface-muted/30 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-interactive-blue/40 hover:bg-white hover:shadow-md"
              >
                <div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-interactive-blue/10 text-interactive-blue font-semibold text-xs">
                    ✓
                  </div>
                  <h4 className="mt-3 text-sm font-semibold text-ink transition-colors group-hover:text-interactive-blue">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate/5">
                  <a
                    href="#consultation-cta"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-interactive-blue hover:underline"
                  >
                    <span>Inquire Now</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
