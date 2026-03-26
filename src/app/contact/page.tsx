"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SubpageLayout } from "@/components/SubpageLayout";

export default function Contact() {
  return (
    <SubpageLayout title="Contact">
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
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-outline-variant)] mb-1">
                    {social.label}
                  </p>
                  <p className="text-sm text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)] transition-colors">
                    {social.href.replace("mailto:", "").replace("https://", "").replace("www.", "")}
                  </p>
                </div>
                <span className="text-[var(--color-outline-variant)] group-hover:text-[var(--color-primary)] transition-colors">
                  &#8599;
                </span>
              </div>
            </a>
            {i < profile.socials.length - 1 && (
              <div className="dotted-line" />
            )}
          </div>
        ))}
      </motion.div>

      <div className="mt-12">
        <p className="font-mono text-[11px] text-[var(--color-outline-variant)]">
          response_time: 24-48 hours
        </p>
      </div>
    </SubpageLayout>
  );
}
