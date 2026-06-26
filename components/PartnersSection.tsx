"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "StreamTech", logo: "ST", category: "Streaming Infrastructure" },
  { name: "SecureNet", logo: "SN", category: "Security Provider" },
  { name: "GlobalCDN", logo: "GC", category: "Content Delivery" },
  { name: "CloudServe", logo: "CS", category: "Cloud Platform" },
  { name: "PaymentPro", logo: "PP", category: "Payment Gateway" },
  { name: "AnalyticsAI", logo: "AA", category: "Analytics Provider" },
];

export default function PartnersSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 md:px-12 lg:px-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl space-y-4 mb-16 text-center mx-auto"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
            Trusted Partners
          </p>
          <h2 className="text-5xl font-black text-white sm:text-6xl">
            Built on reliable infrastructure
          </h2>
          <p className="text-xl leading-8 text-slate-400 max-w-2xl mx-auto">
            We partner with leading companies to deliver the best streaming experience possible.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/80 p-8 backdrop-blur-sm"
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Logo */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/10 text-white font-bold text-lg mb-6 border border-cyan-400/20"
                >
                  {partner.logo}
                </motion.div>

                {/* Company Name */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {partner.name}
                </h3>

                {/* Category */}
                <p className="text-sm text-slate-400 mb-4">{partner.category}</p>

                {/* Learn More Link */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ x: 4, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="text-sm font-semibold text-cyan-400"
                >
                  Learn more →
                </motion.div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl border border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
