import {
  cardHover,
  buttonHover,
  fadeUp,
  glow,
  pulse,
} from "@/lib/ui/animations";

"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

type PricingCardProps = {
  name: string;
  price: string;
  period: string;
  description: string;
  details: string[];
  featured?: boolean;
};

export default function PricingCard({
  name,
  price,
  period,
  description,
  details,
  featured = false,
}: PricingCardProps) {
  return (
    <motion.div
      variants={fadeUp}
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl border p-8 shadow-xl transition-all duration-300 backdrop-blur-sm ${
        featured
          ? "border-cyan-400/40 bg-gradient-to-br from-cyan-500/15 to-purple-500/10 shadow-cyan-500/25 ring-1 ring-cyan-400/20"
          : "border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/80 hover:border-cyan-400/30"
      }`}
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20"
        animate={{
          opacity: [0, 0.3, 0],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Glow Effect on Hover */}
      <div className="absolute -inset-full h-full w-full bg-gradient-to-br from-cyan-500/30 to-purple-500/10 blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
                {name}
              </p>
              <div className="mt-4 flex items-baseline gap-1">
                <h3 className="text-5xl font-black text-white">{price}</h3>
                <span className="text-sm text-slate-400">{period}</span>
              </div>
            </div>
            {featured ? (
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-950 shadow-lg shadow-cyan-400/30"
              >
                Most popular
              </motion.span>
            ) : null}
          </div>

          <p className="text-base leading-6 text-slate-300">{description}</p>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.15 }}
          className={`mb-8 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
            featured
              ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-950 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50"
              : "border border-cyan-400/20 bg-white/5 text-white hover:bg-cyan-500/10 hover:border-cyan-400/40"
          }`}
        >
          Start free trial
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.15, }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.span>
        </motion.button>

        {/* Feature List */}
        <div className="space-y-4 border-t border-white/10 pt-8">
          {details.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                className="mt-0.5 flex-shrink-0"
              >
                <Check className="h-5 w-5 text-cyan-400" />
              </motion.div>
              <span className="text-sm leading-6 text-slate-300">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Corner accent */}
      {featured && (
        <motion.div
          className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-cyan-400/20 to-transparent blur-2xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
}
