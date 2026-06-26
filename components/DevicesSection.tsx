"use client";

import { motion } from "framer-motion";
import { Smartphone, Tv as TvIcon, Monitor, Tablet, Zap, Check } from "lucide-react";

const devices = [
  {
    name: "Smart TV",
    icon: TvIcon,
    platforms: ["Android TV", "Samsung Tizen", "LG WebOS", "Fire TV"],
    color: "from-cyan-500/20 to-blue-500/10",
  },
  {
    name: "Mobile",
    icon: Smartphone,
    platforms: ["iOS", "Android", "Web App"],
    color: "from-purple-500/20 to-pink-500/10",
  },
  {
    name: "Computer",
    icon: Monitor,
    platforms: ["Windows", "macOS", "Linux"],
    color: "from-green-500/20 to-emerald-500/10",
  },
  {
    name: "Tablet",
    icon: Tablet,
    platforms: ["iPad", "Android Tablets"],
    color: "from-orange-500/20 to-red-500/10",
  },
];

export default function DevicesSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 md:px-12 lg:px-16 border-y border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl space-y-4 mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
            Universal Access
          </p>
          <h2 className="text-5xl font-black text-white sm:text-6xl">
            Stream on any device
          </h2>
          <p className="text-xl leading-8 text-slate-400 max-w-2xl">
            One account, unlimited devices. Watch on your TV, phone, computer, or tablet. Synchronized across all platforms.
          </p>
        </motion.div>

        {/* Device Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {devices.map((device, idx) => {
            const Icon = device.icon;
            return (
              <motion.div
                key={device.name}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${device.color} p-8 backdrop-blur-sm`}
              >
                {/* Glow animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                  animate={{
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white mb-6"
                  >
                    <Icon className="h-8 w-8" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {device.name}
                  </h3>

                  {/* Platforms */}
                  <div className="space-y-3">
                    {device.platforms.map((platform) => (
                      <motion.div
                        key={platform}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-slate-300"
                      >
                        <Check className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                        <span>{platform}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="mt-8 inline-flex gap-2 text-sm text-cyan-300 font-semibold"
                  >
                    <Zap className="h-4 w-4" />
                    Instant activation
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
