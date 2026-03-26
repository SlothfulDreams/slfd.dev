"use client";

import { BlogsSection } from "@/components/sections/BlogsSection";
import { DottedDivider } from "@/components/sections/DottedDivider";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main className="content-column pt-4 sm:pt-8 pb-16 sm:pb-24">
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
