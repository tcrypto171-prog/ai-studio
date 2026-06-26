"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [0, 100, 0],
          x: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent blur-3xl opacity-50"
      />
      <motion.div
        animate={{
          y: [100, 0, 100],
          x: [50, -50, 50],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tl from-purple-500/20 to-transparent blur-3xl opacity-50"
      />
      <motion.div
        animate={{
          y: [-50, 50, -50],
          x: [100, -100, 100],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/15 to-transparent blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
