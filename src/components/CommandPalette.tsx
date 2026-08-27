"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Command } from "cmdk";
import { play } from "cuelume";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { profile } from "@/data/profile";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const toggleOpen = useCallback((next: boolean) => {
    play(next ? "bloom" : "droplet");
    setOpen(next);
  }, []);

  useEffect(() => {
    setMounted(true);
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => {
          play(o ? "droplet" : "bloom");
          return !o;
        });
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runAction = useCallback((action: () => void) => {
    play("page");
    setOpen(false);
    action();
  }, []);

  if (!mounted) return null;

  return (
    <>
      <button
        onClick={() => toggleOpen(true)}
        className="cmd-trigger"
        aria-label="Open command palette"
      >
        <kbd>⌘</kbd>
        <kbd>k</kbd>
      </button>
      <Command.Dialog
        open={open}
        onOpenChange={toggleOpen}
        label="Command palette"
        className="cmd-overlay"
      >
        <VisuallyHidden>
          <Dialog.Title>Command palette</Dialog.Title>
          <Dialog.Description>
            Search for commands, navigate the site, or open social links
          </Dialog.Description>
        </VisuallyHidden>
        <div className="cmd-dialog">
          <Command.Input
            placeholder="type a command or search..."
            className="cmd-input"
          />
          <Command.List className="cmd-list">
            <Command.Empty className="cmd-empty">
              no results found
            </Command.Empty>

            <Command.Group heading="navigation" className="cmd-group">
              <Command.Item
                onSelect={() => runAction(() => router.push("/"))}
                className="cmd-item"
              >
                <span className="cmd-icon">~</span>
                home
              </Command.Item>
              <Command.Item
                onSelect={() => runAction(() => router.push("/experience"))}
                className="cmd-item"
              >
                <span className="cmd-icon">&#9656;</span>
                experience
              </Command.Item>
              <Command.Item
                onSelect={() => runAction(() => router.push("/projects"))}
                className="cmd-item"
              >
                <span className="cmd-icon">&#9656;</span>
                projects
              </Command.Item>
              <Command.Item
                onSelect={() => runAction(() => router.push("/blogs"))}
                className="cmd-item"
              >
                <span className="cmd-icon">&#9656;</span>
                blogs
              </Command.Item>
              <Command.Item
                onSelect={() => runAction(() => router.push("/contact"))}
                className="cmd-item"
              >
                <span className="cmd-icon">&#9656;</span>
                contact
              </Command.Item>
            </Command.Group>

            <Command.Group heading="socials" className="cmd-group">
              {profile.socials.map((social) => (
                <Command.Item
                  key={social.label}
                  onSelect={() =>
                    runAction(() => window.open(social.href, "_blank"))
                  }
                  className="cmd-item"
                >
                  <span className="cmd-icon">&#8599;</span>
                  {social.label.toLowerCase()}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="actions" className="cmd-group">
              <Command.Item
                onSelect={() =>
                  runAction(() => {
                    const newTheme = theme === "dark" ? "light" : "dark";
                    const x = window.innerWidth / 2;
                    const y = window.innerHeight / 2;
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
                    document.startViewTransition(() => setTheme(newTheme));
                  })
                }
                className="cmd-item"
              >
                <span className="cmd-icon">&#9681;</span>
                toggle theme
              </Command.Item>
            </Command.Group>
          </Command.List>
        </div>
      </Command.Dialog>
    </>
  );
}
