import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureRow } from "@/components/ui/FeatureRow";
import { CaseStudyLinks } from "@/components/ui/CaseStudyLink";
import { ecommerceContent } from "@/content/homeContent";

export function EcommerceSection() {
  const [aiCommerceCard, commerceSolutionsCard] = ecommerceContent.cards;

  return (
    <section
      id={ecommerceContent.sectionId}
      className="relative w-full overflow-hidden bg-light-gray py-16 text-light-gray md:py-24"
    >
      <Container className="relative">
        {/* Section Header */}
        <SectionHeader
          indexBadge="01 / 03"
          title={ecommerceContent.title}
          subtitle={ecommerceContent.subtitle}
        />

        <div className="mx-auto max-w-5xl divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {/* Row 1: AI commerce */}
          <FeatureRow
            title={aiCommerceCard.title}
            description={aiCommerceCard.description}
            tags={aiCommerceCard.tags}
            delay={100}
          />

          {/* Row 2: Commerce solutions */}
          <FeatureRow
            title={commerceSolutionsCard.title}
            description={commerceSolutionsCard.description}
            tags={commerceSolutionsCard.tags}
            delay={200}
          />

          {/* Row 3: Industries we serve */}
          <FeatureRow
            title={ecommerceContent.industryVerticals.title}
            delay={300}
          >
            <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4">
              {ecommerceContent.industryVerticals.verticals.map((v) => (
                <div
                  key={v.name}
                  className="group flex flex-col items-center rounded-2xl border border-black/[0.06] bg-white p-2.5 text-center transition-colors duration-300 hover:border-black/10 hover:bg-slate-50 sm:p-3"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate/10">
                    {v.image && (
                      <Image
                        src={v.image}
                        alt={v.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <span className="mt-2.5 text-xs font-medium text-light-gray sm:text-sm">
                    {v.name}
                  </span>
                </div>
              ))}
            </div>
          </FeatureRow>

          {/* Row 4: Platforms we build on */}
          <FeatureRow
            title={ecommerceContent.rightSidebar.platformsTitle}
            delay={400}
          >
            <div className="grid grid-cols-1 divide-y divide-black/[0.06] sm:grid-cols-3 sm:gap-6 sm:divide-y-0">
              {ecommerceContent.rightSidebar.platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="flex flex-col py-4 first:pt-0 sm:py-0"
                >
                  <span className="text-base font-semibold text-light-gray sm:text-lg">
                    {platform.name}
                  </span>
                  <span className="mt-0.5 text-xs text-subtle-gray sm:text-sm">
                    {platform.badge}
                  </span>
                </div>
              ))}
            </div>
          </FeatureRow>
        </div>

        {/* Bottom Case Studies Links */}
        <CaseStudyLinks
          links={ecommerceContent.rightSidebar.caseStudies}
          delay={500}
        />
      </Container>
    </section>
  );
}
