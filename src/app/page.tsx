"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { BreathingOrb } from "@/components/animations/breathing-orb";
import { AmbientBackground } from "@/components/animations/ambient-background";
import { FloatingParticles } from "@/components/animations/floating-particles";
import { FloatingCard } from "@/components/ui/floating-card";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import {
  fadeInUp,
  staggerContainer,
  easeCalm,
} from "@/constants/animations";
import {
  Brain,
  Heart,
  Moon,
  Sparkles,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24">
        <AmbientBackground variant="calm" />
        <FloatingParticles count={15} color="sage" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <BreathingOrb size="md" color="mint" />
          </motion.div>

          <motion.span
            variants={fadeInUp}
            className="inline-block text-xs font-medium uppercase tracking-[0.25em] text-mint mb-6"
          >
            Your emotional companion
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-ocean leading-[1.1] text-balance"
          >
            Your mind deserves{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-lavender">
              better software.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg md:text-xl text-ocean/60 max-w-lg leading-relaxed"
          >
            An AI-powered wellness companion that understands you. Track your mood,
            breathe deeply, and grow — one gentle moment at a time.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button variant="mint" size="lg">
              Start Your Journey
            </Button>
            <Button variant="glass" size="lg">
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-ocean/20 flex items-start justify-center p-1.5">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-ocean/40"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 px-6">
        <AmbientBackground variant="emotional" />

        <SectionHeader
          label="Features"
          title="Everything your mind needs, beautifully designed"
          description="Built with emotional intelligence at its core. Every interaction is designed to make you feel understood."
          className="mb-20"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Brain,
              title: "AI Therapist",
              description: "An emotionally intelligent companion that listens, understands, and guides you.",
              glow: "lavender" as const,
            },
            {
              icon: Heart,
              title: "Mood Tracking",
              description: "Beautiful, intuitive mood logging with emotional insights over time.",
              glow: "sage" as const,
            },
            {
              icon: Moon,
              title: "Sleep & Calm",
              description: "Guided breathing, sleep stories, and ambient soundscapes for deep rest.",
              glow: "mint" as const,
            },
            {
              icon: Sparkles,
              title: "Daily Rituals",
              description: "Micro-habits and mindful moments woven into your daily routine.",
              glow: "orange" as const,
            },
            {
              icon: MessageCircle,
              title: "Safe Space",
              description: "A judgment-free zone to express yourself, journal, and reflect.",
              glow: "lavender" as const,
            },
            {
              icon: TrendingUp,
              title: "Growth Insights",
              description: "Track your emotional growth with beautiful, calming analytics.",
              glow: "mint" as const,
            },
          ].map((feature) => (
            <motion.div key={feature.title} variants={fadeInUp}>
              <FloatingCard glow={feature.glow} className="h-full">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center">
                    <feature.icon size={22} className="text-ocean" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-ocean">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-ocean/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FloatingCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* AI Companion Preview */}
      <section id="companion" className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="AI Companion"
            title="Meet your emotionally intelligent friend"
            description="Not a chatbot. A companion that adapts to your emotional state and grows with you."
            className="mb-16"
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={easeCalm}
            className="relative max-w-md mx-auto"
          >
            <div className="glass rounded-3xl p-6 shadow-elevated">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full gradient-calm flex items-center justify-center">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ocean">Mindora AI</p>
                  <p className="text-xs text-ocean/40">Listening...</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-sage/20 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                  <p className="text-sm text-ocean/80">
                    Hey, I noticed you&apos;ve been feeling a bit low today. Want to talk about it, or would a breathing exercise help?
                  </p>
                </div>
                <div className="bg-ocean/5 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[70%] ml-auto">
                  <p className="text-sm text-ocean/70">
                    I think I just need to breathe for a moment.
                  </p>
                </div>
                <div className="bg-sage/20 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                  <p className="text-sm text-ocean/80">
                    Of course. Let&apos;s do a gentle 4-7-8 breathing together. Ready when you are. 🌿
                  </p>
                </div>
              </div>

              <motion.div
                className="mt-4 flex items-center gap-2 text-ocean/30"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-mint" />
                <span className="text-xs">Mindora is thinking with care...</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mood Section */}
      <section id="mood" className="relative py-32 px-6">
        <AmbientBackground variant="energetic" />

        <SectionHeader
          label="Mood Tracking"
          title="Feel it. Log it. Understand it."
          description="Beautiful mood tracking that makes self-awareness feel effortless and rewarding."
          className="mb-16"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={easeCalm}
          className="max-w-sm mx-auto"
        >
          <div className="glass rounded-3xl p-8 shadow-elevated text-center">
            <p className="text-sm text-ocean/50 mb-4">How are you feeling right now?</p>
            <div className="flex justify-center gap-4 mb-6">
              {["😊", "😌", "😐", "😔", "😢"].map((emoji, i) => (
                <motion.button
                  key={emoji}
                  className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-xl hover:bg-sage/30 transition-colors"
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {emoji}
                </motion.button>
              ))}
            </div>
            <p className="text-xs text-ocean/40">Tap to log your mood</p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={easeCalm}
          >
            <BreathingOrb size="sm" color="sage" className="mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-ocean leading-tight mb-6">
              Ready to feel better?
            </h2>
            <p className="text-lg text-ocean/60 mb-10 max-w-md mx-auto">
              Join thousands finding peace with Mindora. Your journey to emotional wellness starts here.
            </p>
            <Button variant="mint" size="xl">
              Begin Your Journey — It&apos;s Free
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-sage/20 px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading font-bold text-ocean text-lg">Mindora</p>
            <p className="text-sm text-ocean/40 mt-1">Your mind deserves better software.</p>
          </div>
          <p className="text-xs text-ocean/30">
            © 2026 Mindora. Built with care.
          </p>
        </div>
      </footer>
    </div>
  );
}
