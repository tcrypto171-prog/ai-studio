"use client";

import { motion } from "framer-motion";
import PricingCard from "../PricingCard";

const plans = [
  {
    name: "1 Month",
    price: "$12",
    period: "/month",
    description: "Perfect for trying IPTV Aspollo.",
    featured: false,
    details: [
      "20,000+ Live Channels",
      "Movies & TV Shows",
      "4K / Full HD Streaming",
      "Instant Activation",
      "24/7 Customer Support",
    ],
  },
  {
    name: "6 Months",
    price: "$39",
    period: "/6 months",
    description: "Our most popular subscription with the best value.",
    featured: true,
    details: [
      "20,000+ Live Channels",
      "Movies & TV Shows",
      "4K / Full HD Streaming",
      "Instant Activation",
      "24/7 Customer Support",
      "Multi-device Support",
    ],
  },
  {
    name: "12 Months",
    price: "$59",
    period: "/year",
    description: "Maximum savings with premium priority support.",
    featured: false,
    details: [
      "20,000+ Live Channels",
      "Movies & TV Shows",
      "4K / Full HD Streaming",
      "Instant Activation",
      "24/7 Customer Support",
      "VIP Priority Support",
    ],
  },
];

export default function PricingPlans() {
  return (
    <section className="relative bg-[#070707] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-black text-white md:text-5xl">
            Choose Your Plan
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Every subscription includes premium IPTV channels, movies,
            series, sports, 4K streaming, instant activation and 24/7
            customer support.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}