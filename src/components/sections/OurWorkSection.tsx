"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ourWorkContent, type GroupedClientCategory } from "@/content/homeContent";
import { MapPin } from "lucide-react";

export function OurWorkSection() {
  const [activeTab, setActiveTab] = useState<"ecommerce" | "ai" | "engineering">("ecommerce");

  const currentGroups: GroupedClientCategory[] =
    ourWorkContent.groupedClientsByTab?.[activeTab] ?? ourWorkContent.groupedClients;

  return (
    <section id={ourWorkContent.sectionId} className="relative w-full overflow-hidden bg-light-gray py-16 text-light-gray md:py-24">
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
                <span className="text-xs font-bold uppercase tracking-wider text-ink-secondary">
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

        {/* Featured Case Studies — dark rounded panel with a stat-tile grid,
           floating on the black page background (Apple "worth it" pattern) */}
        <div className="mt-16">
          <Reveal>
            <div className="rounded-[32px] border border-white/10 bg-[#1d1d1f] p-6 sm:p-8 md:p-12">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold tracking-tight text-light-gray md:text-3xl">
                  Featured case studies
                </h3>
                <Link
                  href={ourWorkContent.footerBanner.href}
                  className="group flex items-center gap-1.5 text-sm font-semibold text-electric-blue"
                >
                  <span className="group-hover:underline">{ourWorkContent.footerBanner.linkText}</span>
                  {/* <span className="inline-block transition-transform group-hover:translate-x-1 no-underline">→</span> */}
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
                {ourWorkContent.featuredCaseStudies.map((study, i) => (
                  <Reveal key={study.id} delay={i * 100} className="h-full">
                    <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#151515] p-6 hover:scale-102 duration-300">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-md bg-[#0084ff]/15 px-2.5 py-1 text-xs font-medium text-bright-blue">
                            {study.industry}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-ink-secondary">
                            <MapPin className="h-3 w-3 text-ink-secondary" />
                            <span>{study.country}</span>
                          </span>
                        </div>

                        <h4 className="mt-5 text-xl font-semibold text-light-gray">
                          {study.title}
                        </h4>
                        <p className="mt-3 text-sm text-muted-gray leading-relaxed">
                          {study.description}
                        </p>
                      </div>

                      <div className="mt-8 border-t border-white/10 pt-6">
                        <div className="grid grid-cols-2 gap-4">
                          {study.metrics.map((metric) => (
                            <div key={metric.label}>
                              <span className="block text-2xl font-semibold tracking-tight text-light-gray">
                                {metric.value}
                              </span>
                              <span className="mt-1 block text-xs text-subtle-gray">
                                {metric.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Footer Banner */}
        <Reveal delay={100}>
          <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-sm text-muted-gray sm:flex-row">
            <span>{ourWorkContent.footerBanner.leftText}</span>
            <Link
              href={ourWorkContent.footerBanner.href}
              className="group flex items-center gap-1.5 font-semibold text-electric-blue"
            >
              <span className="group-hover:underline">{ourWorkContent.footerBanner.linkText}</span>
              {/* <span className="inline-block transition-transform group-hover:translate-x-1 no-underline">→</span> */}
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
