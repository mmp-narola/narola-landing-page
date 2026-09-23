import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { aiAutomationContent } from "@/content/homeContent";

import { Bot, RefreshCw, ShoppingCart, ArrowRight, ArrowDown } from "lucide-react";

const AI_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  robot: Bot,
  refresh: RefreshCw,
  cart: ShoppingCart,
};

export function AiAutomationSection() {
  return (
    <section
      id={aiAutomationContent.sectionId}
      className="relative w-full overflow-hidden py-24 bg-light-gray text-light-gray md:py-32"
    >
      {/* <AmbientGlow position="top" height={420} color="rgba(0,132,255,0.14)" /> */}
      <Container className="relative">
        {/* Centered feature block — eyebrow + headline + supporting copy */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-bright-blue">
              {aiAutomationContent.leftFlow.header}
            </span>
            <h2 className="mt-4 text-display font-semibold tracking-tight text-light-gray md:text-6xl text-balance">
              {aiAutomationContent.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-muted-gray md:text-2xl">
              {aiAutomationContent.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Sub-features row — icon, heading, description, divided by top rules */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-3 md:gap-10">
          {aiAutomationContent.cards.map((card, index) => {
            const IconComp = AI_ICONS[card.icon] ?? Bot;

            return (
              <Reveal key={card.id} delay={index * 300} className="border-t border-white/15 pt-6" variant="up">
                <div className="flex items-center gap-2.5 text-bright-blue">
                  <IconComp className="h-5 w-5" />
                  <h3 className="text-2xl text-light-gray">
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
                      className="rounded-full bg-white/[0.10] px-3 py-1 text-xs text-soft-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
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
