"use client";

 // Import CallToActionSection
 import { HeroSection } from "@/components/services/HeroSection";
 import { ServicesSection } from "@/components/services/ServicesSection";
import { Footer } from "@/components/Footer";

export function ServicesPage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}
