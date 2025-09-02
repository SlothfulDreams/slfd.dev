"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import "./yazi.css";

interface FileListPaneProps {
  title: string;
  projects: Project[];
  selectedId?: string;
  onSelect?: (project: Project) => void;
  onOpen?: (project: Project) => void;
  currentPath?: string[];
  showParent?: boolean;
  depth?: number;
}

export function FileListPane({
  title,
  projects,
  selectedId,
  onSelect,
  onOpen,
  currentPath = [],
  showParent = false,
  depth = 0,
}: FileListPaneProps) {
  const getFileIcon = (project: Project) => {
    switch (project.type) {
      case "folder":
        return "📁";
      case "readme":
        return "📄";
      case "project":
        return "💼";
      default:
        return "📄";
    }
  };

  const getFileSize = (project: Project) => {
    if (project.size) return project.size;
    if (project.type === "folder" && project.children) {
      return `${project.children.length} items`;
    }
    return "";
  };

  const handleClick = (project: Project, event: React.MouseEvent) => {
    event.preventDefault();

    // Don't allow interaction with root context folders
    if (project.id.endsWith("-root")) {
      return;
    }

    onSelect?.(project);

    // Navigate into folder on single click
    if (project.type === "folder") {
      onOpen?.(project);
    }
  };

  const handleDoubleClick = (project: Project) => {
    // Don't allow opening root context folders
    if (project.id.endsWith("-root")) {
      return;
    }

    if (project.type === "project" || project.type === "readme") {
      onOpen?.(project);
    } else if (project.type === "folder") {
      // Navigate into folder
      onOpen?.(project);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!selectedId) return;

    const currentIndex = projects.findIndex((p) => p.id === selectedId);
    if (currentIndex === -1) return;

    switch (event.key) {
      case "ArrowDown":
      case "j":
        event.preventDefault();
        if (currentIndex < projects.length - 1) {
          onSelect?.(projects[currentIndex + 1]);
        }
        break;
      case "ArrowUp":
      case "k":
        event.preventDefault();
        if (currentIndex > 0) {
          onSelect?.(projects[currentIndex - 1]);
        }
        break;
      case "Enter": {
        event.preventDefault();
        const selectedProject = projects.find((p) => p.id === selectedId);
        if (selectedProject) {
          handleDoubleClick(selectedProject);
        }
        break;
      }
    }
  };

  const renderProject = (project: Project, index: number) => {
    const isContextRoot = project.id.endsWith("-root");
    const isGlobalDir = project.id.endsWith("-global");
    const isSelected =
      !isContextRoot && !isGlobalDir && project.id === selectedId;
    const isActive =
      (project as Project & { isActive?: boolean }).isActive || false;
    const isNonInteractive = isContextRoot || isGlobalDir;

    return (
      <div key={project.id}>
        <motion.div
          className={`yazi-file-item ${isSelected ? "selected" : ""} ${isActive ? "active" : ""} ${isNonInteractive ? "non-interactive" : ""}`}
          style={
            {
              "--depth": depth,
              opacity: isActive ? 1 : isGlobalDir ? 0.7 : 1,
            } as React.CSSProperties
          }
          onClick={(e) => !isNonInteractive && handleClick(project, e)}
          onDoubleClick={() => !isNonInteractive && handleDoubleClick(project)}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isActive ? 1 : isGlobalDir ? 0.7 : 1, x: 0 }}
          transition={{ delay: index * 0.02 }}
          whileHover={!isNonInteractive ? { x: 2 } : {}}
        >
          <span className="yazi-file-icon">{getFileIcon(project)}</span>
          <span
            className="yazi-file-name"
            style={{
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "#A7B7A7" : undefined,
            }}
          >
            {project.name}
          </span>
          <span className="yazi-file-size">{getFileSize(project)}</span>
        </motion.div>
      </div>
    );
  };

  return (
    <div
      className="yazi-pane"
      role="listbox"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="yazi-pane-header">
        {title}
        {currentPath.length > 0 && (
          <span style={{ opacity: 0.6, marginLeft: "8px" }}>
            {currentPath.join("/")}
          </span>
        )}
      </div>

      <div className="yazi-file-list">
        {showParent && currentPath.length > 0 && (
          <motion.div
            className="yazi-file-item"
            onClick={() =>
              onOpen?.({
                id: "..",
                name: "← Go back",
                type: "folder",
                modified: new Date(),
                description: "Parent directory",
              } as Project)
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="yazi-file-icon">←</span>
            <span className="yazi-file-name">Go back</span>
            <span className="yazi-file-size"></span>
          </motion.div>
        )}

        {projects.map((project, index) => renderProject(project, index))}

        {projects.length === 0 && (
          <div
            style={{
              padding: "40px 12px",
              textAlign: "center",
              color: "rgba(231, 219, 209, 0.4)",
              fontStyle: "italic",
            }}
          >
            Empty directory
          </div>
        )}
      </div>
    </div>
  );
}
