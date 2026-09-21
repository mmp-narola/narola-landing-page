import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { EcommerceSection } from "@/components/sections/EcommerceSection";
import { AiAutomationSection } from "@/components/sections/AiAutomationSection";
import { ProductEngineeringSection } from "@/components/sections/ProductEngineeringSection";
import { OurWorkSection } from "@/components/sections/OurWorkSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-light-gray selection:bg-[#0084ff] selection:text-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section with interactive AI Advisor & Stats & Trusted Clients */}
        <HeroSection />

        {/* eCommerce Bento Grid Section */}
        <EcommerceSection />

        {/* AI & Automation Bento Grid Section */}
        <AiAutomationSection />

        {/* Product Engineering Bento Grid Section */}
        <ProductEngineeringSection />

        {/* Our Work / Portfolio Showcase Section */}
        <OurWorkSection />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
