"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CaseStudy } from "@/content/caseStudies";
import { CaseStudyCard } from "./CaseStudyCard";

export interface CaseStudyDetailViewProps {
  caseStudy: CaseStudy;
  relatedCaseStudies: CaseStudy[];
}

type TabKey =
  | "business-needs"
  | "challenges"
  | "proposed-solution"
  | "objectives-achieved"
  | "technologies";

const tabs: { key: TabKey; label: string }[] = [
  { key: "business-needs", label: "Business Needs" },
  { key: "challenges", label: "Challenges" },
  { key: "proposed-solution", label: "Proposed Solution" },
  { key: "objectives-achieved", label: "Objectives Achieved" },
  { key: "technologies", label: "Technologies Used" },
];

export function CaseStudyDetailView({
  caseStudy,
  relatedCaseStudies,
}: CaseStudyDetailViewProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("business-needs");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images =
    caseStudy.galleryImages && caseStudy.galleryImages.length > 0
      ? caseStudy.galleryImages
      : [caseStudy.bannerUrl || caseStudy.thumbnailUrl];

  return (
    <div>
      {/* Hero / Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-surface-muted via-white to-white pb-12 pt-10 md:pb-16 md:pt-14">
        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-full max-w-4xl rounded-full bg-interactive-blue/5 blur-3xl" />

        <Container className="relative">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-medium text-slate">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-1.5 transition-colors hover:text-interactive-blue"
                >
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <svg
                  className="h-3.5 w-3.5 text-slate/40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="transition-colors hover:text-interactive-blue"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <svg
                  className="h-3.5 w-3.5 text-slate/40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </li>
              <li className="font-semibold text-ink truncate max-w-[200px] md:max-w-none" aria-current="page">
                {caseStudy.title}
              </li>
            </ol>
          </nav>

          {/* Banner Main Content */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-interactive-blue/20 bg-interactive-blue/5 px-4 py-1 text-xs font-semibold text-interactive-blue">
              <span className="h-2 w-2 rounded-full bg-interactive-blue" />
              {caseStudy.industry} • {caseStudy.country}
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-5xl md:leading-tight">
              {caseStudy.title}
            </h1>

            <p className="mt-4 text-base text-slate md:text-lg leading-relaxed">
              {caseStudy.tagline}
            </p>

            <div className="mt-8 flex justify-center">
              <Button href="#consultation">Consult Narola</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Overview & Quick Facts Card */}
      <section className="pb-12 pt-2">
        <Container>
          <div className="rounded-3xl border border-slate/15 bg-white p-6 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              {/* Project Logo / Avatar */}
              {caseStudy.logoUrl && (
                <div className="lg:col-span-3 flex justify-center lg:justify-start">
                  <div className="flex h-32 w-32 items-center justify-center rounded-2xl border border-slate/15 bg-surface-muted p-4 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={caseStudy.logoUrl}
                      alt={`${caseStudy.title} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              )}

              {/* Quick Info Matrix */}
              <div className={`${caseStudy.logoUrl ? "lg:col-span-9" : "lg:col-span-12"} grid grid-cols-2 gap-4 sm:grid-cols-4`}>
                <div className="rounded-2xl bg-surface-muted p-4 text-left">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate">
                    Industry
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    {caseStudy.industry}
                  </p>
                </div>
                <div className="rounded-2xl bg-surface-muted p-4 text-left">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate">
                    Country
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    {caseStudy.country}
                  </p>
                </div>
                <div className="rounded-2xl bg-surface-muted p-4 text-left">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate">
                    Service
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    {caseStudy.service}
                  </p>
                </div>
                <div className="rounded-2xl bg-surface-muted p-4 text-left">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate">
                    Region
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    {caseStudy.region}
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Metric Cards (if present) */}
            {caseStudy.metrics && caseStudy.metrics.length > 0 && (
              <div className="mt-8 border-t border-slate/10 pt-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate text-center lg:text-left">
                  Key Results & Impact
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {caseStudy.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-interactive-blue/15 bg-interactive-blue/5 p-5 text-center transition-colors"
                    >
                      <p className="text-2xl font-extrabold text-interactive-blue md:text-3xl">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-xs font-medium text-slate">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Project Summary & Gallery */}
      <section className="py-12 bg-surface-muted/30">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 items-center">
            {/* Summary Text */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate/20 bg-white px-3.5 py-1 text-xs font-semibold text-slate">
                Project Overview
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Project Summary
              </h2>
              <p className="text-base leading-relaxed text-slate md:text-lg">
                {caseStudy.summary}
              </p>
            </div>

            {/* Gallery Image Preview */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-slate/15 bg-white shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images[activeImageIndex]}
                  alt={`${caseStudy.title} screenshot`}
                  className="w-full h-auto max-h-[420px] object-cover block transition-all duration-300"
                />
              </div>

              {/* Thumbnails switcher (if multiple) */}
              {images.length > 1 && (
                <div className="mt-4 flex items-center justify-center gap-3">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-16 w-24 overflow-hidden rounded-xl border-2 transition-all ${activeImageIndex === idx
                          ? "border-interactive-blue scale-105 shadow-sm"
                          : "border-slate/20 opacity-60 hover:opacity-100"
                        }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img}
                        alt="Thumbnail"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Architectural Breakdown Tabs */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-interactive-blue/20 bg-interactive-blue/5 px-3.5 py-1 text-xs font-semibold text-interactive-blue">
                In-Depth Technical Breakdown
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink md:text-4xl">
                How Narola Engineered the Solution
              </h2>
            </div>

            {/* Tabs Header Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-surface-muted p-2 border border-slate/15">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all md:text-sm ${activeTab === tab.key
                      ? "bg-white text-interactive-blue shadow-sm"
                      : "text-slate hover:text-ink"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content Panels */}
            <div className="mt-8 rounded-3xl border border-slate/15 bg-white p-6 md:p-10 shadow-sm">
              {/* Business Needs */}
              {activeTab === "business-needs" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-ink">Business Needs</h3>
                  <ul className="space-y-3 pt-2">
                    {caseStudy.businessNeeds.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate text-sm md:text-base leading-relaxed">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-interactive-blue/10 text-interactive-blue">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {activeTab === "challenges" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-ink">Key Challenges</h3>
                  <ul className="space-y-3 pt-2">
                    {caseStudy.challenges.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate text-sm md:text-base leading-relaxed">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-600">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                            <line x1="12" y1="9" x2="12" y2="13" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Proposed Solution */}
              {activeTab === "proposed-solution" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-ink">Proposed & Executed Solution</h3>
                  <ul className="space-y-3 pt-2">
                    {caseStudy.proposedSolution.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate text-sm md:text-base leading-relaxed">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-interactive-blue/10 text-interactive-blue">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Objectives Achieved */}
              {activeTab === "objectives-achieved" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-ink">Objectives Achieved & ROI</h3>
                  <ul className="space-y-3 pt-2">
                    {caseStudy.objectivesAchieved.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate text-sm md:text-base leading-relaxed">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies Used */}
              {activeTab === "technologies" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-ink">Technologies & Frameworks</h3>
                  <p className="text-sm text-slate">
                    Our dedicated engineering team leveraged the following core stack for performance, security, and scalability:
                  </p>
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {caseStudy.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate/15 bg-surface-muted px-4 py-2 text-xs font-bold text-ink shadow-xs"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-interactive-blue" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 border-t border-slate/10 pt-6 flex justify-start">
                <Button href="#consultation">Discuss your project with Narola</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Consultation Banner Callout */}
      <section id="consultation" className="py-12 bg-gradient-to-br from-brand-blue via-brand-blue to-slate-900 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h2 className="text-2xl font-bold md:text-4xl">
              Make your vision into Reality with Narola&apos;s Expert Team
            </h2>
            <p className="text-base text-white/90 md:text-lg leading-relaxed">
              Our expert team is here to understand your project idea, discuss architecture, and provide analytical insights, cost estimates, and timelines.
            </p>
            <div>
              <Button href="#footer" className="bg-white text-brand-blue hover:bg-white/90">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Case Studies Grid */}
      {relatedCaseStudies && relatedCaseStudies.length > 0 && (
        <section className="py-16 md:py-24">
          <Container>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-interactive-blue/20 bg-interactive-blue/5 px-3.5 py-1 text-xs font-semibold text-interactive-blue">
                More Success Stories
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink md:text-4xl">
                Related Case Studies
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedCaseStudies.map((cs) => (
                <CaseStudyCard key={cs.slug} caseStudy={cs} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-bold text-electric-blue hover:underline"
              >
                View All Case Studies
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
