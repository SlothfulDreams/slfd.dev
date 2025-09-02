"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 relative">
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

      {/* Terminal Windows Container */}
      <div className="relative z-10 w-2/3 sm:w-full max-w-6xl">
        {/* Mobile Layout (< 640px) */}
        <div className="sm:hidden flex flex-col items-center gap-4 py-2">
          <motion.div
            className="terminal-window w-11/12 max-w-sm"
            style={{ transform: "rotate(-0.5deg)" }}
            initial={{ opacity: 0, y: 20, rotate: -0.5 }}
            animate={{ opacity: 1, y: 0, rotate: -0.5 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
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
              <div className="terminal-title text-xs">~/about/benson</div>
              <div className="w-10"></div>
            </div>
            <div className="terminal-content">
              <div className="text-xs opacity-60 mb-3">
                <span style={{ color: "#A7B7A7" }}>$</span>
                <span style={{ color: "#E7DBD1" }}> cat profile.txt</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <Image
                    src="/SlothCat.gif"
                    alt="Sloth Cat"
                    width={80}
                    height={80}
                    className="rounded-lg"
                    priority
                    unoptimized
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-sm mb-1" style={{ color: "#E7DBD1" }}>
                    hey i'm benson
                  </h1>
                  <p
                    className="text-xs opacity-80"
                    style={{ color: "#A7B7A7" }}
                  >
                    i try to build cool stuff
                  </p>
                </div>
              </div>
              <div className="mt-4 text-xs opacity-60">
                <span style={{ color: "#A7B7A7" }}>$</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{ color: "#E7DBD1" }}
                >
                  _
                </motion.span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="terminal-window w-11/12 max-w-xs"
            style={{ transform: "rotate(0.5deg)" }}
            initial={{ opacity: 0, y: 20, rotate: 0.5 }}
            animate={{ opacity: 1, y: 0, rotate: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
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
              <div className="terminal-title text-xs">benson@slfd.dev</div>
              <div className="w-10"></div>
            </div>
            <div className="terminal-content">
              <div className="text-xs opacity-60 mb-2">
                <span style={{ color: "#A7B7A7" }}>$</span>
                <span style={{ color: "#E7DBD1" }}> neofetch</span>
              </div>
              <div className="mb-1 text-xs">
                <span style={{ color: "#A7B7A7", fontWeight: "bold" }}>
                  benson
                </span>
                <span style={{ color: "#758B80" }}>@</span>
                <span style={{ color: "#A7B7A7", fontWeight: "bold" }}>
                  slfd.dev
                </span>
              </div>
              <div
                className="mb-1 text-xs"
                style={{ color: "rgba(167, 183, 167, 0.6)" }}
              >
                {"─".repeat(16)}
              </div>
              <div className="space-y-0.5 text-xs">
                <div className="flex">
                  <span style={{ color: "#A7B7A7", minWidth: "60px" }}>
                    OS:
                  </span>
                  <span style={{ color: "#E7DBD1" }}>
                    Northeastern University
                  </span>
                </div>
                <div className="flex">
                  <span style={{ color: "#A7B7A7", minWidth: "60px" }}>
                    Kernel:
                  </span>
                  <span style={{ color: "#E7DBD1" }}>Computer Science</span>
                </div>
                <div className="flex">
                  <span style={{ color: "#A7B7A7", minWidth: "60px" }}>
                    Shell:
                  </span>
                  <span style={{ color: "#E7DBD1" }}>Sophomore Year</span>
                </div>
                <div className="flex">
                  <span style={{ color: "#A7B7A7", minWidth: "60px" }}>
                    Location:
                  </span>
                  <span style={{ color: "#E7DBD1" }}>Boston, MA</span>
                </div>
                <div className="flex">
                  <span style={{ color: "#A7B7A7", minWidth: "60px" }}>
                    DE:
                  </span>
                  <span style={{ color: "#E7DBD1" }}>
                    Full-stack Development
                  </span>
                </div>
                <div className="flex">
                  <span style={{ color: "#A7B7A7", minWidth: "60px" }}>
                    CPU:
                  </span>
                  <span style={{ color: "#E7DBD1" }}>
                    Sloth-powered Processor
                  </span>
                </div>
                <div className="flex">
                  <span style={{ color: "#A7B7A7", minWidth: "60px" }}>
                    Memory:
                  </span>
                  <span style={{ color: "#E7DBD1" }}>
                    32GB of Procrastination
                  </span>
                </div>
              </div>
              <div className="mt-2 flex gap-1 text-xs">
                <span style={{ color: "#E7DBD1" }}>●</span>
                <span style={{ color: "#A7B7A7" }}>●</span>
                <span style={{ color: "#758B80" }}>●</span>
                <span style={{ color: "#60696A" }}>●</span>
                <span style={{ color: "#605B58" }}>●</span>
              </div>
              <div className="mt-2 text-xs opacity-60">
                <span style={{ color: "#A7B7A7" }}>$</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.4,
                  }}
                  style={{ color: "#E7DBD1" }}
                >
                  _
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Medium+ Layout (≥ 640px) - Overlapping */}
        <div className="hidden sm:block relative min-h-[500px] lg:min-h-[600px] w-full">
          {/* About Terminal Window - Top Layer */}
          <motion.div
            className="absolute top-1/2 left-[15%] sm:left-[10%] lg:left-[20%] transform -translate-y-[80%]"
            style={{
              zIndex: 15,
              width: "clamp(260px, 35vw, 380px)",
              maxWidth: "85vw",
              maxHeight: "40vh",
            }}
            initial={{ opacity: 0, y: 30, rotate: -0.8 }}
            animate={{ opacity: 1, y: 0, rotate: -0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              y: -8,
              rotate: -0.3,
              scale: 1.02,
              zIndex: 20,
              transition: { duration: 0.3 },
            }}
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
                <div className="terminal-title text-xs md:text-sm">
                  ~/about/benson
                </div>
                <div className="w-12 md:w-14"></div>
              </div>

              <div className="terminal-content">
                <div className="flex-1">
                  <div className="text-xs opacity-60 mb-3 md:mb-4">
                    <span style={{ color: "#A7B7A7" }}>$</span>
                    <span style={{ color: "#E7DBD1" }}> cat profile.txt</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="mb-4 md:mb-6">
                      <Image
                        src="/SlothCat.gif"
                        alt="Sloth Cat"
                        width={140}
                        height={140}
                        className="rounded-lg w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
                        priority
                      />
                    </div>
                    <div className="text-center">
                      <h1
                        className="text-base md:text-lg lg:text-xl mb-1 md:mb-2"
                        style={{ color: "#E7DBD1" }}
                      >
                        hey i'm benson
                      </h1>
                      <p
                        className="text-sm md:text-base opacity-80"
                        style={{ color: "#A7B7A7" }}
                      >
                        i try to build cool stuff
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-6 text-xs opacity-60">
                  <span style={{ color: "#A7B7A7" }}>$</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    style={{ color: "#E7DBD1" }}
                  >
                    _
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Neofetch Terminal Window - Bottom Layer (Overlapping) */}
          <motion.div
            className="absolute top-1/2 right-[15%] sm:right-[10%] lg:right-[20%] transform -translate-y-[30%]"
            style={{
              zIndex: 5,
              width: "clamp(280px, 38vw, 420px)",
              maxWidth: "85vw",
              maxHeight: "45vh",
            }}
            initial={{ opacity: 0, y: 50, rotate: 1 }}
            animate={{ opacity: 1, y: 0, rotate: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            whileHover={{
              y: -8,
              rotate: 0.3,
              scale: 1.02,
              zIndex: 20,
              transition: { duration: 0.3 },
            }}
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
                <div className="terminal-title text-xs md:text-sm">
                  benson@slfd.dev
                </div>
                <div className="w-12 md:w-14"></div>
              </div>

              <div className="terminal-content">
                <div className="flex-1">
                  <div className="text-xs opacity-60 mb-3 md:mb-4">
                    <span style={{ color: "#A7B7A7" }}>$</span>
                    <span style={{ color: "#E7DBD1" }}> neofetch</span>
                  </div>

                  <div className="mb-2 md:mb-3 text-sm md:text-base">
                    <span style={{ color: "#A7B7A7", fontWeight: "bold" }}>
                      benson
                    </span>
                    <span style={{ color: "#758B80" }}>@</span>
                    <span style={{ color: "#A7B7A7", fontWeight: "bold" }}>
                      slfd.dev
                    </span>
                  </div>
                  <div
                    className="mb-2 md:mb-3 text-xs"
                    style={{ color: "rgba(167, 183, 167, 0.6)" }}
                  >
                    {"─".repeat(20)}
                  </div>

                  <div className="space-y-1 text-xs md:text-sm">
                    <div className="flex">
                      <span
                        style={{ color: "#A7B7A7", minWidth: "80px" }}
                        className="md:min-w-[100px]"
                      >
                        OS:
                      </span>
                      <span style={{ color: "#E7DBD1" }}>
                        Northeastern University
                      </span>
                    </div>
                    <div className="flex">
                      <span
                        style={{ color: "#A7B7A7", minWidth: "80px" }}
                        className="md:min-w-[100px]"
                      >
                        Kernel:
                      </span>
                      <span style={{ color: "#E7DBD1" }}>Computer Science</span>
                    </div>
                    <div className="flex">
                      <span
                        style={{ color: "#A7B7A7", minWidth: "80px" }}
                        className="md:min-w-[100px]"
                      >
                        Shell:
                      </span>
                      <span style={{ color: "#E7DBD1" }}>Sophomore Year</span>
                    </div>
                    <div className="flex">
                      <span
                        style={{ color: "#A7B7A7", minWidth: "80px" }}
                        className="md:min-w-[100px]"
                      >
                        Location:
                      </span>
                      <span style={{ color: "#E7DBD1" }}>Boston, MA</span>
                    </div>
                    <div className="flex">
                      <span
                        style={{ color: "#A7B7A7", minWidth: "80px" }}
                        className="md:min-w-[100px]"
                      >
                        DE:
                      </span>
                      <span style={{ color: "#E7DBD1" }}>
                        Full-stack Development
                      </span>
                    </div>
                    <div className="flex">
                      <span
                        style={{ color: "#A7B7A7", minWidth: "80px" }}
                        className="md:min-w-[100px]"
                      >
                        CPU:
                      </span>
                      <span style={{ color: "#E7DBD1" }}>
                        Sloth-powered Processor
                      </span>
                    </div>
                    <div className="flex">
                      <span
                        style={{ color: "#A7B7A7", minWidth: "80px" }}
                        className="md:min-w-[100px]"
                      >
                        Memory:
                      </span>
                      <span style={{ color: "#E7DBD1" }}>
                        32GB of Procrastination
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 md:mt-4 flex gap-1 text-xs md:text-sm">
                    <span style={{ color: "#E7DBD1" }}>●</span>
                    <span style={{ color: "#A7B7A7" }}>●</span>
                    <span style={{ color: "#758B80" }}>●</span>
                    <span style={{ color: "#60696A" }}>●</span>
                    <span style={{ color: "#605B58" }}>●</span>
                  </div>
                </div>

                <div className="mt-4 md:mt-6 text-xs opacity-60">
                  <span style={{ color: "#A7B7A7" }}>$</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 0.5,
                    }}
                    style={{ color: "#E7DBD1" }}
                  >
                    _
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
