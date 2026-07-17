"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Tv, Star } from "lucide-react";

export type Channel = {
  id: string;
  name: string;
  category: "Sports" | "Movies" | "News" | "Kids" | "Entertainment";
  quality: "HD" | "FHD" | "4K";
  country: string;
  viewers: number;
  logo?: string;
  thumbnail?: string;
};

function generateThumbnailData(name: string, seed = 1) {
  const colors = [
    ["#06b6d4", "#8b5cf6"],
    ["#06b6d4", "#f43f5e"],
    ["#8b5cf6", "#f97316"],
    ["#06b6d4", "#7c3aed"],
    ["#f43f5e", "#06b6d4"],
  ];

  const c = colors[seed % colors.length];

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="450">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${c[0]}" />
          <stop offset="100%" stop-color="${c[1]}" />
        </linearGradient>
      </defs>

      <rect
        width="100%"
        height="100%"
        rx="28"
        ry="28"
        fill="url(#g)"
      />

      <text
        x="50%"
        y="50%"
        font-size="48"
        fill="rgba(255,255,255,.92)"
        font-family="Inter,Arial,sans-serif"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        ${name}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function ChannelCard({
  channel,
  index,
}: {
  channel: Channel;
  index: number;
}) {
  const [fav, setFav] = useState(false);

  const thumbnail =
    channel.thumbnail ?? generateThumbnailData(channel.name, index);

  return (
    <motion.article
      layout
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: "0 20px 45px rgba(0,0,0,.35)",
      }}
      transition={{
        duration: 0.18,
        ease: "easeOut",
      }}
      className="relative z-10 w-[280px] flex-shrink-0 rounded-2xl border border-white/10 bg-slate-900/80 shadow-lg backdrop-blur-sm"
    >
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={thumbnail}
          alt={`${channel.name} thumbnail`}
          className="h-40 w-full object-cover"
        />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <motion.span
            className="h-3 w-3 rounded-full bg-red-500"
            animate={{ scale: [1, 1.6, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />

          <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            LIVE
          </span>
        </div>

        <div className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur-sm">
          {channel.viewers.toLocaleString()} viewers
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/5">
            <Tv className="h-6 w-6 text-cyan-300" />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-semibold text-white">
                {channel.name}
              </h3>

              <span className="ml-auto text-xs text-slate-400">
                {channel.country}
              </span>
            </div>

            <p className="mt-2 text-xs text-slate-400">
              {channel.category} •{" "}
              <span className="font-semibold text-white">
                {channel.quality}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setFav(!fav)}
            aria-pressed={fav}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
          >
            <Heart
              className={`h-4 w-4 ${
                fav ? "text-rose-400" : "text-slate-200"
              }`}
            />
          </button>

          <button className="ml-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:brightness-110">
            <Star className="h-4 w-4 text-yellow-300" />
            Featured
          </button>
        </div>
      </div>
    </motion.article>
  );
}