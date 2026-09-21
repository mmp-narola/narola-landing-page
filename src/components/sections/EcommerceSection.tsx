import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { ecommerceContent } from "@/content/homeContent";

function RobotIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m-5 4h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Zm2 4h.01m6 0h.01M9 16h6M2 13h2m16 0h2" />
    </svg>
  );
}

function GridIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
    </svg>
  );
}

function StoreIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.614A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614M3.75 9.349a3.001 3.001 0 0 1-.955-.224l-.75-.375a1.5 1.5 0 0 1-.845-1.341V5.25A2.25 2.25 0 0 1 3.45 3h17.1a2.25 2.25 0 0 1 2.25 2.25v2.159c0 .584-.34 1.11-.845 1.341l-.75.375c-.297.148-.618.224-.955.224" />
    </svg>
  );
}

const ECOMMERCE_ICONS: Record<string, React.FC<{ className?: string }>> = {
  robot: RobotIcon,
  grid: GridIcon,
  store: StoreIcon,
};

const VERTICAL_ICONS: Record<string, string> = {
  diamond: "💎",
  shirt: "👕",
  cup: "☕",
  monitor: "🖥️",
  box: "📦",
  building: "🏢",
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function FeatureCard({ icon, title, children }: FeatureCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#1c1c21] p-7 backdrop-blur-sm hover:scale-102 duration-500">
      <div className="flex items-center gap-2.5 text-bright-blue">
        {icon}
        <h3 className="text-lg font-semibold text-light-gray">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

export function EcommerceSection() {
  return (
    <section
      id={ecommerceContent.sectionId}
      className="relative w-full overflow-hidden bg-[#121215] border-y border-white/[0.08] py-24 text-light-gray md:py-32"
    >
      <AmbientGlow position="top" height={420} color="rgba(0,132,255,0.16)" />
      <Container className="relative">
        {/* Section Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-display font-semibold tracking-tight text-light-gray md:text-6xl text-balance">
              {ecommerceContent.title}
            </h2>
            <p className="mt-5 text-base text-muted-gray md:text-xl leading-relaxed">
              {ecommerceContent.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12 md:mt-20">
          {/* Left Column (3 cards) */}
          <div className="flex flex-col gap-5 lg:col-span-6">
            {/* Card 1: AI Commerce - arrives from Top */}
            <Reveal variant="top" delay={200}>
              <FeatureCard
                icon={<RobotIcon className="h-5 w-5" />}
                title={ecommerceContent.cards[0].title}
              >
                <p className="mt-2.5 text-sm text-subtle-gray leading-relaxed">
                  {ecommerceContent.cards[0].description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {ecommerceContent.cards[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-soft-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </FeatureCard>
            </Reveal>

            {/* Card 2: Commerce Solutions - arrives from Left */}
            <Reveal variant="left" delay={300}>
              <FeatureCard
                icon={<GridIcon className="h-5 w-5" />}
                title={ecommerceContent.cards[1].title}
              >
                <p className="mt-2.5 text-sm text-subtle-gray leading-relaxed">
                  {ecommerceContent.cards[1].description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {ecommerceContent.cards[1].tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-soft-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </FeatureCard>
            </Reveal>

            {/* Card 3: Industry Verticals - arrives from Bottom */}
            <Reveal variant="bottom" delay={400}>
              <FeatureCard
                icon={<StoreIcon className="h-5 w-5" />}
                title={ecommerceContent.industryVerticals.title}
              >
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  {ecommerceContent.industryVerticals.verticals.map((v) => (
                    <div
                      key={v.name}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#141418] px-3.5 py-2.5 text-xs font-semibold text-light-gray"
                    >
                      <span>{VERTICAL_ICONS[v.icon] || "•"}</span>
                      <span>{v.name}</span>
                    </div>
                  ))}
                </div>
              </FeatureCard>
            </Reveal>
          </div>

          {/* Right Column - Card 4: Platforms & Case Studies - arrives from Right */}
          <Reveal
            variant="right"
            delay={500}
            className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#1c1c21] p-8 backdrop-blur-sm lg:col-span-6 md:p-9 hover:scale-102 duration-500"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-gray">
                {ecommerceContent.rightSidebar.platformsTitle}
              </span>

              <div className="mt-5 flex flex-col gap-3">
                {ecommerceContent.rightSidebar.platforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-[#141418] p-4"
                  >
                    <span className="text-sm font-semibold text-light-gray">
                      {platform.name}
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-soft-blue">
                      {platform.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-gray">
                {ecommerceContent.rightSidebar.caseStudiesTitle}
              </span>
              <div className="mt-4 flex flex-col gap-2.5">
                {ecommerceContent.rightSidebar.caseStudies.map((cs) => (
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
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
