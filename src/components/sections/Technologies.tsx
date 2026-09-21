import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { technologyCategories } from "@/content/technologies";

export function Technologies() {
  return (
    <section id="technologies" className="relative w-full bg-white py-20 md:py-32">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-interactive-blue/20 bg-surface-muted px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-interactive-blue" />
              <span className="text-xs font-bold uppercase tracking-wider text-interactive-blue">
                Tech Stack & Expertise
              </span>
            </div>

            <h2 className="mt-5 text-h2 font-bold tracking-tight text-ink md:text-h2-lg">
              Technologies & Platforms We Work With
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate">
              Modern frameworks, robust backend architectures, and battle-tested mobile
              platforms tailored for enterprise scalability and high performance.
            </p>
          </div>
        </Reveal>

        {/* Large-type technology groups — minimal wordmark treatment, no card chrome */}
        <div className="mt-16 divide-y divide-slate/10 border-t border-slate/10 md:mt-24">
          {technologyCategories.map((category, idx) => (
            <Reveal key={category.id} delay={idx * 80}>
              <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10">
                <h3 className="text-xl font-bold tracking-tight text-ink md:col-span-3 md:text-2xl">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-3 md:col-span-9">
                  {category.items.map((tech) => (
                    <span
                      key={tech}
                      className="text-lg font-medium text-slate transition-colors duration-200 hover:text-interactive-blue md:text-xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
