"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
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
            <span className="terminal-title">contact.sh</span>
            <div className="w-16"></div>
          </div>

          <div className="terminal-content">
            <div className="text-[#A7B7A7] mb-4">
              <span className="text-[#758B80]">$</span> cat ~/.contact
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h1 className="text-2xl md:text-3xl text-[#E7DBD1] mb-4">
                  Get in touch
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-[#A7B7A7] leading-relaxed space-y-3"
              >
                <div className="text-[#A7B7A7] mb-2">
                  <span className="text-[#758B80]">$</span> ls -la /dev/social
                </div>

                <div className="ml-4 space-y-2">
                  <motion.a
                    href="https://github.com/SlothfulDreams"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#A7B7A7] hover:text-[#E7DBD1] transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-[#758B80]">drwxr-xr-x</span> github{" "}
                    <span className="text-[#E7DBD1] hover:underline">
                      → /github.com/SlothfulDreams
                    </span>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/zhengbenson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#A7B7A7] hover:text-[#E7DBD1] transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-[#758B80]">drwxr-xr-x</span> linkedin{" "}
                    <span className="text-[#E7DBD1] hover:underline">
                      → /linkedin.com/in/zhengbenson
                    </span>
                  </motion.a>

                  <motion.a
                    href="mailto:zheng.ben@northeastern.edu"
                    className="block text-[#A7B7A7] hover:text-[#E7DBD1] transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-[#758B80]">-rw-r--r--</span> email{" "}
                    <span className="text-[#E7DBD1] hover:underline">
                      → zheng.ben@northeastern.edu
                    </span>
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-8 pt-8 border-t border-[#A7B7A7]/20"
              >
                <div className="text-[#A7B7A7] mb-4">
                  <span className="text-[#758B80]">$</span> echo "Feel free to
                  reach out! Always happy to connect and chat."
                </div>
                <p className="text-[#E7DBD1] mb-4">
                  Feel free to reach out! Always happy to connect and chat.
                </p>
                <p className="text-[#A7B7A7] text-sm">
                  <span className="text-[#758B80]">response_time:</span> 24-48
                  hours
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
          </div>
        </div>
      </motion.div>
    </main>
  );
}
