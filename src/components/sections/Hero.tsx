import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { hero } from "@/content/hero";
import { siteConfig } from "@/content/siteConfig";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-36 lg:pb-32">
      {/* Soft ambient light — flat/minimal per the cinematic-but-calm direction, no dense pattern. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(ellipse_at_50%_-10%,rgba(0,132,255,0.09),transparent_60%)]"
      />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow badge */}
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-interactive-blue/20 bg-white px-4 py-1.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-interactive-blue opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-interactive-blue" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-ink">
                {hero.eyebrow}
              </span>
            </div>
          </Reveal>

          {/* Main Headline — large display scale, Apple-style */}
          <Reveal delay={80}>
            <h1 className="mt-8 text-h1 font-bold tracking-tight text-balance text-ink md:text-h1-lg">
              Trusted{" "}
              <span className="bg-gradient-to-r from-interactive-blue to-brand-blue bg-clip-text text-transparent">
                Custom Software
              </span>{" "}
              Development Partner
            </h1>
          </Reveal>

          {/* Sub-headline description */}
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate">
              We engineer mission-critical applications, modern web platforms, and scalable
              mobile solutions designed to accelerate enterprise growth.
            </p>
          </Reveal>

          {/* CTA Group */}
          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <Button href={siteConfig.primaryCta.href} className="group gap-2">
                <span>{siteConfig.primaryCta.label}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href="#services" variant="secondary">
                Explore Services
              </Button>
            </div>
          </Reveal>

          {/* Trust Points — minimal inline row, dot-separated */}
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold tracking-wide text-slate uppercase">
              {hero.trustPoints.map((point, idx) => (
                <span key={point} className="flex items-center gap-3">
                  {idx > 0 && <span className="h-1 w-1 rounded-full bg-slate/40" aria-hidden="true" />}
                  {point}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Large hero visual — full-width product-shot presentation, scale-reveals on scroll */}
        <Reveal variant="scale" delay={200} className="mt-16 md:mt-20">
          <div className="relative mx-auto max-w-4xl">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-brand-blue/15 to-accent-orange/15 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate/10 bg-surface-muted/60 p-8 shadow-2xl shadow-slate/10 sm:p-14">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                width={hero.image.width}
                height={hero.image.height}
                priority
                className="mx-auto h-auto w-full max-w-md object-contain"
              />

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 border-t border-slate/10 pt-6 text-xs font-medium text-slate">
                <span className="flex items-center gap-1.5 font-semibold text-ink">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  20+ Years Excellence
                </span>
                <span className="font-semibold text-interactive-blue">Enterprise Ready</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
