"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
  {
    id: "p1",
    name: "1-Month Pass",
    price: "$9.99",
    period: "/month",
    features: ["Instant activation", "All channels", "Standard support"],
  },
  {
    id: "p2",
    name: "6-Month Pass",
    price: "$49.99",
    period: "/6 months",
    features: ["Save 15%", "Priority streams", "Priority support"],
  },
  {
    id: "p3",
    name: "12-Month Pass",
    price: "$89.99",
    period: "/year",
    features: ["Best value", "Highest priority", "Dedicated support"],
    best: true,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const cardMotion = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function PricingGrid() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="pricing" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-sm font-semibold tracking-widest text-amber-400">Pricing</h3>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Choose a plan that suits your streaming lifestyle</h2>
          <p className="mt-3 text-slate-400">Transparent pricing and premium quality. No hidden fees.</p>
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={container} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => {
            const isDimmed = hovered !== null && hovered !== p.id;
            return (
              <motion.div
                key={p.id}
                variants={cardMotion}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden rounded-2xl border transition ${p.best ? "p-1 breathe-border" : "border-white/6"} ${isDimmed ? "opacity-70" : "opacity-100"}`}
              >
                <div className={`rounded-xl bg-[#070708] px-6 py-8 ${p.best ? "shadow-2xl" : ""}`}>
                  {p.best && <div className="-mt-12 mb-4 inline-block rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-black">Best Value</div>}

                  <h4 className="text-xl font-bold text-white">{p.name}</h4>
                  <div className="mt-4 flex items-baseline gap-2">
                    <div className="text-3xl font-extrabold text-white">{p.price}</div>
                    <div className="text-sm text-slate-400">{p.period}</div>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm text-slate-300">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="mt-1 inline-block h-3 w-3 rounded-full bg-amber-400" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Link href="/portal" className={`inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold ${p.best ? "bg-amber-400 text-black" : "bg-white/6 text-white"}`}>
                      {p.best ? "Get Best Value" : "Choose Plan"}
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
