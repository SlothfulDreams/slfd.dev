/** Maps tech display names to tech-stack-icons icon names */
export const techIconMap: Record<string, string> = {
  // Languages
  TypeScript: "typescript",
  JavaScript: "js",
  Python: "python",
  Java: "java",
  "C/C++": "c++",
  "C#": "csharp",
  Lua: "lua",
  "HTML/CSS": "html5",
  Racket: "racket",

  // Frameworks & Libraries
  React: "react",
  "Next.js": "nextjs2",
  "Node.js": "nodejs",
  Express: "express",
  Flask: "flask",
  SQLAlchemy: "sqlalchemy",
  GraphQL: "graphql",
  LangChain: "langchain",
  "TanStack Query": "reactquery",
  WordPress: "wordpress",
  Pydantic: "pydanticai",
  PyTorch: "pytorch",
  ReactFlow: "react",

  // Cloud & Infra
  AWS: "aws",
  Docker: "docker",
  Redis: "redis",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  SQLite: "sqlite",
  MongoDB: "mongodb",

  // Tools
  Git: "git",
  Linux: "linux",
  "Arch Linux": "archlinux",
  Nix: "nixos",
  Neovim: "neovim",
  "VS Code": "vscode",
  Cursor: "cursor",
  "Claude Code": "claude",
  "GitHub Actions": "github",

  // APIs & Services
  "Anthropic API": "anthropic",
  Twilio: "twilio",
  xAI: "grok",
  Grok: "grok",
  Convex: "convex",
  "React Three Fiber": "threejs",
  "Tailwind CSS": "tailwindcss",
  Electron: "electron",
  "Three.js": "threejs",
  Vite: "vitejs",
  tRPC: "tRPC",
  Hono: "hono",
  Prisma: "prisma",
  Clerk: "clerk",
  Supabase: "supabase",
  "Shadcn/UI": "shadcnui",
  Ollama: "ollama",
  Bun: "bunjs",
  Drizzle: "drizzle",
};

/** Custom inline SVGs for icons not in tech-stack-icons */
export const customIcons: Record<string, string> = {
  intellij: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#f57c00" d="M14.125 35.188L4.438 27.563 9.25 18.625 23.062 24z"/><path fill="#1e88e5" d="M44 14.688L43.25 37.813 27.875 44 18.625 38 32.125 24z"/><path fill="#2962ff" d="M44 14.688L31.812 29.063 26.25 11 31.563 4.625z"/><path fill="#ab47bc" d="M34.688 19.625L23.25 37.188 7.25 43 9.813 34 13.125 22.875z"/><path fill="#e91e63" d="M13.125 22.875L4 19.813 9.813 4 22.313 5.5 34.688 19.625z"/><path fill="#000001" d="M11 11H36V36H11z"/><path fill="#fff" d="M14 31.5H23V33H14zM20.5 15.875L20.5 14 15.5 14 15.5 15.875 17 15.875 17 22.375 15.5 22.375 15.5 24.25 20.5 24.25 20.5 22.375 19.159 22.375 19.159 15.875zM25.375 24.5c-1.875 0-2.871-1.098-3.25-1.548l1.411-1.605c.255.282.964 1.028 1.839 1.028 1.125 0 1.375-1.125 1.375-1.75V14H29v6.625c0 .624 0 1.625-.75 2.625C27.725 23.95 26.5 24.5 25.375 24.5z"/></svg>`,
  archlinux: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#1791cf"><path fill-rule="evenodd" d="M61.113 4.886C55.82 17.788 52.629 26.23 46.738 38.749c3.613 3.805 8.047 8.242 15.246 13.25-7.742-3.168-13.02-6.347-16.969-9.648-7.539 15.644-19.351 37.933-43.324 80.77 18.844-10.817 33.45-17.485 47.059-20.032a33.989 33.989 0 0 1-.895-8.023l.024-.602c.296-12.004 6.578-21.238 14.015-20.61 7.438.626 13.223 10.872 12.922 22.876-.055 2.261-.312 4.433-.762 6.449 13.465 2.621 27.914 9.273 46.5 19.941-3.664-6.707-6.933-12.757-10.058-18.52-4.922-3.792-10.055-8.726-20.524-14.073 7.196 1.863 12.348 4.007 16.364 6.406C74.578 38.12 72.004 30.308 61.113 4.886Z"/></g></svg>`,
  express: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 24 132 80"><path fill="currentColor" d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"/></svg>`,
};
