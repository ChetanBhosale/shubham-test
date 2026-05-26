export type MoodLevel = "great" | "good" | "okay" | "low" | "bad";

export type EmotionalState =
  | "calm"
  | "anxious"
  | "happy"
  | "sad"
  | "stressed"
  | "energetic"
  | "tired"
  | "grateful";

export interface MoodEntry {
  id: string;
  mood: MoodLevel;
  emotions: EmotionalState[];
  note?: string;
  timestamp: Date;
}

export interface ChatMessage {
  id: string;
  role: "user" | "ai";
  content: string;
  timestamp: Date;
  emotionalTone?: EmotionalState;
}

export interface OnboardingStep {
  id: string;
  question: string;
  options: string[];
  type: "single" | "multi" | "slider" | "breathing";
}

export interface UserProfile {
  id: string;
  name: string;
  currentMood?: MoodLevel;
  streak: number;
  joinedAt: Date;
}
