"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SubpageLayout } from "@/components/SubpageLayout";
import { TechTag } from "@/components/TechTag";
import type { Project } from "@/data/projects";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      try {
        const res = await fetch("/api/projects");
        const data: Project[] = await res.json();
        const found = data.find((p) => p.id === id);
        setProject(found ?? null);
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    }
    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <SubpageLayout title="Project">
        <div className="py-12 text-center">
          <motion.span
            className="text-xs text-[var(--color-outline-variant)] font-mono"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading...
          </motion.span>
        </div>
      </SubpageLayout>
    );
  }

  if (!project) {
    return (
      <SubpageLayout title="Not Found">
        <p className="py-12 text-center font-mono text-sm text-[var(--color-on-surface-variant)]">
          Project not found.
        </p>
      </SubpageLayout>
    );
  }

  return (
    <SubpageLayout title={project.name}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {project.description && (
          <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed mb-4">
            {project.description}
          </p>
        )}

        <div className="flex items-center gap-3 mb-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
            >
              <svg
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <title>GitHub</title>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
            >
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Demo</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Demo
            </a>
          )}
        </div>

        {project.video && (
          <video
            src={project.video}
            className="w-full max-w-full rounded-[6px] mb-5"
            muted
            loop
            playsInline
            autoPlay
            controls
          />
        )}

        {project.screenshots && project.screenshots.length > 0 && (
          <div className="space-y-3 mb-5">
            {project.screenshots.map((src) => (
              <img
                key={src}
                src={src}
                alt={project.name}
                className="w-full max-w-full rounded-[6px]"
              />
            ))}
          </div>
        )}

        {project.content && (
          <div className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed mb-5 space-y-2 whitespace-pre-line">
            {project.content
              .split("\n")
              .filter((line) => !line.startsWith("# "))
              .map((line, i) => {
                if (line.startsWith("## ")) {
                  return (
                    <h3
                      key={i}
                      className="text-sm font-semibold text-[var(--color-on-surface)] mt-4 mb-1"
                    >
                      {line.replace("## ", "")}
                    </h3>
                  );
                }
                if (line.startsWith("- ")) {
                  return (
                    <p key={i} className="pl-3">
                      {line}
                    </p>
                  );
                }
                if (line.trim() === "") return null;
                return <p key={i}>{line}</p>;
              })}
          </div>
        )}

        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <TechTag key={t} name={t} />
            ))}
          </div>
        )}
      </motion.div>
    </SubpageLayout>
  );
}
