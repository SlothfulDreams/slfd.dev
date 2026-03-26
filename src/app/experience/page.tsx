"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SubpageLayout } from "@/components/SubpageLayout";
import { TechTag } from "@/components/TechTag";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <SubpageLayout title="Experiences">
      <div className="space-y-6">
        {experiences.map((exp, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <motion.div
              key={`${exp.company}-${exp.title}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="rounded-[8px] border border-dashed border-[var(--color-outline-variant)] p-4 sm:p-5"
            >
              <button
                type="button"
                className="w-full flex items-start gap-3 text-left"
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
              >
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-12 h-12 rounded-[6px] shrink-0 border border-[var(--color-outline-variant)] object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-[6px] bg-[var(--color-surface)] shrink-0 border border-[var(--color-outline-variant)]" />
                )}
                <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 sm:gap-4">
                  <div>
                    <p className="text-base font-semibold text-[var(--color-on-surface)]">
                      {exp.company}
                    </p>
                    <p className="text-sm text-[var(--color-on-surface-variant)]">
                      {exp.title}
                    </p>
                  </div>
                  <div className="sm:text-right shrink-0">
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
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className={`shrink-0 mt-1 text-[var(--color-outline-variant)] transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    {exp.bullets && exp.bullets.length > 0 && (
                      <ul className="space-y-2 mt-4 mb-4">
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
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {exp.tech.map((t) => (
                          <TechTag key={t} name={t} />
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </SubpageLayout>
  );
}
