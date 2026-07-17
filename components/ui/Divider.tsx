"use client";

import { cn } from "@/lib/utils/cn";

type DividerOrientation = "horizontal" | "vertical";

type DividerVariant =
  | "default"
  | "gradient"
  | "glow";

interface DividerProps {
  orientation?: DividerOrientation;

  variant?: DividerVariant;

  className?: string;
}

export default function Divider({
  orientation = "horizontal",
  variant = "default",
  className,
}: DividerProps) {
  const horizontal = orientation === "horizontal";

  const variants = {
    default:
      "bg-white/10",

    gradient:
      "bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent",

    glow:
      "bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.35)]",
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        horizontal
          ? "h-px w-full"
          : "h-full w-px",

        variants[variant],

        className
      )}
    />
  );
}