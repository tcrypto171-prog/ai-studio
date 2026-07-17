"use client";

import Link from "next/link";
import { useState } from "react";

export default function PremiumNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-black/70 to-black/10 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-2xl font-black tracking-[0.22em] text-white">
              IPTV ASPOLLO
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
  <Link href="/" className="hover:text-white transition">
    Home
  </Link>

  <Link href="/pricing" className="hover:text-white transition">
    Pricing
  </Link>

  <Link href="/faq" className="hover:text-white transition">
    FAQ
  </Link>

  <Link href="/contact" className="hover:text-white transition">
    Contact
  </Link>
</nav>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/portal" className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-black shadow-lg hover:brightness-95 transition">
              Access Portal
            </Link>

            <button className="md:hidden inline-flex p-2 text-slate-300" onClick={() => setOpen(!open)} aria-label="Open menu">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-3 md:hidden">
           <nav className="flex flex-col gap-2 px-2 pb-4 text-white">
  <Link
    href="/"
    className="rounded-md px-3 py-2 hover:bg-white/5"
  >
    Home
  </Link>

  <Link
    href="/pricing"
    className="rounded-md px-3 py-2 hover:bg-white/5"
  >
    Pricing
  </Link>

  <Link
    href="/faq"
    className="rounded-md px-3 py-2 hover:bg-white/5"
  >
    FAQ
  </Link>

  <Link
    href="/contact"
    className="rounded-md px-3 py-2 hover:bg-white/5"
  >
    Contact
  </Link>
</nav>
          </div>
        )}
      </div>
    </header>
  );
}
