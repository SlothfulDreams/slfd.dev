"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogs";

export default function Blogs() {
  return (
    <main className="content-column pt-44 pb-24">
      <Link href="/" className="inline-flex items-center gap-1 font-mono text-xs text-[#6e7072] hover:text-[#000] transition-colors mb-8">
        &larr; back
      </Link>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="section-label">All Posts</span>
        <h1 className="text-2xl font-bold tracking-tight text-[#000] mb-2">
          Blog
        </h1>
        <p className="text-sm text-[#6e7072] mb-8 font-[family-name:var(--font-inter)]">
          Thoughts on code, design, and building things.
        </p>
      </motion.div>

      <div className="dotted-divider" />

      <div>
        {blogPosts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <div className="py-4 group cursor-pointer">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[#1a1c1d] group-hover:text-[#000]">
                    {post.title}
                  </p>
                  <p className="text-xs text-[#6e7072] mt-1 leading-relaxed">
                    {post.description}
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[#c4c6c8] whitespace-nowrap mt-0.5">
                  {post.date}
                </span>
              </div>
            </div>
            {i < blogPosts.length - 1 && (
              <div
                className="h-px"
                style={{
                  background: `repeating-linear-gradient(to right, var(--dot-color) 0px, var(--dot-color) 4px, transparent 4px, transparent 10px)`,
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </main>
  );
}
