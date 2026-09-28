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

export function AiShoppingProblemSolution() {
  return (
    <section className="bg-surface-muted py-16 md:py-24">
      <Container>
        <div>
          <Reveal>
            <h2 className="text-xs font-bold tracking-widest text-slate uppercase mb-4">
              {aiShoppingContent.problemSolution.title}
            </h2>
            <h3 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl lg:leading-tight max-w-4xl">
              {aiShoppingContent.problemSolution.subtitle}
            </h3>
          </Reveal>
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <Reveal className="flex flex-col w-full">
            {/* Image Placeholder */}
            <div className="w-full aspect-[4/3] bg-surface-muted rounded-2xl flex items-center justify-center border border-black/[0.08]">
              <span className="text-slate font-medium">Image Placeholder</span>
            </div>
          </Reveal>

          {/* Right Column */}
          <Reveal delay={0.2} className="flex flex-col">
            <div className="space-y-6 text-lg leading-relaxed text-slate">
              {aiShoppingContent.problemSolution.paragraphs.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "text-xl font-medium text-ink md:text-2xl" : ""}>
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

export function AiShoppingCapabilities() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <Container>
        <div className="mb-12">
          <Reveal>
            <h2 className="text-xs font-bold tracking-widest text-slate uppercase mb-6">
              Capabilities
            </h2>
            <div className="flex flex-wrap gap-2.5 w-full">
              {aiShoppingContent.capabilities.map((cap, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors border ${activeTab === idx
                    ? "bg-ink text-white border-ink"
                    : "bg-white text-slate border-black/10 hover:border-black/20 hover:bg-black/5"
                    }`}
                >
                  {cap.title}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="flex flex-col lg:flex-row bg-white border border-black/[0.08] rounded-2xl overflow-hidden shadow-sm">
            {/* Image Placeholder */}
            <div className="w-full lg:w-1/2 min-h-[300px] lg:min-h-[500px] flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-black/[0.08] relative overflow-hidden bg-surface-muted">
              {/* Dark placeholder background mimicking screenshot */}
              <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-[#2a1b41] via-[#1a1a1a] to-[#3b211a] opacity-90 border border-black/10 shadow-inner"></div>
              <div className="relative z-10 p-8 flex flex-col items-center text-center">
                <span className="text-white/80 font-medium text-sm md:text-base border border-white/20 rounded-xl px-6 py-3 bg-white/5 backdrop-blur-md shadow-xl">
                  {aiShoppingContent.capabilities[activeTab].title} Visual
                </span>
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 xl:p-16 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-ink md:text-3xl mb-6">
                {aiShoppingContent.capabilities[activeTab].title}
              </h3>
              <p className="text-lg leading-relaxed text-slate">
                {aiShoppingContent.capabilities[activeTab].description}
              </p>
              <div className="mt-10">
                <Button href="#contact" variant="primary" className="rounded-full px-6 py-3 font-semibold">
                  Book a Demo <span className="ml-2">↗</span>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function AiShoppingMetrics() {
  const icons = [
    <ShoppingCart className="w-7 h-7 text-ink" />,
    <BadgeCheck className="w-7 h-7 text-ink" />,
    <Users className="w-7 h-7 text-ink" />,
    <MousePointerClick className="w-7 h-7 text-ink" />,
  ];

  return (
    <section className="bg-white pt-16 md:pt-24 pb-8">
      <Container>
        <Reveal>
          <div className="max-w-7xl mx-auto">
            {/* Global Section Header */}
            <div className="mb-16 md:mb-20 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-ink mb-4">
                Business Impact Metrics & Social Proof
              </h2>
              <p className="text-lg text-slate max-w-2xl mx-auto">
                Proven results and real-world success stories from our leading clients.
              </p>
            </div>

            {/* Header for Results */}
            <SubSectionHeader title="Proven results at scale" />

            {/* Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {aiShoppingContent.metrics.map((metric, index) => (
                <div key={index} className="flex items-center gap-5 group">
                  {/* Icon Box */}
                  <div className="w-[72px] h-[72px] flex-shrink-0 rounded-2xl bg-[#fafafa] flex items-center justify-center transition-colors shadow-sm">
                    {icons[index]}
                  </div>
                  {/* Text via CaseStudyMetricsGrid */}
                  <CaseStudyMetricsGrid
                    metrics={[metric]}
                    size="small"
                    className="flex-1 !grid-cols-1 items-start text-left [&>div]:items-start [&>div]:text-left"
                  />
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
    <section className="bg-white py-8 md:py-12">
      <Container>
        <Reveal>
          <div className="max-w-7xl mx-auto">
            {/* Header for Case Studies */}
            <SubSectionHeader title="Featured case studies" />
          </div>
        </Reveal>

        {/* Logos as Tabs */}
        <div className="flex justify-between items-center border-b border-black/10 mb-8 mx-auto overflow-x-auto hide-scrollbar max-w-3xl">
          {caseStudies.map((cs, idx) => (
            <button
              key={cs.slug}
              onClick={() => setActiveCaseStudy(idx)}
              className={`pb-4 px-6 relative text-lg lg:text-xl font-bold transition-colors whitespace-nowrap ${activeCaseStudy === idx ? 'text-ink' : 'text-slate hover:text-ink'
                }`}
            >
              {cs.clientName || cs.title}
              {/* Active Underline */}
              {activeCaseStudy === idx && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2b70fa]"></div>
              )}
            </button>
          ))}
        </div>

        {/* Case Study Card */}
        <div className="mx-auto">
          <Reveal key={activeCaseStudy}>
            {caseStudies[activeCaseStudy] ? (
              <div className="bg-[#f5f5f5] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-xl">
                {/* Left side text */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black tracking-tight mb-6 leading-tight">
                      {caseStudies[activeCaseStudy].title}
                    </h3>
                    <p className="text-slate text-lg leading-relaxed mb-8">
                      {caseStudies[activeCaseStudy].summary || caseStudies[activeCaseStudy].tagline}
                    </p>

                    {/* Metrics Section */}
                    {caseStudies[activeCaseStudy].metrics && caseStudies[activeCaseStudy].metrics.length > 0 && (
                      <div className="border-t border-black/10 pt-6 mt-6">
                        <CaseStudyMetricsGrid
                          metrics={caseStudies[activeCaseStudy].metrics}
                          limit={caseStudies[activeCaseStudy].metrics.length > 2 ? 3 : 2}
                          columns={caseStudies[activeCaseStudy].metrics.length > 2 ? 3 : 2}
                          withDividers={true}
                          size="small"
                        />
                      </div>
                    )}
                  </div>

                  <div className="mt-10 md:mt-12">
                    <Link href={`/case-studies/${caseStudies[activeCaseStudy].slug}`} className="inline-flex items-center text-interactive-blue font-medium hover:text-interactive-blue/80 transition-colors">
                      <span>Read Case Study</span>
                      <span aria-hidden="true" className="text-sm font-semibold">
                        ↗
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Right side image */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center relative">
                  <div className="relative w-full aspect-video md:aspect-auto md:h-full min-h-[250px] rounded-xl overflow-hidden shadow-2xl border border-white/10">
                    <img
                      src={caseStudies[activeCaseStudy].thumbnailUrl || caseStudies[activeCaseStudy].bannerUrl}
                      alt={caseStudies[activeCaseStudy].title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center text-slate bg-surface-muted rounded-2xl border border-black/10">
                <p>More case studies coming soon.</p>
              </div>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}


export function AiShoppingClients() {
  return (
    <section className="bg-white pt-8 pb-16 md:pt-12 md:pb-24">
      <Container>
        <Reveal>
          <div className="max-w-7xl mx-auto">
            {/* Header for Clients */}
            <SubSectionHeader title="Trusted by innovative brands worldwide" />

            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {[
                { name: "brand1", logoText: "CGI" },
                { name: "brand2", logoText: "L&T" },
                { name: "brand3", logoText: "TVS NEXT" },
                { name: "brand4", logoText: "Biocon" },
                { name: "brand5", logoText: "Infosys" },
              ].map((client) => (
                <span
                  key={client.name}
                  className="text-xl md:text-2xl font-bold tracking-wide text-slate/70 hover:text-ink transition-colors"
                >
                  {client.logoText}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function AiShoppingFaq() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <section className="bg-surface-muted py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Reveal className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">Frequently asked questions</h2>
          </Reveal>
          <div className="flex flex-col">
            {aiShoppingContent.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="border-b border-gray-400 text-left">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full py-6 flex items-center justify-between group"
                  >
                    <h3 className="text-lg font-bold text-ink text-left pr-8">{faq.question}</h3>
                    <div className="w-8 h-8 rounded-full bg-[#f0f5ff] flex items-center justify-center shrink-0">
                      <svg className={`w-4 h-4 text-[#2b70fa] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                    <p className="text-base text-slate leading-relaxed whitespace-pre-line">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
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
