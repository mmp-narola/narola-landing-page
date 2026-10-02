"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export interface Faq {
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  faqs: Faq[];
  className?: string;
  variant?: "default" | "boxed";
}

export function FaqSection({ 
  eyebrow,
  title = "Frequently asked questions", 
  description,
  faqs,
  className = "bg-surface-muted py-16 md:py-24",
  variant = "default"
}: FaqSectionProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <section className={className}>
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal className="mb-12">
            {eyebrow && (
              <span className="text-xs font-bold tracking-widest text-slate uppercase mb-4 block">
                {eyebrow}
              </span>
            )}
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">{title}</h2>
            {description && (
              <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </Reveal>
          <div className={`flex flex-col text-left ${variant === "boxed" ? "space-y-4" : ""}`}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={variant === "boxed" 
                    ? "border border-black/10 rounded-xl bg-white px-6 overflow-hidden" 
                    : "border-b border-gray-400 text-left"
                  }
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className={`w-full flex items-center justify-between group ${variant === "boxed" ? "py-5" : "py-6"}`}
                  >
                    <h3 className={`font-bold text-ink text-left pr-8 ${variant === "boxed" ? "text-base" : "text-lg"}`}>
                      {faq.question}
                    </h3>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${variant === "boxed" ? "bg-[#f2f7ff]" : "bg-[#f0f5ff]"}`}>
                      <span className={`text-[#0e5fd9] transition-transform duration-300 font-medium leading-none mb-1 ${isOpen ? '' : ''}`}>{isOpen ? '−' : '+'}</span>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm md:text-base text-slate leading-relaxed whitespace-pre-line">{faq.answer}</p>
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
