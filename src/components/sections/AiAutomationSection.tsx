import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { aiAutomationContent } from "@/content/homeContent";

import { ArrowRight, ArrowDown } from "lucide-react";

export function AiAutomationSection() {
  return (
    <section
      id={aiAutomationContent.sectionId}
      className="relative w-full overflow-hidden py-24 bg-light-gray text-light-gray md:py-32"
    >
      {/* <AmbientGlow position="top" height={420} color="rgba(0,132,255,0.14)" /> */}
      <Container className="relative">
        {/* Section Header */}
        <SectionHeader
          title={aiAutomationContent.title}
          subtitle={aiAutomationContent.subtitle}
        />

        {/* Feature Rows */}
        <div className="mx-auto max-w-5xl divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {aiAutomationContent.cards.map((card, index) => (
            <FeatureRow
              key={card.id}
              title={card.title}
              description={card.description}
              tags={card.tags}
              delay={(index + 1) * 100}
            />
          ))}
        </div>

        {/* Delivery process + case studies — charcoal panel for depth against the black page */}
        <Reveal delay={300} className="mt-16 rounded-3xl border border-white/10 bg-[#1d1d1f] p-8 md:mt-20 md:p-10" variant="scale">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-gray">
                {aiAutomationContent.leftFlow.header}
              </span>
              <div className="mt-5 flex flex-col items-stretch gap-2">
                {aiAutomationContent.leftFlow.steps.map((step, index) => (
                  <div key={step.title || step.number} className="flex flex-col items-center">
                    <div className="w-full rounded-2xl border border-white/10 bg-[#141418] p-5 transition-all duration-500 hover:scale-102">
                      <div className="flex items-center gap-1">
                        <span className="text-lg font-semibold text-bright-blue shrink-0">
                          {step.number}.
                        </span>
                        <h4 className="text-md font-semibold text-light-gray">
                          {step.title}
                        </h4>
                      </div>
                      {step.description && (
                        <p className="mt-1.5 text-xs text-subtle-gray leading-relaxed pl-4">
                          {step.description}
                        </p>
                      )}
                    </div>
                    {index < aiAutomationContent.leftFlow.steps.length - 1 && (
                      <ArrowDown className="my-1.5 h-4 w-4 text-electric-blue" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-10">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-gray">
                {aiAutomationContent.leftFlow.caseStudiesTitle}
              </span>
              <div className="mt-4 flex flex-col gap-2.5">
                {aiAutomationContent.leftFlow.caseStudies.map((cs) => (
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
