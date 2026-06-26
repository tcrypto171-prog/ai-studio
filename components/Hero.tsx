"use client";

import { motion } from "framer-motion";
import { ArrowRight, Tv } from "lucide-react";
import { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";

type HeroProps = {
  title: string;
  subtitle: string;
  actions: { label: string; href: string; variant?: "solid" | "ghost" }[];
};

export default function Hero({ title, subtitle, actions }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const titleWords = title.split(" ");

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 md:px-12 lg:px-16 xl:py-32">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent blur-3xl opacity-60"
        />
        <motion.div
          animate={{
            x: [100, 0, 100],
            y: [50, -50, 50],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-tl from-purple-500/20 to-transparent blur-3xl opacity-60"
        />
        <motion.div
          animate={{
            x: [50, -50, 50],
            y: [100, 0, 100],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/15 to-transparent blur-3xl opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-sm"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-cyan-300">
              Premium streaming now available
            </span>
          </motion.div>

          {/* Massive Headline with Staggered Animation */}
          <div className="space-y-4">
            <h1 className="text-6xl font-black leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl">
              {titleWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="block"
                >
                  {idx === titleWords.length - 1 ? (
                    <span className="text-gradient-cyan">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl leading-8 text-slate-400 sm:text-2xl max-w-xl"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col gap-4 sm:flex-row pt-4"
          >
            {actions.map((action, idx) => (
              <motion.div
                key={action.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PrimaryButton
                  href={action.href}
                  variant={action.variant}
                  className="inline-flex items-center gap-2 group"
                >
                  {action.label}
                  <motion.div
                    group-hover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </PrimaryButton>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex gap-8 pt-8 border-t border-white/10"
          >
            {[
              { label: "Active users", value: "50k+" },
              { label: "Channels", value: "12k+" },
              { label: "Uptime", value: "99.9%" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="space-y-1"
              >
                <p className="text-sm text-slate-500">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-xl"
        >
          {/* Floating Cards Container */}
          <div className="relative aspect-square">
            {/* Main Card */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateX: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-3xl border border-white/20 bg-gradient-to-br from-slate-900/80 to-slate-950/60 p-8 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl overflow-hidden"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                    Live channels
                  </span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-3 w-3 rounded-full bg-cyan-400"
                  />
                </div>

                {/* Channel Grid Preview */}
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="aspect-square rounded-lg bg-gradient-to-br from-cyan-500/30 to-purple-500/20 border border-white/10 flex items-center justify-center hover:border-cyan-400/50 transition"
                    >
                      <Tv className="h-4 w-4 text-cyan-300/60" />
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-xs text-slate-500">Quality</p>
                    <p className="mt-1 text-lg font-semibold text-cyan-300">
                      4K / HD
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Servers</p>
                    <p className="mt-1 text-lg font-semibold text-purple-300">
                      58+
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Floating Elements */}
            <motion.div
              animate={{
                y: [0, 30, 0],
                x: [-20, 0, -20],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/30 to-transparent blur-3xl"
            />
            <motion.div
              animate={{
                y: [0, -30, 0],
                x: [20, 0, 20],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-gradient-to-tl from-purple-500/20 to-transparent blur-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
