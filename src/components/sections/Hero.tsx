import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content/hero";
import { siteConfig } from "@/content/siteConfig";

function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-surface-muted/30 to-white py-16 md:py-24 lg:py-28">
      {/* Decorative background grid pattern & ambient blurs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0084ff_1px,transparent_1px)] [background-size:24px_24px] opacity-30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-brand-blue/15 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-24 h-[450px] w-[450px] rounded-full bg-gradient-to-bl from-accent-orange/10 to-transparent blur-3xl"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Copy & CTAs */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-interactive-blue/20 bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-interactive-blue opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-interactive-blue" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-ink">
                {hero.eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-h1 font-extrabold tracking-tight text-ink md:text-h1-lg">
              Trusted{" "}
              <span className="bg-gradient-to-r from-interactive-blue to-brand-blue bg-clip-text text-transparent">
                Custom Software
              </span>{" "}
              Development Partner
            </h1>

            {/* Sub-headline description */}
            <p className="mt-5 max-w-xl text-body text-slate leading-relaxed">
              We engineer mission-critical applications, modern web platforms, and scalable mobile
              solutions designed to accelerate enterprise growth.
            </p>

            {/* Trust Points */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-5">
              {hero.trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 rounded-xl border border-slate/10 bg-white px-3.5 py-2 shadow-2xs"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-interactive-blue/10 text-interactive-blue">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-ink">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Group */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Button href={siteConfig.primaryCta.href} className="group gap-2">
                <span>{siteConfig.primaryCta.label}</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href="#services" variant="secondary">
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right Column: Hero Graphic Card with Glassmorphic Frame */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              {/* Glow backdrop behind graphic */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand-blue/20 to-accent-orange/20 blur-xl transform -rotate-1"
              />

              <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/95 p-6 shadow-2xl shadow-slate/10 backdrop-blur-sm ring-1 ring-slate/10">
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  width={hero.image.width}
                  height={hero.image.height}
                  priority
                  className="h-auto w-full object-contain drop-shadow-xs transition-transform duration-500 hover:scale-[1.02]"
                />

                {/* Floating highlight badges */}
                <div className="mt-4 flex items-center justify-between border-t border-slate/10 pt-4 text-xs font-medium text-slate">
                  <span className="flex items-center gap-1.5 font-semibold text-ink">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    20+ Years Excellence
                  </span>
                  <span className="rounded-md bg-surface-muted px-2.5 py-1 text-[11px] font-semibold text-interactive-blue">
                    Enterprise Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
