"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export interface UseCaseItem {
  title: string;
  content: string;
  image?: string;
}

export interface UseCasesSectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: UseCaseItem[];
  variant?: "chat" | "image";
}

export function UseCasesSection({
  eyebrow = "INDUSTRY APPLICATIONS",
  title,
  subtitle,
  items,
  variant = "chat",
}: UseCasesSectionProps) {
  const [activeAccordion, setActiveAccordion] = useState(0);

  return (
    <section className="bg-surface-muted py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="pb-8">
            <h2 className="text-xs font-bold tracking-widest text-slate uppercase mb-4">{eyebrow}</h2>
            <h3 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl lg:leading-tight max-w-4xl">
              {title}
            </h3>
            {subtitle && (
              <p className="mt-6 text-lg leading-relaxed text-slate max-w-2xl text-balance">
                {subtitle}
              </p>
            )}
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column: Accordion */}
          <div className="w-full lg:w-1/2 flex flex-col border-t border-black/10">
            {items.map((useCase, idx) => {
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
                        {useCase.title}
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
                      {useCase.content}
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

          {/* Right Column: Visual */}
          <div className="w-full lg:w-1/2 sticky top-24">
            {variant === "chat" ? (
              <Reveal delay={0.2} className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#0d1627] shadow-xl border border-black/10">
                <div className="absolute top-0 left-0 w-full h-10 bg-[#162238] border-b border-white/5 flex items-center px-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="mx-auto text-white/50 text-xs font-medium tracking-widest uppercase">
                    AI CHATBOT — LIVE
                  </div>
                </div>

                {/* Mockup Chat Content */}
                <div className="p-6 pt-16 flex flex-col gap-4 h-full">
                  <div className="self-center bg-white/5 backdrop-blur-md rounded-full px-4 py-1.5 text-xs text-bright-blue font-medium mb-2 border border-white/10">
                    {items[activeAccordion]?.title}
                  </div>
                  <div className="self-start max-w-[80%] bg-[#1a4a8d] rounded-2xl rounded-tl-sm p-4 text-sm md:text-base text-white">
                    I can help you with {items[activeAccordion]?.title?.replace("For ", "").toLowerCase() || "that"}. What do you need today?
                  </div>
                  <div className="self-end max-w-[80%] bg-[#0e5fd9] rounded-2xl rounded-tr-sm p-4 text-sm md:text-base text-white">
                    Yes, I'd like some guidance and options!
                  </div>
                  <div className="self-start max-w-[80%] bg-[#1a4a8d] rounded-2xl rounded-tl-sm p-4 text-sm md:text-base text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-bright-blue animate-pulse"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-bright-blue animate-pulse delay-75"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-bright-blue animate-pulse delay-150"></span>
                    </div>
                    Guiding high-consideration purchase decisions...
                  </div>
                </div>
              </Reveal>
            ) : (
              <Reveal key={activeAccordion} delay={0.1} className="w-full aspect-[4/5] bg-slate/10 rounded-3xl overflow-hidden relative shadow-2xl border border-black/10">
                {items[activeAccordion]?.image && (
                  <img
                    src={items[activeAccordion].image}
                    alt={`Use case for ${items[activeAccordion].title}`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                )}
              </Reveal>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
