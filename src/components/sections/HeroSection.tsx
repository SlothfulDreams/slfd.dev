"use client";

import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useTheme } from "next-themes";

import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

const ImageDithering = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.ImageDithering),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-[var(--color-surface)] rounded-[8px]" />
    ),
  },
);

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

function GitHubHeatmap() {
  const [data, setData] = useState<ContributionDay[]>([]);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then(({ contributions }) => {
        if (contributions.length > 0) {
          setData(contributions);
        }
      })
      .catch(() => {});
  }, []);

  if (data.length === 0) return null;

  const heatmapTheme =
    mounted && resolvedTheme === "dark"
      ? {
          light: ["#313244", "#45475A", "#585B70", "#A6ADC8", "#CDD6F4"],
          dark: ["#313244", "#45475A", "#585B70", "#A6ADC8", "#CDD6F4"],
        }
      : {
          light: ["#E6E9EF", "#BCC0CC", "#9CA0B0", "#6C6F85", "#4C4F69"],
          dark: ["#E6E9EF", "#BCC0CC", "#9CA0B0", "#6C6F85", "#4C4F69"],
        };

  return (
    <div className="mb-6">
      <div className="overflow-x-auto">
        <ActivityCalendar
          data={data}
          theme={heatmapTheme}
          blockSize={10}
          blockRadius={2}
          blockMargin={3}
          fontSize={12}
          showWeekdayLabels={false}
          labels={{
            totalCount: "{{count}} activities in {{year}}",
          }}
          style={{
            color: "var(--color-on-surface)",
          }}
        />
      </div>
    </div>
  );
}

const rotatingTitles = ["ai engineer", "software engineer", "i use arch btw"];

function RotatingSubtitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={rotatingTitles[index]}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.25 }}
      >
        {rotatingTitles[index]}
      </motion.span>
    </AnimatePresence>
  );
}

const socialIcons: Record<string, React.ReactNode> = {
  github: (
    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
      <title>GitHub</title>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
      <title>LinkedIn</title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  email: (
    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
      <title>Email</title>
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.98L12 10.773l9.384-6.952h.98c.904 0 1.636.732 1.636 1.636z" />
    </svg>
  ),
  resume: (
    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
      <title>Resume</title>
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15h8v2H8zm0-4h8v2H8z" />
    </svg>
  ),
};

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top spacer with dotted line */}
      <div className="dotted-divider" />

      {/* Banner */}
      <div className="w-full h-36 rounded-[8px] overflow-hidden">
        <ImageDithering
          width={750}
          height={144}
          image="/images/banner.jpg"
          colorBack="#000000"
          colorFront="#ffffff"
          colorHighlight="#ffffff"
          originalColors
          inverted={false}
          type="8x8"
          size={2}
          colorSteps={4}
          fit="cover"
          offsetY={0.26}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="dotted-divider" />

      {/* Avatar + Name */}
      <div className="relative flex items-end gap-5 mb-6">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={100}
          height={100}
          className="rounded-[6px] shrink-0"
          unoptimized
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold tracking-tight text-[var(--color-primary)]">
            {profile.name}
          </h1>
          <p className="text-sm text-[var(--color-on-surface-variant)] font-[family-name:var(--font-inter)]">
            {profile.title} &middot; <RotatingSubtitle />
          </p>
        </div>
        <div className="absolute top-0 right-0">
          <ThemeToggle />
        </div>
      </div>

      {/* Socials + Heatmap */}
      <div className="dotted-divider" />
      <div className="mb-6">
        <span className="section-label mb-3 block">Socials</span>
        <div className="dotted-line mb-3" />
        <div className="flex flex-wrap gap-2 mb-4">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.icon === "email" ? undefined : "_blank"}
              rel={social.icon === "email" ? undefined : "noopener noreferrer"}
              className="flex items-center group gap-1.5 px-2.5 py-1.5 border border-[var(--color-outline-variant)] hover:border-[var(--color-on-surface-variant)] bg-transparent transition-colors duration-200 select-none rounded-[6px] font-mono text-[11px] text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]"
            >
              {socialIcons[social.icon]}
              {social.label}
            </a>
          ))}
        </div>
        <GitHubHeatmap />
      </div>
    </motion.section>
  );
}
