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
    title: "Software Development Engineer Intern",
    company: "IBM",
    duration: "Aug 2026 – Present",
    logo: "/images/companies/ibm.png",
    bullets: ["IBM Bob"],
    tech: [],
  },
  {
    title: "Software Engineering Intern",
    company: "PwC",
    duration: "Jun 2026 – Aug 2026",
    location: "New York, NY",
    logo: "/images/companies/pwc.png",
    bullets: [
      "Engineered an agentic AI harness with Claude Agent SDK and computer use (UI automation), orchestrating autonomous private equity fee calculations via MCP tool-calling, reducing manual calculation time by 85%",
      "Shipped an LLM-as-judge grading pipeline with Pydantic schema validation across 6 LLM graders, catching 95% of calculation errors through independent cross-check verification and self-correcting retry loops",
      "Hardened CI/CD in GitHub Actions by enforcing 5 blocking lint, SCA, and complexity checks and migrating 2 package managers to uv lockfile-pinned builds, eliminating environment drift across local and CI environments",
    ],
    tech: [
      "Python",
      "Claude Agent SDK",
      "MCP",
      "Pydantic",
      "GitHub Actions",
      "uv",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Thinkstruct",
    duration: "Mar 2026 – Jun 2026",
    location: "Cambridge, MA",
    logo: "/images/companies/thinkstruct.png",
    bullets: [
      "Developed an agentic support chatbot with Vercel AI SDK using SSE streaming, tool-calling RAG over internal docs, and prompt guardrails against hallucination and legal advice, reducing support tickets by 40%",
      "Constructed a multilingual patent machine translation (MT) pipeline over 19M+ BigQuery records, running BERTalign alignment on EC2 GPU compute with automated quality gates to produce a validated parallel corpus",
      "Architected a self-correcting multi-agent LLM pipeline in Python that parses raw case filings and generates court-ready DOCX IPR petitions, using evaluator-optimizer loops to rewrite failing sections",
    ],
    tech: [
      "Python",
      "Vercel AI SDK",
      "TypeScript",
      "BigQuery",
      "BERTalign",
      "AWS EC2",
    ],
  },
  {
    title: "Software Engineer",
    company: "Tetracorp",
    duration: "Jan 2026 – Jun 2026",
    location: "Remote",
    logo: "/images/companies/tetracorp.svg",
    bullets: [
      "Architected and led Bluffs, a real-money iMessage gaming platform, to 23,750+ users and a Top-40 peak in Strategy on the US App Store, building a React Native app and 4 SpriteKit/SceneKit games with deterministic Box2D physics",
      "Engineered real-money Convex backend across 16 tables: idempotent integer-cents ledger, per-wager HMAC-signed geofencing, billing-matched Sumsub KYC, and 4-signal device fingerprinting to shut out fraud and balance drift",
      "Launched an LLM prediction market on Anthropic Claude API that auto-resolves real-world wagers through web-search grounding and structured tool outputs, with retry-then-void fallback and signed receipts to block tampering",
    ],
    tech: [
      "React Native",
      "SpriteKit",
      "SceneKit",
      "Box2D",
      "Convex",
      "Sumsub",
      "Anthropic API",
    ],
  },
  {
    title: "AI Engineering Intern",
    company: "Coverix",
    duration: "Jan 2026 – Mar 2026",
    location: "Cambridge, MA",
    logo: "/images/companies/coverix.png",
    bullets: [
      "Built an LLM evaluation pipeline with chain-of-thought prompting and Pydantic structured outputs, running 200+ automated test scenarios to benchmark voice agent accuracy on tool use and lead qualification at 93%",
      "Integrated real-time transcript middleware in Express connecting Voicerun with interruption detection, leveraging Upstash Redis for sub-100ms latency across 6 production agents handling outbound calls via Twilio",
      "Designed a ReactFlow-based deployment system with drag-and-drop prompt chaining and dynamic context injection, reducing configuration time by 75% for enterprise clients",
    ],
    tech: [
      "TypeScript",
      "Express",
      "ReactFlow",
      "Upstash Redis",
      "Pydantic",
      "Twilio",
      "Voicerun",
    ],
  },
];
