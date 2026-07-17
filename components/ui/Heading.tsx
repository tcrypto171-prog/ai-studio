"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { fadeUp } from "@/lib/ui/animations";

type HeadingSize = "sm" | "md" | "lg" | "xl";

type HeadingAlign = "left" | "center" | "right";

interface HeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;

  size?: HeadingSize;
  align?: HeadingAlign;

  className?: string;

  animated?: boolean;
}

const titleSizes: Record<HeadingSize, string> = {
  sm: "text-3xl md:text-4xl",
  md: "text-4xl md:text-5xl",
  lg: "text-5xl md:text-6xl",
  xl: "text-6xl md:text-7xl",
};

const alignments: Record<HeadingAlign, string> = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
};

export default function Heading({
  eyebrow,
  title,
  subtitle,
  size = "lg",
  align = "center",
  className,
  animated = true,
}: HeadingProps) {
  const content = (
    <div
      className={cn(
        "flex flex-col gap-5 max-w-3xl",
        alignments[align],
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "font-black leading-tight tracking-tight text-white",
          titleSizes[size]
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );

  if (!animated) return content;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {content}
    </motion.div>
  );
}