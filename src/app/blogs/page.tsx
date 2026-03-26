"use client";

import { motion } from "framer-motion";
import { SubpageLayout } from "@/components/SubpageLayout";

export default function Blogs() {
  return (
    <SubpageLayout title="Blog">
      <div className="py-12 text-center">
        <p className="font-mono text-sm text-[var(--color-on-surface-variant)] animated-dots">
          Coming soon
        </p>
      </div>
    </SubpageLayout>
  );
}
