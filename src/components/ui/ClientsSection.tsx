"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

interface Client {
  name: string;
  logoText: string;
}

interface ClientsSectionProps {
  title?: string;
  clients?: Client[];
  className?: string;
}

export function ClientsSection({ 
  title = "Trusted by innovative brands worldwide", 
  clients = [
    { name: "CGI", logoText: "CGI" },
    { name: "L&T", logoText: "L&T" },
    { name: "TVS NEXT", logoText: "TVS NEXT" },
    { name: "Biocon", logoText: "Biocon" },
    { name: "Infosys", logoText: "Infosys" },
  ],
  className = "bg-white py-16 md:py-24 border-y border-black/5 overflow-hidden"
}: ClientsSectionProps) {
  return (
    <section className={className}>
      <Container>
        <Reveal>
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-sm font-bold tracking-widest text-slate uppercase mb-12">
              {title}
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="px-8 py-4 md:px-12 md:py-6 bg-white rounded-2xl shadow-sm border border-black/5 hover:border-[#0e5fd9]/30 hover:shadow-md transition-all duration-300 flex items-center justify-center min-w-[140px] md:min-w-[180px]"
                >
                  <span className="text-xl md:text-2xl font-black tracking-wider text-slate hover:text-ink transition-colors">
                    {client.logoText}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
