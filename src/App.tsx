import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechStackMarquee } from "@/components/sections/TechStackMarquee";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ServicesAccordion } from "@/components/sections/ServicesAccordion";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ThemeColorPicker } from "@/components/ui/ThemeColorPicker";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-100 font-poppins antialiased">
      <CustomCursor />
      <ThemeColorPicker />
      <Navbar />
      <main>
        <Hero />
        <TechStackMarquee />
        <AboutSection />
        <FeaturedWork />
        <ServicesAccordion />
        <SkillsSection />
        <TestimonialsMarquee />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
