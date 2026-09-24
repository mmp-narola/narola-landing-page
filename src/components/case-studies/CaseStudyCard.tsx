import Link from "next/link";
import { CaseStudy } from "@/types/caseStudy";

export interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition-colors duration-300 hover:border-black/[0.14]">
      {/* Thumbnail with Hover Zoom & Badges */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={caseStudy.thumbnailUrl}
          alt={caseStudy.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 transition-opacity duration-300 group-hover:opacity-50" />

        {/* Top Badges */}
        <div className="absolute left-4 top-4 z-10 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-light-gray shadow-sm backdrop-blur-md">
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
          <span className="inline-flex items-center rounded-full bg-interactive-blue/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-sm backdrop-blur-md">
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
        {caseStudy.metrics && caseStudy.metrics.length > 0 && (
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
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-light-gray transition-colors group-hover:text-interactive-blue">
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
              </span>
              <span className="text-xs font-medium text-subtle-gray">
                {caseStudy.region}
              </span>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
