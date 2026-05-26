"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface FloatingCardProps extends HTMLMotionProps<"div"> {
  glow?: "sage" | "mint" | "lavender" | "orange" | "none";
  glass?: boolean;
}

const glowMap = {
  sage: "glow-sage",
  mint: "glow-mint",
  lavender: "glow-lavender",
  orange: "glow-orange",
  none: "",
};

const FloatingCard = forwardRef<HTMLDivElement, FloatingCardProps>(
  ({ className, glow = "none", glass = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-3xl p-6",
          glass ? "glass" : "bg-white",
          "shadow-calm hover:shadow-elevated transition-shadow duration-500",
          glowMap[glow],
          className
        )}
        whileHover={{ y: -4, transition: { type: "spring", stiffness: 200, damping: 20 } }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
FloatingCard.displayName = "FloatingCard";

export { FloatingCard };
