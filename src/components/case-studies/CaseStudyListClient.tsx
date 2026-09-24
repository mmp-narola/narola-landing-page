"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CaseStudy } from "@/types/caseStudy";
import { CaseStudyCard } from "./CaseStudyCard";

export interface CaseStudyListClientProps {
  initialCaseStudies: CaseStudy[];
}

const PRACTICE_AREAS = [
  { id: "all", label: "All" },
  { id: "ecommerce", label: "eCommerce" },
  { id: "ai-automation", label: "AI & Automation" },
  { id: "product-engineering", label: "Product Engineering" },
];

const SERVICES_BY_PRACTICE: Record<string, { id: string; label: string }[]> = {
  ecommerce: [
    { id: "all", label: "All eCommerce" },
    { id: "ai-commerce", label: "AI Commerce" },
    { id: "marketplace", label: "Marketplace" },
    { id: "shopify", label: "Shopify" },
    { id: "headless", label: "Headless Commerce" },
    { id: "b2b", label: "B2B eCommerce" },
    { id: "automation", label: "eCommerce Automation" },
    { id: "custom", label: "Custom eCommerce" },
  ],
  "ai-automation": [
    { id: "all", label: "All AI & Automation" },
    { id: "consulting", label: "AI Consulting" },
    { id: "agents", label: "AI Agents" },
    { id: "chatbots", label: "AI Chatbots" },
    { id: "conversational", label: "Conversational AI" },
    { id: "workflow", label: "Workflow Automation" },
    { id: "document-processing", label: "Document Processing" },
    { id: "crm-sales", label: "CRM & Sales Automation" },
  ],
  "product-engineering": [
    { id: "all", label: "All Product Engineering" },
    { id: "saas", label: "SaaS Product Development" },
    { id: "web", label: "Web Application Development" },
    { id: "mobile", label: "Mobile App Development" },
    { id: "enterprise", label: "Enterprise Software" },
    { id: "mvp", label: "MVP Development" },
  ],
};

const BASE_INDUSTRIES = [
  "All",
  "Jewelry",
  "Fashion",
  "Grocery",
  "Healthcare",
  "Education",
  "SaaS",
  "Enterprise",
  "Logistics",
];

const BASE_REGIONS = ["All", "USA", "UK", "Australia", "Europe", "India"];

function FilterPill({
  label,
  active,
  onClick,
  variant = "primary",
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  variant?: "primary" | "secondary";
}) {
  if (active) {
    if (variant === "secondary") {
      // Light blue chip for active Service Type (Row 2)
      return (
        <button
          type="button"
          onClick={onClick}
          aria-pressed={true}
          className="inline-flex items-center rounded-full border border-interactive-blue/30 bg-[#e8f1ff] px-4 py-1.5 text-sm font-semibold text-interactive-blue shadow-2xs transition-all"
        >
          {label}
        </button>
      );
    }

    // Solid blue chip for active Practice Area, Industry, Region
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={true}
        className="inline-flex items-center rounded-full bg-interactive-blue px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition-all"
      >
        {label}
      </button>
    );
  }

  // Inactive Pill
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={false}
      className="inline-flex items-center rounded-full border border-black/[0.12] bg-white px-4 py-1.5 text-sm font-medium text-subtle-gray transition-all hover:border-black/[0.22] hover:text-light-gray hover:bg-black/[0.02]"
    >
      {label}
    </button>
  );
}

