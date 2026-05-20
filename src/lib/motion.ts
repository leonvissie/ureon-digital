export const motion = {
  ease: [0.22, 1, 0.36, 1] as const,
  fast: 0.18,
  medium: 0.32,
  slow: 0.62
};

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};
