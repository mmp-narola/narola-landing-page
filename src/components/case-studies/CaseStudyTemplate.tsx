"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import type {
  CaseStudy,
  CaseStudyMetric,
  CaseStudyScreenshotSet,
  CaseStudySection,
  CaseStudyStep,
  CaseStudyTestimonial,
} from "@/types/caseStudy";

export interface CaseStudyTemplateProps {
  caseStudy: CaseStudy;
  relatedCaseStudies: CaseStudy[];
}

/**
 * Builds a fallback set of sections from the legacy flat fields, for any
 * case study that hasn't opted into the extended `sections` data yet. Only
 * fields that actually have content produce a section — nothing here
 * fabricates copy.
 */
function buildFallbackSections(caseStudy: CaseStudy): CaseStudySection[] {
  const sections: CaseStudySection[] = [];

  if (caseStudy.challenges && caseStudy.challenges.length > 0) {
    sections.push({
      id: "the-challenge",
      title: "The Challenge",
      kind: "features",
      content: caseStudy.challenges,
    });
  }

  if (caseStudy.businessNeeds && caseStudy.businessNeeds.length > 0) {
    sections.push({
      id: "business-needs",
      title: "Business Needs",
      kind: "features",
      content: caseStudy.businessNeeds,
    });
  }

  if (caseStudy.proposedSolution && caseStudy.proposedSolution.length > 0) {
    sections.push({
      id: "our-approach",
      title: "Our Approach",
      kind: "steps",
      content: caseStudy.proposedSolution.map(
        (item): CaseStudyStep => ({ title: item })
      ),
    });
  }

  if (caseStudy.metrics && caseStudy.metrics.length > 0) {
    sections.push({
      id: "the-outcomes",
      title: "The Outcomes",
      kind: "stats",
      content: caseStudy.metrics,
    });
  }

  if (caseStudy.objectivesAchieved && caseStudy.objectivesAchieved.length > 0) {
    sections.push({
      id: "objectives-achieved",
      title: "Objectives Achieved",
      kind: "features",
      content: caseStudy.objectivesAchieved,
    });
  }

  if (caseStudy.technologies && caseStudy.technologies.length > 0) {
    sections.push({
      id: "technologies-used",
      title: "Technologies Used",
      kind: "features",
      content: caseStudy.technologies,
    });
  }

  if (caseStudy.testimonial) {
    sections.push({
      id: "client-testimonial",
      title: "Client Testimonial",
      kind: "testimonial",
      content: caseStudy.testimonial,
    });
  }

  return sections;
}

/** True when a section actually has renderable content — never render an empty one. */
function sectionHasContent(section: CaseStudySection): boolean {
  if (!section.title || !section.id) return false;
  const { kind, content } = section;

  if (kind === "testimonial") {
    const t = content as CaseStudyTestimonial;
    return Boolean(t && t.quote && t.author);
  }

  if (kind === "screenshots") {
    const s = content as CaseStudyScreenshotSet;
    return Boolean((s.web && s.web.length > 0) || (s.mobile && s.mobile.length > 0));
  }

  // prose, steps, features, stats are all arrays.
  return Array.isArray(content) && content.length > 0;
}

function initialsFromName(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

function ScreenshotsSection({ content }: { content: CaseStudyScreenshotSet }) {
  const hasWeb = content.web && content.web.length > 0;
  const hasMobile = content.mobile && content.mobile.length > 0;
  const [tab, setTab] = useState<"web" | "mobile">(hasWeb ? "web" : "mobile");
  const images = (tab === "web" ? content.web : content.mobile) || [];

  return (
    <div>
      {hasWeb && hasMobile && (
        <div className="mb-6 inline-flex items-center gap-1 rounded-2xl bg-surface-muted p-1.5 border border-black/[0.08]">
          {(["web", "mobile"] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={`rounded-xl px-4 py-2 text-xs font-medium capitalize transition-all md:text-sm ${tab === key
                ? "bg-white text-interactive-blue shadow-sm"
                : "text-subtle-gray hover:text-light-gray"
                }`}
            >
              {key}
            </button>
          ))}
        </div>
      )}

      <div
        className={
          tab === "mobile"
            ? "grid grid-cols-2 gap-4 sm:grid-cols-3"
            : "grid grid-cols-1 gap-6 sm:grid-cols-2"
        }
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl border border-black/[0.08] bg-surface-muted shadow-sm"
          >
            {/* Simple browser-chrome affordance for the "web" tab only. */}
            {tab === "web" && (
              <div className="flex items-center gap-1.5 border-b border-black/[0.10] bg-white px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-black/[0.20]" />
                <span className="h-2 w-2 rounded-full bg-black/[0.20]" />
                <span className="h-2 w-2 rounded-full bg-black/[0.20]" />
              </div>
            )}
            <div className={`relative w-full ${tab === "mobile" ? "aspect-[9/16]" : "aspect-[16/10]"}`}>
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}

        {images.length === 0 && (
          <div className="flex aspect-[16/10] items-center justify-center rounded-2xl border border-dashed border-black/[0.20] bg-surface-muted text-sm text-subtle-gray">
            No {tab} screenshots provided
          </div>
        )}
      </div>
    </div>
  );
}

