import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <section className="border-b border-black/[0.06] py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl animate-pulse text-center">
            <div className="mx-auto h-6 w-40 rounded-full bg-surface-muted" />
            <div className="mx-auto mt-4 h-10 w-3/4 rounded-lg bg-surface-muted" />
            <div className="mx-auto mt-4 h-4 w-2/3 rounded bg-surface-muted" />
          </div>
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-2xl border border-black/[0.06] p-5"
              >
                <div className="h-40 w-full rounded-xl bg-surface-muted" />
                <div className="mt-4 h-3 w-1/3 rounded bg-surface-muted" />
                <div className="mt-3 h-5 w-4/5 rounded bg-surface-muted" />
                <div className="mt-3 h-4 w-full rounded bg-surface-muted" />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
