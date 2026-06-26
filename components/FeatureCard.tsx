"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { Globe, ShieldCheck, Sparkles, Tv, Zap } from "lucide-react";

type FeatureIcon = "Sparkles" | "Globe" | "ShieldCheck" | "Zap" | "Tv";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: FeatureIcon;
};

const iconMap: Record<FeatureIcon, ComponentType<{ className?: string }>> = {
  Sparkles,
  Globe,
  ShieldCheck,
  Zap,
  Tv,
};

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/80 p-8 shadow-lg shadow-slate-950/20 transition-all duration-300 hover:border-cyan-400/30 backdrop-blur-sm"
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Animated Glow Background */}
      <motion.div
        className="absolute -inset-full h-full w-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-3xl"
        animate={{
          opacity: [0, 0.5, 0],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Icon Container */}
        <motion.div
          whileHover={{ rotate: 12, scale: 1.1 }}
          className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 text-cyan-300 shadow-lg shadow-cyan-500/10 transition-colors duration-300 group-hover:from-cyan-500/30 group-hover:to-cyan-500/20 group-hover:text-cyan-200 border border-cyan-500/20"
        >
          <Icon className="h-7 w-7" />
        </motion.div>

        {/* Title */}
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-100 transition-colors">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm leading-6 text-slate-400 group-hover:text-slate-300 transition-colors">
          {description}
        </p>

        {/* Bottom accent line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "2rem" }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-1 rounded-full bg-gradient-to-r from-cyan-400 to-transparent group-hover:w-8 transition-all"
        />
      </div>

      {/* Floating accent dots */}
      <motion.div
        className="absolute top-4 right-4 h-2 w-2 rounded-full bg-cyan-400/40"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.article>
  );
}
