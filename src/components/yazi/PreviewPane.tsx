"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import "./yazi.css";

interface PreviewPaneProps {
  selectedProject?: Project | null;
}

export function PreviewPane({ selectedProject }: PreviewPaneProps) {
  if (!selectedProject) {
    return (
      <div className="yazi-pane">
        <div className="yazi-pane-header">Preview</div>
        <div className="yazi-preview-empty">
          Select a file or folder to see preview
        </div>
      </div>
    );
  }

  const renderPreviewContent = () => {
    if (selectedProject.type === "folder") {
      return (
        <motion.div
          className="yazi-preview-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div style={{ marginBottom: "12px" }}>
            <strong style={{ color: "#A7B7A7" }}>
              📁 {selectedProject.name}
            </strong>
          </div>

          <div style={{ marginBottom: "8px", fontSize: "11px", opacity: 0.8 }}>
            Type: Directory
          </div>

          {selectedProject.children && (
            <div
              style={{ marginBottom: "12px", fontSize: "11px", opacity: 0.8 }}
            >
              Contains: {selectedProject.children.length} items
            </div>
          )}

          {selectedProject.description && (
            <div style={{ marginBottom: "12px" }}>
              {selectedProject.description}
            </div>
          )}

          {selectedProject.children && selectedProject.children.length > 0 && (
            <div>
              <div
                style={{
                  color: "#A7B7A7",
                  fontSize: "11px",
                  marginBottom: "8px",
                }}
              >
                Contents:
              </div>
              {selectedProject.children.slice(0, 10).map((child) => (
                <div
                  key={child.id}
                  style={{
                    fontSize: "11px",
                    opacity: 0.7,
                    marginBottom: "2px",
                    paddingLeft: "8px",
                  }}
                >
                  {child.type === "folder" ? "📁" : "🗂️"} {child.name}
                </div>
              ))}
              {selectedProject.children.length > 10 && (
                <div
                  style={{
                    fontSize: "11px",
                    opacity: 0.5,
                    fontStyle: "italic",
                    paddingLeft: "8px",
                  }}
                >
                  ... and {selectedProject.children.length - 10} more items
                </div>
              )}
            </div>
          )}

          <div
            style={{
              marginTop: "16px",
              fontSize: "10px",
              opacity: 0.5,
              borderTop: "1px solid rgba(167, 183, 167, 0.1)",
              paddingTop: "8px",
            }}
          >
            Modified: {selectedProject.modified.toLocaleDateString()}
          </div>
        </motion.div>
      );
    }

    if (
      selectedProject.type === "project" ||
      selectedProject.type === "readme"
    ) {
      return (
        <motion.div
          className="yazi-preview-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div style={{ marginBottom: "12px" }}>
            <strong style={{ color: "#A7B7A7" }}>
              {selectedProject.icon ||
                (selectedProject.type === "readme" ? "📄" : "🗂️")}{" "}
              {selectedProject.name}
            </strong>
          </div>

          <div style={{ marginBottom: "8px", fontSize: "11px", opacity: 0.8 }}>
            Type:{" "}
            {selectedProject.type === "readme" ? "README File" : "Project"}
          </div>

          {selectedProject.description && (
            <div style={{ marginBottom: "12px", lineHeight: 1.4 }}>
              {selectedProject.description}
            </div>
          )}

          {selectedProject.tech && selectedProject.tech.length > 0 && (
            <div style={{ marginBottom: "12px" }}>
              <div
                style={{
                  color: "#A7B7A7",
                  fontSize: "11px",
                  marginBottom: "6px",
                }}
              >
                Technologies:
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: "rgba(167, 183, 167, 0.15)",
                      color: "#A7B7A7",
                      padding: "2px 6px",
                      borderRadius: "3px",
                      fontSize: "10px",
                      border: "1px solid rgba(167, 183, 167, 0.2)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {selectedProject.content && (
            <div style={{ marginBottom: "12px" }}>
              <div
                style={{
                  color: "#A7B7A7",
                  fontSize: "11px",
                  marginBottom: "6px",
                }}
              >
                Preview:
              </div>
              <div
                style={{
                  fontSize: "11px",
                  opacity: 0.8,
                  lineHeight: 1.4,
                  maxHeight: "120px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {selectedProject.content
                  .split("\n")
                  .slice(0, 8)
                  .map((line, idx) => (
                    <div key={idx} style={{ marginBottom: "2px" }}>
                      {line.length > 50
                        ? line.substring(0, 47) + "..."
                        : line || "\u00A0"}
                    </div>
                  ))}
                {selectedProject.content.split("\n").length > 8 && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "20px",
                      background:
                        "linear-gradient(transparent, rgba(96, 91, 88, 0.5))",
                      display: "flex",
                      alignItems: "end",
                      justifyContent: "center",
                      fontSize: "10px",
                      fontStyle: "italic",
                      opacity: 0.6,
                    }}
                  >
                    ...
                  </div>
                )}
              </div>
            </div>
          )}

          {(selectedProject.github || selectedProject.demo) && (
            <div style={{ marginBottom: "12px" }}>
              <div
                style={{
                  color: "#A7B7A7",
                  fontSize: "11px",
                  marginBottom: "6px",
                }}
              >
                Links:
              </div>
              {selectedProject.github && (
                <div style={{ fontSize: "11px", marginBottom: "4px" }}>
                  📂 GitHub Repository
                </div>
              )}
              {selectedProject.demo && (
                <div style={{ fontSize: "11px", marginBottom: "4px" }}>
                  🌐 Live Demo
                </div>
              )}
            </div>
          )}

          <div
            style={{
              marginTop: "16px",
              fontSize: "10px",
              opacity: 0.5,
              borderTop: "1px solid rgba(167, 183, 167, 0.1)",
              paddingTop: "8px",
            }}
          >
            <div>Modified: {selectedProject.modified.toLocaleDateString()}</div>
            {selectedProject.size && <div>Size: {selectedProject.size}</div>}
          </div>
        </motion.div>
      );
    }

    return null;
  };

  return (
    <div className="yazi-pane">
      <div className="yazi-pane-header">Preview</div>
      {renderPreviewContent()}
    </div>
  );
}
