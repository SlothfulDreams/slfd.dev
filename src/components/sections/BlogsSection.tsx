"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogs";
import { SectionHeader } from "./SectionHeader";

export function BlogsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader label="Recent Writing" viewAllHref="/blogs" />

      <div>
        {blogPosts.map((post, i) => (
          <div key={post.id}>
            <div className="py-3 group cursor-pointer">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[#1a1c1d] group-hover:text-[#000]">
                    {post.title}
                  </p>
                  <p className="text-xs text-[#6e7072] mt-0.5">
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
          </div>
        ))}
      </div>
    </motion.section>
  );
}
