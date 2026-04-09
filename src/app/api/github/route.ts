import { NextResponse } from "next/server";
import { cacheLife } from "next/cache";

const GITHUB_USERNAME = "SlothfulDreams";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface GitHubResponse {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: {
            contributionDays: {
              contributionCount: number;
              date: string;
              contributionLevel: string;
            }[];
          }[];
        };
      };
    };
  };
}

function mapLevel(level: string): 0 | 1 | 2 | 3 | 4 {
  switch (level) {
    case "NONE":
      return 0;
    case "FIRST_QUARTILE":
      return 1;
    case "SECOND_QUARTILE":
      return 2;
    case "THIRD_QUARTILE":
      return 3;
    case "FOURTH_QUARTILE":
      return 4;
    default:
      return 0;
  }
}

async function getGitHubContributions() {
  "use cache";
  cacheLife("days");

  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return { contributions: [] as ContributionDay[], totalContributions: 0 };
  }

  try {
    const from = new Date();
    from.setFullYear(from.getFullYear() - 1);
    const fromISO = from.toISOString();

    const query = `
      query {
        user(login: "${GITHUB_USERNAME}") {
          contributionsCollection(from: "${fromISO}") {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  contributionLevel
                }
              }
            }
          }
        }
      }
    `;

    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status}`);
    }

    const json: GitHubResponse = await res.json();
    const calendar =
      json.data.user.contributionsCollection.contributionCalendar;

    const contributions: ContributionDay[] = calendar.weeks.flatMap((week) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
        level: mapLevel(day.contributionLevel),
      })),
    );

    return {
      contributions,
      totalContributions: calendar.totalContributions,
    };
  } catch (error) {
    console.error("Failed to fetch GitHub contributions:", error);
    return { contributions: [] as ContributionDay[], totalContributions: 0 };
  }
}

export async function GET() {
  const data = await getGitHubContributions();
  return NextResponse.json(data);
}
