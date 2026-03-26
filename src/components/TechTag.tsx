"use client";

import StackIcon from "tech-stack-icons";
import { customIcons, techIconMap } from "@/data/techIcons";

export function TechTag({ name, iconKey }: { name: string; iconKey?: string }) {
  const resolvedIcon = iconKey ?? techIconMap[name];

  return (
    <span className="skill-tag">
      {resolvedIcon && customIcons[resolvedIcon] ? (
        <span
          className="skill-tag-icon"
          dangerouslySetInnerHTML={{ __html: customIcons[resolvedIcon] }}
        />
      ) : resolvedIcon ? (
        <span className="skill-tag-icon">
          <StackIcon name={resolvedIcon as any} />
        </span>
      ) : null}
      {name}
    </span>
  );
}
