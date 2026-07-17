"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { cardHover } from "@/lib/ui/animations";

type Variant =
  | "primary"
  | "secondary"
  | "glass"
  | "gradient"
  | "success"
  | "warning"
  | "danger";

type Size =
  | "sm"
  | "md"
  | "lg"
  | "xl";

interface IconBoxProps {
  icon: ReactNode;

  variant?: Variant;

  size?: Size;

  rounded?: boolean;

  bordered?: boolean;

  hover?: boolean;

  pulse?: boolean;

  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-cyan-500/15 text-cyan-300",

  secondary:
    "bg-slate-800 text-white",

  glass:
    "bg-white/5 backdrop-blur-xl text-white",

  gradient:
    "bg-gradient-to-br from-cyan-400 to-blue-500 text-slate-950",

  success:
    "bg-emerald-500/15 text-emerald-300",

  warning:
    "bg-amber-500/15 text-amber-300",

  danger:
    "bg-red-500/15 text-red-300",
};

const sizes: Record<Size, string> = {
  sm: "h-10 w-10 text-lg",

  md: "h-14 w-14 text-xl",

  lg: "h-16 w-16 text-2xl",

  xl: "h-20 w-20 text-3xl",
};

export default function IconBox({
  icon,

  variant = "glass",

  size = "md",

  rounded = true,

  bordered = true,

  hover = true,

  pulse = false,

  className,
}: IconBoxProps) {
  const content = (
    <div
      className={cn(
        "relative flex items-center justify-center shadow-lg transition-all duration-200",

        rounded ? "rounded-2xl" : "rounded-lg",

        bordered && "border border-white/10",

        variants[variant],

        sizes[size],

        className
      )}
    >
      {pulse && (
        <motion.div
          className="absolute inset-0 rounded-inherit border border-cyan-400/40"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      )}

      <div className="relative z-10 flex items-center justify-center">
        {icon}
      </div>
    </div>
  );

  if (!hover) {
    return content;
  }

  return (
    <motion.div
      whileHover={cardHover.whileHover}
      whileTap={cardHover.whileTap}
      transition={cardHover.transition}
    >
      {content}
    </motion.div>
  );
}