"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TechTag } from "@/components/TechTag";
import { experiences } from "@/data/experience";
import { SectionHeader } from "./SectionHeader";

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader label="Experience" viewAllHref="/experience" />

      <div className="space-y-0">
        {experiences.slice(0, 4).map((exp, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <div key={`${exp.company}-${exp.title}`}>
              <motion.div
                className="py-4 px-3 -mx-3 rounded-[6px]"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
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
                      className="w-10 h-10 rounded-[6px] shrink-0 border border-[var(--color-outline-variant)] object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-[6px] bg-[var(--color-surface)] shrink-0 border border-[var(--color-outline-variant)]" />
                  )}
                  <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 sm:gap-4">
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-on-surface)]">
                        {exp.company}
                      </p>
                      <p className="text-sm text-[var(--color-on-surface-variant)]">
                        {exp.title}
                      </p>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <p className="font-mono text-[11px] text-[var(--color-on-surface-variant)] whitespace-nowrap">
                        {exp.duration}
                      </p>
                      {exp.location && (
                        <p className="font-mono text-[10px] text-[var(--color-outline-variant)] whitespace-nowrap">
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
                        <ul className="mt-3 space-y-1.5 pl-4">
                          {exp.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="text-sm text-[var(--color-on-surface-variant)] list-disc"
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
              {i < 3 && <div className="dotted-line" />}
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
