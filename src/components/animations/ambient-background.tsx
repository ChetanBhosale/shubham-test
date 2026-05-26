"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AmbientBackgroundProps {
  variant?: "calm" | "emotional" | "energetic";
  className?: string;
}

export function AmbientBackground({
  variant = "calm",
  className,
}: AmbientBackgroundProps) {
  const blobs = {
    calm: [
      { color: "bg-sage/20", size: "w-[500px] h-[500px]", position: "top-0 -left-20" },
      { color: "bg-mint/15", size: "w-[400px] h-[400px]", position: "bottom-20 right-0" },
      { color: "bg-lavender/10", size: "w-[300px] h-[300px]", position: "top-1/2 left-1/3" },
    ],
    emotional: [
      { color: "bg-lavender/25", size: "w-[500px] h-[500px]", position: "top-0 right-0" },
      { color: "bg-ocean/15", size: "w-[400px] h-[400px]", position: "bottom-0 left-0" },
      { color: "bg-mint/10", size: "w-[350px] h-[350px]", position: "top-1/3 left-1/2" },
    ],
    energetic: [
      { color: "bg-orange/20", size: "w-[450px] h-[450px]", position: "top-10 right-10" },
      { color: "bg-sage/20", size: "w-[400px] h-[400px]", position: "bottom-0 left-10" },
      { color: "bg-mint/15", size: "w-[300px] h-[300px]", position: "top-1/2 right-1/3" },
    ],
  };

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-10", className)}>
      {blobs[variant].map((blob, i) => (
        <motion.div
          key={i}
          className={cn(
            "absolute rounded-full blur-3xl",
            blob.color,
            blob.size,
            blob.position
          )}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
