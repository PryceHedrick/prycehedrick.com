"use client";
import { motion } from "framer-motion";

/**
 * AnimatedSection — use ONLY for below-the-fold content.
 * Do NOT wrap LCP elements (hero, first viewport content).
 * For hero animations, use the CSS class `animate-fade-up` instead.
 */
export function AnimatedSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
