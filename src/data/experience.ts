export interface Experience {
  title: string;
  company: string;
  duration: string;
  location?: string;
  logo?: string;
  bullets?: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    title: "Incoming Software Developer Intern",
    company: "IBM",
    duration: "Incoming Fall 2026",
    logo: "/images/companies/ibm.png",
    bullets: ["Coming Soon!"],
    tech: [],
  },
  {
    title: "Incoming Software Engineering Intern",
    company: "PwC",
    duration: "Incoming Summer 2026",
    logo: "/images/companies/pwc.png",
    bullets: ["Coming Soon!"],
    tech: [],
  },
  {
    title: "Software Engineering Intern",
    company: "Thinkstruct",
    duration: "March 2026 – Present",
    location: "Cambridge, MA",
    logo: "/images/companies/thinkstruct.png",
    bullets: [
      "Built an async claim mapping pipeline using Anthropic API with Pydantic structured outputs, processing 50+ page patent specifications through token-budgeted chunking to automate prior art analysis",
      "Implemented REST API endpoints and domain models in Flask with SQLAlchemy, building a background job queue to orchestrate patent analysis tasks across dual PostgreSQL databases and Anthropic LLM integrations",
      "Developing interactive claim chart UI in Next.js and React with TanStack Query for real-time job polling, featuring split-panel patent document navigation and structured Excel export",
    ],
    tech: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "PostgreSQL",
      "Next.js",
      "React",
      "TanStack Query",
      "Anthropic API",
      "Pydantic",
    ],
  },
  {
    title: "AI Engineering Intern",
    company: "Coverix",
    duration: "Jan 2026 – March 2026",
    location: "Cambridge, MA",
    logo: "/images/companies/coverix.png",
    bullets: [
      "Developed an LLM evaluation pipeline using chain-of-thought prompting and Pydantic structured outputs to assess voice agent performance on tool use, objection handling, and lead qualification",
      "Built real-time transcript middleware in Express integrating Prim voice AI with interruption detection, leveraging Upstash Redis for sub-100ms latency across 6 production agents",
      "Architected a node-based agent deployment system using ReactFlow enabling drag-and-drop prompt chaining and dynamic context injection, reducing configuration time by 75%",
    ],
    tech: ["TypeScript", "Express", "ReactFlow", "Redis", "Pydantic", "Twilio"],
  },
  {
    title: "Software Engineer",
    company: "Code4Community",
    duration: "May 2025 – Dec 2025",
    location: "Boston, MA",
    logo: "/images/companies/code4community.png",
    bullets: [
      "Integrated WordPress as a headless CMS with React and TypeScript applications through Faust.js, enabling seamless content management for 400+ monthly visitors",
      "Delivered comprehensive solutions to weekly development tasks by collaborating in Agile/Scrum sprints, emphasizing TypeScript for code quality and maintainability",
    ],
    tech: ["React", "TypeScript", "WordPress", "Faust.js"],
  },
  {
    title: "Tech Fellow / Teaching Assistant",
    company: "CodePath",
    duration: "Jun 2025 – Aug 2025",
    location: "San Francisco, CA",
    logo: "/images/companies/codepath.png",
    bullets: [
      "Delivered debugging support, clarified complex concepts, and modeled problem-solving strategies in real time",
      "Mentored and supported 20+ students in data structures and algorithms through live instruction and collaborative practice",
    ],
    tech: ["Data Structures", "Algorithms"],
  },
];
