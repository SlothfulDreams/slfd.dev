"use client";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const transitioning = useRef(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-8 h-8" />;

  const toggleTheme = (e: React.MouseEvent) => {
    if (transitioning.current) return;

    const newTheme = theme === "dark" ? "light" : "dark";
    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const root = document.documentElement;
    root.style.setProperty("--toggle-x", `${x}px`);
    root.style.setProperty("--toggle-y", `${y}px`);
    root.style.setProperty("--toggle-radius", `${endRadius}px`);

    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    transitioning.current = true;
    const transition = document.startViewTransition(() => {
      setTheme(newTheme);
    });
    transition.ready.finally(() => {
      transitioning.current = false;
    });
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="w-8 h-8 flex items-center justify-center rounded-[6px] text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title>Light mode</title>
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title>Dark mode</title>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
