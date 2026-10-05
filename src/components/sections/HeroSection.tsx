"use client";

import { useState, useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { heroContent, type QuickPrompt } from "@/content/homeContent";
import type { SearchResultItem } from "@/actions/searchAction";
import { MessageSquare, ArrowRight, X } from "lucide-react";

export function HeroSection() {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResultItem[] | null>(null);
  const [searchFilter, setSearchFilter] = useState<"All" | "Blog" | "Case Study">("All");
  const [isThinking, setIsThinking] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && isFocused) {
            setIsFocused(false);
            if (inputRef.current) {
              inputRef.current.blur();
            }
          }
        });
      },
      { threshold: 0 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isFocused]);

  const executeSearch = async (query: string) => {
    setIsThinking(true);
    setSearchResults(null);
    setSearchFilter("All");

    try {
      const { globalSearchAction } = await import("@/actions/searchAction");
      const results = await globalSearchAction(query);

      if (results) {
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Failed to perform global search", error);
    } finally {
      setIsThinking(false);
    }
  };

  const handleSelectPrompt = (prompt: QuickPrompt) => {
    setIsFocused(true);
    setInputValue(prompt.query);
    executeSearch(prompt.query);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    executeSearch(inputValue);
  };

  return (
    <>
      {/* Background Click Overlay */}
      <div
        className={`fixed inset-0 z-30 transition-all duration-300 ${isFocused ? 'pointer-events-auto bg-black/20 backdrop-blur-sm' : 'pointer-events-none bg-transparent backdrop-blur-0'}`}
        onClick={() => {
          setIsFocused(false);
          if (inputRef.current) inputRef.current.blur();
        }}
        aria-hidden="true"
      />
      <section className="relative overflow-hidden bg-light-gray pt-20 sm:pt-28 lg:pt-36 text-light-gray">
        {/* <AmbientGlow position="top" height={560} color="rgba(0,85,255,0.18)" className="-top-40" /> */}

        <Container className="relative pb-8">
          <div className="mx-auto max-w-5xl text-center">
            {/* Animated Header Group */}
            <div className={`transition-all duration-700 ease-in-out ${isFocused ? 'scale-95 blur-md' : 'scale-100 blur-0 opacity-100'}`}>
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
            </div>

            {/* Interactive "ASK US ANYTHING" Card */}
            <div ref={cardRef} className={`relative transition-all duration-500 ${isFocused ? 'z-40' : 'z-10'}`}>
              <Reveal delay={400}>
                <div
                  className={`mx-auto mt-14 max-w-3xl rounded-[28px] border bg-[#1d1d1f] p-6 text-left transition-all duration-500 md:p-9 relative ${isFocused
                    ? 'scale-[1.02] shadow-[0_0_80px_-15px_rgba(0,132,255,0.4)] border-[#0084ff]/50'
                    : 'shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border-white/10'
                    }`}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-bright-blue">
                    <MessageSquare className="h-4 w-4" />
                    <span>{heroContent.askEyebrow}</span>
                  </div>

                  <form onSubmit={handleFormSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="relative flex-1">
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onFocus={() => setIsFocused(true)}
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

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {heroContent.quickPrompts.map((prompt) => {
                      const isSelected = inputValue === prompt.query;
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

                  {/* Search Results Display */}
                  {searchResults && (() => {
                    const contentResults = searchResults.filter(r => r.type !== "Page");
                    const pageResults = searchResults.filter(r => r.type === "Page");
                    const hasBlogs = contentResults.some(r => r.type === "Blog");
                    const hasCaseStudies = contentResults.some(r => r.type === "Case Study");
                    const filteredContentResults = contentResults.filter(item => searchFilter === "All" || item.type === searchFilter);

                    return (
                      <div className="mt-8 animate-in fade-in duration-200">
                        <hr className="border-[#0084ff]/30 mb-6" />

                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-semibold uppercase tracking-wide text-bright-blue">
                            Search Results
                          </span>
                          <button
                            type="button"
                            onClick={() => setSearchResults(null)}
                            className="inline-flex items-center gap-1 text-xs text-muted-gray hover:text-white"
                          >
                            <span>Close</span>
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        {/* Filter Badges */}
                        {contentResults.length > 0 && hasBlogs && hasCaseStudies && (
                          <div className="flex items-center gap-2 mb-6">
                            <button
                              onClick={() => setSearchFilter("All")}
                              className={`shrink-0 rounded border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider transition-all ${searchFilter === "All"
                                ? "border-white/30 bg-white/10 text-white"
                                : "border-white/10 bg-white/[0.05] text-muted-gray hover:bg-white/[0.1]"
                                }`}
                            >
                              All
                            </button>
                            <button
                              onClick={() => setSearchFilter("Case Study")}
                              className={`shrink-0 rounded border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider transition-all ${searchFilter === "Case Study"
                                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                                : "border-white/10 bg-white/[0.05] text-muted-gray hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-400"
                                }`}
                            >
                              Case Studies
                            </button>
                            <button
                              onClick={() => setSearchFilter("Blog")}
                              className={`shrink-0 rounded border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider transition-all ${searchFilter === "Blog"
                                ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                                : "border-white/10 bg-white/[0.05] text-muted-gray hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400"
                                }`}
                            >
                              Blogs
                            </button>
                          </div>
                        )}

                        {/* Results List */}
                        {filteredContentResults.length > 0 && (
                          <div className="flex flex-col gap-3 max-h-[320px] overflow-y-auto pr-2">
                            {filteredContentResults.map((item) => (
                              <div key={item.id} className="rounded-xl border border-[#0084ff]/20 bg-[#151515] p-4 text-left transition-all hover:border-[#0084ff]/40 hover:bg-[#0084ff]/10 shadow-sm">
                                <a href={item.url} className="group block outline-none">
                                  <div className="flex items-start justify-between gap-3">
                                    <h4 className="text-sm font-semibold text-light-gray group-hover:text-bright-blue transition-colors leading-tight">
                                      {item.title}
                                    </h4>
                                    <div className="flex items-center gap-2 shrink-0">
                                      <span className="hidden sm:flex items-center gap-1 text-[10px] font-semibold text-[#0084ff]/70 transition-colors group-hover:text-bright-blue">
                                        View
                                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                                      </span>
                                      <span
                                        className={`shrink-0 rounded border px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider ${item.type === "Blog"
                                          ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                                          : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                                          }`}
                                      >
                                        {item.type}
                                      </span>
                                    </div>
                                  </div>
                                  <p className="mt-1.5 text-xs text-muted-gray leading-relaxed whitespace-pre-line line-clamp-2">
                                    {item.summary}
                                  </p>
                                </a>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Page Results as Badges */}
                        {pageResults.length > 0 && (
                          <div className={filteredContentResults.length > 0 ? "mt-8" : ""}>
                            <h5 className="text-[11px] font-semibold uppercase tracking-wider text-muted-gray mb-3">Related Sections</h5>
                            <div className="flex flex-wrap gap-2">
                              {pageResults.map((page) => (
                                <a
                                  key={page.id}
                                  href={page.url}
                                  className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-light-gray transition-colors hover:border-[#0084ff]/30 hover:text-bright-blue"
                                >
                                  {page.title}
                                  <ArrowRight className="h-3 w-3 opacity-70 transition-transform group-hover:translate-x-0.5" />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Empty State */}
                        {filteredContentResults.length === 0 && pageResults.length === 0 && (
                          <div className="rounded-2xl border border-white/10 bg-[#151515] p-6 text-center text-sm text-muted-gray mt-4">
                            No direct matches found. Please try another term or contact us for guidance!
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              </Reveal>
            </div>

            {/* Key Stats Counters */}
            <div className={`transition-all duration-700 ease-in-out ${isFocused ? 'scale-95 blur-md opacity-30' : 'scale-100 blur-0 opacity-100'}`}>
              <Reveal delay={300}>
                <div className="mx-auto mt-16 flex max-w-xl items-center justify-center divide-x divide-black/10">
                  {heroContent.stats.map((stat) => (
                    <div key={stat.label} className="flex flex-1 flex-col items-center px-6 sm:px-12">
                      <span className="block text-4xl font-semibold tracking-tight text-light-gray sm:text-5xl lg:text-6xl">
                        {stat.value}
                      </span>
                      <span className="mt-2 block text-xs font-medium uppercase tracking-wide text-muted-gray sm:text-sm">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>

        {/* Distinct Trusted Clients Subsection */}
        <div className={`transition-all duration-700 ease-in-out border-t border-black/[0.06] bg-surface-muted/50 py-10 md:py-14 ${isFocused ? 'scale-95 blur-md opacity-30' : 'scale-100 blur-0 opacity-100'}`}>
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
    </>
  );
}
