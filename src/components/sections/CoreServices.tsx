import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { coreServices } from "@/content/services";
import { transformationIntro } from "@/content/transformationIntro";

import { Code2, Boxes, Users, ShoppingCart } from "lucide-react";

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "custom-software-development": Code2,
  "software-product-engineering": Boxes,
  "staff-augmentation": Users,
  "ecommerce-development": ShoppingCart,
};

export function CoreServices() {
  return (
    <section id="services" className="relative w-full bg-white py-20 md:py-32">
      <Container className="relative">
        {/* Section Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-interactive-blue/20 bg-surface-muted px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-interactive-blue" />
              <span className="text-xs font-semibold uppercase tracking-wide text-interactive-blue">
                Our Core Services
              </span>
            </div>

            <h2 className="mt-5 text-h2 font-semibold tracking-tight text-balance text-ink md:text-h2-lg">
              {transformationIntro.heading}
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate">
              {transformationIntro.body}
            </p>
          </div>
        </Reveal>

        {/* Editorial service list — large rows instead of a card grid */}
        <div className="mt-16 divide-y divide-slate/10 border-t border-slate/10 md:mt-24">
          {coreServices.map((category, idx) => {
            const IconComponent = SERVICE_ICONS[category.id] ?? Code2;

            return (
              <Reveal key={category.id} delay={idx * 80}>
                <div className="group grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:items-center md:gap-8 md:py-14">
                  {/* Index + Icon */}
                  <div className="flex items-center gap-4 md:col-span-3">
                    <span className="text-sm font-semibold text-slate/40 tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-interactive-blue/10 text-interactive-blue transition-all duration-300 group-hover:bg-interactive-blue group-hover:text-white">
                      <IconComponent className="h-5.5 w-5.5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="md:col-span-5">
                    <h3 className="text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-interactive-blue md:text-[26px]">
                      {category.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate md:text-base">
                      {category.description}
                    </p>
                  </div>

                  {/* Capability Tags */}
                  <div className="md:col-span-4">
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {category.items.map((item) => (
                        <span
                          key={item.label}
                          className="rounded-lg bg-surface-muted px-2.5 py-1 text-[11px] font-semibold text-slate"
                        >
                          {item.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
