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

// About page content
export const aboutContent: Project[] = [
  {
    id: "bio",
    name: "bio.md",
    type: "readme",
    icon: "📄",
    description: "Personal biography",
    content: `# About Me

I'm a passionate developer who loves building things with code.

## Skills
- Full-stack development
- System design
- Open source contribution
- Technical writing

## Interests
- Terminal UIs
- Developer tools
- Web performance
- Clean code

## Currently
- 🔭 Working on multiple web projects
- 🌱 Learning new technologies
- 👯 Looking to collaborate on open source`,
    modified: new Date("2024-12-01"),
    size: "2.1KB",
  },
  {
    id: "experience",
    name: "experience.json",
    type: "project",
    icon: "💼",
    description: "Professional experience",
    content: `{
  "positions": [
    {
      "title": "Senior Developer",
      "company": "Tech Corp",
      "duration": "2020-present",
      "tech": ["React", "Node.js", "AWS"]
    },
    {
      "title": "Full Stack Developer",
      "company": "StartupXYZ",
      "duration": "2018-2020",
      "tech": ["Vue.js", "Python", "Docker"]
    }
  ]
}`,
    modified: new Date("2024-11-20"),
    size: "1.5KB",
  },
  {
    id: "skills",
    name: "skills.yaml",
    type: "project",
    icon: "💼",
    description: "Technical skills",
    content: `languages:
  - JavaScript/TypeScript
  - Python
  - Go
  - Rust

frameworks:
  - React/Next.js
  - Node.js/Express
  - Django
  - FastAPI

tools:
  - Git
  - Docker
  - Kubernetes
  - AWS/GCP`,
    modified: new Date("2024-11-15"),
    size: "890B",
  },
];

// Blogs page content
export const blogsContent: Project[] = [
  {
    id: "blog-folder",
    name: "2024",
    type: "folder",
    icon: "📁",
    description: "Blog posts from 2024",
    modified: new Date("2024-12-01"),
    size: "3 items",
    children: [
      {
        id: "blog-1",
        name: "building-terminal-ui.md",
        type: "readme",
        icon: "📄",
        description: "How to build terminal-inspired UIs",
        content: `# Building Terminal-Inspired UIs

Published: Nov 30, 2024

Terminal UIs are making a comeback in web design...

## Why Terminal UIs?
- Nostalgic appeal
- Developer-friendly
- Unique aesthetic
- Fast and efficient

## Implementation Tips
- Use monospace fonts
- Green on black color scheme
- Cursor animations
- Command-line interactions`,
        modified: new Date("2024-11-30"),
        size: "4.2KB",
        parent: "blog-folder",
      },
      {
        id: "blog-2",
        name: "react-performance.md",
        type: "readme",
        icon: "📄",
        description: "React performance optimization tips",
        content: `# React Performance Optimization

Published: Nov 15, 2024

Learn how to make your React apps blazing fast...

## Key Techniques
- Code splitting
- Lazy loading
- Memoization
- Virtual scrolling

## Tools
- React DevTools Profiler
- Lighthouse
- Bundle analyzers`,
        modified: new Date("2024-11-15"),
        size: "3.8KB",
        parent: "blog-folder",
      },
    ],
  },
  {
    id: "drafts",
    name: "drafts",
    type: "folder",
    icon: "📁",
    description: "Unpublished drafts",
    modified: new Date("2024-12-02"),
    size: "1 item",
    children: [
      {
        id: "draft-1",
        name: "nextjs-15-review.md",
        type: "readme",
        icon: "📄",
        description: "Next.js 15 features review",
        content: `# Next.js 15: What's New?

[DRAFT - Work in Progress]

Exploring the latest features in Next.js 15...`,
        modified: new Date("2024-12-02"),
        size: "1.2KB",
        parent: "drafts",
      },
    ],
  },
];

// Contact page content
export const contactContent: Project[] = [
  {
    id: "email",
    name: "email.txt",
    type: "readme",
    icon: "📄",
    description: "Email contact",
    content: `hello@slfd.dev`,
    modified: new Date("2024-12-01"),
    size: "14B",
  },
  {
    id: "social",
    name: "social.json",
    type: "project",
    icon: "💼",
    description: "Social media links",
    content: `{
  "github": "https://github.com/slothy",
  "twitter": "https://twitter.com/slothy",
  "linkedin": "https://linkedin.com/in/slothy"
}`,
    modified: new Date("2024-12-01"),
    size: "156B",
  },
];

// Projects are now loaded dynamically from src/content/projects/*.json
// via the API at /api/projects
