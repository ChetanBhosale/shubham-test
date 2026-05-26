import type { Variants, Transition } from "framer-motion";

// Shared transitions
export const springSmooth: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 0.8,
};

export const springGentle: Transition = {
  type: "spring",
  stiffness: 60,
  damping: 15,
  mass: 1,
};

export const easePremium: Transition = {
  duration: 0.8,
  ease: [0.25, 0.46, 0.45, 0.94],
};

export const easeCalm: Transition = {
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1],
};

// Reusable animation variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: easePremium },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: springSmooth },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: easePremium },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: easePremium },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const breathingAnimation = {
  scale: [1, 1.08, 1],
  opacity: [0.6, 1, 0.6],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const floatingAnimation = {
  y: [0, -12, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const glowPulse = {
  opacity: [0.4, 0.8, 0.4],
  scale: [1, 1.05, 1],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};
