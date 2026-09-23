"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";

export function CustomSoftwareCta() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "Custom Software Development",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="consultation-cta" className="scroll-mt-24 bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 py-16 text-white md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Direct Pitch */}
          <div className="lg:col-span-6">
            <span className="inline-block rounded-full bg-sky-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-400 border border-sky-400/20">
              Get In Touch
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Schedule a Consultation & Receive a Free Project Proposal
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Share your software idea, feature requirements, or scaling challenges with our senior solution architects. We analyze feasibility and provide a tailored technical roadmap within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 font-bold text-xs">
                  ✓
                </span>
                <span>Free 30-minute technical architecture discovery session</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 font-bold text-xs">
                  ✓
                </span>
                <span>Detailed scope breakdown and milestone cost estimation</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 font-bold text-xs">
                  ✓
                </span>
                <span>Strict Non-Disclosure Agreement (NDA) for IP security</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-2 text-xs text-slate-400">
              <span>Direct inquiries: <strong>inquiry@narolainfotech.com</strong></span>
              <span>Offices in North Carolina (USA), Virginia (USA), and Surat (India)</span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md sm:p-8">
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">Thank You for Reaching Out!</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Our technical consultant will review your project details and contact you within 24 business hours.
                  </p>
                  <button
                    type="button"
                    className="mt-6 rounded-xl bg-interactive-blue px-6 py-2.5 text-xs font-medium text-white hover:bg-interactive-blue/90"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Request Free Consultation</h3>

                  <div>
                    <label className="block text-xs font-medium text-slate-300">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition-colors focus:border-sky-400 focus:bg-white/15"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-300">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition-colors focus:border-sky-400 focus:bg-white/15"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition-colors focus:border-sky-400 focus:bg-white/15"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300">Project Requirements / Scope *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Tell us about your project goals, tech stack preference, and target timeline..."
                      className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition-colors focus:border-sky-400 focus:bg-white/15"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-interactive-blue py-3.5 text-center text-sm font-medium text-white shadow-lg shadow-interactive-blue/30 transition-all hover:bg-interactive-blue/90"
                  >
                    Submit Project Inquiry →
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    🔒 We respect your privacy. All information shared is protected under strict NDA.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
