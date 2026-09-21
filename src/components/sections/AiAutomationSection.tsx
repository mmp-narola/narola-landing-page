import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { aiAutomationContent } from "@/content/homeContent";

function RobotIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m-5 4h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Zm2 4h.01m6 0h.01M9 16h6M2 13h2m16 0h2" />
    </svg>
  );
}

function RefreshIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  );
}

function CartIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
  );
}

const AI_ICONS: Record<string, React.FC<{ className?: string }>> = {
  robot: RobotIcon,
  refresh: RefreshIcon,
  cart: CartIcon,
};

export function AiAutomationSection() {
  return (
    <section
      id={aiAutomationContent.sectionId}
      className="relative w-full overflow-hidden bg-black py-24 text-light-gray md:py-32"
    >
      <AmbientGlow position="top" height={420} color="rgba(0,132,255,0.14)" />
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
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-gray md:text-xl leading-relaxed">
              {aiAutomationContent.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Sub-features row — icon, heading, description, divided by top rules */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-3 md:gap-10">
          {aiAutomationContent.cards.map((card, index) => {
            const IconComp = AI_ICONS[card.icon] ?? RobotIcon;

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
                      <div className="flex items-center gap-2">
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
                      <span className="pt-1.5 text-base text-electric-blue">↓</span>
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
                    <span className="inline-block transition-transform group-hover:translate-x-1 no-underline">→</span>
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
