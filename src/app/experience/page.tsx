"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { SubpageLayout } from "@/components/SubpageLayout";

export default function Experience() {
  return (
    <SubpageLayout title="Experiences">
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={`${exp.company}-${exp.title}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="rounded-[8px] border border-dashed border-[var(--color-outline-variant)] p-5"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-[6px] bg-[var(--color-surface)] shrink-0 border border-[var(--color-outline-variant)]" />
              <div className="flex-1 min-w-0 flex items-start justify-between gap-4">
                <div>
                  <p className="text-base font-semibold text-[var(--color-on-surface)]">
                    {exp.company}
                  </p>
                  <p className="text-sm text-[var(--color-on-surface-variant)]">
                    {exp.title}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-mono text-[11px] text-[var(--color-on-surface)] whitespace-nowrap font-medium">
                    {exp.duration}
                  </p>
                  {exp.location && (
                    <p className="font-mono text-[10px] text-[var(--color-on-surface-variant)] whitespace-nowrap">
                      {exp.location}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {exp.bullets && exp.bullets.length > 0 && (
              <ul className="space-y-2 mb-4">
                {exp.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm text-[var(--color-on-surface-variant)] list-disc ml-4"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            )}

            {exp.tech.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span key={t} className="skill-tag">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </SubpageLayout>
  );
}
