export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", icon: "typescript" },
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "js" },
      { name: "C/C++", icon: "c++" },
      { name: "C#", icon: "csharp" },
      { name: "Lua", icon: "lua" },
      { name: "SQL", icon: "sqldeveloper" },
      { name: "HTML/CSS", icon: "html5" },
      { name: "Racket", icon: "racket" },
    ],
  },
  {
    category: "Technologies",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs2" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "GraphQL", icon: "graphql" },
      { name: "FastAPI", icon: "python" },
      { name: "Flask", icon: "flask" },
      { name: "SQLAlchemy", icon: "sqlalchemy" },
      { name: "LangChain", icon: "langchain" },
      { name: "Electron", icon: "electron" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Three.js", icon: "threejs" },
      { name: "Vite", icon: "vitejs" },
      { name: "tRPC", icon: "tRPC" },
      { name: "Hono", icon: "hono" },
      { name: "Convex", icon: "convex" },
      { name: "Prisma", icon: "prisma" },
      { name: "Drizzle", icon: "drizzle" },
      { name: "Pydantic", icon: "pydanticai" },
      { name: "Clerk", icon: "clerk" },
      { name: "Supabase", icon: "supabase" },
      { name: "Shadcn/UI", icon: "shadcnui" },
      { name: "Ollama", icon: "ollama" },
      { name: "AWS", icon: "aws" },
      { name: "Docker", icon: "docker" },
      { name: "PyTorch", icon: "pytorch" },
    ],
  },
  {
    category: "Developer Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "Linux", icon: "linux" },
      { name: "Arch Linux", icon: "archlinux" },
      { name: "Nix", icon: "nixos" },
      { name: "Neovim", icon: "neovim" },
      { name: "VS Code", icon: "vscode" },
      { name: "IntelliJ", icon: "intellij" },
      { name: "Cursor", icon: "cursor" },
      { name: "Claude Code", icon: "claude" },
      { name: "Bun", icon: "bunjs" },
      { name: "GitHub Actions", icon: "github" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "SQLite", icon: "sqlite" },
      { name: "Redis", icon: "redis" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
];