function FilterRow({
  label,
  children,
  highlightBg = false,
}: {
  label: string;
  children: React.ReactNode;
  highlightBg?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-3.5 py-3.5 sm:flex-row sm:items-center sm:gap-6 ${highlightBg ? "rounded-2xl bg-surface-muted/60 px-3.5 py-3 sm:px-4" : ""
        }`}
    >
      <span className="w-full shrink-0 text-xs font-semibold uppercase tracking-wide text-ink-secondary sm:w-36">
        {label}
      </span>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  );
}

export function CaseStudyListClient({
  initialCaseStudies,
}: CaseStudyListClientProps) {
  const searchParams = useSearchParams();

  const [selectedPractice, setSelectedPractice] = useState<string>(() => {
    return (
      searchParams.get("practice")?.toLowerCase() ||
      searchParams.get("practiceArea")?.toLowerCase() ||
      "all"
    );
  });
  const [selectedServiceType, setSelectedServiceType] = useState<string>(() => {
    return (
      searchParams.get("service")?.toLowerCase() ||
      searchParams.get("serviceType")?.toLowerCase() ||
      "all"
    );
  });
  const [selectedIndustry, setSelectedIndustry] = useState<string>(() => {
    const raw =
      searchParams.get("industry") || searchParams.get("industryCategory");
    return raw && raw.toLowerCase() !== "all" ? raw : "all";
  });
  const [selectedRegion, setSelectedRegion] = useState<string>(() => {
    const raw = searchParams.get("region") || searchParams.get("country");
    return raw && raw.toLowerCase() !== "all" ? raw : "all";
  });

  const [prevParamsStr, setPrevParamsStr] = useState<string>(
    searchParams.toString()
  );

  // Sync state if searchParams string changes externally (e.g. mega menu navigation)
  const currentParamsStr = searchParams.toString();
  if (prevParamsStr !== currentParamsStr) {
    setPrevParamsStr(currentParamsStr);
    const p = searchParams.get("practice") || searchParams.get("practiceArea");
    const s = searchParams.get("service") || searchParams.get("serviceType");
    const ind = searchParams.get("industry") || searchParams.get("industryCategory");
    const reg = searchParams.get("region") || searchParams.get("country");

    setSelectedPractice(p ? p.toLowerCase() : "all");
    setSelectedServiceType(s ? s.toLowerCase() : "all");
    setSelectedIndustry(ind && ind.toLowerCase() !== "all" ? ind : "all");
    setSelectedRegion(reg && reg.toLowerCase() !== "all" ? reg : "all");
  }

  const updateUrlParams = (
    practice: string,
    service: string,
    industry: string,
    region: string
  ) => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams();
    if (practice.toLowerCase() !== "all") {
      params.set("practice", practice.toLowerCase());
    }
    if (service.toLowerCase() !== "all") {
      params.set("service", service.toLowerCase());
    }
    if (industry.toLowerCase() !== "all") {
      params.set("industry", industry);
    }
    if (region.toLowerCase() !== "all") {
      params.set("region", region);
    }

    const qs = params.toString();
    const newUrl = qs ? `/case-studies?${qs}` : "/case-studies";
    window.history.replaceState(null, "", newUrl);
  };

  // Dynamic industry list merging base list with DB items
  const industryList = useMemo(() => {
    const dynamicSet = new Set(BASE_INDUSTRIES);
    initialCaseStudies.forEach((cs) => {
      if (cs.industry && !dynamicSet.has(cs.industry)) {
        dynamicSet.add(cs.industry);
      }
    });
    return Array.from(dynamicSet);
  }, [initialCaseStudies]);

  const serviceTypesForPractice = useMemo(() => {
    if (selectedPractice === "all") return [];
    return SERVICES_BY_PRACTICE[selectedPractice] || [];
  }, [selectedPractice]);

  const handleSelectPractice = (practiceId: string) => {
    const p = practiceId.toLowerCase();
    setSelectedPractice(p);
    setSelectedServiceType("all");
    updateUrlParams(p, "all", selectedIndustry, selectedRegion);
  };

  const handleSelectServiceType = (serviceId: string) => {
    const s = serviceId.toLowerCase();
    setSelectedServiceType(s);
    updateUrlParams(selectedPractice, s, selectedIndustry, selectedRegion);
  };

  const handleSelectIndustry = (ind: string) => {
    const val = ind.toLowerCase() === "all" ? "all" : ind;
    setSelectedIndustry(val);
    updateUrlParams(selectedPractice, selectedServiceType, val, selectedRegion);
  };

  const handleSelectRegion = (reg: string) => {
    const val = reg.toLowerCase() === "all" ? "all" : reg;
    setSelectedRegion(val);
    updateUrlParams(selectedPractice, selectedServiceType, selectedIndustry, val);
  };

  const resetFilters = () => {
    setSelectedPractice("all");
    setSelectedServiceType("all");
    setSelectedIndustry("all");
    setSelectedRegion("all");
    updateUrlParams("all", "all", "all", "all");
  };

  const filteredCaseStudies = useMemo(() => {
    return initialCaseStudies.filter((cs) => {
      const practiceLower = selectedPractice.toLowerCase();
      const serviceLower = selectedServiceType.toLowerCase();
      const indLower = selectedIndustry.toLowerCase();
      const regLower = selectedRegion.toLowerCase();

      // 1. Practice Area Filter
      if (practiceLower !== "all") {
        if (cs.practiceAreas && cs.practiceAreas.includes(practiceLower)) {
          // Matched via schema
        } else {
          // Fallback heuristic check
          const ind = (cs.industry || "").toLowerCase();
          const srv = (cs.service || "").toLowerCase();
          const summary = (cs.summary || "").toLowerCase();
          const title = (cs.title || "").toLowerCase();
          const tags = (cs.tags || []).map((t) => t.toLowerCase());

          if (practiceLower === "ecommerce") {
            const isEcom =
              ind.includes("commerce") ||
              ind.includes("retail") ||
              ind.includes("fashion") ||
              ind.includes("jewelry") ||
              ind.includes("grocery") ||
              srv.includes("commerce") ||
              srv.includes("shopify") ||
              tags.some((t) => t.includes("commerce") || t.includes("b2b") || t.includes("store")) ||
              summary.includes("ecommerce") ||
              title.includes("ecommerce");
            if (!isEcom) return false;
          } else if (practiceLower === "ai-automation") {
            const isAi =
              ind.includes("ai") ||
              ind.includes("automation") ||
              srv.includes("ai") ||
              srv.includes("automation") ||
              srv.includes("machine learning") ||
              tags.some((t) => t.includes("ai") || t.includes("automation") || t.includes("transformation")) ||
              summary.includes("ai") ||
              summary.includes("automation") ||
              summary.includes("algorithm") ||
              (cs.technologies || []).some((tech) =>
                tech.toLowerCase().includes("ai") || tech.toLowerCase().includes("python nlp")
              );
            if (!isAi) return false;
          } else if (practiceLower === "product-engineering") {
            const isEng =
              srv.includes("app") ||
              srv.includes("development") ||
              srv.includes("engineering") ||
              srv.includes("software") ||
              tags.some((t) =>
                t.includes("development") || t.includes("mobile") || t.includes("web") || t.includes("platform")
              ) ||
              summary.includes("app") ||
              summary.includes("development") ||
              summary.includes("engineered");
            if (!isEng) return false;
          }
        }
      }

      // 2. Service Type Filter
      if (practiceLower !== "all" && serviceLower !== "all") {
        if (cs.serviceTypes && cs.serviceTypes.includes(serviceLower)) {
          // Matched via schema
        } else {
          const srv = (cs.service || "").toLowerCase();
          const tags = (cs.tags || []).map((t) => t.toLowerCase());
          const summary = (cs.summary || "").toLowerCase();
          const title = (cs.title || "").toLowerCase();
          const tech = (cs.technologies || []).map((t) => t.toLowerCase());

          let matchesService =
            srv.includes(serviceLower) ||
            tags.some((t) => t.includes(serviceLower)) ||
            title.includes(serviceLower) ||
            summary.includes(serviceLower);

          if (!matchesService) {
            if (serviceLower === "shopify") {
              matchesService = srv.includes("shopify") || tags.some((t) => t.includes("shopify")) || summary.includes("storefront") || tech.some((t) => t.includes("stripe"));
            } else if (serviceLower === "headless") {
              matchesService = summary.includes("storefront") || tech.some((t) => t.includes("react") || t.includes("next.js"));
            } else if (serviceLower === "b2b") {
              matchesService = srv.includes("b2b") || tags.some((t) => t.includes("b2b")) || summary.includes("b2b") || summary.includes("wholesale");
            } else if (serviceLower === "ai-commerce") {
              matchesService = summary.includes("predictive") || summary.includes("chat") || summary.includes("conversational") || tags.some((t) => t.includes("ai"));
            } else if (serviceLower === "marketplace") {
              matchesService = summary.includes("merchants") || summary.includes("vendors") || summary.includes("marketplace") || summary.includes("platform");
            } else if (serviceLower === "automation") {
              matchesService = summary.includes("automation") || summary.includes("automated") || tags.some((t) => t.includes("automation"));
            } else if (serviceLower === "custom") {
              matchesService = srv.includes("custom") || summary.includes("custom") || tags.some((t) => t.includes("custom"));
            } else if (serviceLower === "consulting") {
              matchesService = summary.includes("consulting") || summary.includes("transformation") || tags.some((t) => t.includes("transformation"));
            } else if (serviceLower === "agents") {
              matchesService = summary.includes("agent") || summary.includes("predictive") || summary.includes("natural language") || tech.some((t) => t.includes("nlp"));
            } else if (serviceLower === "chatbots" || serviceLower === "conversational") {
              matchesService = summary.includes("chat") || summary.includes("conversational") || tech.some((t) => t.includes("nlp") || t.includes("websockets"));
            } else if (serviceLower === "workflow") {
              matchesService = summary.includes("workflow") || summary.includes("scheduling") || summary.includes("pipeline") || summary.includes("coordination");
            } else if (serviceLower === "document-processing") {
              matchesService = summary.includes("pdf") || summary.includes("parser") || summary.includes("extraction") || summary.includes("underwriting");
            } else if (serviceLower === "crm-sales") {
              matchesService = summary.includes("crm") || summary.includes("sales") || summary.includes("affiliate") || summary.includes("commission");
            } else if (serviceLower === "saas") {
              matchesService = srv.includes("saas") || summary.includes("portal") || summary.includes("analytics") || summary.includes("multi-tenant") || summary.includes("subscription");
            } else if (serviceLower === "web") {
              matchesService = srv.includes("web") || tags.some((t) => t.includes("web")) || summary.includes("web app") || summary.includes("website");
            } else if (serviceLower === "mobile") {
              matchesService = srv.includes("mobile") || tags.some((t) => t.includes("mobile")) || tech.some((t) => t.includes("react native") || t.includes("ios") || t.includes("android"));
            } else if (serviceLower === "enterprise") {
              matchesService = srv.includes("enterprise") || tags.some((t) => t.includes("enterprise")) || summary.includes("enterprise") || summary.includes("commercial") || summary.includes("industrial");
            } else if (serviceLower === "mvp") {
              matchesService = summary.includes("startup") || summary.includes("prototype") || summary.includes("rapid") || summary.includes("launch");
            }
          }

          if (!matchesService) return false;
        }
      }

      // 3. Industry Filter
      if (indLower !== "all") {
        let matchesInd = false;

        if (cs.industryCategories && cs.industryCategories.some((cat) => cat.toLowerCase() === indLower || cat.toLowerCase().includes(indLower))) {
          matchesInd = true;
        } else {
          const ind = (cs.industry || "").toLowerCase();
          const tags = (cs.tags || []).map((t) => t.toLowerCase());
          const summary = (cs.summary || "").toLowerCase();

          matchesInd = ind.includes(indLower) || tags.some((t) => t.includes(indLower));

          if (!matchesInd) {
            if (indLower === "jewelry") {
              matchesInd = ind.includes("retail") || ind.includes("ecommerce") || summary.includes("boutique") || summary.includes("merchants") || summary.includes("niche");
            } else if (indLower === "fashion") {
              matchesInd = ind.includes("retail") || ind.includes("ecommerce") || summary.includes("merchants") || summary.includes("shoppers");
            } else if (indLower === "grocery") {
              matchesInd = ind.includes("retail") || ind.includes("health") || summary.includes("nutrition") || summary.includes("organic") || summary.includes("merchants");
            } else if (indLower === "healthcare") {
              matchesInd = ind.includes("health") || ind.includes("medical") || summary.includes("skincare") || summary.includes("eye care") || summary.includes("nutrition") || summary.includes("doctors");
            } else if (indLower === "education") {
              matchesInd = ind.includes("sports") || ind.includes("training") || summary.includes("league") || summary.includes("players") || summary.includes("organizers");
            } else if (indLower === "saas") {
              matchesInd = (cs.service || "").toLowerCase().includes("software") || (cs.service || "").toLowerCase().includes("app") || summary.includes("portal") || summary.includes("multi-tenant") || summary.includes("analytics");
            } else if (indLower === "enterprise") {
              matchesInd = summary.includes("industrial") || summary.includes("commercial") || summary.includes("fleet") || summary.includes("multi-tier") || summary.includes("organization");
            } else if (indLower === "logistics") {
              matchesInd = summary.includes("logistics") || summary.includes("warehouse") || summary.includes("fleet") || summary.includes("3pl") || summary.includes("tracking") || summary.includes("fulfillment") || (cs.technologies || []).some((t) => t.toLowerCase().includes("shippo"));
            }
          }
        }

        if (!matchesInd) return false;
      }

      // 4. Region Filter
      if (regLower !== "all") {
        let matchesReg = false;

        if (cs.regions && cs.regions.some((r) => r.toLowerCase() === regLower)) {
          matchesReg = true;
        } else {
          const country = (cs.country || "").toLowerCase();
          const reg = (cs.region || "").toLowerCase();
          const loc = (cs.location || "").toLowerCase();
          const summary = (cs.summary || "").toLowerCase();

          matchesReg =
            country.includes(regLower) ||
            reg.includes(regLower) ||
            loc.includes(regLower);

          if (!matchesReg) {
            if (regLower === "usa") {
              matchesReg =
                country.includes("united states") ||
                country.includes("usa") ||
                reg.includes("north america") ||
                loc.includes("united states") ||
                loc.includes("usa");
            } else if (regLower === "uk") {
              matchesReg =
                country.includes("united kingdom") ||
                country.includes("uk") ||
                country.includes("ireland") ||
                reg.includes("europe");
            } else if (regLower === "europe") {
              matchesReg =
                reg.includes("europe") ||
                country.includes("ireland") ||
                country.includes("uk") ||
                country.includes("sweden") ||
                country.includes("germany");
            } else if (regLower === "australia") {
              matchesReg =
                country.includes("australia") ||
                reg.includes("asia-pacific") ||
                summary.includes("asia-pacific") ||
                summary.includes("global");
            } else if (regLower === "india") {
              matchesReg =
                country.includes("india") ||
                summary.includes("global");
            }
          }
        }

        if (!matchesReg) return false;
      }

      return true;
    });
  }, [
    initialCaseStudies,
    selectedPractice,
    selectedServiceType,
    selectedIndustry,
    selectedRegion,
  ]);

  const hasActiveFilters =
    selectedPractice.toLowerCase() !== "all" ||
    selectedServiceType.toLowerCase() !== "all" ||
    selectedIndustry.toLowerCase() !== "all" ||
    selectedRegion.toLowerCase() !== "all";

  const contextText = useMemo(() => {
    const parts: string[] = [];
    const practiceLower = selectedPractice.toLowerCase();
    const serviceLower = selectedServiceType.toLowerCase();
    const indLower = selectedIndustry.toLowerCase();
    const regLower = selectedRegion.toLowerCase();

    if (practiceLower !== "all") {
      const practiceObj = PRACTICE_AREAS.find(
        (p) => p.id.toLowerCase() === practiceLower
      );
      if (practiceObj) parts.push(practiceObj.label);
    }
    if (serviceLower !== "all" && practiceLower !== "all") {
      const services = SERVICES_BY_PRACTICE[practiceLower] || [];
      const serviceObj = services.find((s) => s.id.toLowerCase() === serviceLower);
      if (serviceObj) parts.push(serviceObj.label);
    }
    if (indLower !== "all") {
      parts.push(selectedIndustry);
    }
    if (regLower !== "all") {
      parts.push(selectedRegion);
    }
    return parts.length > 0 ? parts.join(" — ") : null;
  }, [selectedPractice, selectedServiceType, selectedIndustry, selectedRegion]);

  return (
    <div className="space-y-8">
      {/* Filter Panel Container */}
      <div className="rounded-3xl border border-black/[0.08] bg-white p-5 sm:p-7 md:p-8 shadow-sm">
        <div className="divide-y divide-black/[0.06]">
          {/* Row 1: Practice Area (Always Visible) */}
          <FilterRow label="Practice Area">
            {PRACTICE_AREAS.map((practice) => (
              <FilterPill
                key={practice.id}
                label={practice.label}
                active={selectedPractice.toLowerCase() === practice.id.toLowerCase()}
                onClick={() => handleSelectPractice(practice.id)}
                variant="primary"
              />
            ))}
          </FilterRow>

          {/* Row 2: Service Type (Appears only when a practice is selected) */}
          {selectedPractice.toLowerCase() !== "all" && serviceTypesForPractice.length > 0 && (
            <div className="animate-in fade-in slide-in-from-top-1 duration-200">
              <FilterRow label="Service Type" highlightBg={true}>
                {serviceTypesForPractice.map((srv) => (
                  <FilterPill
                    key={srv.id}
                    label={srv.label}
                    active={selectedServiceType.toLowerCase() === srv.id.toLowerCase()}
                    onClick={() => handleSelectServiceType(srv.id)}
                    variant="secondary"
                  />
                ))}
              </FilterRow>
            </div>
          )}

          {/* Row 3: Industry (Always Visible) */}
          <FilterRow label="Industry">
            {industryList.map((ind) => (
              <FilterPill
                key={ind}
                label={ind}
                active={
                  ind.toLowerCase() === "all"
                    ? selectedIndustry.toLowerCase() === "all"
                    : selectedIndustry.toLowerCase() === ind.toLowerCase()
                }
                onClick={() => handleSelectIndustry(ind)}
                variant="primary"
              />
            ))}
          </FilterRow>

          {/* Row 4: Region (Always Visible) */}
          <FilterRow label="Region">
            {BASE_REGIONS.map((reg) => (
              <FilterPill
                key={reg}
                label={reg}
                active={
                  reg.toLowerCase() === "all"
                    ? selectedRegion.toLowerCase() === "all"
                    : selectedRegion.toLowerCase() === reg.toLowerCase()
                }
                onClick={() => handleSelectRegion(reg)}
                variant="primary"
              />
            ))}
          </FilterRow>
        </div>

        {/* Filter Summary & Reset Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-black/[0.08] pt-5 text-xs sm:text-sm">
          <div className="font-medium text-subtle-gray">
            Showing{" "}
            <strong className="font-semibold text-light-gray">
              {filteredCaseStudies.length}
            </strong>{" "}
            of{" "}
            <strong className="font-semibold text-light-gray">
              {initialCaseStudies.length > 3
                ? `${initialCaseStudies.length}+`
                : initialCaseStudies.length}
            </strong>{" "}
            case studies
            {contextText && (
              <span className="italic text-subtle-gray"> — {contextText}</span>
            )}
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 rounded-xl border border-black/[0.12] bg-white px-4 py-2 text-xs font-semibold text-light-gray shadow-2xs transition-all hover:bg-surface-muted hover:border-black/[0.22] active:scale-95"
            >
              <svg
                className="h-3.5 w-3.5 text-subtle-gray"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
              <span>Clear all filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Case Studies Grid */}
      {filteredCaseStudies.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCaseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-black/[0.14] bg-surface-muted/40 p-12 text-center">
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
          <h3 className="mt-4 text-lg font-semibold text-light-gray">
            No case studies found
          </h3>
          <p className="mt-1 text-sm text-subtle-gray">
            Try adjusting your filter selections to explore other projects.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-interactive-blue px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-brand-blue active:scale-95"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
