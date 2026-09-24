"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { ourWorkContent, type GroupedClientCategory } from "@/content/homeContent";
import { CaseStudy } from "@/types/caseStudy";
import { MapPin } from "lucide-react";

export interface OurWorkSectionProps {
  caseStudies?: CaseStudy[];
}

export function OurWorkSection({ caseStudies = [] }: OurWorkSectionProps) {
  const [activeTab, setActiveTab] = useState<"ecommerce" | "ai" | "engineering">("ecommerce");

  const currentGroups: GroupedClientCategory[] =
    ourWorkContent.groupedClientsByTab?.[activeTab] ?? ourWorkContent.groupedClients;

  const displayedCaseStudies = caseStudies.slice(0, 3);

  return (
    <section id={ourWorkContent.sectionId} className="section-wrapper">
      {/* <AmbientGlow position="top" height={420} color="rgba(0,132,255,0.14)" /> */}
      <Container className="relative">
        {/* Section Header */}
        <SectionHeader
          title={ourWorkContent.title}
          subtitle={ourWorkContent.subtitle}
          className="mb-12 md:mb-12"
        />

        {/* Filter Tabs */}
        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {ourWorkContent.filterTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as "ecommerce" | "ai" | "engineering")}
                  className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 ${isActive
                    ? "bg-light-gray text-black shadow-sm"
                    : "border border-white/10 bg-[#1d1d1f] text-light-gray hover:bg-[#232326]"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grouped Client Badges */}
        <div key={activeTab} className="mt-8 flex flex-col gap-6">
          {currentGroups.map((group, groupIdx) => (
            <Reveal
              key={`${activeTab}-${group.groupName}`}
              delay={groupIdx * 90}
              variant="left"
              className={groupIdx === 0 ? "" : "border-t border-white/10 pt-6"}
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-ink-secondary">
                  {group.groupName}
                </span>
                <div className="mt-4 flex flex-wrap gap-3.5">
                  {group.clients.map((client) => (
                    <div
                      key={client.name}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#1d1d1f] px-4 py-3"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0084ff]/15 text-xs font-semibold text-bright-blue">
                        {client.initials}
                      </span>
                      <div>
                        <span className="block text-sm text-light-gray leading-tight">
                          {client.name}
                        </span>
                        <span className="mt-0.5 flex items-center gap-1 text-xs text-subtle-gray">
                          <MapPin className="h-3 w-3 text-ink-secondary" />
                          <span>{client.country}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Featured Case Studies */}
        {displayedCaseStudies.length > 0 && (
          <div className="mt-14">
            <Reveal>
              <div className="rounded-[28px] border border-black/[0.08] bg-white p-5 shadow-sm sm:p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-light-gray md:text-3xl">
                    Featured case studies
                  </h3>
                  <Link
                    href={ourWorkContent.footerBanner.href}
                    className="group flex items-center gap-1.5 text-sm font-semibold text-interactive-blue"
                  >
                    <span className="group-hover:underline">{ourWorkContent.footerBanner.linkText}</span>
                    <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                  </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {displayedCaseStudies.map((study, i) => (
                    <Reveal key={study.slug} delay={i * 100} className="h-full">
                      <CaseStudyCard caseStudy={study} variant="compact" />
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        )}

        {/* Bottom Footer Banner */}
        <Reveal delay={100}>
          <div className="flex flex-col items-center justify-between gap-3 pt-8 text-sm text-muted-gray sm:flex-row">
            <span>{ourWorkContent.footerBanner.leftText}</span>
            <Link
              href={ourWorkContent.footerBanner.href}
              className="group flex items-center gap-1.5 font-semibold text-electric-blue"
            >
              <span className="group-hover:underline">{ourWorkContent.footerBanner.linkText}</span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
