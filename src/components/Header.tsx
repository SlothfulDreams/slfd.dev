"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-[var(--color-background)]">
      <nav className="max-w-[700px] mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-[#000] font-semibold tracking-tight text-base"
        >
          slfd.dev
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-6 font-mono text-xs uppercase tracking-[0.15em] text-[#6e7072]">
          <Link href="/projects" className="hover:text-[#000] transition-colors">
            projects
          </Link>
          <Link href="/blogs" className="hover:text-[#000] transition-colors">
            blogs
          </Link>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#000] transition-colors"
          >
            resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="sm:hidden text-[#000]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <title>Toggle menu</title>
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="sm:hidden max-w-[700px] mx-auto px-6 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col font-mono text-xs uppercase tracking-[0.15em] gap-1">
              <Link href="/projects" className="py-2 text-[#6e7072] hover:text-[#000] transition-colors">projects</Link>
              <Link href="/blogs" className="py-2 text-[#6e7072] hover:text-[#000] transition-colors">blogs</Link>
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="py-2 text-[#6e7072] hover:text-[#000] transition-colors">resume</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dotted bottom border */}
      <div className="dotted-divider" style={{ margin: 0 }} />
    </header>
  );
}
