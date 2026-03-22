export interface Project {
  id: string;
  name: string;
  type: "folder" | "project" | "readme";
  icon?: string;
  description?: string;
  content?: string;
  tech?: string[];
  github?: string;
  demo?: string;
  screenshots?: string[];
  children?: Project[];
  modified: Date;
  size?: string;
  parent?: string;
}

// Projects are loaded dynamically from src/content/projects/*.json
// via the API at /api/projects
