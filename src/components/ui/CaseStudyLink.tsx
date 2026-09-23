import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export interface CaseStudyLinkItem {
  title: string;
  href: string;
}

export interface CaseStudyLinkProps {
  title: string;
  href: string;
  className?: string;
}

export function CaseStudyLink({
  title,
  href,
  className = "",
}: CaseStudyLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-medium text-bright-blue transition-all duration-150 sm:text-base ${className}`}
    >
      <span className="group-hover:underline underline-offset-4 decoration-1">
        {title}
      </span>
      <span
        aria-hidden="true"
        className="inline-block no-underline transition-transform duration-200 group-hover:translate-x-0.5"
      >
        →
      </span>
    </Link>
  );
}

export interface CaseStudyLinksProps {
  links: CaseStudyLinkItem[];
  className?: string;
  delay?: number;
}

export function CaseStudyLinks({
  links,
  className = "mt-14 flex flex-wrap items-center justify-center gap-8 pt-4 sm:gap-12",
  delay = 450,
}: CaseStudyLinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <Reveal delay={delay}>
      <div className={className}>
        {links.map((link) => (
          <CaseStudyLink
            key={link.title}
            title={link.title}
            href={link.href}
          />
        ))}
      </div>
    </Reveal>
  );
}
