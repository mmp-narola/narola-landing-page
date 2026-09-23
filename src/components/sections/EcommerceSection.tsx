import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ecommerceContent } from "@/content/homeContent";

export function EcommerceSection() {
  const [aiCommerceCard, commerceSolutionsCard] = ecommerceContent.cards;

  return (
    <section
      id={ecommerceContent.sectionId}
      className="relative w-full overflow-hidden bg-white py-20 text-ink md:py-28"
    >
      <Container className="relative">
        {/* Section Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
            <h2 className="text-display font-semibold tracking-tight text-ink md:text-6xl text-balance">
              {ecommerceContent.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-muted-gray md:text-2xl">
              {ecommerceContent.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mx-auto max-w-5xl divide-y divide-slate/15">
          {/* Row 1: AI commerce */}
          <Reveal delay={100}>
            <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-4 lg:col-span-4">
                <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {aiCommerceCard.title}
                </h3>
              </div>
              <div className="md:col-span-8 lg:col-span-8">
                <p className="text-sm leading-relaxed text-slate sm:text-base">
                  {aiCommerceCard.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {aiCommerceCard.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate/20 bg-white px-3.5 py-1 text-xs font-medium text-slate-700 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Row 2: Commerce solutions */}
          <Reveal delay={200}>
            <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-4 lg:col-span-4">
                <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {commerceSolutionsCard.title}
                </h3>
              </div>
              <div className="md:col-span-8 lg:col-span-8">
                <p className="text-sm leading-relaxed text-slate sm:text-base">
                  {commerceSolutionsCard.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {commerceSolutionsCard.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate/20 bg-white px-3.5 py-1 text-xs font-medium text-slate-700 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Row 3: Industries we serve */}
          <Reveal delay={300}>
            <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-4 lg:col-span-4">
                <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {ecommerceContent.industryVerticals.title}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 md:col-span-8 lg:col-span-8">
                {ecommerceContent.industryVerticals.verticals.map((v) => (
                  <span
                    key={v.name}
                    className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium transition-all duration-200 bg-white/[0.06] text-light-gray"
                  >
                    {v.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Row 4: Platforms we build on */}
          <Reveal delay={400}>
            <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-4 lg:col-span-4">
                <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {ecommerceContent.rightSidebar.platformsTitle}
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:col-span-8 lg:col-span-8">
                {ecommerceContent.rightSidebar.platforms.map((platform) => (
                  <div key={platform.name} className="flex flex-col">
                    <span className="text-base font-bold text-ink">
                      {platform.name}
                    </span>
                    <span className="mt-0.5 text-xs text-slate">
                      {platform.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Case Studies Links */}
        <Reveal delay={500}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 pt-4 sm:gap-12">
            {ecommerceContent.rightSidebar.caseStudies.map((cs) => (
              <Link
                key={cs.title}
                href={cs.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0071e3] transition-colors hover:underline hover:text-[#005bb5] sm:text-base"
              >
                <span>{cs.title}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
