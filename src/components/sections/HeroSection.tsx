"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
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
    <section className="relative overflow-hidden bg-light-gray pt-20 pb-20 sm:pt-28 sm:pb-28 lg:pt-36 lg:pb-32 text-light-gray">
      {/* <AmbientGlow position="top" height={560} color="rgba(0,85,255,0.18)" className="-top-40" /> */}

      <Container className="relative">
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
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-gray sm:text-xl font-normal leading-relaxed">
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
                    className="w-full rounded-2xl border border-white/10 bg-[#151515] px-5 py-4 text-sm md:text-base text-light-gray placeholder:text-[#6e6e73] transition-all focus:border-[#0084ff] focus:outline-none focus:ring-4 focus:ring-[#0084ff]/15"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isThinking}
                  className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-2xl bg-light-gray px-6 py-4 text-sm font-semibold text-black shadow-sm transition-all hover:bg-white active:scale-95 disabled:opacity-70"
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
                        ? "bg-[#0084ff] text-white font-semibold shadow-sm"
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
                  <h4 className="mt-2 text-base font-bold text-light-gray">
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
                      className="ml-auto inline-flex items-center gap-1 font-bold text-bright-blue hover:underline"
                    >
                      <span>Consult our architects</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          {/* 4 Stats Counters */}
          <Reveal delay={300}>
            <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
              {heroContent.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center border-l border-white/10 first:border-l-0 sm:first:border-l">
                  <span className="block text-4xl font-semibold tracking-tight text-light-gray sm:text-5xl">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 block text-xs font-medium uppercase tracking-wide text-muted-gray sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Trusted Clients Ribbon */}
          <Reveal delay={350}>
            <div className="mx-auto mt-14 max-w-4xl">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#86868b]">
                {heroContent.trustedBannerTitle}
              </span>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                {heroContent.trustedClients.map((client) => (
                  <span
                    key={client}
                    className="rounded-full border border-white/10 bg-[#151515] px-5 py-2.5 text-xs text-light-gray"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
