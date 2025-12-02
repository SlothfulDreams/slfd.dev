import { NextResponse } from "next/server";
import { loadProjects } from "@/lib/content-loader";

export async function GET() {
  const projects = await loadProjects();

  // Convert Date objects to ISO strings for JSON serialization
  const serializedProjects = projects.map((p) => ({
    ...p,
    modified: p.modified.toISOString(),
  }));

  return NextResponse.json(serializedProjects);
}
