"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { heroContent, type QuickPrompt } from "@/content/homeContent";
import { MessageSquare, ArrowRight, X } from "lucide-react";

export function HeroSection() {
  const [inputValue, setInputValue] = useState("");
  const [activePrompt, setActivePrompt] = useState<QuickPrompt | null>(null);
  const [isThinking, setIsThinking] = useState(false);

  const handleSelectPrompt = (prompt: QuickPrompt) => {
    setInputValue(prompt.query);
    setIsThinking(true);
    setTimeout(() => {
      setActivePrompt(prompt);
      setIsThinking(false);
    }, 280);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const matched =
      heroContent.quickPrompts.find(
        (p) =>
          inputValue.toLowerCase().includes(p.id) ||
          inputValue.toLowerCase().includes(p.label.toLowerCase())
      ) || heroContent.quickPrompts[0];

    setIsThinking(true);
    setTimeout(() => {
      setActivePrompt({
        ...matched,
        query: inputValue,
      });
      setIsThinking(false);
    }, 300);
  };

  return (
    <section className="relative overflow-hidden bg-light-gray pt-20 sm:pt-28 lg:pt-36 text-light-gray">
      {/* <AmbientGlow position="top" height={560} color="rgba(0,85,255,0.18)" className="-top-40" /> */}

      <Container className="relative pb-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Main Headline — large cinematic display type */}
          <Reveal>
            <h1 className="text-display font-semibold tracking-tight text-light-gray md:text-display-lg text-balance">
              {heroContent.headlinePrefix}
              <span className="bg-gradient-to-r from-electric-blue to-[#a855f7] bg-clip-text text-transparent">
                {heroContent.headlineHighlight}
              </span>
              {heroContent.headlineSuffix}
            </h1>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-gray sm:text-2xl font-normal">
              {heroContent.subtitle}
            </p>
          </Reveal>

          {/* Interactive "ASK US ANYTHING" Card */}
          <Reveal delay={400}>
            <div className="mx-auto mt-14 max-w-3xl rounded-[28px] border border-white/10 bg-[#1d1d1f] p-6 text-left shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] md:p-9">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-bright-blue">
                <MessageSquare className="h-4 w-4" />
                <span>{heroContent.askEyebrow}</span>
              </div>

              <form onSubmit={handleFormSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={heroContent.inputPlaceholder}
                    className="w-full rounded-2xl border border-white/10 bg-[#151515] px-5 py-4 text-sm md:text-base text-light-gray placeholder:text-ink-secondary transition-all focus:border-[#0084ff] focus:outline-none focus:ring-4 focus:ring-[#0084ff]/15"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isThinking}
                  className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-2xl bg-light-gray px-6 py-4 text-sm font-medium text-black shadow-sm transition-all hover:bg-white active:scale-95 disabled:opacity-70"
                >
                  {isThinking ? (
                    <span>Matching...</span>
                  ) : (
                    <>
                      <ArrowRight className="h-4 w-4" />
                      <span>Ask</span>
                    </>
                  )}
                </button>
              </form>

              {/* Quick Prompts Pills */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {heroContent.quickPrompts.map((prompt) => {
                  const isSelected = activePrompt?.id === prompt.id;
                  return (
                    <button
                      key={prompt.id}
                      type="button"
                      onClick={() => handleSelectPrompt(prompt)}
                      className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 ${isSelected
                        ? "bg-[#0084ff] text-white shadow-sm"
                        : "bg-white/[0.06] text-light-gray hover:bg-[#0084ff]/15 hover:text-bright-blue"
                        }`}
                    >
                      {prompt.label}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic AI Advisor Match Reveal */}
              {activePrompt && (
                <div className="mt-6 rounded-2xl border border-[#0084ff]/20 bg-[#151515] p-5 text-left animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-bright-blue">
                      AI Recommendation
                    </span>
                    <button
                      type="button"
                      onClick={() => setActivePrompt(null)}
                      className="inline-flex items-center gap-1 text-xs text-muted-gray hover:text-white"
                    >
                      <span>Close</span>
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <h4 className="mt-2 text-base font-semibold text-light-gray">
                    {activePrompt.response.title}
                  </h4>
                  <p className="mt-1 text-xs md:text-sm text-muted-gray leading-relaxed">
                    {activePrompt.response.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-[#0084ff]/15 pt-3 text-xs">
                    <span className="font-semibold text-light-gray">Recommended Stack:</span>
                    {activePrompt.response.recommendedStack.map((tech) => (
                      <span key={tech} className="rounded bg-white/[0.08] px-2 py-0.5 font-medium text-bright-blue shadow-2xs">
                        {tech}
                      </span>
                    ))}
                    <a
                      href="#footer"
                      className="ml-auto inline-flex items-center gap-1 font-semibold text-bright-blue hover:underline"
                    >
                      <span>Consult our architects</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          {/* Key Stats Counters */}
          <Reveal delay={300}>
            <div className="mx-auto mt-16 flex max-w-xl items-center justify-center divide-x divide-black/10">
              {heroContent.stats.map((stat) => (
                <div key={stat.label} className="flex flex-1 flex-col items-center px-6 sm:px-12">
                  <span className="block text-4xl font-semibold tracking-tight text-light-gray sm:text-5xl lg:text-6xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-xs font-medium uppercase tracking-wider text-muted-gray sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Distinct Trusted Clients Subsection */}
      <div className="border-t border-black/[0.06] bg-surface-muted/50 py-10 md:py-14">
        <Container className="relative">
          <div className="mx-auto max-w-5xl text-center">
            <Reveal delay={150}>
              <span className="block text-xs lg:text-base font-semibold uppercase tracking-[0.14em] text-ink-secondary sm:text-sm">
                {heroContent.trustedBannerTitle}
              </span>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5 sm:gap-5">
                {heroContent.trustedClients.map((client) => (
                  <div
                    key={client.name}
                    className="flex h-14 sm:h-15 items-center justify-center rounded-2xl border border-slate/10 bg-white px-5.5 sm:px-7 shadow-xs transition-all duration-300 hover:border-slate/25 hover:shadow-md hover:-translate-y-0.5"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className={`w-auto max-w-[110px] sm:max-w-[130px] object-contain ${client.name === "L&T"
                        ? "max-h-8.5 sm:max-h-9.5"
                        : client.name === "Biocon"
                          ? "max-h-8 sm:max-h-9"
                          : "max-h-7 sm:max-h-8"
                        }`}
                    />
                  </div>
                ))}
                {heroContent.moreClientsBadge && (
                  <div className="flex h-14 sm:h-15 items-center justify-center rounded-2xl border border-dashed border-slate/25 bg-slate/5 px-5.5 sm:px-7 text-xs sm:text-sm font-semibold text-slate transition-all duration-300 hover:border-slate/40">
                    {heroContent.moreClientsBadge}
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  );
}
