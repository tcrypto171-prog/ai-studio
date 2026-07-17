"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

type GlowColor =
  | "cyan"
  | "blue"
  | "purple"
  | "emerald"
  | "amber"
  | "red"
  | "white";

type GlowSize =
  | "sm"
  | "md"
  | "lg"
  | "xl";

interface GlowProps {
  color?: GlowColor;

  size?: GlowSize;

  animated?: boolean;

  className?: string;
}

const colors: Record<GlowColor, string> = {
  cyan: "bg-cyan-500/30",

  blue: "bg-blue-500/30",

  purple: "bg-purple-500/30",

  emerald: "bg-emerald-500/30",

  amber: "bg-amber-500/30",

  red: "bg-red-500/30",

  white: "bg-white/20",
};

const sizes: Record<GlowSize, string> = {
  sm: "h-32 w-32",

  md: "h-52 w-52",

  lg: "h-72 w-72",

  xl: "h-[30rem] w-[30rem]",
};

export default function Glow({
  color = "cyan",

  size = "lg",

  animated = true,

  className,
}: GlowProps) {
  if (!animated) {
    return (
      <div
        className={cn(
          "absolute rounded-full blur-[120px]",
          colors[color],
          sizes[size],
          className
        )}
      />
    );
  }

  return (
    <motion.div
      animate={{
        scale: [1, 1.08, 1],
        opacity: [0.25, 0.45, 0.25],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute rounded-full blur-[120px]",
        colors[color],
        sizes[size],
        className
      )}
    />
  );
}