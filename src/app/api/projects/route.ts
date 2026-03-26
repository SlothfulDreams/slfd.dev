import { NextResponse } from "next/server";
import { loadProjects } from "@/lib/content-loader";

export async function GET() {
  const projects = await loadProjects();

  return NextResponse.json(projects);
}
