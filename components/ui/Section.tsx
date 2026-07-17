"use client";

import { ReactNode } from "react";
import Container from "./Container";
import { cn } from "@/lib/utils/cn";

type SectionSpacing = "none" | "sm" | "md" | "lg" | "xl" | "2xl";

type SectionBackground =
  | "transparent"
  | "dark"
  | "light"
  | "gradient";

interface SectionProps {
  children: ReactNode;

  id?: string;

  className?: string;

  containerClassName?: string;

  spacing?: SectionSpacing;

  background?: SectionBackground;

  container?: boolean;

  fullWidth?: boolean;

  overflow?: "visible" | "hidden";
}

const spacingClasses: Record<SectionSpacing, string> = {
  none: "",
  sm: "py-10",
  md: "py-16",
  lg: "py-24",
  xl: "py-32",
  "2xl": "py-40",
};

const backgroundClasses: Record<SectionBackground, string> = {
  transparent: "bg-transparent",

  dark: "bg-slate-950",

  light: "bg-slate-900/40",

  gradient:
    "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950",
};

export default function Section({
  children,
  id,
  className,
  containerClassName,
  spacing = "xl",
  background = "transparent",
  container = true,
  fullWidth = false,
  overflow = "hidden",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        spacingClasses[spacing],
        backgroundClasses[background],
        overflow === "hidden" && "overflow-hidden",
        className
      )}
    >
      {container ? (
        <Container
          full={fullWidth}
          className={containerClassName}
        >
          {children}
        </Container>
      ) : (
        children
      )}
    </section>
  );
}