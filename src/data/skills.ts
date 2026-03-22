export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript/TypeScript", "Python", "Go", "Rust"],
  },
  {
    category: "Frameworks",
    items: ["React/Next.js", "Node.js/Express", "Django", "FastAPI"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Kubernetes", "AWS/GCP"],
  },
];
