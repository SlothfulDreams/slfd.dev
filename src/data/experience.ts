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
  // {
  //   title: "Incoming Software Developer Intern",
  //   company: "IBM",
  //   duration: "Incoming Fall 2026",
  //   logo: "/images/companies/ibm.png",
  //   bullets: ["Coming Soon!"],
  //   tech: [],
  // },
  // {
  //   title: "Incoming Software Engineering Intern",
  //   company: "PwC",
  //   duration: "Incoming Summer 2026",
  //   logo: "/images/companies/pwc.png",
  //   bullets: ["Coming Soon!"],
  //   tech: [],
  // },
  {
    title: "Software Engineering Intern",
    company: "Thinkstruct",
    duration: "March 2026 – Present",
    location: "Cambridge, MA",
    logo: "/images/companies/thinkstruct.png",
    bullets: [
      "Engineer async claim mapping pipelines via Anthropic API with Pydantic structured outputs, processing 50+ page patent specs through token-budgeted chunking to cut prior art review time by 70%",
      "Architect RESTful API endpoints and domain models in Flask with SQLAlchemy, building a background job queue to orchestrate patent analysis tasks across dual PostgreSQL databases and LLM integrations",
      "Build an agentic support chatbot with Vercel AI SDK using SSE streaming, tool-calling RAG over internal docs, and system prompt guardrails against hallucination and legal advice, reducing support tickets by 40%",
    ],
    tech: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "PostgreSQL",
      "Anthropic API",
      "Pydantic",
      "Vercel AI SDK",
      "TypeScript",
    ],
  },
  {
    title: "AI Engineering Intern",
    company: "Coverix",
    duration: "Jan 2026 – March 2026",
    location: "Cambridge, MA",
    logo: "/images/companies/coverix.png",
    bullets: [
      "Built an LLM evaluation pipeline with chain-of-thought prompting and Pydantic structured outputs, running 200+ automated test scenarios to benchmark voice agent accuracy on tool use and lead qualification at 93%",
      "Integrated real-time transcript middleware in Express connecting Voicerun with interruption detection, leveraging Upstash Redis for sub-100ms latency across 6 production agents handling outbound calls via Twilio",
      "Architected a ReactFlow-based deployment system with drag-and-drop prompt chaining and dynamic context injection, reducing configuration time by 75% for enterprise clients",
    ],
    tech: ["TypeScript", "Express", "ReactFlow", "Upstash Redis", "Pydantic", "Twilio", "Voicerun"],
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
