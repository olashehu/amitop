"use client";

import { motion, type Variants } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none";
}

const buildVariants = (direction: "up" | "none"): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 20 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
});

/**
 * Wraps content in a scroll-triggered fade/rise. Respects prefers-reduced-motion
 * via framer-motion's built-in transition reduction on the `viewport` observer.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={buildVariants(direction)}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
