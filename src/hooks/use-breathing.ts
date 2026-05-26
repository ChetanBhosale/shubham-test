"use client";

import { useState, useEffect, useCallback } from "react";

type BreathPhase = "inhale" | "hold" | "exhale" | "rest";

interface BreathingConfig {
  inhale: number;
  hold: number;
  exhale: number;
  rest: number;
}

const presets: Record<string, BreathingConfig> = {
  "4-7-8": { inhale: 4, hold: 7, exhale: 8, rest: 1 },
  "box": { inhale: 4, hold: 4, exhale: 4, rest: 4 },
  "calm": { inhale: 4, hold: 2, exhale: 6, rest: 2 },
};

export function useBreathing(preset: keyof typeof presets = "4-7-8") {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<BreathPhase>("rest");
  const [progress, setProgress] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);

  const config = presets[preset];

  const start = useCallback(() => setIsActive(true), []);
  const stop = useCallback(() => {
    setIsActive(false);
    setPhase("rest");
    setProgress(0);
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const phases: BreathPhase[] = ["inhale", "hold", "exhale", "rest"];
    const durations = [config.inhale, config.hold, config.exhale, config.rest];
    let phaseIndex = 0;
    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += 0.1;
      const currentDuration = durations[phaseIndex];
      setProgress(elapsed / currentDuration);

      if (elapsed >= currentDuration) {
        elapsed = 0;
        phaseIndex = (phaseIndex + 1) % phases.length;
        setPhase(phases[phaseIndex]);
        if (phaseIndex === 0) setCycleCount((c) => c + 1);
      }
    }, 100);

    setPhase("inhale");
    return () => clearInterval(interval);
  }, [isActive, config]);

  return { isActive, phase, progress, cycleCount, start, stop };
}
