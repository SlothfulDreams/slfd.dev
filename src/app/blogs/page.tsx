"use client";

import { motion } from "framer-motion";
import { SubpageLayout } from "@/components/SubpageLayout";
import { blogPosts } from "@/data/blogs";

export default function Blogs() {
  return (
    <SubpageLayout title="Blog">
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
                  <p className="text-sm font-medium text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)]">
                    {post.title}
                  </p>
                  <p className="text-xs text-[var(--color-on-surface-variant)] mt-1 leading-relaxed">
                    {post.description}
                  </p>
                </div>
                <span className="font-mono text-[10px] text-[var(--color-on-surface-variant)] whitespace-nowrap mt-0.5">
                  {post.date}
                </span>
              </div>
            </div>
            {i < blogPosts.length - 1 && <div className="dotted-line" />}
          </motion.div>
        ))}
      </div>
    </SubpageLayout>
  );
}
