export interface Experience {
  title: string;
  company: string;
  duration: string;
  location?: string;
  bullets?: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    title: "Senior Developer",
    company: "Tech Corp",
    duration: "2020 – present",
    location: "USA - Remote",
    bullets: [
      "Led development of core platform features",
      "Architected scalable microservices infrastructure",
      "Mentored junior developers and conducted code reviews",
    ],
    tech: ["React", "Node.js", "AWS"],
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    duration: "2018 – 2020",
    location: "USA - Remote",
    bullets: [
      "Built and maintained full-stack web applications",
      "Implemented CI/CD pipelines and automated testing",
    ],
    tech: ["Vue.js", "Python", "Docker"],
  },
];
