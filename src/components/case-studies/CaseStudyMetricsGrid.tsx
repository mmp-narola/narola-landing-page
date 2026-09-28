import type { CaseStudyMetric } from "@/types/caseStudy";

export interface CaseStudyMetricsGridProps {
  metrics: CaseStudyMetric[];
  columns?: 2 | 3 | 4;
  withDividers?: boolean;
  className?: string;
  size?: "compact" | "small" | "large";
  limit?: number;
}

export function CaseStudyMetricsGrid({
  metrics,
  columns = 3,
  withDividers = false,
  className = "",
  size = "large",
  limit,
}: CaseStudyMetricsGridProps) {
  if (!metrics || metrics.length === 0) return null;

  const displayMetrics = limit ? metrics.slice(0, limit) : metrics;
  
  // Tailwind grid column mapping based on the prop
  const gridColsClass = 
    columns === 4 ? "grid-cols-2 sm:grid-cols-4" : 
    columns === 3 ? "grid-cols-2 md:grid-cols-3" : 
    "grid-cols-2";

  // Gap sizing
  let gapClass = "gap-x-6 gap-y-8";
  if (size === "large") gapClass = "gap-x-8 gap-y-10";
  if (size === "compact") gapClass = "gap-2";

  return (
    <div className={`grid ${gridColsClass} ${gapClass} ${className}`}>
      {displayMetrics.map((metric, idx) => {
        // Divider CSS logic for responsive grids
        let dividerClass = "";
        if (withDividers) {
          const plClass = size === "compact" ? "pl-2" : size === "small" ? "pl-3" : "pl-5";
          dividerClass = `border-l border-black/[0.08] ${plClass} `;
          if (columns === 3) {
            dividerClass += `max-md:[&:nth-child(2n+1)]:border-l-0 max-md:[&:nth-child(2n+1)]:!pl-0 md:[&:nth-child(3n+1)]:border-l-0 md:[&:nth-child(3n+1)]:!pl-0`;
          } else if (columns === 4) {
             dividerClass += `max-sm:[&:nth-child(2n+1)]:border-l-0 max-sm:[&:nth-child(2n+1)]:!pl-0 sm:[&:nth-child(4n+1)]:border-l-0 sm:[&:nth-child(4n+1)]:!pl-0`;
          } else if (columns === 2) {
             dividerClass += `[&:nth-child(2n+1)]:border-l-0 [&:nth-child(2n+1)]:!pl-0`;
          }
        }

        const valueSize = size === "large" 
          ? "text-4xl md:text-5xl tracking-tighter" 
          : size === "small"
          ? "text-2xl md:text-3xl tracking-tight"
          : "text-base sm:text-lg tracking-tight"; // compact
          
        const labelSize = size === "large"
          ? "text-sm md:text-base max-w-[180px] mt-3"
          : size === "small"
          ? "text-xs max-w-[140px] mt-1.5"
          : "text-[10px] sm:text-xs max-w-[120px] mt-0.5 line-clamp-2"; // compact

        return (
          <div 
            key={idx} 
            className={`flex flex-col items-center justify-center text-center ${dividerClass}`}
          >
            <p className={`bg-gradient-to-br from-[#1d1d1f] to-[#48484a] bg-clip-text font-bold text-transparent ${valueSize}`}>
              {metric.value}
            </p>
            <p className={`font-medium leading-tight text-subtle-gray ${labelSize}`}>
              {metric.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
