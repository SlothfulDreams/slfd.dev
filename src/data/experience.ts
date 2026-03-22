export interface Experience {
  title: string;
  company: string;
  duration: string;
  description?: string;
  tech: string[];
}

export const experiences: Experience[] = [
  {
    title: "Senior Developer",
    company: "Tech Corp",
    duration: "2020 – present",
    tech: ["React", "Node.js", "AWS"],
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    duration: "2018 – 2020",
    tech: ["Vue.js", "Python", "Docker"],
  },
];
