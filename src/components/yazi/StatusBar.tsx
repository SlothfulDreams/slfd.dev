"use client";

import type { Project } from "@/data/projects";
import "./yazi.css";

interface StatusBarProps {
  selectedProject?: Project | null;
  currentPath: string[];
  totalItems: number;
  showKeyHints?: boolean;
}

export function StatusBar({
  selectedProject,
  currentPath,
  totalItems,
  showKeyHints = true,
}: StatusBarProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "2-digit",
    });
  };

  const getItemType = (project: Project) => {
    switch (project.type) {
      case "folder":
        return "DIR";
      case "project":
        return "PRJ";
      case "readme":
        return "DOC";
      default:
        return "FILE";
    }
  };

  return (
    <div className="yazi-status-bar">
      <div className="yazi-breadcrumb">
        <span style={{ color: "rgba(231, 219, 209, 0.6)" }}>~/</span>
        {currentPath.map((segment, index) => (
          <span key={index}>
            <span className="yazi-breadcrumb-separator">/</span>
            <span className="yazi-breadcrumb-item">{segment}</span>
          </span>
        ))}
        {currentPath.length === 0 && (
          <span className="yazi-breadcrumb-item">projects</span>
        )}
      </div>

      <div className="yazi-status-info">
        {selectedProject && (
          <>
            <span style={{ color: "#A7B7A7" }}>
              {getItemType(selectedProject)}
            </span>
            <span style={{ color: "rgba(231, 219, 209, 0.8)" }}>
              {selectedProject.name}
            </span>
            {selectedProject.size && (
              <span style={{ color: "rgba(231, 219, 209, 0.6)" }}>
                {selectedProject.size}
              </span>
            )}
            <span style={{ color: "rgba(231, 219, 209, 0.6)" }}>
              {formatDate(selectedProject.modified)}
            </span>
          </>
        )}

        <span style={{ color: "rgba(231, 219, 209, 0.6)" }}>
          {totalItems} items
        </span>

        {showKeyHints && (
          <span
            style={{
              color: "rgba(231, 219, 209, 0.4)",
              fontSize: "10px",
              marginLeft: "12px",
            }}
          >
            Enter:open
          </span>
        )}
      </div>
    </div>
  );
}
