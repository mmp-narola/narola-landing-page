import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Coming Soon | Narola Infotech",
  description: "We are working hard to bring you something amazing. Stay tuned!",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-light-gray selection:bg-[#0084ff] selection:text-white">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8 bg-surface-muted">
        {/* Abstract Background Elements */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0084ff] to-[#0072d9] opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-2xl text-center z-10 reveal reveal-visible">
          <div className="mb-8 flex justify-center">
            <span className="rounded-full bg-[#0084ff]/10 px-4 py-1.5 text-sm font-semibold leading-6 text-[#0084ff] ring-1 ring-inset ring-[#0084ff]/20">
              Coming Soon
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#192734] sm:text-6xl text-balance">
            We're building something amazing
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#48484a] text-balance">
            Our team is currently working hard on this page. We'll be launching it soon.
            Check back later to see what we've been up to!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="/">
              Go back home
            </Button>
          </div>
        </div>

        {/* Abstract Background Elements Bottom */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none" aria-hidden="true">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0084ff] to-[#0072d9] opacity-15 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
