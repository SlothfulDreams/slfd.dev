"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface SubpageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function SubpageLayout({ title, children }: SubpageLayoutProps) {
  return (
    <main className="content-column pt-8 pb-24">
      <div className="dotted-divider" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3 mb-2"
      >
        <Link
          href="/"
          className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors text-2xl font-light leading-none"
          aria-label="Back to home"
        >
          &lsaquo;
        </Link>
        <h1 className="text-xl font-bold tracking-tight text-[var(--color-primary)]">
          {title}
        </h1>
      </motion.div>

      <div className="dotted-divider" style={{ marginTop: "0.75rem" }} />

      {children}
    </main>
  );
}
