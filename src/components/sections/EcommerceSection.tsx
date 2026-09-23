import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ecommerceContent } from "@/content/homeContent";

export function EcommerceSection() {
  const [aiCommerceCard, commerceSolutionsCard] = ecommerceContent.cards;

  return (
    <section
      id={ecommerceContent.sectionId}
      className="relative w-full overflow-hidden bg-light-gray py-24 text-light-gray md:py-32"
    >
      <Container className="relative">
        {/* Section Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
            <h2 className="text-display font-semibold tracking-tight text-light-gray md:text-6xl text-balance">
              {ecommerceContent.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-muted-gray md:text-2xl text-balance">
              {ecommerceContent.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mx-auto max-w-5xl divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {/* Row 1: AI commerce */}
          <Reveal delay={100}>
            <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-4 lg:col-span-4">
                <h3 className="text-xl font-semibold tracking-tight text-light-gray sm:text-2xl">
                  {aiCommerceCard.title}
                </h3>
              </div>
              <div className="md:col-span-8 lg:col-span-8">
                <p className="text-sm font-normal leading-relaxed text-subtle-gray sm:text-base">
                  {aiCommerceCard.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {aiCommerceCard.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/[0.06] bg-white px-3.5 py-1.5 text-xs font-medium text-light-gray shadow-2xs transition-colors hover:bg-slate-50 sm:text-sm"
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
                <h3 className="text-xl font-semibold tracking-tight text-light-gray sm:text-2xl">
                  {commerceSolutionsCard.title}
                </h3>
              </div>
              <div className="md:col-span-8 lg:col-span-8">
                <p className="text-sm font-normal leading-relaxed text-subtle-gray sm:text-base">
                  {commerceSolutionsCard.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {commerceSolutionsCard.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/[0.06] bg-white px-3.5 py-1.5 text-xs font-medium text-light-gray shadow-2xs transition-colors hover:bg-slate-50 sm:text-sm"
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
                <h3 className="text-xl font-semibold tracking-tight text-light-gray sm:text-2xl">
                  {ecommerceContent.industryVerticals.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:col-span-8 lg:col-span-8 sm:gap-4">
                {ecommerceContent.industryVerticals.verticals.map((v) => (
                  <div
                    key={v.name}
                    className="group flex flex-col items-center rounded-2xl border border-black/[0.06] bg-white p-2.5 text-center shadow-2xs transition-all duration-300 hover:border-black/15 hover:shadow-md hover:scale-[1.02] sm:p-3"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate/10">
                      {v.image && (
                        <Image
                          src={v.image}
                          alt={v.name}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
                          className="object-cover transition-transform duration-300 group-hover:scale-106"
                        />
                      )}
                    </div>
                    <span className="mt-2.5 text-xs font-medium text-light-gray sm:text-sm">
                      {v.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Row 4: Platforms we build on */}
          <Reveal delay={400}>
            <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-4 lg:col-span-4">
                <h3 className="text-xl font-semibold tracking-tight text-light-gray sm:text-2xl">
                  {ecommerceContent.rightSidebar.platformsTitle}
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:col-span-8 lg:col-span-8">
                {ecommerceContent.rightSidebar.platforms.map((platform) => (
                  <div key={platform.name} className="flex flex-col">
                    <span className="text-base font-semibold text-light-gray sm:text-lg">
                      {platform.name}
                    </span>
                    <span className="mt-0.5 text-xs text-ink-secondary sm:text-sm">
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
          <div className="mt-14 flex flex-wrap items-center justify-center gap-8 pt-4 sm:gap-12">
            {ecommerceContent.rightSidebar.caseStudies.map((cs) => (
              <Link
                key={cs.title}
                href={cs.href}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-bright-blue transition-colors hover:underline sm:text-base"
              >
                <span>{cs.title}</span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
