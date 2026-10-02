"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import React from "react";

export interface CapabilityItem {
  tabLabel?: string;
  title: string;
  description?: string;
  bullets?: string[];
  visual?: React.ReactNode;
}

export interface CapabilitiesSectionProps {
  title?: string;
  items: CapabilityItem[];
  ctaText?: string;
  ctaHref?: string;
  theme?: "white" | "muted";
  id?: string;
}

export function CapabilitiesSection({
  title = "Capabilities",
  items,
  ctaText = "Book a Demo",
  ctaHref = "#contact",
  theme = "white",
  id = "features",
}: CapabilitiesSectionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const bgClass = theme === "muted" ? "bg-surface-muted" : "bg-white";

  if (!items || items.length === 0) return null;

  return (
    <section id={id} className={`${bgClass} py-16 md:py-24`}>
      <Container>
        <div className="mb-12">
          <Reveal>
            <h2 className="text-xs font-bold tracking-widest text-slate uppercase mb-6">
              {title}
            </h2>
            <div className="flex flex-wrap gap-2.5 w-full">
              {items.map((cap, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-2.5 rounded-full text-xs font-medium transition-colors border ${activeTab === idx
                    ? "bg-ink text-white border-ink"
                    : "bg-white text-black/80 border-black/10 hover:border-black/20 hover:bg-black/5"
                    }`}
                >
                  {cap.tabLabel || cap.title}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="flex flex-col lg:flex-row bg-white border border-black/[0.08] rounded-2xl overflow-hidden shadow-sm">
            {/* Left Visual Column */}
            <div className="w-full lg:w-1/2 min-h-[300px] lg:min-h-[500px] flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-black/[0.08] relative overflow-hidden bg-surface-muted">
              {items[activeTab].visual ? (
                items[activeTab].visual
              ) : (
                <>
                  {/* Default Dark placeholder background mimicking screenshot */}
                  <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-[#2a1b41] via-[#1a1a1a] to-[#3b211a] opacity-90 border border-black/10 shadow-inner"></div>
                  <div className="relative z-10 p-8 flex flex-col items-center text-center">
                    <span className="text-white/80 font-medium text-sm md:text-base border border-white/20 rounded-xl px-6 py-3 bg-white/5 backdrop-blur-md shadow-xl">
                      {items[activeTab].tabLabel || items[activeTab].title} Visual
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Right Text Content Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 xl:p-16 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-ink md:text-3xl mb-6">
                {items[activeTab].title}
              </h3>
              {items[activeTab].description && (
                <p className="text-lg leading-relaxed text-slate mb-6">
                  {items[activeTab].description}
                </p>
              )}
              {items[activeTab].bullets && items[activeTab].bullets.length > 0 && (
                <ul className="space-y-3 mb-6">
                  {items[activeTab].bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-lg text-slate">
                      <span className="mr-3 text-bright-blue mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {ctaText && ctaHref && (
                <div className="mt-4">
                  <Button href={ctaHref} variant="primary" className="rounded-full px-6 py-3 font-semibold">
                    {ctaText} <span className="ml-2">↗</span>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
