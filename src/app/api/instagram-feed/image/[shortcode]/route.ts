import { NextRequest, NextResponse } from "next/server";
import { fetchInstagramFeedPosts } from "@/lib/instagramFeed";

export const dynamic = "force-dynamic";
export const revalidate = 300;

const SHORTCODE_PATTERN = /^[A-Za-z0-9_-]+$/;
const INSTAGRAM_IMAGE_FETCH_OPTIONS = {
  headers: {
    Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
    Referer: "https://www.instagram.com/",
    "User-Agent":
      "Mozilla/5.0 (compatible; KobeOngakusaiBot/1.0; +https://kobe-ongakusai.com)",
  },
  next: { revalidate: 300 },
} as const;

function isTrustedInstagramImageUrl(value: string): boolean {
  try {
    const url = new URL(value);

    return url.protocol === "https:" && url.hostname.endsWith(".fbcdn.net");
  } catch {
    return false;
  }
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ shortcode: string }> }
) {
  const { shortcode } = await params;

  if (!SHORTCODE_PATTERN.test(shortcode)) {
    return NextResponse.json(
      { error: "Invalid Instagram shortcode" },
      { status: 400 }
    );
  }

  try {
    const posts = await fetchInstagramFeedPosts();
    const post = posts.find((candidate) => candidate.shortcode === shortcode);

    if (!post) {
      return NextResponse.json(
        { error: "Instagram post image not found" },
        { status: 404 }
      );
    }

    if (!isTrustedInstagramImageUrl(post.imageUrl)) {
      return NextResponse.json(
        { error: "Untrusted Instagram image URL" },
        { status: 502 }
      );
    }

    const response = await fetch(post.imageUrl, INSTAGRAM_IMAGE_FETCH_OPTIONS);
    const contentType = response.headers.get("content-type") ?? "";

    if (!response.ok || !contentType.startsWith("image/")) {
      return NextResponse.json(
        { error: "Failed to load Instagram image" },
        { status: 502 }
      );
    }

    return new NextResponse(response.body, {
      headers: {
        "Cache-Control": "s-maxage=300, stale-while-revalidate=3600",
        "Content-Type": contentType,
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to load Instagram image" },
      { status: 502 }
    );
  }
}
