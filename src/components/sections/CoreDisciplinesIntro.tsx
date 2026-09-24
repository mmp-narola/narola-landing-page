import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { coreDisciplinesContent } from "@/content/homeContent";

export function CoreDisciplinesIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-8 text-light-gray md:py-10">
      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.16em] text-bright-blue sm:text-sm">
              {coreDisciplinesContent.eyebrow}
            </span>
            <h2 className="text-display font-semibold tracking-tight text-light-gray md:text-5xl lg:text-6xl text-balance">
              {coreDisciplinesContent.title}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-gray md:text-xl text-balance leading-relaxed font-normal">
              {coreDisciplinesContent.subtitle}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
