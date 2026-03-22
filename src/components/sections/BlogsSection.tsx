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
            <motion.div
              className="py-3 px-3 -mx-3 rounded-[6px] group cursor-pointer"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)]">
                    {post.title}
                  </p>
                  <p className="text-xs text-[var(--color-on-surface-variant)] mt-0.5">
                    {post.description}
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[var(--color-on-surface-variant)] whitespace-nowrap mt-0.5">
                  {post.date}
                </span>
              </div>
            </motion.div>
            {i < blogPosts.length - 1 && <div className="dotted-line" />}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
