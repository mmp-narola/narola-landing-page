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

export function AiShoppingHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-24">
      <Container>
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
          <Reveal className="flex flex-col items-center w-full">
            {/* Tag */}
            <div className="mb-6 flex items-center gap-2 text-sm font-medium text-slate">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff4a4a]"></span>
              AI shopping assistant
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.1] text-balance">
              {aiShoppingContent.hero.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate md:text-xl max-w-2xl mx-auto text-balance">
              {aiShoppingContent.hero.subheadline}
            </p>
            <div className="mt-8 flex items-center justify-center">
              <Button href="#contact" variant="primary" className="rounded-full px-8 py-4 text-lg">
                {aiShoppingContent.hero.cta}
              </Button>
            </div>

            {/* Reviews / Logos Placeholder */}
            {/* <div className="mt-12 flex items-center gap-6 text-slate text-sm font-medium justify-center flex-wrap">
              <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <span className="font-bold text-lg tracking-tight text-ink">Gartner</span>
              </div>
              <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <span className="font-bold text-lg tracking-tight text-[#ff4a4a]">G2</span>
              </div>
              <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <span className="font-bold text-lg tracking-tight text-interactive-blue">Capterra</span>
              </div>
              <div className="flex items-center gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-slate ml-2 text-sm font-medium">4.8/5</span>
              </div>
            </div> */}
          </Reveal>
        </div>
      </Container>
    </section>
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

export function AiShoppingUseCases() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  return (
    <section className="bg-surface-muted py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="pb-8">
            <h2 className="text-xs font-bold tracking-widest text-slate uppercase mb-4">{aiShoppingContent.industryUses.title}</h2>
            <h3 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl lg:leading-tight max-w-4xl">
              {aiShoppingContent.industryUses.subtitle}
            </h3>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column: Accordion */}
          <div className="w-full lg:w-1/2 flex flex-col border-t border-black/10">
            {aiShoppingContent.useCases.map((useCase, idx) => {
              const isOpen = activeAccordion === idx;
              return (
                <div key={idx} className="border-b border-black/10">
                  <button
                    onClick={() => {
                      if (!isOpen) setActiveAccordion(idx);
                    }}
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-4">
                      {isOpen && (
                        <div className="w-8 h-8 rounded-lg bg-[#0e5fd9] flex items-center justify-center shrink-0 shadow-sm">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      )}
                      <h4 className={`text-xl font-medium transition-colors ${isOpen ? 'text-[#0e5fd9]' : 'text-ink group-hover:text-[#0e5fd9]'}`}>
                        {useCase.industry}
                      </h4>
                    </div>
                    <span className={`text-slate transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0e5fd9]' : ''}`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
                    <p className="text-base text-slate leading-relaxed pl-12 pr-4">
                      {useCase.description}
                    </p>
                    <div className="mt-6 pl-12">
                      <Button href="#contact" variant="primary" className="rounded-full px-6 py-2.5 text-sm font-semibold bg-black text-white hover:bg-black/90">
                        Learn More <span className="ml-1">↗</span>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Image */}
          <div className="w-full lg:w-1/2 sticky top-32">
            <Reveal key={activeAccordion} className="w-full aspect-[4/5] bg-surface-muted rounded-3xl overflow-hidden relative shadow-2xl border border-black/10">
              {activeAccordion !== -1 && aiShoppingContent.useCases[activeAccordion].image && (
                <img
                  src={aiShoppingContent.useCases[activeAccordion].image}
                  alt={`Use case for ${aiShoppingContent.useCases[activeAccordion].industry}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              )}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
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


export function AiShoppingClients() {
  return <ClientsSection />;
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
