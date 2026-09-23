import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { otherServices } from "@/content/services";

import {
  ShieldCheck,
  Wrench,
  Cloud,
  Infinity,
  Sparkles,
  Rocket,
} from "lucide-react";

const OTHER_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "QA & Testing": ShieldCheck,
  "Support & Maintenance": Wrench,
  "Cloud Services": Cloud,
  DevOps: Infinity,
  "AI & ML": Sparkles,
  "Software Modernization": Rocket,
};

export function OtherServices() {
  return (
    <section className="relative w-full bg-surface-muted py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate/15 bg-white px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-interactive-blue" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate">
                Complementary Capabilities
              </span>
            </div>

            <h2 className="mt-5 text-h2 font-semibold tracking-tight text-ink md:text-h2-lg">
              Our Other Services
            </h2>

            <p className="mt-4 text-lg text-slate">
              Specialized engineering and technical capabilities to ensure long-term stability,
              scalability, and performance across your entire ecosystem.
            </p>
          </div>
        </Reveal>

        {/* Minimal 2-column list — large type, hairline dividers, no card chrome */}
        <div className="mx-auto mt-14 max-w-4xl divide-y divide-slate/10 border-t border-slate/10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:divide-y-0 md:mt-20">
          {otherServices.map((service, idx) => {
            const IconComponent = OTHER_ICONS[service.label] ?? Sparkles;

            return (
              <Reveal key={service.label} delay={(idx % 2) * 80}>
                <div className="group flex items-center gap-4 border-b border-slate/10 py-6 sm:border-none sm:py-7">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-interactive-blue shadow-sm ring-1 ring-slate/10 transition-all duration-300 group-hover:bg-interactive-blue group-hover:text-white">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-interactive-blue">
                      {service.label}
                    </h3>
                    <span className="text-xs font-medium text-slate/70">
                      Expert Consulting & Engineering
                    </span>
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
