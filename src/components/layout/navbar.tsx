"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4",
        className
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        <Link href="/" className="text-xl font-heading font-bold text-ocean">
          Mindora
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-ocean/60 hover:text-ocean transition-colors">
            Features
          </Link>
          <Link href="#companion" className="text-sm text-ocean/60 hover:text-ocean transition-colors">
            AI Companion
          </Link>
          <Link href="#mood" className="text-sm text-ocean/60 hover:text-ocean transition-colors">
            Mood
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/auth"
            className="text-sm text-ocean/70 hover:text-ocean transition-colors hidden sm:block"
          >
            Sign in
          </Link>
          <Link
            href="/onboarding"
            className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-ocean text-white text-sm font-medium hover:bg-ocean-light transition-colors shadow-calm"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
