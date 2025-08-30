"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#A7B7A7] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 border-b border-black">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-white font-medium font-montserrat">
          slfd.dev
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 font-montserrat text-[#605B58]">
          <Link href="/about" className="hover:opacity-70 transition-opacity tracking-[0.1em]">
            about
          </Link>
          <Link href="/projects" className="hover:opacity-70 transition-opacity tracking-[0.1em]">
            projects
          </Link>
          <Link href="/blogs" className="hover:opacity-70 transition-opacity tracking-[0.1em]">
            blogs
          </Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity tracking-[0.1em]">
            resume
          </a>
          <Link href="/contact" className="hover:opacity-70 transition-opacity tracking-[0.1em]">
            contact
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white font-montserrat"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4 backdrop-blur-md border-t border-[#758B80]/30 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col font-montserrat">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Link 
                  href="/about" 
                  className="block px-6 py-3 text-[#605B58] hover:bg-[#758B80]/20 hover:text-[#E7DBD1] hover:border-l-4 hover:border-[#E7DBD1] hover:pl-8 transition-all duration-300 tracking-[0.1em] border-l-4 border-transparent"
                >
                  about
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link 
                  href="/projects" 
                  className="block px-6 py-3 text-[#605B58] hover:bg-[#758B80]/20 hover:text-[#E7DBD1] hover:border-l-4 hover:border-[#E7DBD1] hover:pl-8 transition-all duration-300 tracking-[0.1em] border-l-4 border-transparent"
                >
                  projects
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link 
                  href="/blogs" 
                  className="block px-6 py-3 text-[#605B58] hover:bg-[#758B80]/20 hover:text-[#E7DBD1] hover:border-l-4 hover:border-[#E7DBD1] hover:pl-8 transition-all duration-300 tracking-[0.1em] border-l-4 border-transparent"
                >
                  blogs
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block px-6 py-3 text-[#605B58] hover:bg-[#758B80]/20 hover:text-[#E7DBD1] hover:border-l-4 hover:border-[#E7DBD1] hover:pl-8 transition-all duration-300 tracking-[0.1em] border-l-4 border-transparent"
                >
                  resume
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Link 
                  href="/contact" 
                  className="block px-6 py-3 text-[#605B58] hover:bg-[#758B80]/20 hover:text-[#E7DBD1] hover:border-l-4 hover:border-[#E7DBD1] hover:pl-8 transition-all duration-300 tracking-[0.1em] border-l-4 border-transparent"
                >
                  contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}