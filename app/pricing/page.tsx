import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PricingCard from "../../components/PricingCard";
import { pricingPlans } from "../../lib/content";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto min-h-screen max-w-[1600px] md:pl-[280px]">
        <section className="px-6 py-20 sm:px-10 md:px-12 lg:px-16">
          <div className="mx-auto max-w-5xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Pricing</p>
            <h1 className="text-5xl font-semibold text-white sm:text-6xl">Choose a subscription plan made for your streaming needs.</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-400">
              IPTV Apollo delivers transparent pricing and premium packages so you can pick the experience that fits your home or business.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-20 sm:px-10 md:px-12 lg:px-16">
          <div className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-slate-950/90 p-10 shadow-2xl shadow-slate-950/40">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Payment options</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Flexible billing with world-class support.</h2>
                <p className="mt-4 text-lg leading-8 text-slate-400">
                  Pay monthly, quarterly, or annually with secure checkout and access to our premium network of channels.
                </p>
              </div>
              <div className="space-y-4 text-slate-200">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Included in every plan</p>
                <ul className="space-y-3 text-sm leading-7">
                  <li className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">Ultra HD and 4K channel support</li>
                  <li className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">Multi-device streaming with fast servers</li>
                  <li className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">24/7 customer support and onboarding</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
