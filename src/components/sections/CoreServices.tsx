import { Container } from "@/components/ui/Container";
import { coreServices } from "@/content/services";
import { transformationIntro } from "@/content/transformationIntro";

function CustomSoftwareIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  );
}

function ProductEngineeringIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  );
}

function StaffAugmentationIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
  );
}

function EcommerceIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
  );
}

const SERVICE_ICONS: Record<string, React.FC<{ className?: string }>> = {
  "custom-software-development": CustomSoftwareIcon,
  "software-product-engineering": ProductEngineeringIcon,
  "staff-augmentation": StaffAugmentationIcon,
  "ecommerce-development": EcommerceIcon,
};

export function CoreServices() {
  return (
    <section id="services" className="relative w-full bg-surface-muted py-20 md:py-28">
      {/* Subtle background ambient blur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-96 w-[800px] -translate-x-1/2 bg-radial from-brand-blue/5 to-transparent blur-3xl"
      />

      <Container className="relative">
        {/* Transformation Intro Header Block */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-interactive-blue/20 bg-white px-3.5 py-1 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-interactive-blue" />
            <span className="text-xs font-bold uppercase tracking-wider text-interactive-blue">
              Our Core Services
            </span>
          </div>

          <h2 className="mt-4 text-h2 font-extrabold tracking-tight text-ink md:text-h2-lg">
            {transformationIntro.heading}
          </h2>

          <p className="mt-4 text-body text-slate leading-relaxed">
            {transformationIntro.body}
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-18">
          {coreServices.map((category) => {
            const IconComponent = SERVICE_ICONS[category.id] ?? CustomSoftwareIcon;

            return (
              <div
                key={category.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate/10 bg-white p-7 shadow-md shadow-slate/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-interactive-blue/30 hover:shadow-2xl hover:shadow-slate/10"
              >
                {/* Subtle top card gradient border highlight on hover */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-interactive-blue to-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div>
                  {/* Category Icon Badge */}
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-interactive-blue/15 to-interactive-blue/5 text-interactive-blue shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:bg-interactive-blue group-hover:text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 text-h3 font-bold text-ink transition-colors group-hover:text-interactive-blue">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-small leading-relaxed text-slate">
                    {category.description}
                  </p>
                </div>

                {/* Sub-services Tags */}
                <div className="mt-7 border-t border-slate/10 pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate/70">
                    Capabilities
                  </span>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {category.items.map((item) => (
                      <span
                        key={item.label}
                        className="rounded-lg bg-surface-muted px-2.5 py-1 text-[11px] font-semibold text-slate transition-colors hover:bg-interactive-blue hover:text-white"
                      >
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
