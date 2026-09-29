"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export interface Faq {
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  title?: string;
  description?: string;
  faqs: Faq[];
  className?: string;
}

export function FaqSection({ 
  title = "Frequently asked questions", 
  description,
  faqs,
  className = "bg-surface-muted py-16 md:py-24"
}: FaqSectionProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <section className={className}>
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">{title}</h2>
            {description && (
              <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </Reveal>
          <div className="flex flex-col">
            {faqs.map((faq, idx) => {
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
