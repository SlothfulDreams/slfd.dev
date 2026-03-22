"use client";

import dynamic from "next/dynamic";

const Dither = dynamic(() => import("@/components/backgrounds/Dither"), {
  ssr: false,
});

export function DitherBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.05 }}
    >
      <Dither
        waveColor={[0.95, 0.95, 0.95]}
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
