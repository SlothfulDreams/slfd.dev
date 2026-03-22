"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Dither = dynamic(() => import("@/components/backgrounds/Dither"), {
  ssr: false,
});

export function DitherBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.05 }}
    >
      <Dither
        waveColor={isDark ? [0.85, 0.85, 0.92] : [0.94, 0.95, 0.96]}
        colorNum={4}
        pixelSize={4}
        waveAmplitude={0.2}
        waveFrequency={3}
        waveSpeed={0.03}
        enableMouseInteraction={true}
        mouseRadius={0.4}
        disableAnimation={false}
      />
    </div>
  );
}
