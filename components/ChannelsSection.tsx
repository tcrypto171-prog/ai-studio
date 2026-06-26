"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ChannelCard, { Channel } from "./ChannelCard";

const seedChannels = (): Channel[] => [
  { id: "c1", name: "Sky Sports HD", category: "Sports", quality: "HD", country: "🇬🇧", viewers: 12432 },
  { id: "c2", name: "MovieBox 4K", category: "Movies", quality: "4K", country: "🇺🇸", viewers: 8321 },
  { id: "c3", name: "Global News", category: "News", quality: "FHD", country: "🇩🇪", viewers: 5423 },
  { id: "c4", name: "Kids World", category: "Kids", quality: "HD", country: "🇫🇷", viewers: 3211 },
  { id: "c5", name: "Pop Hits", category: "Entertainment", quality: "HD", country: "🇪🇸", viewers: 4123 },
  { id: "c6", name: "Pro Sports 4K", category: "Sports", quality: "4K", country: "🇮🇹", viewers: 22311 },
  { id: "c7", name: "Indie Movies", category: "Movies", quality: "FHD", country: "🇨🇦", viewers: 1782 },
  { id: "c8", name: "Nightly News", category: "News", quality: "HD", country: "🇦🇺", viewers: 2890 },
  { id: "c9", name: "Family Fun", category: "Kids", quality: "HD", country: "🇧🇷", viewers: 1990 },
  { id: "c10", name: "Live Concerts", category: "Entertainment", quality: "FHD", country: "🇯🇵", viewers: 6543 },
];

const categories = ["All", "Sports", "Movies", "News", "Kids", "Entertainment"] as const;

export default function ChannelsSection() {
  const allChannels = useMemo(() => seedChannels(), []);
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All");
  const filtered = useMemo(() => allChannels.filter((c) => activeCategory === "All" || c.category === activeCategory), [allChannels, activeCategory]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  function scrollBy(offset: number) {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ left: offset, behavior: "smooth" });
  }

  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Live Channels</p>
            <h2 className="text-4xl font-black text-white sm:text-5xl">Cinematic live channels — watch what matters now</h2>
            <p className="mt-3 text-lg text-slate-400 max-w-2xl">A curated selection of live channels with instant access, stunning thumbnails, and prioritized performance.</p>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeCategory === cat ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950" : "bg-white/5 text-white hover:bg-white/10"}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <a href="/pricing" className="ml-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
              View All Channels
            </a>
          </div>
        </div>

        {/* Mobile filter + view all */}
        <div className="mb-6 flex items-center gap-3 md:hidden">
          <div className="flex gap-2 overflow-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition ${activeCategory === cat ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950" : "bg-white/5 text-white hover:bg-white/10"}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <a href="/pricing" className="ml-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10">
            View All
          </a>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="absolute left-0 top-1/2 z-20 -translate-y-1/2 md:block hidden">
            <button aria-label="prev" onClick={() => scrollBy(-320)} className="-ml-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/50 transition">
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          <div ref={containerRef} className="no-scrollbar flex gap-6 overflow-x-auto pb-4 scroll-smooth">
            {filtered.map((c, i) => (
              <ChannelCard key={c.id} channel={c} index={i} />
            ))}
          </div>

          <div className="absolute right-0 top-1/2 z-20 -translate-y-1/2 md:block hidden">
            <button aria-label="next" onClick={() => scrollBy(320)} className="-mr-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/50 transition">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Decorative subtle background lighting */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-slate-900/40 to-transparent"
        />
      </div>
    </section>
  );
}
