import { Container } from "@/components/ui/Container";
import { customSoftwareContent } from "@/content/customSoftwareDevelopment";

export function CustomSoftwareTechStack() {
  const { techStack } = customSoftwareContent;

  return (
    <section id="tech-stack" className="scroll-mt-24 bg-surface-muted py-16 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-interactive-blue/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-interactive-blue">
            {techStack.badge}
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl">
            {techStack.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
            {techStack.description}
          </p>
        </div>

        {/* Technology Category Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.categories.map((cat) => (
            <div
              key={cat.name}
              className="group flex flex-col rounded-3xl border border-slate/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-interactive-blue/30 hover:shadow-lg"
            >
              <div className="flex items-center justify-between border-b border-slate/10 pb-4">
                <h3 className="text-base font-bold text-ink transition-colors group-hover:text-interactive-blue sm:text-lg">
                  {cat.name}
                </h3>
                <span className="rounded-full bg-interactive-blue/10 px-2.5 py-0.5 text-xs font-bold text-interactive-blue">
                  {cat.skills.length} Techs
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-xl bg-surface-muted px-3 py-1.5 text-xs font-semibold text-ink ring-1 ring-slate/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-interactive-blue hover:to-[#005fb8] hover:text-white hover:shadow-sm hover:ring-interactive-blue"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
