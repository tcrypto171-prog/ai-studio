"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] pt-32 pb-24">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-flex rounded-full border border-amber-400/20 bg-amber-400/10 px-5 py-2 text-sm font-medium tracking-widest uppercase text-amber-300">
            IPTV Pricing
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            Premium IPTV
            <br />
            <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
              Subscription Plans
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
            Choose the perfect IPTV package for your needs.
            Enjoy thousands of live TV channels, premium sports,
            movies, series and ultra-fast streaming with 24/7 support.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/#contact"
              className="rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Get Started
            </Link>

            <Link
              href="/portal"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-amber-400 hover:text-amber-300"
            >
              Client Portal
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}