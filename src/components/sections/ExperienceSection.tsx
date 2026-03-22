"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { SectionHeader } from "./SectionHeader";

export function ExperienceSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader label="Experience" />

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <div key={`${exp.company}-${exp.title}`}>
            <div className="py-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[#1a1c1d]">
                    {exp.title}
                  </p>
                  <p className="text-sm text-[#6e7072]">{exp.company}</p>
                </div>
                <span className="font-mono text-[11px] text-[#6e7072] whitespace-nowrap mt-0.5">
                  {exp.duration}
                </span>
              </div>
              {exp.tech.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] text-[#6e7072] px-1.5 py-0.5 border border-[#c4c6c8] rounded-[0.125rem]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {i < experiences.length - 1 && (
              <div
                className="h-px"
                style={{
                  background: `repeating-linear-gradient(to right, var(--dot-color) 0px, var(--dot-color) 4px, transparent 4px, transparent 10px)`,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
