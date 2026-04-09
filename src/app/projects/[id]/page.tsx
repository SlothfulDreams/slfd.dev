import { Suspense } from "react";
import ProjectDetail from "./ProjectDetail";

export default function ProjectDetailPage() {
  return (
    <Suspense>
      <ProjectDetail />
    </Suspense>
  );
}
