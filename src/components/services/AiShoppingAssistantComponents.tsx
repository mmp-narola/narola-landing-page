"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ShoppingCart, BadgeCheck, Users, MousePointerClick } from "lucide-react";
import { CaseStudyMetricsGrid } from "@/components/case-studies/CaseStudyMetricsGrid";
import { aiShoppingContent } from "@/content/aiShoppingAssistant";
import { ClientsSection } from "@/components/ui/ClientsSection";
import { FaqSection } from "@/components/ui/FaqSection";

function SubSectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl md:text-xl font-medium text-slate">
        {title}
      </h3>
      <div className="w-full h-px bg-black/10 mt-2"></div>
    </div>
  );
}

import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";

export function AiShoppingHero() {
  return (
    <ServiceHeroSection
      eyebrow="AI shopping assistant"
      title={aiShoppingContent.hero.headline}
      subtitle={aiShoppingContent.hero.subheadline}
      ctaText={aiShoppingContent.hero.cta}
      ctaHref="#contact"
    />
  );
}

import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";

export function AiShoppingProblemSolution() {
  return (
    <ProblemSolutionSection
      title={aiShoppingContent.problemSolution.title}
      subtitle={aiShoppingContent.problemSolution.subtitle}
      paragraphs={aiShoppingContent.problemSolution.paragraphs}
    />
  );
}

import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";

export function AiShoppingCapabilities() {
  return (
    <CapabilitiesSection
      title="Capabilities"
      items={aiShoppingContent.capabilities}
      ctaText="Book a Demo"
      ctaHref="#contact"
    />
  );
}

export function AiShoppingMetrics() {
  const icons = [
    <ShoppingCart className="w-8 h-8 text-[#0e5fd9]" />,
    <BadgeCheck className="w-8 h-8 text-[#0e5fd9]" />,
    <Users className="w-8 h-8 text-[#0e5fd9]" />,
    <MousePointerClick className="w-8 h-8 text-[#0e5fd9]" />,
  ];

  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-200/40 to-purple-200/40 blur-[120px] rounded-full pointer-events-none"></div>

      <Container className="relative z-10">
        <Reveal>
          <div className="max-w-7xl mx-auto">
            {/* Global Section Header */}
            <div className="mb-16 md:mb-20 text-center">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-[#0e5fd9] text-sm font-bold tracking-wider uppercase mb-6">
                Proven Results
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-ink mb-6">
                Business Impact Metrics
              </h2>
              <p className="text-lg md:text-xl text-slate max-w-2xl mx-auto">
                Real-world success stories and measurable improvements from our leading clients.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiShoppingContent.metrics.map((metric, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(14,95,217,0.1)] transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {icons[index]}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-ink mb-2 tracking-tight group-hover:text-[#0e5fd9] transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-base font-medium text-slate">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import { UseCasesSection } from "@/components/sections/UseCasesSection";

export function AiShoppingUseCases() {
  return (
    <UseCasesSection
      eyebrow={aiShoppingContent.industryUses.title}
      title={aiShoppingContent.industryUses.subtitle}
      items={aiShoppingContent.useCases.map(uc => ({
        title: uc.industry,
        content: uc.description,
        image: uc.image,
      }))}
      variant="image"
    />
  );
}

import { CaseStudy } from "@/types/caseStudy";

export function AiShoppingCaseStudies({ caseStudies = [] }: { caseStudies?: CaseStudy[] }) {
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  return (
    <section className="bg-surface-muted py-16 md:py-24 relative">
      <Container>
        <Reveal>
          <div className="max-w-7xl mx-auto mb-12 md:mb-16 text-center">
            <span className="inline-block py-1.5 px-4 rounded-full bg-black/5 text-ink text-sm font-bold tracking-wider uppercase mb-6">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-ink">
              Success Stories
            </h2>
          </div>
        </Reveal>

        {/* Logos as Tabs */}
        <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap mb-12 mx-auto max-w-4xl">
          {caseStudies.map((cs, idx) => (
            <button
              key={cs.slug}
              onClick={() => setActiveCaseStudy(idx)}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${activeCaseStudy === idx
                ? 'bg-ink text-white shadow-lg scale-105'
                : 'bg-white border border-black/20 text-slate hover:bg-black/5 hover:text-ink'
                }`}
            >
              {cs.clientName || cs.title}
            </button>
          ))}
        </div>

        {/* Case Study Card */}
        <div className="mx-auto max-w-6xl">
          <Reveal key={activeCaseStudy}>
            {caseStudies[activeCaseStudy] ? (
              <div className="group relative bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
                {/* Left side image - taking advantage of visual space */}
                <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10 md:hidden"></div>
                  <img
                    src={caseStudies[activeCaseStudy].thumbnailUrl || caseStudies[activeCaseStudy].bannerUrl}
                    alt={caseStudies[activeCaseStudy].title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Right side text */}
                <div className="w-full md:w-1/2 p-8 md:p-14 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-[#111] to-black z-20">
                  <div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">
                      {caseStudies[activeCaseStudy].title}
                    </h3>
                    <p className="text-white/70 text-lg leading-relaxed mb-10">
                      {caseStudies[activeCaseStudy].summary || caseStudies[activeCaseStudy].tagline}
                    </p>

                    {/* Metrics Section */}
                    {caseStudies[activeCaseStudy].metrics && caseStudies[activeCaseStudy].metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                        {caseStudies[activeCaseStudy].metrics.slice(0, 2).map((metric, i) => (
                          <div key={i}>
                            <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                            <div className="text-sm font-medium text-white/50 uppercase tracking-wider">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-12">
                    <Link href={`/case-studies/${caseStudies[activeCaseStudy].slug}`} className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors">
                      <span>Read Full Story</span>
                      <span aria-hidden="true" className="ml-2 text-lg">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-16 text-center text-slate bg-surface-muted rounded-[2.5rem] border border-black/5">
                <p className="text-xl">More case studies coming soon.</p>
              </div>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function AiShoppingFaq() {
  return <FaqSection faqs={aiShoppingContent.faqs} />;
}

export function AiShoppingCta() {
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <Container>
        <Reveal className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-black p-10 text-center text-white md:p-16 shadow-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {aiShoppingContent.ctaFooter.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            {aiShoppingContent.ctaFooter.description}
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary" className="bg-white text-black hover:bg-white/90">
              {aiShoppingContent.ctaFooter.buttonLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
