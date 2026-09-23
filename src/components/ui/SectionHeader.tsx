import { Reveal } from "@/components/ui/Reveal";

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  title,
  subtitle,
  eyebrow,
  className = "mb-16 md:mb-20",
  align = "center",
}: SectionHeaderProps) {
  const alignmentClasses =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left";

  return (
    <Reveal>
      <div className={`${alignmentClasses} ${className}`}>
        {eyebrow && (
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.14em] text-bright-blue">
            {eyebrow}
          </span>
        )}
        <h2 className="text-display font-semibold tracking-tight text-light-gray md:text-6xl text-balance">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-xl text-muted-gray md:text-2xl text-balance">
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}
