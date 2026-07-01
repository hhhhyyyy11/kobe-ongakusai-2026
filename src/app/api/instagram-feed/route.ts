import { NextResponse } from "next/server";
import { fetchInstagramFeedPosts } from "@/lib/instagramFeed";

export const dynamic = "force-dynamic";
export const revalidate = 300;

export async function GET() {
  try {
    return NextResponse.json(
      { posts: await fetchInstagramFeedPosts() },
      {
        headers: {
          "Cache-Control": "s-maxage=300, stale-while-revalidate=3600",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { posts: [] },
      { status: 502, statusText: "Failed to load Instagram feed" }
    );
  }
}
