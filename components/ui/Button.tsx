"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { buttonHover } from "@/lib/ui/animations";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

type ButtonSize =
  | "sm"
  | "md"
  | "lg";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;

  variant?: ButtonVariant;

  size?: ButtonSize;

  loading?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  fullWidth?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/30 hover:brightness-110",

  secondary:
    "bg-slate-800 text-white hover:bg-slate-700",

  outline:
    "border border-cyan-400/30 bg-transparent text-white hover:bg-cyan-500/10",

  ghost:
    "bg-transparent text-white hover:bg-white/5",

  danger:
    "bg-red-600 text-white hover:bg-red-500",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",

  md: "h-12 px-6 text-sm",

  lg: "h-14 px-8 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={buttonHover.whileHover}
      whileTap={buttonHover.whileTap}
      transition={buttonHover.transition}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-cyan-400/40",
        "disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        leftIcon
      )}

      <span>{children}</span>

      {!loading && rightIcon}
    </motion.button>
  );
}