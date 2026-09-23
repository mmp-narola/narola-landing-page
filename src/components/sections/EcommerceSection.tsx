import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { ecommerceContent } from "@/content/homeContent";

import {
  Bot,
  LayoutGrid,
  Store,
  ArrowRight,
  Gem,
  Shirt,
  ShoppingBag,
  Activity,
  Package,
  Building2,
} from "lucide-react";

const VERTICAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  diamond: Gem,
  shirt: Shirt,
  cup: ShoppingBag,
  monitor: Activity,
  box: Package,
  building: Building2,
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function FeatureCard({ icon, title, children }: FeatureCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#1c1c21] p-7 backdrop-blur-sm transition-all duration-500 hover:scale-102">
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
      className="relative w-full overflow-hidden bg-light-gray py-24 text-light-gray md:py-32"
    >
      {/* <AmbientGlow position="top" height={420} color="rgba(0,132,255,0.16)" /> */}
      <Container className="relative">
        {/* Section Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-display font-semibold tracking-tight text-light-gray md:text-6xl text-balance">
              {ecommerceContent.title}
            </h2>
            <p className="mt-5 text-xl text-muted-gray md:text-2xl">
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
                icon={<Bot className="h-5 w-5" />}
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
                icon={<LayoutGrid className="h-5 w-5" />}
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
                icon={<Store className="h-5 w-5" />}
                title={ecommerceContent.industryVerticals.title}
              >
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {ecommerceContent.industryVerticals.verticals.map((v) => {
                    const Icon = VERTICAL_ICONS[v.icon] || Package;
                    return (
                      <div
                        key={v.name}
                        className="group relative flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[#141418] p-3 text-center transition-all duration-300 hover:border-bright-blue/40 hover:bg-[#191922] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-bright-blue/5"
                      >
                        <div className="text-bright-blue/50 group-hover:text-bright-blue transition-all duration-300 group-hover:scale-110">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-semibold tracking-wide text-light-gray group-hover:text-white transition-colors duration-300 group-hover:scale-110">
                          {v.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </FeatureCard>
            </Reveal>
          </div>

          {/* Right Column - Card 4: Platforms & Case Studies - arrives from Right */}
          <Reveal
            variant="right"
            delay={500}
            className="flex lg:col-span-6"
          >
            <div className="flex w-full flex-col justify-between rounded-3xl border border-white/10 bg-[#1c1c21] p-8 backdrop-blur-sm md:p-9 transition-all duration-500 hover:scale-102">
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
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                      <span className="group-hover:underline">{cs.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
