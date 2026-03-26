"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

export function BlogsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader label="Recent Writing" viewAllHref="/blogs" />

      <div className="py-8 text-center">
        <p className="font-mono text-sm text-[var(--color-on-surface-variant)] animated-dots">
          Coming soon
        </p>
      </div>
    </motion.section>
  );
}
