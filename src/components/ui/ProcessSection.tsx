import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyLinks, type CaseStudyLinkItem } from "@/components/ui/CaseStudyLink";

export interface ProcessStep {
  title: string;
  description?: string;
  badge?: string;
}

export interface ProcessSectionProps {
  header: string;
  steps: ProcessStep[];
  caseStudies?: CaseStudyLinkItem[];
  columns?: 3 | 4;
  className?: string;
}

export function ProcessSection({
  header,
  steps,
  caseStudies,
  columns = 4,
  className = "py-8 md:py-12 lg:py-16",
}: ProcessSectionProps) {
  const gridColsClass =
    columns === 3
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10";

  return (
    <div className={`mx-auto max-w-5xl ${className}`}>
      {/* Eyebrow / Subheader */}
      <Reveal delay={200}>
        <span className="block text-base font-semibold uppercase tracking-wide text-light-gray">
          {header}
        </span>
      </Reveal>

      {/* Steps Grid */}
      <Reveal delay={300}>
        <div className={`mt-8 ${gridColsClass}`}>
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col">
              {/* Blue accent top bar */}
              <div className="h-[2.5px] w-full bg-bright-blue mb-4 rounded-full" />

              {/* Blue Step Number */}
              <span className="text-sm font-semibold text-bright-blue">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Step Title */}
              <h4 className="mt-2 text-base font-semibold text-light-gray sm:text-lg">
                {step.title}
              </h4>

              {/* Step Description / Badge */}
              {(step.description || step.badge) && (
                <p className="mt-2 text-sm text-subtle-gray leading-relaxed">
                  {step.description || step.badge}
                </p>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      {/* Bottom Case Studies Links */}
      {caseStudies && caseStudies.length > 0 && (
        <CaseStudyLinks links={caseStudies} delay={450} />
      )}
    </div>
  );
}
