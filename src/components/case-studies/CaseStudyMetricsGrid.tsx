import type { CaseStudyMetric } from "@/types/caseStudy";

export interface CaseStudyMetricsGridProps {
  metrics: CaseStudyMetric[];
  /** "row": single centered row, capped by `limit` (used for the hero stats strip).
   *  "grid": wrapping multi-row grid, uncapped (used for in-body "stats" sections). */
  layout?: "row" | "grid";
  columns?: 2 | 3 | 4;
  withDividers?: boolean;
  className?: string;
  size?: "compact" | "small" | "large";
  /** Only applies when layout="row". Defaults to 5 so the row never wraps. */
  limit?: number;
  theme?: "light" | "dark";
}

export function CaseStudyMetricsGrid({
  metrics,
  layout = "row",
  columns = 3,
  withDividers = false,
  className = "",
  size = "large",
  limit = 5,
  theme = "light",
}: CaseStudyMetricsGridProps) {
  if (!metrics || metrics.length === 0) return null;

  const isDark = theme === "dark";
  const titleColorClass = isDark ? "text-white" : "text-transparent bg-clip-text bg-gradient-to-br from-[#1d1d1f] to-[#48484a]";
  const subtitleColorClass = isDark ? "text-white/80" : "text-slate";
  const borderColorClass = isDark ? "border-white/20" : "border-black/[0.08]";

  const displayMetrics = layout === "row" ? metrics.slice(0, limit) : metrics;

  const valueSize =
    size === "large"
      ? "text-3xl sm:text-4xl md:text-5xl tracking-tighter"
      : size === "small"
        ? "text-xl sm:text-2xl md:text-3xl tracking-tight"
        : "text-base sm:text-lg tracking-tight"; // compact

  const labelSize =
    size === "large"
      ? "text-xs sm:text-sm md:text-base max-w-[140px] sm:max-w-[180px] mt-2 sm:mt-3"
      : size === "small"
        ? "text-[10px] sm:text-xs max-w-[140px] mt-1.5"
        : "text-[10px] sm:text-xs max-w-[120px] mt-0.5 line-clamp-2"; // compact

  if (layout === "row") {
    // Single centered row — used for the hero stats strip, where a short,
    // never-wrapping line matters more than a strict grid.
    let gapClass = "gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6";
    if (size === "large") gapClass = "gap-x-6 sm:gap-x-10 md:gap-x-14 gap-y-6";
    if (size === "compact") gapClass = "gap-x-3 sm:gap-x-4 gap-y-2";

    const dividerPl =
      size === "compact" ? "pl-3 sm:pl-4" : size === "small" ? "pl-4 sm:pl-5" : "pl-6 sm:pl-10 md:pl-14";

    return (
      <div className={`flex flex-row flex-nowrap items-start justify-between sm:justify-center ${gapClass} w-full overflow-hidden ${className}`}>
        {displayMetrics.map((metric, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center text-center ${
              withDividers && idx > 0 ? `border-l ${borderColorClass} ${dividerPl}` : ""
            }`}
          >
            <p className={`font-bold ${titleColorClass} ${valueSize}`}>
              {metric.value}
            </p>
            <p className={`text-base font-medium leading-tight ${subtitleColorClass} ${labelSize}`}>
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    );
  }

  // Grid layout — used for in-body "stats" sections, which may legitimately
  // have more results than fit in one row and should wrap into clean rows
  // rather than being cut off.
  const gridColsClass =
    columns === 4 ? "grid-cols-2 sm:grid-cols-4" :
      columns === 3 ? "grid-cols-2 md:grid-cols-3" :
        "grid-cols-2";

  let gridGapClass = "gap-x-6 gap-y-8";
  if (size === "large") gridGapClass = "gap-x-8 gap-y-10";
  if (size === "compact") gridGapClass = "gap-2";

  return (
    <div className={`grid ${gridColsClass} ${gridGapClass} ${className}`}>
      {displayMetrics.map((metric, idx) => {
        let dividerClass = "";
        if (withDividers) {
          const plClass = size === "compact" ? "pl-2" : size === "small" ? "pl-3" : "pl-5";
          dividerClass = `border-l ${borderColorClass} ${plClass} `;
          if (columns === 3) {
            dividerClass += `max-md:[&:nth-child(2n+1)]:border-l-0 max-md:[&:nth-child(2n+1)]:!pl-0 md:[&:nth-child(3n+1)]:border-l-0 md:[&:nth-child(3n+1)]:!pl-0`;
          } else if (columns === 4) {
            dividerClass += `max-sm:[&:nth-child(2n+1)]:border-l-0 max-sm:[&:nth-child(2n+1)]:!pl-0 sm:[&:nth-child(4n+1)]:border-l-0 sm:[&:nth-child(4n+1)]:!pl-0`;
          } else if (columns === 2) {
            dividerClass += `[&:nth-child(2n+1)]:border-l-0 [&:nth-child(2n+1)]:!pl-0`;
          }
        }

        return (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center text-center ${dividerClass}`}
          >
            <p className={`font-bold ${titleColorClass} ${valueSize}`}>
              {metric.value}
            </p>
            <p className={`text-base font-medium leading-tight ${subtitleColorClass} ${labelSize}`}>
              {metric.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
