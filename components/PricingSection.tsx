"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buildWhatsAppLink } from "./WhatsAppButton";

const plans = [
  {
    id: "starter",
    name: "1-Month Pass",
    price: "$9.99",
    duration: "1 month",
    highlights: [
  "35,000+ Live TV Channels",
  "150,000+ Movies & TV Shows",
  "Instant Activation",
  "4K Ultra HD Streaming",
  "Works on All Devices",
  "24/7 Customer Support",
],
    featured: false,
  },
  {
    id: "pro",
    name: "6-Month Pass",
    price: "$49.99",
    duration: "6 months",
    highlights: ["+15% savings", "Priority streams", "Premium support"],
    featured: false,
  },
  {
    id: "elite",
    name: "12-Month Pass",
    price: "$89.99",
    duration: "12 months",
    highlights: ["Best value", "VIP Priority Support", "Free Installation Assistance"],
    featured: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[#050505] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-amber-300/80">Plans</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Choose Your Premium IPTV Subscription.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">Get instant access to over 35,000 live TV channels, 150,000+ movies & TV shows, premium sports, and 4K streaming with instant activation and 24/7 VIP support.</p>
        </div>

        <div className="mt-16 grid gap-8 xl:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
  scale: 1.05,
  y: -10,
}}
              className={`group relative overflow-hidden rounded-[32px] border ${
  plan.featured ? "border-amber-300/30 bg-gradient-to-br from-white/10 via-transparent to-white/5" : "border-white/10 bg-white/5"
} p-8 shadow-[0_30px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-300`}
            >
              {plan.featured && (
  <>
    <div className="absolute inset-0 -z-10 bg-amber-400/15 blur-3xl" />

    <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-amber-300 to-yellow-400 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-black shadow-[0_10px_30px_rgba(255,184,0,0.45)]">
      MOST POPULAR
    </div>
  </>
)}
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-slate-400">{plan.name}</p>
                  <p className="mt-4 text-4xl font-semibold text-white">{plan.price}</p>
                  <p className="text-sm text-slate-400">{plan.duration}</p>
                </div>

                <ul className="space-y-4 text-sm text-slate-300">
                  {plan.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={buildWhatsAppLink(plan.name, plan.duration, plan.price)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-6 py-4 text-sm font-semibold text-black transition hover:brightness-105"
                >
                  Start Watching Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
