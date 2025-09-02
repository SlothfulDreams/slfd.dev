"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  aboutContent,
  projects as allProjects,
  blogsContent,
  contactContent,
  type Project,
} from "@/data/projects";
import { FileListPane } from "./FileListPane";
import { PreviewPane } from "./PreviewPane";
import { ProjectModal } from "./ProjectModal";
import { StatusBar } from "./StatusBar";
import "./yazi.css";

interface YaziFileManagerProps {
  initialPath?: string[];
  context?: "projects" | "about" | "blogs" | "contact";
}

export function YaziFileManager({
  initialPath = [],
  context = "projects",
}: YaziFileManagerProps) {
  const [currentPath, setCurrentPath] = useState<string[]>(initialPath);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  // Get the base content based on context
  const getBaseContent = () => {
    switch (context) {
      case "about":
        return aboutContent;
      case "blogs":
        return blogsContent;
      case "contact":
        return contactContent;
      default:
        return allProjects;
    }
  };

  const baseContent = getBaseContent();

  // Get current directory contents
  const currentProjects = useMemo(() => {
    let projects = baseContent;

    // Navigate to current path
    for (const pathSegment of currentPath) {
      const folder = projects.find(
        (p) => p.name === pathSegment && p.type === "folder",
      );
      if (folder?.children) {
        projects = folder.children;
      } else {
        // Path not found, reset to root
        setCurrentPath([]);
        return baseContent;
      }
    }

    return projects;
  }, [currentPath, baseContent]);

  // Get global directory structure for left pane
  const globalDirectories = useMemo(() => {
    return [
      {
        id: "about-global",
        name: "about",
        type: "folder" as const,
        icon: "📁",
        description: "About page content",
        modified: new Date(),
        size: "3 items",
        isActive: context === "about",
      },
      {
        id: "projects-global",
        name: "projects",
        type: "folder" as const,
        icon: "📁",
        description: "Projects page content",
        modified: new Date(),
        size: "5 items",
        isActive: context === "projects",
      },
      {
        id: "blogs-global",
        name: "blogs",
        type: "folder" as const,
        icon: "📁",
        description: "Blogs page content",
        modified: new Date(),
        size: "3 items",
        isActive: context === "blogs",
      },
    ];
  }, [context]);

  // Get child directory contents for right pane (preview)
  const childProjects = useMemo(() => {
    if (
      !selectedProject ||
      selectedProject.type !== "folder" ||
      !selectedProject.children
    ) {
      return [];
    }
    return selectedProject.children;
  }, [selectedProject]);

  const navigateUp = useCallback(() => {
    if (currentPath.length > 0) {
      const newPath = [...currentPath];
      newPath.pop();
      setCurrentPath(newPath);
    }
  }, [currentPath]);

  const navigateInto = useCallback(
    (project: Project) => {
      if (project.id === "..") {
        navigateUp();
        return;
      }

      if (project.type === "folder") {
        setCurrentPath([...currentPath, project.name]);
      }
    },
    [currentPath, navigateUp],
  );

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          if (currentPath.length > 0) {
            navigateUp();
          }
          event.preventDefault();
          break;
        case "h":
        case "ArrowLeft":
          if (currentPath.length > 0) {
            navigateUp();
            event.preventDefault();
          }
          break;
        case "l":
        case "ArrowRight":
          if (selectedProject && selectedProject.type === "folder") {
            navigateInto(selectedProject);
            event.preventDefault();
          }
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentPath, selectedProject, navigateInto, navigateUp]);

  // Auto-select first item when directory changes
  useEffect(() => {
    if (currentProjects.length > 0 && !selectedProject) {
      setSelectedProject(currentProjects[0]);
    } else if (currentProjects.length === 0) {
      setSelectedProject(null);
    } else if (
      selectedProject &&
      !currentProjects.some((p) => p.id === selectedProject.id)
    ) {
      setSelectedProject(currentProjects[0]);
    }
  }, [currentProjects, selectedProject]);

  const handleSelect = (project: Project) => {
    setSelectedProject(project);
  };

  const handleOpen = (project: Project) => {
    if (project.type === "folder") {
      navigateInto(project);
    } else if (project.type === "project" || project.type === "readme") {
      setModalProject(project);
    }
  };

  const handleCloseModal = () => {
    setModalProject(null);
  };

  return (
    <motion.div
      className="yazi-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Terminal title bar */}
      <div className="terminal-titlebar">
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
        <span className="terminal-title">
          yazi -{" "}
          {currentPath.length > 0
            ? `${context}/${currentPath.join("/")}`
            : context}
        </span>
        <div className="w-16" />
      </div>

      {/* Three-pane layout */}
      <div className="yazi-panes">
        {/* Global directories pane */}
        <FileListPane title="~" projects={globalDirectories} currentPath={[]} />

        {/* Current directory pane */}
        <FileListPane
          title="Current"
          projects={currentProjects}
          selectedId={selectedProject?.id}
          onSelect={handleSelect}
          onOpen={handleOpen}
          currentPath={currentPath}
          showParent={currentPath.length > 0}
        />

        {/* Preview/child directory pane */}
        {selectedProject?.type === "folder" && selectedProject.children ? (
          <FileListPane
            title={`${selectedProject.name}/`}
            projects={childProjects}
            currentPath={[...currentPath, selectedProject.name]}
          />
        ) : (
          <PreviewPane selectedProject={selectedProject} />
        )}
      </div>

      {/* Status bar */}
      <StatusBar
        selectedProject={selectedProject}
        currentPath={currentPath}
        totalItems={currentProjects.length}
      />

      {/* Project modal */}
      <ProjectModal
        project={modalProject}
        isOpen={!!modalProject}
        onClose={handleCloseModal}
      />
    </motion.div>
  );
}
