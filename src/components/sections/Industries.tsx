import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { industries } from "@/content/industries";

export function Industries() {
  return (
    <section id="industries" className="relative w-full bg-white py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate/15 bg-surface-muted px-3.5 py-1 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-interactive-blue" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate">
              Domain Expertise
            </span>
          </div>

          <h2 className="mt-4 text-h2 font-extrabold tracking-tight text-ink md:text-h2-lg">
            Industries We Specialize In
          </h2>

          <p className="mt-4 text-body text-slate">
            Deep domain understanding delivering purpose-built software architectures for global
            enterprises, dynamic startups, and industry leaders.
          </p>
        </div>

        {/* 12 Industry Tiles Grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 md:mt-18 md:gap-6">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="group flex flex-col items-center justify-center rounded-2xl border border-slate/10 bg-surface-muted/50 p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-interactive-blue/30 hover:bg-white hover:shadow-xl hover:shadow-slate/5"
            >
              {/* Icon Container with subtle hover animation */}
              <div className="flex h-15 w-15 items-center justify-center rounded-2xl bg-white shadow-xs ring-1 ring-slate/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:ring-interactive-blue/30">
                <Image
                  src={industry.icon}
                  alt={`${industry.label} icon`}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </div>

              {/* Industry Label */}
              <h3 className="mt-4 text-sm font-bold text-ink transition-colors group-hover:text-interactive-blue">
                {industry.label}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
