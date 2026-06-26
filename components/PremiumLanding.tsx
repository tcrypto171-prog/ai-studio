"use client";

import PremiumNavbar from "./PremiumNavbar";
import HeroSection from "./HeroSection";
import MetricsBar from "./MetricsBar";
import PricingSection from "./PricingSection";
import DevicesShowcase from "./DevicesShowcase";
import ComparisonTable from "./ComparisonTable";
import HowItWorks from "./HowItWorks";
import TestimonialsSection from "./TestimonialsSection";
import FAQAccordion from "./FAQAccordion";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function PremiumLanding() {
  return (
    <div className="min-h-screen bg-[#070708] text-white">
      <PremiumNavbar />
      <main>
        <HeroSection />
        <MetricsBar />
        <PricingSection />
        <DevicesShowcase />
        <ComparisonTable />
        <HowItWorks />
        <TestimonialsSection />
        <FAQAccordion />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
