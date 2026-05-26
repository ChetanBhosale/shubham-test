"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BreathingOrb } from "@/components/animations/breathing-orb";
import { AmbientBackground } from "@/components/animations/ambient-background";
import { fadeInUp, staggerContainer } from "@/constants/animations";

export default function AuthPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signup");

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-12">
      <AmbientBackground variant="emotional" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-sm mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <BreathingOrb size="sm" color="lavender" className="mx-auto mb-6" />
          <h1 className="text-2xl font-heading font-bold text-ocean">
            {mode === "signup" ? "Begin your journey" : "Welcome back"}
          </h1>
          <p className="text-sm text-ocean/50 mt-2">
            {mode === "signup"
              ? "Create your safe space in seconds"
              : "Your calm space is waiting"}
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div className="glass rounded-3xl p-6 shadow-elevated">
            <div className="space-y-4">
              {mode === "signup" && (
                <div>
                  <label className="text-xs font-medium text-ocean/60 mb-1.5 block">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="What should we call you?"
                    className="w-full h-11 px-4 rounded-xl bg-surface text-sm text-ocean placeholder:text-ocean/30 outline-none focus:ring-2 focus:ring-mint/30 transition-all"
                  />
                </div>
              )}
              <div>
                <label className="text-xs font-medium text-ocean/60 mb-1.5 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full h-11 px-4 rounded-xl bg-surface text-sm text-ocean placeholder:text-ocean/30 outline-none focus:ring-2 focus:ring-mint/30 transition-all"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-ocean/60 mb-1.5 block">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-11 px-4 rounded-xl bg-surface text-sm text-ocean placeholder:text-ocean/30 outline-none focus:ring-2 focus:ring-mint/30 transition-all"
                />
              </div>

              <Button variant="mint" size="lg" className="w-full mt-2">
                {mode === "signup" ? "Create My Space" : "Sign In"}
              </Button>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setMode(mode === "signup" ? "signin" : "signup")}
                className="text-xs text-ocean/40 hover:text-ocean/70 transition-colors"
              >
                {mode === "signup"
                  ? "Already have an account? Sign in"
                  : "New here? Create an account"}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
