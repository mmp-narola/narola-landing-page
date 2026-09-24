import { Reveal } from "@/components/ui/Reveal";

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  indexBadge?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  title,
  subtitle,
  eyebrow,
  indexBadge,
  className = "mb-16 md:mb-20",
  align = "center",
}: SectionHeaderProps) {
  const alignmentClasses =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left";

  return (
    <Reveal>
      <div className={`${alignmentClasses} ${className}`}>
        {indexBadge && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-4 py-1 text-xs font-semibold tracking-wide text-bright-blue shadow-2xs">
            <span>{indexBadge}</span>
          </div>
        )}
        {eyebrow && (
          <span className="mb-3 block text-xs font-semibold uppercase tracking-wide text-bright-blue">
            {eyebrow}
          </span>
        )}
        <h2 className="text-display font-semibold tracking-tight text-light-gray md:text-display-lg text-balance">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-gray md:text-xl text-balance">
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}
