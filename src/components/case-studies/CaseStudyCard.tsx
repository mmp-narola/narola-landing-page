import Link from "next/link";
import { CaseStudy } from "@/types/caseStudy";

export interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  variant?: "default" | "compact";
}

export function CaseStudyCard({
  caseStudy,
  variant = "default",
}: CaseStudyCardProps) {
  if (variant === "compact") {
    return (
      <article className="group relative flex h-full flex-col justify-between rounded-2xl border border-black/[0.08] bg-white p-4 transition-all duration-300 hover:border-black/[0.16] hover:shadow-md">
        <div>
          {/* Direct Image Display */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/[0.06] bg-surface-muted">
            <Link
              href={`/case-studies/${caseStudy.slug}`}
              className="block h-full w-full focus:outline-none"
              tabIndex={-1}
              aria-hidden="true"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={caseStudy.thumbnailUrl}
                alt={caseStudy.title}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Title */}
          <h4 className="mt-3.5 text-base font-semibold leading-snug text-light-gray group-hover:text-bright-blue transition-colors line-clamp-2">
            <Link href={`/case-studies/${caseStudy.slug}`} className="focus:outline-none">
              {caseStudy.title}
            </Link>
          </h4>

          {/* Minimal Description */}
          <p className="mt-1.5 text-xs leading-relaxed text-subtle-gray line-clamp-2">
            {caseStudy.tagline || caseStudy.summary}
          </p>

          {/* Key Metrics */}
          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <div className="mt-3.5 border-t border-black/[0.06] pt-3">
              <div className="grid grid-cols-3 gap-2">
                {caseStudy.metrics.slice(0, 3).map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-sm sm:text-base font-semibold text-light-gray leading-tight">
                      {metric.value}
                    </span>
                    <span className="mt-0.5 line-clamp-1 text-[10px] text-subtle-gray">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Read Case Study CTA Link */}
        <div className="mt-3.5">
          <Link
            href={`/case-studies/${caseStudy.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-bright-blue transition-colors hover:underline"
          >
            <span>Read Case Study</span>
            <span aria-hidden="true" className="text-sm font-semibold">
              ↗
            </span>
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition-all duration-300 hover:border-black/[0.14] hover:shadow-md">
      {/* Thumbnail with Hover Zoom & Badges */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-muted">
        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="block h-full w-full focus:outline-none"
          tabIndex={-1}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={caseStudy.thumbnailUrl}
            alt={caseStudy.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 transition-opacity duration-300 group-hover:opacity-50" />
        </Link>

        {/* Top Badges */}
        <div className="pointer-events-none absolute left-4 top-4 z-10 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-light-gray shadow-sm backdrop-blur-md">
            <svg
              className="h-3.5 w-3.5 text-interactive-blue"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {caseStudy.country}
          </span>
          <span className="inline-flex items-center rounded-full bg-interactive-blue/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm backdrop-blur-md">
            {caseStudy.industry}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col justify-between p-6 md:p-7">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-light-gray transition-colors duration-200 group-hover:text-interactive-blue">
            <Link href={`/case-studies/${caseStudy.slug}`} className="focus:outline-none">
              {caseStudy.title}
            </Link>
          </h3>

          <p className="mt-2.5 text-xs font-semibold text-interactive-blue uppercase tracking-wide">
            {caseStudy.service}
          </p>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-subtle-gray">
            {caseStudy.summary}
          </p>
        </div>

        {/* Metrics Grid */}
        {caseStudy.metrics && caseStudy.metrics.length > 0 ? (
          <div className="mt-6 border-t border-black/[0.10] pt-5">
            <div className="grid grid-cols-2 gap-3">
              {caseStudy.metrics.slice(0, 2).map((metric, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-surface-muted p-3 text-left transition-colors group-hover:bg-interactive-blue/5"
                >
                  <p className="text-lg font-semibold tracking-tight text-interactive-blue md:text-xl">
                    {metric.value}
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-xs font-medium text-subtle-gray">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <Link
                href={`/case-studies/${caseStudy.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-light-gray transition-colors group-hover:text-interactive-blue"
              >
                Read Case Study
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-xs font-medium text-subtle-gray">
                {caseStudy.region}
              </span>
            </div>
          </div>
        ) : (
          <div className="mt-6 flex items-center justify-between border-t border-black/[0.10] pt-5">
            <Link
              href={`/case-studies/${caseStudy.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-light-gray transition-colors group-hover:text-interactive-blue"
            >
              Read Case Study
              <svg
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <span className="text-xs font-medium text-subtle-gray">
              {caseStudy.region}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
