"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BreathingOrb } from "@/components/animations/breathing-orb";
import { AmbientBackground } from "@/components/animations/ambient-background";
import { ChevronRight } from "lucide-react";

const steps = [
  {
    id: "welcome",
    title: "Welcome to Mindora",
    subtitle: "Let's personalize your experience",
    type: "intro" as const,
  },
  {
    id: "feeling",
    title: "How have you been feeling lately?",
    subtitle: "Be honest — there's no wrong answer here.",
    type: "single" as const,
    options: ["Great, actually", "Pretty good", "Up and down", "Not so well", "Struggling"],
  },
  {
    id: "affects",
    title: "What affects your peace most?",
    subtitle: "Select all that apply.",
    type: "multi" as const,
    options: ["Work stress", "Relationships", "Sleep issues", "Anxiety", "Loneliness", "Health", "Finances", "Self-doubt"],
  },
  {
    id: "sleep",
    title: "How is your sleep?",
    subtitle: "Sleep is the foundation of mental wellness.",
    type: "single" as const,
    options: ["I sleep great", "Mostly fine", "Inconsistent", "I struggle to sleep", "Insomnia"],
  },
  {
    id: "goals",
    title: "What do you want to improve?",
    subtitle: "We'll tailor your experience around this.",
    type: "multi" as const,
    options: ["Reduce anxiety", "Better sleep", "Self-awareness", "Build habits", "Emotional balance", "Mindfulness"],
  },
  {
    id: "breathing",
    title: "Let's take a breath together",
    subtitle: "Follow the orb. Breathe in... and out.",
    type: "breathing" as const,
  },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string[]>>({});

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleSelect = (option: string) => {
    const stepId = step.id;
    if (step.type === "single") {
      setSelections((prev) => ({ ...prev, [stepId]: [option] }));
    } else if (step.type === "multi") {
      setSelections((prev) => {
        const current = prev[stepId] || [];
        return {
          ...prev,
          [stepId]: current.includes(option)
            ? current.filter((o) => o !== option)
            : [...current, option],
        };
      });
    }
  };

  const isSelected = (option: string) => {
    return (selections[step.id] || []).includes(option);
  };

  const canProceed = step.type === "intro" || step.type === "breathing" || (selections[step.id]?.length ?? 0) > 0;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <AmbientBackground variant="calm" />

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-surface">
        <motion.div
          className="h-full bg-gradient-to-r from-mint to-sage"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center text-center"
        >
          {step.type === "intro" && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <BreathingOrb size="lg" color="mint" />
            </motion.div>
          )}

          {step.type === "breathing" && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8"
            >
              <BreathingOrb size="xl" color="sage" />
            </motion.div>
          )}

          <h1 className="text-2xl md:text-3xl font-heading font-bold text-ocean leading-tight mb-3">
            {step.title}
          </h1>
          <p className="text-base text-ocean/50 mb-10">{step.subtitle}</p>

          {(step.type === "single" || step.type === "multi") && step.options && (
            <div className="w-full grid grid-cols-2 gap-3">
              {step.options.map((option, i) => (
                <motion.button
                  key={option}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleSelect(option)}
                  className={`px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                    isSelected(option)
                      ? "bg-mint text-white shadow-calm glow-mint"
                      : "bg-white text-ocean/70 hover:bg-sage/20 shadow-calm"
                  }`}
                >
                  {option}
                </motion.button>
              ))}
            </div>
          )}

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant="mint"
              size="lg"
              onClick={() => {
                if (currentStep < steps.length - 1) {
                  setCurrentStep((prev) => prev + 1);
                }
              }}
              disabled={!canProceed}
              className="gap-2"
            >
              {currentStep === steps.length - 1 ? "Enter Mindora" : "Continue"}
              <ChevronRight size={16} />
            </Button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Step indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentStep ? "bg-mint w-6" : i < currentStep ? "bg-sage" : "bg-surface-dark"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
