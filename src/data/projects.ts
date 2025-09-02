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

export const projects: Project[] = [
  {
    id: "portfolio",
    name: "portfolio-site.md",
    type: "readme",
    icon: "📄",
    description: "Personal portfolio website built with Next.js",
    content: `# Portfolio Website

A modern, responsive portfolio website built with cutting-edge technologies.

## Features
- ⚡ Next.js 15 with App Router
- 🎨 Tailwind CSS v4 for styling  
- 🎭 Framer Motion animations
- 📱 Fully responsive design
- 🎯 Terminal-inspired UI

## Tech Stack
- Next.js 15.5
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Biome for linting

## Performance
- Lighthouse score: 100/100
- Fast page loads with Turbopack
- Optimized images and fonts

## Links
- 📂 GitHub: https://github.com/slothy/portfolio
- 🌐 Demo: https://slfd.dev`,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/slothy/portfolio",
    demo: "https://slfd.dev",
    screenshots: [
      "/screenshots/portfolio-home.png",
      "/screenshots/portfolio-projects.png",
    ],
    modified: new Date("2024-12-01"),
    size: "2.3MB",
  },
  {
    id: "task-manager",
    name: "task-manager.md",
    type: "readme",
    icon: "📄",
    description: "Full-stack task management application",
    content: `# Task Manager Pro

A comprehensive task management application with real-time collaboration.

## Features
- 📝 Create, edit, and organize tasks
- 👥 Team collaboration
- 📊 Progress tracking
- 🔔 Real-time notifications
- 📱 Mobile-first design

## Architecture
- Frontend: React with TypeScript
- Backend: Node.js + Express
- Database: PostgreSQL
- Real-time: Socket.io
- Authentication: JWT

## Links
- 📂 GitHub: https://github.com/slothy/task-manager
- 🌐 Demo: https://tasks.slfd.dev`,
    tech: ["React", "Node.js", "PostgreSQL", "Socket.io", "TypeScript"],
    github: "https://github.com/slothy/task-manager",
    demo: "https://tasks.slfd.dev",
    modified: new Date("2024-11-20"),
    size: "5.7MB",
  },
  {
    id: "weather-app",
    name: "weather-tracker.md",
    type: "readme",
    icon: "📄",
    description: "React Native weather application",
    content: `# Weather Tracker

Beautiful weather app with detailed forecasts and location tracking.

## Features
- 🌍 Global weather data
- 📍 GPS location detection
- 📈 7-day forecasts
- 🌈 Beautiful weather animations
- 💾 Offline support

## Technical Details
- Built with React Native
- Weather API integration
- Async storage for offline data
- Custom animations with Reanimated

## Links
- 📂 GitHub: https://github.com/slothy/weather-tracker`,
    tech: ["React Native", "TypeScript", "Async Storage", "Reanimated"],
    github: "https://github.com/slothy/weather-tracker",
    modified: new Date("2024-10-15"),
    size: "12MB",
  },
  {
    id: "ui-library",
    name: "react-terminal-ui.md",
    type: "readme",
    icon: "📄",
    description: "Terminal-inspired React component library",
    content: `# React Terminal UI

A comprehensive React component library inspired by terminal interfaces.

## Components
- Terminal window with customizable themes
- Code syntax highlighting
- File tree navigator  
- Command prompt interface
- Loading animations

## Installation
\`\`\`bash
npm install react-terminal-ui
\`\`\`

## Usage
\`\`\`jsx
import { Terminal, FileTree } from 'react-terminal-ui'

<Terminal theme="dark">
  <FileTree files={fileStructure} />
</Terminal>
\`\`\`

## Links
- 📂 GitHub: https://github.com/slothy/react-terminal-ui
- 🌐 Demo: https://storybook.terminal-ui.dev`,
    tech: ["React", "TypeScript", "Rollup", "Storybook"],
    github: "https://github.com/slothy/react-terminal-ui",
    demo: "https://storybook.terminal-ui.dev",
    modified: new Date("2024-11-30"),
    size: "890KB",
  },
  {
    id: "readme",
    name: "README.md",
    type: "readme",
    icon: "📄",
    description: "About my projects",
    content: `# My Projects 🚀

Welcome to my project collection! Here you'll find documentation for various web applications, mobile apps, and open-source contributions.

## Featured Projects

### Portfolio Website
A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

### Task Manager Pro  
Full-stack task management application with real-time collaboration features.

### Weather Tracker
React Native weather application with beautiful animations and offline support.

### React Terminal UI
Open-source React component library for creating terminal-inspired interfaces.

## Tech Stack Preferences
- **Frontend**: React, Next.js, TypeScript
- **Backend**: Node.js, Python, PostgreSQL
- **Mobile**: React Native, Flutter
- **Tools**: Git, Docker, AWS

## Contact
Feel free to reach out for collaborations or questions about any projects!`,
    modified: new Date("2024-12-01"),
    size: "1.2KB",
  },
];

export function findProjectById(id: string): Project | undefined {
  const findInChildren = (items: Project[]): Project | undefined => {
    for (const item of items) {
      if (item.id === id) return item;
      if (item.children) {
        const found = findInChildren(item.children);
        if (found) return found;
      }
    }
    return undefined;
  };

  return findInChildren(projects);
}

export function getProjectPath(projectId: string): string[] {
  const path: string[] = [];
  const project = findProjectById(projectId);

  if (!project) return path;

  let current = project;
  while (current) {
    path.unshift(current.name);
    if (current.parent) {
      current = findProjectById(current.parent);
    } else {
      break;
    }
  }

  return path;
}
