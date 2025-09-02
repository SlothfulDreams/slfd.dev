"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import type { Project } from "@/data/projects";
import "./yazi.css";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const renderContent = (content: string) => {
    // Simple markdown-like rendering
    return content.split("\n").map((line, i) => {
      const lineKey = `line-${i}-${line.slice(0, 20)}`;
      if (line.startsWith("# ")) {
        return <h1 key={lineKey}>{line.substring(2)}</h1>;
      } else if (line.startsWith("## ")) {
        return <h2 key={lineKey}>{line.substring(3)}</h2>;
      } else if (line.startsWith("- ") || line.startsWith("* ")) {
        return (
          <p key={lineKey} style={{ marginLeft: "16px" }}>
            • {line.substring(2)}
          </p>
        );
      } else if (line.startsWith("```")) {
        return (
          <div
            key={lineKey}
            style={{ color: "rgba(167, 183, 167, 0.6)", fontSize: "11px" }}
          >
            ---
          </div>
        );
      } else if (line.trim() === "") {
        return <div key={lineKey} style={{ height: "8px" }} />;
      } else {
        // Handle inline code
        const parts = line.split("`");
        if (parts.length > 1) {
          const rendered = parts.map((part, idx) =>
            idx % 2 === 0 ? (
              part
            ) : (
              <code key={`code-${line}-${part}`}>{part}</code>
            ),
          );
          return <p key={lineKey}>{rendered}</p>;
        } else {
          return <p key={lineKey}>{line}</p>;
        }
      }
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="yazi-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="yazi-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="yazi-modal-header">
              <div className="terminal-controls">
                <div
                  className="terminal-dot"
                  style={{ backgroundColor: "rgba(231, 219, 209, 0.8)" }}
                />
                <div
                  className="terminal-dot"
                  style={{ backgroundColor: "rgba(167, 183, 167, 0.8)" }}
                />
                <div
                  className="terminal-dot"
                  style={{ backgroundColor: "rgba(117, 139, 128, 0.8)" }}
                />
              </div>
              <span className="yazi-modal-title">
                {project.icon} {project.name}
              </span>
              <button
                type="button"
                className="yazi-modal-close"
                onClick={onClose}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onClose();
                  }
                }}
                title="Close (ESC)"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="yazi-modal-content">
              {project.tech && (
                <div className="yazi-project-meta">
                  {project.tech.map((tech) => (
                    <span key={tech} className="yazi-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {(project.github || project.demo) && (
                <div className="yazi-project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="yazi-project-link"
                    >
                      📂 GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="yazi-project-link"
                    >
                      🌐 Live Demo
                    </a>
                  )}
                </div>
              )}

              {project.content ? (
                <div>{renderContent(project.content)}</div>
              ) : (
                <div>
                  <h1>{project.name}</h1>
                  <p>{project.description}</p>
                  {project.type === "folder" && (
                    <p>
                      <em>
                        This folder contains {project.children?.length || 0}{" "}
                        items.
                      </em>
                    </p>
                  )}
                </div>
              )}

              {project.screenshots && project.screenshots.length > 0 && (
                <div style={{ marginTop: "20px" }}>
                  <h2>Screenshots</h2>
                  {project.screenshots.map((screenshot, idx) => (
                    <div
                      key={`screenshot-${screenshot.replace(/[^a-zA-Z0-9]/g, "-")}`}
                      style={{ margin: "12px 0" }}
                    >
                      <Image
                        src={screenshot}
                        alt={`${project.name} screenshot ${idx + 1}`}
                        width={800}
                        height={600}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          borderRadius: "4px",
                          border: "1px solid rgba(167, 183, 167, 0.2)",
                        }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              )}

              <div
                style={{
                  marginTop: "24px",
                  fontSize: "11px",
                  color: "rgba(231, 219, 209, 0.5)",
                  borderTop: "1px solid rgba(167, 183, 167, 0.1)",
                  paddingTop: "12px",
                }}
              >
                <p>Last modified: {project.modified.toLocaleDateString()}</p>
                {project.size && <p>Size: {project.size}</p>}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
