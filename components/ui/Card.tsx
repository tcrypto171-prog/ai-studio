"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { cardHover } from "@/lib/ui/animations";

type CardVariant =
  | "default"
  | "glass"
  | "gradient"
  | "outlined";

type CardPadding =
  | "none"
  | "sm"
  | "md"
  | "lg";

interface CardProps {
  children: ReactNode;

  className?: string;

  variant?: CardVariant;

  padding?: CardPadding;

  hover?: boolean;

  glow?: boolean;

  fullHeight?: boolean;
}

const variants: Record<CardVariant, string> = {
  default:
    "bg-slate-900 border border-white/10",

  glass:
    "border border-white/10 bg-white/5 backdrop-blur-xl",

  gradient:
    "border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950",

  outlined:
    "border border-cyan-400/30 bg-transparent",
};

const paddings: Record<CardPadding, string> = {
  none: "p-0",

  sm: "p-4",

  md: "p-6",

  lg: "p-8",
};

export default function Card({
  children,
  className,
  variant = "glass",
  padding = "lg",
  hover = false,
  glow = false,
  fullHeight = false,
}: CardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? cardHover.whileHover
          : undefined
      }
      whileTap={
        hover
          ? cardHover.whileTap
          : undefined
      }
      transition={cardHover.transition}
      className={cn(
        "relative overflow-hidden rounded-2xl",
        variants[variant],
        paddings[padding],
        fullHeight && "h-full",
        className
      )}
    >
      {glow && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-80" />
      )}

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}