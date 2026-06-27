"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const buttonHover = {
  scale: 1.03,
  boxShadow: "0 24px 70px rgba(255, 179, 0, 0.18)",
};

export default function HeroSection() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#070708] py-20 sm:py-24">
      <div className="pointer-events-none absolute left-0 top-10 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="mx-auto relative max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-amber-200 backdrop-blur-sm">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
                Premium IPTV for luxury homes
              </div>
              <h1 className="mt-8 text-5xl font-black leading-tight tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Elevate your streaming experience to cinematic luxury.
              </h1>
              <p className="mt-6 max-w-xl text-xl leading-9 text-slate-300 sm:text-2xl">
                IPTV Aspollo blends immersive global channels, ultra-low latency, and white-glove onboarding for a polished viewing experience on every screen.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="#pricing" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:brightness-105" aria-label="Select your pass">
                  Select your pass
                </Link>
                <Link href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10">
                  Contact concierge
                </Link>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  "24/7 VIP support",
                  "Cinematic 4K playback",
                  "Global channel coverage",
                ].map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300 backdrop-blur-xl">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <div className="relative">
              <div className="relative overflow-visible p-0">
                <div />
                <div className="relative z-10 flex items-center justify-center py-6 w-full">
  <motion.div
    whileHover={{
      scale: 1.04,
      rotateY: 6,
      rotateX: -3,
    }}
    transition={{ duration: 0.4 }}
    className="relative"
    style={{ transformStyle: "preserve-3d" }}
  >
    <div className="absolute -inset-10 -z-10 rounded-full bg-amber-400/25 blur-[100px]" />

    <Image
  src="/images/hero-tv-v4.png"
  alt="TV"
  width={1200}
  height={900}
  priority
/>
  </motion.div>
</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm text-slate-400 sm:grid-cols-3">
              {[
                { label: "Apple TV", value: "Native app" },
                { label: "Firestick", value: "Instant setup" },
                { label: "Smart TVs", value: "High performance" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-xl">
                  <p className="font-semibold text-white">{item.label}</p>
                  <p className="mt-1 text-slate-400">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
