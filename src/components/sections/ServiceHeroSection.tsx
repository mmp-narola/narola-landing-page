"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import React from "react";

export interface ServiceHeroSectionProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  dotColor?: string;
  theme?: "light" | "dark";
  bgColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  eyebrowColor?: string;
}

export function ServiceHeroSection({
  eyebrow,
  title,
  subtitle,
  ctaText = "Book a Consultation",
  ctaHref = "#contact",
  dotColor = "bg-[#ff4a4a]",
  theme = "light",
  bgColor,
  titleColor,
  subtitleColor,
  eyebrowColor,
}: ServiceHeroSectionProps) {
  const resolvedBgColor = bgColor || (theme === "dark" ? "bg-ink" : "bg-white");
  const resolvedTitleColor = titleColor || (theme === "dark" ? "text-white" : "text-ink");
  const resolvedSubtitleColor = subtitleColor || (theme === "dark" ? "text-white/80" : "text-slate");
  const resolvedEyebrowColor = eyebrowColor || (theme === "dark" ? "text-white/90" : "text-slate");

  return (
    <section className={`relative overflow-hidden ${resolvedBgColor} pt-24 pb-16 md:pt-32 md:pb-24`}>
      <Container>
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
          <Reveal className="flex flex-col items-center w-full">
            {/* Tag */}
            <div className={`mb-6 flex items-center gap-2 text-sm font-medium uppercase tracking-wider ${resolvedEyebrowColor}`}>
              <span className={`w-2.5 h-2.5 rounded-full ${dotColor}`}></span>
              {eyebrow}
            </div>

            <h1 className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.1] text-balance whitespace-pre-line ${resolvedTitleColor}`}>
              {title}
            </h1>
            <p className={`mt-6 text-lg leading-relaxed md:text-xl max-w-2xl mx-auto text-balance ${resolvedSubtitleColor}`}>
              {subtitle}
            </p>
            <div className="mt-8 flex items-center justify-center">
              <Button href={ctaHref} variant="primary" className="rounded-full px-8 py-4 text-lg">
                {ctaText}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
