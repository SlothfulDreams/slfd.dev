export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Building Terminal-Inspired UIs",
    date: "Nov 30, 2024",
    description: "Terminal UIs are making a comeback in web design.",
  },
  {
    id: "blog-2",
    title: "React Performance Optimization",
    date: "Nov 15, 2024",
    description: "Learn how to make your React apps blazing fast.",
  },
  {
    id: "draft-1",
    title: "Next.js 15: What's New?",
    date: "Dec 2, 2024",
    description: "Exploring the latest features in Next.js 15.",
  },
];
