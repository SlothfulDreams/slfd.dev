"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-6 py-12 flex items-center justify-center relative">
        {/* Background Blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full opacity-30"
            style={{ backgroundColor: "#A7B7A7" }}
          />
          <div 
            className="absolute top-1/3 right-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full opacity-20"
            style={{ backgroundColor: "#758B80" }}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl relative z-10"
        >
          <div className="terminal-window">
            <div className="terminal-titlebar">
              <div className="terminal-controls">
                <div 
                  className="terminal-dot"
                  style={{ backgroundColor: "rgba(231, 219, 209, 0.8)" }}
                ></div>
                <div 
                  className="terminal-dot"
                  style={{ backgroundColor: "rgba(167, 183, 167, 0.8)" }}
                ></div>
                <div 
                  className="terminal-dot"
                  style={{ backgroundColor: "rgba(117, 139, 128, 0.8)" }}
                ></div>
              </div>
              <span className="terminal-title">about.sh</span>
              <div className="w-16"></div>
            </div>
            
            <div className="terminal-content">
              <div className="text-[#A7B7A7] mb-4">
                <span className="text-[#758B80]">$</span> cat /dev/about
              </div>
              
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h1 className="text-2xl md:text-3xl text-[#E7DBD1] mb-2">
                    {'{'} Work In Progress {'}'}
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-[#A7B7A7] leading-relaxed"
                >
                  <p className="mb-3">
                    <span className="text-[#758B80]">status:</span> under_construction
                  </p>
                  <p className="mb-3">
                    <span className="text-[#758B80]">eta:</span> coming_soon
                  </p>
                  <p className="mb-3">
                    <span className="text-[#758B80]">message:</span> "Building something awesome..."
                  </p>
                </motion.div>

                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-[#A7B7A7] mt-8"
                >
                  <span className="text-[#758B80]">$</span> 
                  <span className="ml-2">_</span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-8 pt-8 border-t border-[#A7B7A7]/20"
              >
                <div className="flex items-center justify-center space-x-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-[#A7B7A7] border-t-transparent rounded-full"
                  />
                  <span className="text-[#A7B7A7] text-sm">
                    Loading personal details...
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}