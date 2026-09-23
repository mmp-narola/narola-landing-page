import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/content/industries";

export function Industries() {
  return (
    <section id="industries" className="relative w-full bg-surface-muted py-20 md:py-32">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate/15 bg-white px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-interactive-blue" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate">
                Domain Expertise
              </span>
            </div>

            <h2 className="mt-5 text-h2 font-semibold tracking-tight text-ink md:text-h2-lg">
              Industries We Specialize In
            </h2>

            <p className="mt-5 text-lg text-slate">
              Deep domain understanding delivering purpose-built software architectures for
              global enterprises, dynamic startups, and industry leaders.
            </p>
          </div>
        </Reveal>

        {/* Minimal large-type tile grid — light chrome, icon kept small and secondary */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-slate/10 sm:grid-cols-3 md:mt-20 lg:grid-cols-4">
          {industries.map((industry, idx) => (
            <Reveal key={industry.id} delay={(idx % 4) * 60} className="h-full">
              <div className="group flex h-full flex-col items-center justify-center gap-3 bg-surface-muted p-7 text-center transition-colors duration-300 hover:bg-white">
                <Image
                  src={industry.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                />
                <h3 className="text-base font-semibold text-ink transition-colors group-hover:text-interactive-blue">
                  {industry.label}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
