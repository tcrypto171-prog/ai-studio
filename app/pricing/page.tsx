import PremiumNavbar from "@/components/PremiumNavbar";
import Footer from "@/components/Footer";

import PricingHero from "@/components/sections/PricingHero";
import PricingPlans from "@/components/sections/PricingPlans";
import PricingFeatures from "@/components/sections/PricingFeatures";
import PricingCTA from "@/components/sections/PricingCTA";

export default function PricingPage() {
  return (
    <>
      <PremiumNavbar />

      <main className="bg-[#050505] text-white">
        <PricingHero />
        <PricingPlans />
        <PricingFeatures />
        <PricingCTA />
      </main>

      <Footer />
    </>
  );
}
