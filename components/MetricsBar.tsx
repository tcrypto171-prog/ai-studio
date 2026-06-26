"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    const step = (timestamp: number) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return count;
}

export default function MetricsBar() {
  const metrics = useMemo(
    () => [
      { label: "25K+ Channels & VOD", value: 25000, suffix: "+" },
      { label: "99.9% Uptime Guarantee", value: 99.9, suffix: "%" },
      { label: "Anti-Freeze 5.0 Tech", value: 5, suffix: ".0" },
      { label: "24/7 Instant Support", value: 24, suffix: "+" },
    ],
    []
  );

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <div ref={ref as any} className="border-t border-white/6 bg-[#121214] py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {metrics.map((m) => {
            const count = useCountUp(m.value, inView);
            const formatted = typeof m.value === "number" && m.value % 1 !== 0 ? count.toFixed(1) : count.toLocaleString();
            return (
              <motion.div
                key={m.label}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6 shadow-[0_20px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl transition"
              >
                <div className="text-3xl font-semibold text-white sm:text-4xl">{formatted}{m.suffix}</div>
                <p className="mt-3 text-sm text-slate-400">{m.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
