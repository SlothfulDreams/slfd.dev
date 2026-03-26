import fs from "fs";
import path from "path";
import type { Project } from "@/data/projects";

interface ProjectJSON {
  id: string;
  name: string;
  type: "folder" | "project" | "readme";
  icon?: string;
  description?: string;
  content?: string;
  tech?: string[];
  github?: string;
  demo?: string;
  video?: string;
  screenshots?: string[];
  order: number;
  size?: string;
}

const CONTENT_DIR = path.join(process.cwd(), "src/content/projects");

export async function loadProjects(): Promise<Project[]> {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".json"));

  const projects: Project[] = [];

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const data: ProjectJSON = JSON.parse(content);

    projects.push(data);
  }

  projects.sort((a, b) => a.order - b.order);

  return projects;
}
