import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { productEngineeringContent } from "@/content/homeContent";

import { Monitor, Smartphone, Building2, ArrowRight } from "lucide-react";

const ENGINEERING_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  monitor: Monitor,
  phone: Smartphone,
  building: Building2,
};

export function ProductEngineeringSection() {
  return (
    <section
      id={productEngineeringContent.sectionId}
      className="relative w-full overflow-hidden bg-[#121215] border-y border-white/[0.08] py-24 text-light-gray md:py-32"
    >
      <AmbientGlow position="top" height={420} color="rgba(0,132,255,0.14)" />
      <Container className="relative">
        {/* Centered feature block — eyebrow + headline + supporting copy */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-bright-blue">
              {productEngineeringContent.rightProcess.header}
            </span>
            <h2 className="mt-4 text-display font-semibold tracking-tight text-light-gray md:text-6xl text-balance">
              {productEngineeringContent.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-gray md:text-xl leading-relaxed">
              {productEngineeringContent.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Sub-features row — icon, heading, description, divided by top rules */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-3 md:gap-10">
          {productEngineeringContent.cards.map((card, index) => {
            const IconComp = ENGINEERING_ICONS[card.icon] ?? Monitor;

            return (
              <Reveal key={card.id} delay={index * 300} className="border-t border-white/15 pt-6" variant="up">
                <div className="flex items-center gap-2.5 text-bright-blue">
                  <IconComp className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-light-gray">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-2.5 text-sm text-subtle-gray leading-relaxed">
                  {card.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-soft-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Engineering process + case studies — charcoal panel for depth against the section */}
        <Reveal delay={300} className="mt-16 rounded-3xl border border-white/10 bg-[#1c1c21] p-8 md:mt-20 md:p-10" variant="scale">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-gray">
                {productEngineeringContent.rightProcess.header}
              </span>
              <div className="mt-5 flex flex-col gap-3">
                {productEngineeringContent.rightProcess.steps.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-white/10 bg-[#141418] p-5 hover:scale-102 duration-500"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-bright-blue shrink-0" />
                      <h4 className="text-md font-semibold text-light-gray">
                        {step.title}
                      </h4>
                    </div>
                    <p className="mt-1.5 text-xs text-subtle-gray leading-relaxed pl-4">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-10">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-gray">
                {productEngineeringContent.rightProcess.caseStudiesTitle}
              </span>
              <div className="mt-4 flex flex-col gap-2.5">
                {productEngineeringContent.rightProcess.caseStudies.map((cs) => (
                  <Link
                    key={cs.title}
                    href={cs.href}
                    className="group flex items-center gap-2 text-sm font-semibold text-electric-blue"
                  >
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    <span className="group-hover:underline">{cs.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
