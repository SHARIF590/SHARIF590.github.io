import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechStackMarquee } from "@/components/sections/TechStackMarquee";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { SkiperSpotlightGrid } from "@/components/skiper/SkiperSpotlightGrid";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { VengeanceTerminal } from "@/components/vengeance/VengeanceTerminal";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ThemeColorPicker } from "@/components/ui/ThemeColorPicker";
import { ScrollProgressLine } from "@/components/ui/ScrollProgressLine";
import { SkiperFloatingDock } from "@/components/skiper/SkiperFloatingDock";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-100 font-poppins antialiased selection:bg-emerald-500 selection:text-black">
      <CustomCursor />
      <ScrollProgressLine />
      <ThemeColorPicker />
      <SkiperFloatingDock />
      <Navbar />
      <main>
        <Hero />
        <TechStackMarquee />
        <AboutSection />
        <FeaturedWork />
        <SkiperSpotlightGrid />
        <SkillsSection />
        <VengeanceTerminal />
        <TestimonialsMarquee />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
