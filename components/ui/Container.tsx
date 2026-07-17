"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
  full?: boolean;
  centered?: boolean;
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-[1440px]",
};

export default function Container({
  children,
  className,
  size = "2xl",
  full = false,
  centered = true,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full px-6 lg:px-8",
        centered && "mx-auto",
        !full && sizeClasses[size],
        full && "max-w-none",
        className
      )}
    >
      {children}
    </div>
  );
}