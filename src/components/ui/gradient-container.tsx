"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface GradientContainerProps {
  variant?: "calm" | "emotional" | "warmth" | "ambient";
  className?: string;
  children: ReactNode;
}

export function GradientContainer({
  variant = "calm",
  className,
  children,
}: GradientContainerProps) {
  const gradientClass = {
    calm: "gradient-calm",
    emotional: "gradient-emotional",
    warmth: "gradient-warmth",
    ambient: "gradient-ambient",
  };

  return (
    <div className={cn("rounded-3xl p-8", gradientClass[variant], className)}>
      {children}
    </div>
  );
}
