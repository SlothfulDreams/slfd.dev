"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Blogs() {
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
              <span className="terminal-title">blog.sh</span>
              <div className="w-16"></div>
            </div>
            
            <div className="terminal-content">
              <div className="text-[#A7B7A7] mb-4">
                <span className="text-[#758B80]">$</span> ls -la /var/blogs/
              </div>
              
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-[#A7B7A7]"
                >
                  <p className="mb-2">total 0</p>
                  <p className="mb-2">drwxr-xr-x  2 slothy  staff   64 Aug 30 23:21 .</p>
                  <p className="mb-4">drwxr-xr-x  3 slothy  staff   96 Aug 30 23:21 ..</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="text-[#A7B7A7] mb-4">
                    <span className="text-[#758B80]">$</span> echo "No posts found... yet!"
                  </div>
                  <h1 className="text-2xl md:text-3xl text-[#E7DBD1] mb-4">
                    No posts found... yet!
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="text-[#A7B7A7] leading-relaxed"
                >
                  <p className="mb-3">
                    <span className="text-[#758B80]">→</span> Brewing fresh content
                  </p>
                  <p className="mb-3">
                    <span className="text-[#758B80]">→</span> Compiling thoughts
                  </p>
                  <p className="mb-3">
                    <span className="text-[#758B80]">→</span> Debugging ideas
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
                transition={{ delay: 0.9, duration: 0.5 }}
                className="mt-8 pt-8 border-t border-[#A7B7A7]/20"
              >
                <div className="bg-[#758B80]/20 rounded px-4 py-3 text-center">
                  <p className="text-[#E7DBD1] text-sm">
                    [INFO] Blog posts will be deployed soon™
                  </p>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                      className="text-[#A7B7A7]"
                    >
                      •
                    </motion.span>
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      className="text-[#A7B7A7]"
                    >
                      •
                    </motion.span>
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                      className="text-[#A7B7A7]"
                    >
                      •
                    </motion.span>
                  </div>
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