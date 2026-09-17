import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { CoreServices } from "@/components/sections/CoreServices";
import { OtherServices } from "@/components/sections/OtherServices";
import { Technologies } from "@/components/sections/Technologies";
import { Industries } from "@/components/sections/Industries";
import { CeoMessage } from "@/components/sections/CeoMessage";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* T008: Hero Section */}
        <Hero />

        {/* T009: Core Services Section (Transformation Intro + 4 Core Categories) */}
        <CoreServices />

        {/* T010: Other Services Section (6 Complementary Capabilities) */}
        <OtherServices />

        {/* T011: Technologies & Platforms Section */}
        <Technologies />

        {/* T012: Industries Section */}
        <Industries />

        {/* CEO Message Section */}
        <CeoMessage />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
