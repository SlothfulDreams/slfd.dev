"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <main className="content-column pt-44 pb-24">
      <Link href="/" className="inline-flex items-center gap-1 font-mono text-xs text-[#6e7072] hover:text-[#000] transition-colors mb-8">
        &larr; back
      </Link>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="section-label">Contact</span>
        <h1 className="text-2xl font-bold tracking-tight text-[#000] mb-2">
          Get in touch
        </h1>
        <p className="text-sm text-[#6e7072] mb-8 font-[family-name:var(--font-inter)]">
          Feel free to reach out! Always happy to connect and chat.
        </p>
      </motion.div>

      <div className="dotted-divider" />

      <motion.div
        className="space-y-0"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {profile.socials.map((social, i) => (
          <div key={social.label}>
            <a
              href={social.href}
              target={social.icon === "email" ? undefined : "_blank"}
              rel={social.icon === "email" ? undefined : "noopener noreferrer"}
              className="group block py-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#c4c6c8] mb-1">
                    {social.label}
                  </p>
                  <p className="text-sm text-[#1a1c1d] group-hover:text-[#000] transition-colors">
                    {social.href.replace("mailto:", "").replace("https://", "").replace("www.", "")}
                  </p>
                </div>
                <span className="text-[#c4c6c8] group-hover:text-[#000] transition-colors">
                  &#8599;
                </span>
              </div>
            </a>
            {i < profile.socials.length - 1 && (
              <div
                className="h-px"
                style={{
                  background: `repeating-linear-gradient(to right, var(--dot-color) 0px, var(--dot-color) 4px, transparent 4px, transparent 10px)`,
                }}
              />
            )}
          </div>
        ))}
      </motion.div>

      <div className="mt-12">
        <p className="font-mono text-[11px] text-[#c4c6c8]">
          response_time: 24-48 hours
        </p>
      </div>
    </main>
  );
}
