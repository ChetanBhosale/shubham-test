import { create } from "zustand";
import type { MoodLevel, EmotionalState } from "@/types";

interface AppState {
  // User
  userName: string | null;
  setUserName: (name: string) => void;

  // Mood
  currentMood: MoodLevel | null;
  setCurrentMood: (mood: MoodLevel) => void;
  currentEmotions: EmotionalState[];
  setCurrentEmotions: (emotions: EmotionalState[]) => void;

  // Onboarding
  onboardingComplete: boolean;
  setOnboardingComplete: (complete: boolean) => void;

  // UI
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  userName: null,
  setUserName: (name) => set({ userName: name }),

  currentMood: null,
  setCurrentMood: (mood) => set({ currentMood: mood }),
  currentEmotions: [],
  setCurrentEmotions: (emotions) => set({ currentEmotions: emotions }),

  onboardingComplete: false,
  setOnboardingComplete: (complete) => set({ onboardingComplete: complete }),

  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
