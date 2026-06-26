"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  { q: "How long until my subscription activates?", a: "Activation is instant for most plans. After payment, you'll receive access details and can start streaming within minutes." },
  { q: "Does IPTV Aspollo work with VPNs?", a: "Yes. Our service works with most reputable VPN providers. For best results choose a VPN server near your region for lowest latency." },
  { q: "How do I set up on my device?", a: "Open the app, sign in with your credentials, and follow the on-screen guide. We also provide device-specific setup guides in the Setup Guide section." },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-sm font-semibold tracking-widest text-amber-400">FAQ</h3>
        <h2 className="mt-2 text-2xl font-extrabold text-white">Common questions answered</h2>

        <div className="mt-8 space-y-4">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div key={i} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-shadow hover:shadow-[0_30px_80px_rgba(255,179,0,0.12)]">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-white"
                  aria-expanded={open}
                >
                  <span className="text-base font-semibold">{f.q}</span>
                  <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-slate-300">
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="px-6 pb-5 text-slate-300"
                    >
                      <div className="overflow-hidden text-sm leading-7">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
