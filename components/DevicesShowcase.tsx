"use client";

import { motion } from "framer-motion";

const devices = [
  { name: "Amazon Firestick", label: "TV streaming" },
  { name: "Android TV", label: "Living room" },
  { name: "Apple TV", label: "Premium setup" },
  { name: "Smart TVs", label: "Cinema mode" },
  { name: "Smartphones", label: "On-the-go" },
];

export default function DevicesShowcase() {
  return (
    <section id="devices" className="bg-[#050505] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-amber-300/80">Devices</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Designed for every premium screen.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">From luxurious OLED TVs to mobile devices, IPTV Aspollo delivers consistent, refined playback across every platform.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 xl:grid-cols-5">
          {devices.map((device, index) => (
            <motion.div
              key={device.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-center shadow-[0_25px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            >
              <div className="mb-5 mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-400/10 to-transparent text-amber-300 shadow-md">
                <span className="text-xl font-semibold">{device.name.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{device.name}</h3>
              <p className="mt-3 text-sm text-slate-400">{device.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
