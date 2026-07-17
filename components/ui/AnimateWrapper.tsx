"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleIn,
} from "@/lib/ui/animations";

type AnimationType =
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "fadeRight"
  | "scale";

interface AnimatedWrapperProps {
  children: ReactNode;

  animation?: AnimationType;

  delay?: number;

  duration?: number;

  once?: boolean;

  className?: string;
}

const variantsMap: Record<AnimationType, Variants> = {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scale: scaleIn,
};

export default function AnimatedWrapper({
  children,
  animation = "fadeUp",
  delay = 0,
  duration,
  once = true,
  className,
}: AnimatedWrapperProps) {
  const variant = variantsMap[animation];

  return (
    <motion.div
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.2,
      }}
      transition={{
        delay,
        ...(duration ? { duration } : {}),
      }}
    >
      {children}
    </motion.div>
  );
}