import type { Variants, Transition } from "framer-motion";

/* ==========================================================================
   Easings & timing presets, cubic-bezier tuples are universally accepted
   ========================================================================== */
type CubicBezier = [number, number, number, number];

export const easeOutExpo: CubicBezier = [0.22, 1, 0.36, 1];
export const easeOutBack: CubicBezier = [0.34, 1.56, 0.64, 1];
export const easeOutQuart: CubicBezier = [0.25, 1, 0.5, 1];
export const easeInOutCubic: CubicBezier = [0.65, 0, 0.35, 1];

export const springSoft: Transition = {
  type: "spring",
  stiffness: 110,
  damping: 18,
  mass: 0.8,
};

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 22,
  mass: 0.6,
};

export const springLoose: Transition = {
  type: "spring",
  stiffness: 80,
  damping: 14,
  mass: 1,
};

/* ==========================================================================
   Original variants (preserved for backward compatibility)
   ========================================================================== */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOutExpo, delay: i * 0.12 },
  }),
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const splitWord: Variants = {
  hidden: { y: "110%" },
  show: (i: number = 0) => ({
    y: 0,
    transition: { duration: 0.9, ease: easeOutExpo, delay: 0.05 + i * 0.07 },
  }),
};

/* ==========================================================================
   Aggressive directional reveals, Framer/Webflow vibe
   ========================================================================== */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -120, filter: "blur(8px)" },
  show: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: easeOutExpo, delay: i * 0.08 },
  }),
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 120, filter: "blur(8px)" },
  show: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: easeOutExpo, delay: i * 0.08 },
  }),
};

export const slideInTop: Variants = {
  hidden: { opacity: 0, y: -100, filter: "blur(6px)" },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: easeOutExpo, delay: i * 0.08 },
  }),
};

export const slideInBottom: Variants = {
  hidden: { opacity: 0, y: 100, filter: "blur(6px)" },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: easeOutExpo, delay: i * 0.08 },
  }),
};

/* Aggressive scale-in with overshoot */
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 18,
      delay: i * 0.1,
    },
  }),
};

/* Card entry, strong, big movement */
export const cardIn: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.92, rotate: -2 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 20,
      delay: i * 0.12,
    },
  }),
};

/* Reveal via clip-path, text/image curtain */
export const revealUp: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)", y: 24 },
  show: (i: number = 0) => ({
    clipPath: "inset(0 0 0 0)",
    y: 0,
    transition: { duration: 1.1, ease: easeOutExpo, delay: i * 0.08 },
  }),
};

export const revealLeft: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show: (i: number = 0) => ({
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.3, ease: easeOutExpo, delay: i * 0.1 },
  }),
};

/* Stagger containers */
export const staggerHard: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

export const staggerFast: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

/* Letter-by-letter reveal, for hero headlines */
export const letterReveal: Variants = {
  hidden: { y: "115%", opacity: 0 },
  show: (i: number = 0) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: easeOutExpo,
      delay: 0.1 + i * 0.04,
    },
  }),
};

/* Floating idle motion (use as `animate` prop) */
export const floatIdle = {
  y: [0, -10, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

/* Common viewport preset for whileInView */
export const viewportOnce = { once: true, margin: "-80px" } as const;
export const viewportLoose = { once: true, margin: "-160px" } as const;
