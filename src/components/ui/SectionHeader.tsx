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
    <div className={`${alignmentClasses} ${className}`}>
      {indexBadge && (
        <Reveal variant="scale" delay={0}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-bright-blue/30 bg-[#0084ff]/5 px-4 py-1.5 text-xs font-bold tracking-wide text-bright-blue shadow-sm ring-1 ring-inset ring-[#0084ff]/10">
            <span>{indexBadge}</span>
          </div>
        </Reveal>
      )}
      {eyebrow && (
        <Reveal delay={100}>
          <span className="mb-3 block text-xs font-semibold uppercase tracking-wide text-bright-blue">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={150}>
        <h2 className="text-display font-semibold tracking-tight text-light-gray md:text-display-lg text-balance">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={250}>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-gray md:text-xl text-balance">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
