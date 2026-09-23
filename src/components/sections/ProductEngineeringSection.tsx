import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { productEngineeringContent } from "@/content/homeContent";

import { ArrowRight } from "lucide-react";

export function ProductEngineeringSection() {
  return (
    <section
      id={productEngineeringContent.sectionId}
      className="relative w-full overflow-hidden bg-light-gray py-24 text-light-gray md:py-32"
    >
      {/* <AmbientGlow position="top" height={420} color="rgba(0,132,255,0.14)" /> */}
      <Container className="relative">
        {/* Section Header */}
        <SectionHeader
          title={productEngineeringContent.title}
          subtitle={productEngineeringContent.subtitle}
        />

        {/* Feature Rows */}
        <div className="mx-auto max-w-5xl divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {productEngineeringContent.cards.map((card, index) => (
            <FeatureRow
              key={card.id}
              title={card.title}
              description={card.description}
              tags={card.tags}
              delay={(index + 1) * 100}
            />
          ))}
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
