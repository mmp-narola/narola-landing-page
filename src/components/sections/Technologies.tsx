import { Container } from "@/components/ui/Container";
import { technologyCategories } from "@/content/technologies";

export function Technologies() {
  return (
    <section id="technologies" className="relative w-full bg-surface-muted py-20 md:py-28">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#4c5a67_1px,transparent_1px)] [background-size:32px_32px] opacity-15"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-interactive-blue/20 bg-white px-3.5 py-1 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-interactive-blue" />
            <span className="text-xs font-bold uppercase tracking-wider text-interactive-blue">
              Tech Stack & Expertise
            </span>
          </div>

          <h2 className="mt-4 text-h2 font-extrabold tracking-tight text-ink md:text-h2-lg">
            Technologies & Platforms We Work With
          </h2>

          <p className="mt-4 text-body text-slate">
            Modern frameworks, robust backend architectures, and battle-tested mobile platforms
            tailored for enterprise scalability and high performance.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-18">
          {technologyCategories.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col justify-between rounded-3xl border border-slate/10 bg-white p-6 shadow-md shadow-slate/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-interactive-blue/30 hover:shadow-2xl hover:shadow-slate/10"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate/10 pb-4">
                  <h3 className="text-h3 font-bold text-ink transition-colors group-hover:text-interactive-blue">
                    {category.title}
                  </h3>
                  <span className="rounded-full bg-interactive-blue/10 px-2.5 py-0.5 text-xs font-bold text-interactive-blue">
                    {category.items.length} Techs
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-xl bg-surface-muted px-3.5 py-2 text-xs font-semibold text-ink ring-1 ring-slate/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-interactive-blue hover:to-[#005fb8] hover:text-white hover:shadow-sm hover:ring-interactive-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
