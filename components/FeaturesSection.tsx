"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Ultra-Low Latency",
    description: "Premium CDN networking engineered for fluid playback and zero buffering across devices.",
  },
  {
    title: "4K HDR Quality",
    description: "Native 4K streams and cinema-grade playback for every channel and on-demand library.",
  },
  {
    title: "Global Coverage",
    description: "24 regions, multi-language packages, and optimized servers for every continent.",
  },
  {
    title: "Secure Access",
    description: "End-to-end encrypted streams with advanced device control and anti-freeze protection.",
  },
  {
    title: "VIP Support",
    description: "Live concierge-level support with fast onboarding and device setup assistance.",
  },
  {
    title: "Smart Automation",
    description: "Intelligent recommendations, channel grouping, and smooth channel discovery.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-[#050505] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-amber-300/80">Features</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">A premium IPTV platform built for modern luxury homes.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">Our platform blends cinematic visuals, powerful streaming technology, and premium support to create an unforgettable media experience.</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-300/15 to-transparent text-amber-200 shadow-inner-lg">
                <span className="text-xl font-semibold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