function SectionBody({ section }: { section: CaseStudySection }) {
  switch (section.kind) {
    case "prose": {
      const paragraphs = section.content as string[];
      return (
        <div className="space-y-4">
          {paragraphs.map((p, idx) => (
            <p key={idx} className="text-base leading-relaxed text-subtle-gray md:text-lg">
              {p}
            </p>
          ))}
        </div>
      );
    }

    case "features": {
      const items = section.content as string[];
      return (
        <ul className="space-y-3">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-subtle-gray md:text-base">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-interactive-blue/10 text-interactive-blue">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    case "steps": {
      const steps = section.content as CaseStudyStep[];
      return (
        <ol className="space-y-6">
          {steps.map((step, idx) => (
            <li key={idx} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-blue/10 text-sm font-bold text-interactive-blue">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-semibold text-light-gray">{step.title}</p>
                {step.description && (
                  <p className="mt-1 text-sm leading-relaxed text-subtle-gray md:text-base">
                    {step.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      );
    }

    case "stats": {
      const stats = section.content as CaseStudyMetric[];
      return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-interactive-blue/15 bg-interactive-blue/5 p-5 text-center"
            >
              <p className="text-2xl font-semibold tracking-tight text-interactive-blue md:text-3xl">
                {metric.value}
              </p>
              <p className="mt-1 text-xs font-medium text-subtle-gray">{metric.label}</p>
            </div>
          ))}
        </div>
      );
    }

    case "screenshots":
      return <ScreenshotsSection content={section.content as CaseStudyScreenshotSet} />;

    case "testimonial": {
      const t = section.content as CaseStudyTestimonial;
      return (
        <blockquote className="rounded-2xl border border-black/[0.08] bg-surface-muted p-6 md:p-8">
          <p className="text-lg font-medium leading-relaxed text-light-gray md:text-xl">
            &ldquo;{t.quote}&rdquo;
          </p>
          <footer className="mt-5 flex items-center gap-3">
            {t.avatarUrl ? (
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-black/[0.08]">
                <Image src={t.avatarUrl} alt="" fill sizes="44px" className="object-cover" />
              </div>
            ) : (
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-interactive-blue/10 text-sm font-bold text-interactive-blue">
                {initialsFromName(t.author)}
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-light-gray">{t.author}</p>
              {t.role && <p className="text-xs text-subtle-gray">{t.role}</p>}
            </div>
          </footer>
        </blockquote>
      );
    }

    default:
      return null;
  }
}

export function CaseStudyTemplate({ caseStudy, relatedCaseStudies }: CaseStudyTemplateProps) {
  const sections = useMemo(() => {
    const source =
      caseStudy.sections && caseStudy.sections.length > 0
        ? caseStudy.sections
        : buildFallbackSections(caseStudy);
    return source.filter(sectionHasContent);
  }, [caseStudy]);

  const tags =
    caseStudy.tags && caseStudy.tags.length > 0
      ? caseStudy.tags
      : [caseStudy.industry, caseStudy.service].filter(Boolean);

  const location = caseStudy.location || caseStudy.country;

  const [activeId, setActiveId] = useState<string | undefined>(sections[0]?.id);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport among those intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          const id = (visible[0].target as HTMLElement).dataset.sectionId;
          if (id) setActiveId(id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sectionRefs.current.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sections]);

  const setSectionRef = (id: string) => (node: HTMLElement | null) => {
    if (node) {
      sectionRefs.current.set(id, node);
    } else {
      sectionRefs.current.delete(id);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-surface-muted via-white to-white pb-6 pt-6 md:pb-8 md:pt-8">
        {/* <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-full max-w-4xl rounded-full bg-interactive-blue/5 blur-3xl" /> */}

        <Container className="relative">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-subtle-gray">
              <li>
                <Link href="/" className="transition-colors hover:text-interactive-blue">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/case-studies" className="transition-colors hover:text-interactive-blue">
                  Case Studies
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-light-gray truncate max-w-[200px] md:max-w-none" aria-current="page">
                {caseStudy.clientName || caseStudy.title}
              </li>
            </ol>
          </nav>

          {/* Category tags */}
          {tags.length > 0 && (
            <div className="mb-5 flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-interactive-blue/20 bg-interactive-blue/5 px-3 py-1 text-xs font-semibold text-interactive-blue"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-start gap-4">
            <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-black/[0.08] bg-white text-base font-bold text-interactive-blue shadow-sm">
              {initialsFromName(caseStudy.clientName)}
            </div>
            <div className="max-w-3xl">
              <h1 className="text-3xl font-semibold tracking-tight text-light-gray md:text-5xl md:leading-tight">
                {caseStudy.title}
              </h1>
              <p className="mt-4 text-base text-subtle-gray md:text-lg leading-relaxed">
                {caseStudy.tagline}
              </p>

              {/* Meta line */}
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-subtle-gray">
                {location && (
                  <span className="inline-flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-subtle-gray/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {location}
                  </span>
                )}
                {caseStudy.deliveryTime && (
                  <span className="inline-flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-subtle-gray/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="9" />
                      <polyline points="12 7 12 12 15 15" />
                    </svg>
                    {caseStudy.deliveryTime}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Stat pills */}
          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              {caseStudy.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-interactive-blue/15 bg-interactive-blue/5 px-5 py-3.5 text-left sm:text-center"
                >
                  <p className="text-xl font-semibold tracking-tight text-interactive-blue md:text-2xl">
                    {metric.value}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-subtle-gray">{metric.label}</p>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Mobile / Tablet sticky "on this page" navigation bar */}
      {sections.length > 0 && (
        <div className="sticky top-12 z-30 border-b border-black/[0.08] bg-white/95 backdrop-blur-xl md:top-16 lg:hidden shadow-xs">
          <Container className="py-2.5">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-light-gray mr-1 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-interactive-blue animate-pulse" />
                On this page:
              </span>
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${isActive
                        ? "border border-interactive-blue bg-interactive-blue text-white shadow-xs font-semibold"
                        : "border border-black/[0.08] bg-surface-muted text-subtle-gray hover:border-black/[0.15] hover:text-light-gray hover:bg-white"
                      }`}
                  >
                    {section.title}
                  </a>
                );
              })}
            </div>
          </Container>
        </div>
      )}

      {/* Body: two-column layout */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Main content column */}
            <div className="lg:col-span-8 space-y-14">
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  ref={setSectionRef(section.id)}
                  data-section-id={section.id}
                  className="scroll-mt-28 md:scroll-mt-32"
                >
                  <Reveal>
                    <h2 className="mb-5 text-2xl font-semibold tracking-tight text-light-gray md:text-3xl">
                      {section.title}
                    </h2>
                    <SectionBody section={section} />
                  </Reveal>
                </div>
              ))}
            </div>

            {/* Sticky sidebar nav (desktop only) */}
            <div className="hidden lg:col-span-4 lg:block">
              <div className="sticky top-24 space-y-6">
                {sections.length > 0 && (
                  <nav
                    aria-label="On this page"
                    className="rounded-2xl border border-black/[0.08] bg-white p-5 shadow-xs"
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-interactive-blue" />
                      <p className="text-xs font-bold uppercase tracking-wider text-light-gray">
                        On this page
                      </p>
                    </div>
                    <ul className="space-y-1">
                      {sections.map((section) => {
                        const isActive = activeId === section.id;
                        return (
                          <li key={section.id}>
                            <a
                              href={`#${section.id}`}
                              aria-current={isActive ? "true" : undefined}
                              className={`block rounded-xl px-3.5 py-2 text-sm transition-all duration-200 ${isActive
                                  ? "bg-interactive-blue/10 font-semibold text-interactive-blue border-l-2 border-interactive-blue pl-3"
                                  : "text-subtle-gray hover:bg-surface-muted hover:text-light-gray"
                                }`}
                            >
                              {section.title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                )}

                <div className="rounded-2xl border border-interactive-blue/15 bg-interactive-blue/5 p-5">
                  <p className="text-sm font-semibold text-light-gray">
                    Building something similar?
                  </p>
                  <p className="mt-1 text-sm text-subtle-gray">
                    Start a conversation with our team.
                  </p>
                  <div className="mt-4">
                    <Button href="#footer" className="w-full justify-center">
                      Start a conversation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related case studies */}
      {relatedCaseStudies && relatedCaseStudies.length > 0 && (
        <section className="py-16 md:py-24 bg-surface-muted/30">
          <Container>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-interactive-blue/20 bg-interactive-blue/5 px-3.5 py-1 text-xs font-semibold text-interactive-blue">
                More Success Stories
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-light-gray md:text-4xl">
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
                className="inline-flex items-center gap-2 text-sm font-bold text-interactive-blue hover:underline"
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
