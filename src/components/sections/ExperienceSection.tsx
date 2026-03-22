"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
      <SectionHeader label="Experience" />

      <div className="space-y-0">
        {experiences.map((exp, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <div key={`${exp.company}-${exp.title}`}>
              <motion.div
                className="py-4 px-3 -mx-3 rounded-[6px]"
                whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Header row: image + title/company + duration/location + toggle */}
                <button
                  type="button"
                  className="w-full flex items-start gap-3 text-left"
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                >
                  <div className="w-10 h-10 rounded-[6px] bg-[#e4e4e5] shrink-0 border border-[#c4c6c8]" />
                  <div className="flex-1 min-w-0 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-[#1a1c1d]">
                        {exp.company}
                      </p>
                      <p className="text-sm text-[#6e7072]">{exp.title}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-mono text-[11px] text-[#6e7072] whitespace-nowrap">
                        {exp.duration}
                      </p>
                      {exp.location && (
                        <p className="font-mono text-[10px] text-[#c4c6c8] whitespace-nowrap">
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
                    className={`shrink-0 mt-1 text-[#c4c6c8] transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Expandable content: bullets + tech */}
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
                              className="text-sm text-[#6e7072] list-disc"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                      {exp.tech.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              {i < experiences.length - 1 && (
                <div
                  className="h-px"
                  style={{
                    background: `repeating-linear-gradient(to right, var(--dot-color) 0px, var(--dot-color) 4px, transparent 4px, transparent 10px)`,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
