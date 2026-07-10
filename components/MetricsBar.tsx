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

      const eased =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;

      setCount(target * eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [inView, target]);

  return count;
}

export default function MetricsBar() {
  const metrics = useMemo(
    () => [
      {
        label: "Live TV Channels Worldwide",
        value: 35000,
        suffix: "+",
      },
      {
        label: "Movies & TV Shows",
        value: 150000,
        suffix: "+",
      },
      {
        label: "Server Uptime",
        value: 99.9,
        suffix: "%",
      },
      {
        label: "VIP Customer Support",
        value: 24,
        suffix: "/7",
      },
    ],
    []
  );

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    amount: 0.35,
  });

  return (
    <section
      ref={ref as any}
      className="border-y border-white/10 bg-gradient-to-b from-[#0c0c0d] to-[#111112] py-8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {metrics.map((metric) => {
            const count = useCountUp(metric.value, inView);

            const value =
              metric.value % 1 !== 0
                ? count.toFixed(1)
                : Math.round(count).toLocaleString();

            return (
              <motion.div
                key={metric.label}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-3xl border border-white/10 bg-white/5 px-6 py-7 text-center shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              >
                <div className="text-4xl font-black text-amber-400 lg:text-5xl">
                  {value}
                  {metric.suffix}
                </div>

                <p className="mt-3 text-sm font-medium text-slate-300">
                  {metric.label}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}