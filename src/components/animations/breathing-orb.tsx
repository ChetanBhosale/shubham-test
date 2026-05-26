"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BreathingOrbProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "sage" | "mint" | "lavender" | "orange";
  className?: string;
}

const sizeMap = {
  sm: "w-24 h-24",
  md: "w-40 h-40",
  lg: "w-64 h-64",
  xl: "w-96 h-96",
};

const colorMap = {
  sage: "from-sage/60 to-sage-light/40",
  mint: "from-mint/60 to-mint-light/40",
  lavender: "from-lavender/60 to-lavender-light/40",
  orange: "from-orange/60 to-orange-light/40",
};

export function BreathingOrb({
  size = "lg",
  color = "mint",
  className,
}: BreathingOrbProps) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Outer glow */}
      <motion.div
        className={cn(
          "absolute rounded-full bg-gradient-to-br blur-3xl opacity-40",
          sizeMap[size],
          colorMap[color]
        )}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Middle layer */}
      <motion.div
        className={cn(
          "absolute rounded-full bg-gradient-to-br blur-xl opacity-60",
          size === "sm" ? "w-16 h-16" : size === "md" ? "w-28 h-28" : size === "lg" ? "w-44 h-44" : "w-64 h-64",
          colorMap[color]
        )}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      {/* Core orb */}
      <motion.div
        className={cn(
          "rounded-full bg-gradient-to-br shadow-lg",
          size === "sm" ? "w-12 h-12" : size === "md" ? "w-20 h-20" : size === "lg" ? "w-32 h-32" : "w-48 h-48",
          colorMap[color]
        )}
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
