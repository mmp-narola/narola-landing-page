"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { heroContent, type QuickPrompt } from "@/content/homeContent";

function ChatIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a.75.75 0 0 1-.974-.94 6.01 6.01 0 0 0 .59-2.022A7.854 7.854 0 0 1 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
  );
}

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
    <section className="relative overflow-hidden bg-black pt-20 pb-20 sm:pt-28 sm:pb-28 lg:pt-36 lg:pb-32 text-[#f5f5f7]">
      {/* Soft radial glow — purely decorative, cinematic backdrop like an Apple product hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-[560px] bg-[radial-gradient(ellipse_at_top,_rgba(0,85,255,0.18),_transparent_65%)]"
      />

      <Container className="relative">
        <div className="mx-auto max-w-5xl text-center">
          {/* Main Headline — large cinematic display type */}
          <Reveal>
            <h1 className="text-display font-semibold tracking-tight text-[#f5f5f7] md:text-display-lg text-balance">
              {heroContent.headlinePrefix}
              <span className="bg-gradient-to-r from-[#0084ff] to-[#00c2ff] bg-clip-text text-transparent">
                {heroContent.headlineHighlight}
              </span>
              {heroContent.headlineSuffix}
            </h1>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#a1a1a6] sm:text-xl font-normal leading-relaxed">
              {heroContent.subtitle}
            </p>
          </Reveal>

          {/* Interactive "ASK US ANYTHING" Card */}
          <Reveal delay={200}>
            <div className="mx-auto mt-14 max-w-3xl rounded-[28px] border border-white/10 bg-[#1d1d1f] p-6 text-left shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] md:p-9">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#5ab0ff]">
                <ChatIcon className="h-4 w-4" />
                <span>{heroContent.askEyebrow}</span>
              </div>

              <form onSubmit={handleFormSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={heroContent.inputPlaceholder}
                    className="w-full rounded-2xl border border-white/10 bg-[#151515] px-5 py-4 text-sm md:text-base text-[#f5f5f7] placeholder:text-[#6e6e73] transition-all focus:border-[#0084ff] focus:outline-none focus:ring-4 focus:ring-[#0084ff]/15"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isThinking}
                  className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-2xl bg-[#f5f5f7] px-6 py-4 text-sm font-semibold text-black shadow-sm transition-all hover:bg-white active:scale-95 disabled:opacity-70"
                >
                  {isThinking ? <span>Matching...</span> : <span>→ Ask</span>}
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
                      className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 ${
                        isSelected
                          ? "bg-[#0084ff] text-white font-semibold shadow-sm"
                          : "bg-white/[0.06] text-[#f5f5f7] hover:bg-[#0084ff]/15 hover:text-[#5ab0ff]"
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
                    <span className="text-xs font-bold uppercase tracking-wider text-[#5ab0ff]">
                      AI Recommendation
                    </span>
                    <button
                      type="button"
                      onClick={() => setActivePrompt(null)}
                      className="text-xs text-[#a1a1a6] hover:text-white"
                    >
                      Close ✕
                    </button>
                  </div>
                  <h4 className="mt-2 text-base font-bold text-[#f5f5f7]">
                    {activePrompt.response.title}
                  </h4>
                  <p className="mt-1 text-xs md:text-sm text-[#a1a1a6] leading-relaxed">
                    {activePrompt.response.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-[#0084ff]/15 pt-3 text-xs">
                    <span className="font-semibold text-[#f5f5f7]">Recommended Stack:</span>
                    {activePrompt.response.recommendedStack.map((tech) => (
                      <span key={tech} className="rounded bg-white/[0.08] px-2 py-0.5 font-medium text-[#5ab0ff] shadow-2xs">
                        {tech}
                      </span>
                    ))}
                    <a
                      href="#footer"
                      className="ml-auto inline-flex items-center gap-1 font-bold text-[#5ab0ff] hover:underline"
                    >
                      Consult our architects →
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
                  <span className="block text-4xl font-semibold tracking-tight text-[#f5f5f7] sm:text-5xl">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 block text-xs font-medium uppercase tracking-wide text-[#a1a1a6] sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Trusted Clients Ribbon */}
          <Reveal delay={350}>
            <div className="mx-auto mt-14 max-w-4xl">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#86868b]">
                {heroContent.trustedBannerTitle}
              </span>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                {heroContent.trustedClients.map((client) => (
                  <span
                    key={client}
                    className="rounded-full border border-white/10 bg-[#151515] px-5 py-2.5 text-xs font-semibold text-[#f5f5f7]"
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
