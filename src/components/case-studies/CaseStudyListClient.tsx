"use client";

import { useMemo, useState } from "react";
import { CaseStudy } from "@/content/caseStudies";
import { CaseStudyCard } from "./CaseStudyCard";

export interface CaseStudyListClientProps {
  initialCaseStudies: CaseStudy[];
}

export function CaseStudyListClient({
  initialCaseStudies,
}: CaseStudyListClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<string>("all");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");

  // Extract unique filter options
  const industries = useMemo(() => {
    const set = new Set(initialCaseStudies.map((cs) => cs.industry));
    return Array.from(set).sort();
  }, [initialCaseStudies]);

  const services = useMemo(() => {
    const set = new Set(initialCaseStudies.map((cs) => cs.service));
    return Array.from(set).sort();
  }, [initialCaseStudies]);

  const regions = useMemo(() => {
    const set = new Set(initialCaseStudies.map((cs) => cs.region));
    return Array.from(set).sort();
  }, [initialCaseStudies]);

  // Filtered results
  const filteredCaseStudies = useMemo(() => {
    return initialCaseStudies.filter((cs) => {
      // Search text match
      const searchTerms = `${cs.title} ${cs.tagline} ${cs.summary} ${cs.country} ${cs.industry} ${cs.technologies.join(" ")}`.toLowerCase();
      const matchesSearch =
        !searchQuery || searchTerms.includes(searchQuery.toLowerCase());

      // Dropdown filters
      const matchesIndustry =
        selectedIndustry === "all" || cs.industry === selectedIndustry;
      const matchesService =
        selectedService === "all" || cs.service === selectedService;
      const matchesRegion =
        selectedRegion === "all" || cs.region === selectedRegion;

      return matchesSearch && matchesIndustry && matchesService && matchesRegion;
    });
  }, [
    initialCaseStudies,
    searchQuery,
    selectedIndustry,
    selectedService,
    selectedRegion,
  ]);

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedIndustry !== "all" ||
    selectedService !== "all" ||
    selectedRegion !== "all";

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedIndustry("all");
    setSelectedService("all");
    setSelectedRegion("all");
  };

  return (
    <div className="space-y-10">
      {/* Search & Filter Controls */}
      <div className="rounded-3xl border border-slate/15 bg-white p-6 md:p-8 shadow-sm">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-center">
          {/* Search Input */}
          <div className="md:col-span-4 relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate/60">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search case studies, tech, or country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate/20 bg-surface-muted/50 py-2.5 pl-10 pr-4 text-sm text-ink placeholder-slate/60 transition-colors focus:border-interactive-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-interactive-blue/20"
            />
          </div>

          {/* Industry Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full rounded-xl border border-slate/20 bg-surface-muted/50 py-2.5 px-3.5 text-sm text-ink transition-colors focus:border-interactive-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-interactive-blue/20"
            >
              <option value="all">All Industries</option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>

          {/* Service Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full rounded-xl border border-slate/20 bg-surface-muted/50 py-2.5 px-3.5 text-sm text-ink transition-colors focus:border-interactive-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-interactive-blue/20"
            >
              <option value="all">All Services</option>
              {services.map((srv) => (
                <option key={srv} value={srv}>
                  {srv}
                </option>
              ))}
            </select>
          </div>

          {/* Region Filter */}
          <div className="md:col-span-2">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full rounded-xl border border-slate/20 bg-surface-muted/50 py-2.5 px-3.5 text-sm text-ink transition-colors focus:border-interactive-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-interactive-blue/20"
            >
              <option value="all">All Regions</option>
              {regions.map((reg) => (
                <option key={reg} value={reg}>
                  {reg}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter Stats & Reset */}
        {hasActiveFilters && (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate/10 pt-4 text-xs">
            <span className="font-medium text-slate">
              Showing{" "}
              <strong className="text-ink font-semibold">
                {filteredCaseStudies.length}
              </strong>{" "}
              of {initialCaseStudies.length} case studies
            </span>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1 font-semibold text-interactive-blue hover:underline"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Case Studies Grid */}
      {filteredCaseStudies.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCaseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate/20 bg-surface-muted/40 p-12 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-interactive-blue/10 text-interactive-blue">
            <svg
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-ink">
            No case studies found
          </h3>
          <p className="mt-1 text-sm text-slate">
            Try adjusting your search terms or filter selections.
          </p>
          <button
            onClick={resetFilters}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-interactive-blue px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-brand-blue"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
