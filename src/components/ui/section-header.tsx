"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp } from "@/constants/animations";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {label && (
        <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-mint mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ocean leading-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-ocean/60 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
