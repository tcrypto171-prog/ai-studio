"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Devices", href: "#devices" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Us", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

export default function StudioNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 mx-auto w-full border-b border-white/10 bg-black/50 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-semibold uppercase tracking-[0.28em] text-white">
          IPTVASPOLLO
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link href="/contact" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300/40 hover:bg-white/10">
            Contact
          </Link>
          <Link href="https://wa.me/212771564433?text=Hello%20IPTV%20Aspollo" className="rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-black transition hover:brightness-95">
            WhatsApp
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="text-xl">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="border-t border-white/10 bg-black/90 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-white">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-sm transition hover:bg-white/10">
                {item.label}
              </Link>
            ))}
            <Link href="https://wa.me/212771564433?text=Hello%20IPTV%20Aspollo" className="rounded-2xl bg-amber-400 px-4 py-3 text-sm font-semibold text-black text-center">
              WhatsApp
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
