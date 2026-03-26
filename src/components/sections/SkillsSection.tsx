"use client";

import { motion } from "framer-motion";
import { TechTag } from "@/components/TechTag";
import { skills } from "@/data/skills";
import { SectionHeader } from "./SectionHeader";

export function SkillsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader label="Skills & Tools" />

      <div className="space-y-4">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="font-mono text-[10px] text-[var(--color-outline-variant)] uppercase tracking-[0.15em] mb-2">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <TechTag key={item.name} name={item.name} iconKey={item.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
