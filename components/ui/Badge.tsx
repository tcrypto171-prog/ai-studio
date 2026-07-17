"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "glass"
  | "outline";

type BadgeSize =
  | "sm"
  | "md";

interface BadgeProps {
  children: ReactNode;

  variant?: BadgeVariant;

  size?: BadgeSize;

  rounded?: boolean;

  pulse?: boolean;

  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  primary:
    "bg-cyan-500/15 text-cyan-300 border border-cyan-400/30",

  secondary:
    "bg-slate-700 text-slate-200 border border-slate-600",

  success:
    "bg-emerald-500/15 text-emerald-300 border border-emerald-400/30",

  warning:
    "bg-amber-500/15 text-amber-300 border border-amber-400/30",

  danger:
    "bg-red-500/15 text-red-300 border border-red-400/30",

  glass:
    "bg-white/5 text-white border border-white/10 backdrop-blur-xl",

  outline:
    "bg-transparent text-white border border-cyan-400/30",
};

const sizes: Record<BadgeSize, string> = {
  sm: "px-2.5 py-1 text-[10px]",

  md: "px-3 py-1.5 text-xs",
};

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  rounded = true,
  pulse = false,
  className,
}: BadgeProps) {
  return (
    <motion.span
      animate={
        pulse
          ? {
              opacity: [1, 0.75, 1],
              scale: [1, 1.05, 1],
            }
          : undefined
      }
      transition={
        pulse
          ? {
              duration: 1.8,
              repeat: Infinity,
            }
          : undefined
      }
      className={cn(
        "inline-flex items-center justify-center font-semibold uppercase tracking-wider",
        rounded ? "rounded-full" : "rounded-lg",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </motion.span>
  );
}