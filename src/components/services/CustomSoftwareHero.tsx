import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { customSoftwareContent } from "@/content/customSoftwareDevelopment";

export function CustomSoftwareHero() {
  const { hero, trustedClients } = customSoftwareContent;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 py-16 text-white md:py-24">
      {/* Background Decorative Accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-interactive-blue/15 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-400">Services</span>
          <span>/</span>
          <span className="text-white font-medium">Custom Software Development</span>
        </nav>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Headline & Subtitle */}
          <div className="lg:col-span-7">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold text-sky-400 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              {hero.badge}
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              {hero.title}
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              {hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={hero.secondaryCta.href} className="px-6 py-3.5 shadow-lg shadow-sky-500/20">
                {hero.secondaryCta.label}
              </Button>
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
              >
                {hero.primaryCta.label}
              </a>
            </div>

            {/* Metrics Trust Row */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4">
              {hero.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col">
                  <span className="text-2xl font-extrabold text-white sm:text-3xl">
                    {metric.value}
                  </span>
                  <span className="text-xs font-semibold text-sky-400">{metric.label}</span>
                  <span className="mt-0.5 text-[11px] text-slate-400">{metric.sublabel}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Consultation Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/15 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-md sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-white">Consult Our Solution Architects</h2>
                  <p className="mt-0.5 text-xs text-slate-400">Get a free architecture & cost estimate</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                    ✓
                  </span>
                  <span>Non-Disclosure Agreement (NDA) signed within 2 hours</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                    ✓
                  </span>
                  <span>Dedicated Tech Lead allocated with milestone roadmaps</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                    ✓
                  </span>
                  <span>100% intellectual property & source code rights transferred</span>
                </div>
              </div>

              {/* Quick Jump CTA in Card */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href="#consultation-cta"
                  className="block w-full rounded-xl bg-interactive-blue py-3 text-center text-sm font-semibold text-white shadow-md shadow-interactive-blue/30 transition-all hover:bg-interactive-blue/90"
                >
                  Request Proposal & Pricing
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos Row */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
            Trusted by global enterprises and emerging startups
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {trustedClients.map((client) => (
              <span
                key={client.name}
                className="text-lg font-bold tracking-wider text-slate-400 transition-colors hover:text-white"
              >
                {client.logoText}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
