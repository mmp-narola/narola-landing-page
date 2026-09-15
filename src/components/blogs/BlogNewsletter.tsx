"use client";

import { useState, FormEvent } from "react";
import { Container } from "@/components/ui/Container";

export function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-ink py-14 text-white md:py-16">
      {/* Decorative accent patterns */}
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-brand-blue/15 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-interactive-blue/20 blur-3xl" />

      <Container>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:flex-row md:p-12">
          {/* Text Content */}
          <div className="max-w-md text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-interactive-blue/20 px-3 py-1 text-xs font-semibold text-brand-blue">
              <span className="h-2 w-2 rounded-full bg-brand-blue animate-pulse" />
              Stay Ahead of Tech Trends
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Get Notified!
            </h2>
            <p className="mt-2 text-sm text-slate-300 md:text-base leading-relaxed">
              Subscribe to get curated technology breakdowns, engineering best practices, and industry case studies delivered straight to your inbox.
            </p>
          </div>

          {/* Form */}
          <div className="w-full md:w-auto md:min-w-[340px]">
            {submitted ? (
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-sm text-white">
                <svg className="h-6 w-6 text-green-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Thank you for subscribing! We&apos;ll keep you updated.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-blue to-interactive-blue px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-blue/25 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                >
                  Subscribe for Updates
                </button>
              </form>
            )}
            <p className="mt-2.5 text-center text-[11px] text-slate-400 md:text-left">
              Zero spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
