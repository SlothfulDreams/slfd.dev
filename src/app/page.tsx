"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { BlogsSection } from "@/components/sections/BlogsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { DottedDivider } from "@/components/sections/DottedDivider";

export default function Home() {
  return (
    <main className="content-column py-12">
      <HeroSection />
      <DottedDivider />
      <ExperienceSection />
      <DottedDivider />
      <ProjectsSection />
      <DottedDivider />
      <BlogsSection />
      <DottedDivider />
      <SkillsSection />
    </main>
  );
}
