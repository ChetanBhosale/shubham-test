"use client";

import { motion } from "framer-motion";
import { FloatingCard } from "@/components/ui/floating-card";
import { BreathingOrb } from "@/components/animations/breathing-orb";
import { AmbientBackground } from "@/components/animations/ambient-background";
import { staggerContainer, fadeInUp } from "@/constants/animations";
import {
  Wind,
  BookOpen,
  TrendingUp,
  Flame,
  Sparkles,
  Moon,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen px-6 pt-12 pb-8">
      <AmbientBackground variant="calm" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-lg mx-auto"
      >
        {/* Greeting */}
        <motion.div variants={fadeInUp} className="mb-8">
          <p className="text-sm text-ocean/50">Good morning</p>
          <h1 className="text-2xl font-heading font-bold text-ocean mt-1">
            How are you today? 🌿
          </h1>
        </motion.div>

        {/* Mood Quick Log */}
        <motion.div variants={fadeInUp}>
          <FloatingCard glass className="mb-6">
            <p className="text-sm text-ocean/60 mb-4">Quick mood check-in</p>
            <div className="flex justify-between">
              {[
                { emoji: "😊", label: "Great" },
                { emoji: "😌", label: "Good" },
                { emoji: "😐", label: "Okay" },
                { emoji: "😔", label: "Low" },
                { emoji: "😢", label: "Bad" },
              ].map((mood) => (
                <motion.button
                  key={mood.label}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center gap-1"
                >
                  <span className="text-2xl">{mood.emoji}</span>
                  <span className="text-[10px] text-ocean/40">{mood.label}</span>
                </motion.button>
              ))}
            </div>
          </FloatingCard>
        </motion.div>

        {/* Breathing Shortcut */}
        <motion.div variants={fadeInUp}>
          <FloatingCard glow="mint" className="mb-6 flex items-center gap-4">
            <BreathingOrb size="sm" color="mint" />
            <div className="flex-1">
              <h3 className="font-medium text-ocean text-sm">Take a breath</h3>
              <p className="text-xs text-ocean/50 mt-0.5">
                2 min guided breathing
              </p>
            </div>
            <Wind size={18} className="text-mint" />
          </FloatingCard>
        </motion.div>

        {/* Stats Row */}
        <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 mb-6">
          <FloatingCard className="text-center">
            <Flame size={20} className="text-orange mx-auto mb-2" />
            <p className="text-2xl font-bold text-ocean">7</p>
            <p className="text-xs text-ocean/40">Day streak</p>
          </FloatingCard>
          <FloatingCard className="text-center">
            <TrendingUp size={20} className="text-mint mx-auto mb-2" />
            <p className="text-2xl font-bold text-ocean">+12%</p>
            <p className="text-xs text-ocean/40">Mood trend</p>
          </FloatingCard>
        </motion.div>

        {/* Quick Actions */}
        <motion.div variants={fadeInUp}>
          <p className="text-sm font-medium text-ocean/60 mb-3">Quick actions</p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Sparkles, label: "AI Chat", color: "bg-lavender/10 text-lavender" },
              { icon: BookOpen, label: "Journal", color: "bg-sage/20 text-ocean" },
              { icon: Moon, label: "Sleep", color: "bg-ocean/10 text-ocean" },
            ].map((action) => (
              <motion.button
                key={action.label}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white shadow-calm hover:shadow-elevated transition-shadow"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${action.color}`}>
                  <action.icon size={18} />
                </div>
                <span className="text-xs font-medium text-ocean/70">{action.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Journal Preview */}
        <motion.div variants={fadeInUp} className="mt-6">
          <FloatingCard glow="sage">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-sage/30 flex items-center justify-center shrink-0">
                <BookOpen size={14} className="text-ocean" />
              </div>
              <div>
                <p className="text-sm font-medium text-ocean">Today&apos;s reflection</p>
                <p className="text-xs text-ocean/50 mt-1 leading-relaxed">
                  &quot;I felt calmer after the morning breathing session. Small wins matter.&quot;
                </p>
              </div>
            </div>
          </FloatingCard>
        </motion.div>
      </motion.div>
    </div>
  );
}
