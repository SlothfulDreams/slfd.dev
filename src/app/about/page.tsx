"use client";

import { motion } from "framer-motion";
import { YaziFileManager } from "@/components/yazi/YaziFileManager";

export default function About() {
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
        className="w-full max-w-6xl relative z-10"
        style={{ height: "70vh", minHeight: "500px" }}
      >
        <YaziFileManager context="about" />
      </motion.div>
    </main>
  );
}
