import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { productEngineeringContent } from "@/content/homeContent";

function MonitorIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
    </svg>
  );
}

function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  );
}

function BuildingIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21" />
    </svg>
  );
}

const ENGINEERING_ICONS: Record<string, React.FC<{ className?: string }>> = {
  monitor: MonitorIcon,
  phone: PhoneIcon,
  building: BuildingIcon,
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
            const IconComp = ENGINEERING_ICONS[card.icon] ?? MonitorIcon;

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
