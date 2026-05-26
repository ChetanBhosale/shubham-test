"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingCard } from "@/components/ui/floating-card";
import { AmbientBackground } from "@/components/animations/ambient-background";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeInUp } from "@/constants/animations";
import { Check } from "lucide-react";

const moods = [
  { emoji: "😊", label: "Great", color: "bg-mint/20 border-mint/40", glow: "glow-mint" },
  { emoji: "😌", label: "Good", color: "bg-sage/20 border-sage/40", glow: "glow-sage" },
  { emoji: "😐", label: "Okay", color: "bg-surface border-surface-dark", glow: "" },
  { emoji: "😔", label: "Low", color: "bg-lavender/10 border-lavender/30", glow: "glow-lavender" },
  { emoji: "😢", label: "Bad", color: "bg-orange/10 border-orange/30", glow: "glow-orange" },
];

const emotions = [
  "Calm", "Anxious", "Happy", "Sad", "Stressed",
  "Energetic", "Tired", "Grateful", "Lonely", "Hopeful",
  "Overwhelmed", "Peaceful",
];

export default function MoodPage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [step, setStep] = useState<"mood" | "emotions" | "done">("mood");

  const toggleEmotion = (emotion: string) => {
    setSelectedEmotions((prev) =>
      prev.includes(emotion)
        ? prev.filter((e) => e !== emotion)
        : [...prev, emotion]
    );
  };

  return (
    <div className="relative min-h-screen px-6 pt-12 pb-24">
      <AmbientBackground variant="calm" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-md mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-10">
          <h1 className="text-2xl font-heading font-bold text-ocean">
            {step === "mood" && "How are you feeling?"}
            {step === "emotions" && "What emotions are present?"}
            {step === "done" && "Logged 🌿"}
          </h1>
          <p className="text-sm text-ocean/50 mt-2">
            {step === "mood" && "Tap the one that resonates most"}
            {step === "emotions" && "Select all that apply"}
            {step === "done" && "Your mood has been recorded. Keep going."}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {step === "mood" && (
            <motion.div
              key="mood"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="flex flex-col gap-3"
            >
              {moods.map((mood, i) => (
                <motion.button
                  key={mood.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => {
                    setSelectedMood(mood.label);
                    setTimeout(() => setStep("emotions"), 400);
                  }}
                  className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 ${
                    selectedMood === mood.label
                      ? `${mood.color} ${mood.glow} scale-[1.02]`
                      : "bg-white border-transparent shadow-calm hover:shadow-elevated"
                  }`}
                >
                  <motion.span
                    className="text-3xl"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {mood.emoji}
                  </motion.span>
                  <span className="text-base font-medium text-ocean">{mood.label}</span>
                  {selectedMood === mood.label && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto w-6 h-6 rounded-full bg-mint flex items-center justify-center"
                    >
                      <Check size={14} className="text-white" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}

          {step === "emotions" && (
            <motion.div
              key="emotions"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
            >
              <div className="flex flex-wrap gap-2 justify-center mb-10">
                {emotions.map((emotion, i) => (
                  <motion.button
                    key={emotion}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => toggleEmotion(emotion)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedEmotions.includes(emotion)
                        ? "bg-mint text-white shadow-calm glow-mint"
                        : "bg-white text-ocean/60 shadow-calm hover:bg-sage/20"
                    }`}
                  >
                    {emotion}
                  </motion.button>
                ))}
              </div>

              <div className="text-center">
                <Button
                  variant="mint"
                  size="lg"
                  onClick={() => setStep("done")}
                  disabled={selectedEmotions.length === 0}
                >
                  Log My Mood
                </Button>
              </div>
            </motion.div>
          )}

          {step === "done" && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <FloatingCard glow="sage" className="inline-block mx-auto">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl mb-4"
                >
                  {moods.find((m) => m.label === selectedMood)?.emoji}
                </motion.div>
                <p className="text-sm text-ocean/60">
                  Feeling <strong>{selectedMood?.toLowerCase()}</strong> with{" "}
                  {selectedEmotions.join(", ").toLowerCase()}
                </p>
              </FloatingCard>

              <div className="mt-8">
                <Button
                  variant="glass"
                  size="lg"
                  onClick={() => {
                    setStep("mood");
                    setSelectedMood(null);
                    setSelectedEmotions([]);
                  }}
                >
                  Log Another
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
