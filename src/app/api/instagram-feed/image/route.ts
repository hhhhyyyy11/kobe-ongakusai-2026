import { NextRequest, NextResponse } from "next/server";
import { fetchInstagramFeedPosts } from "@/lib/instagramFeed";

const ALLOWED_IMAGE_HOST_PATTERN = /(^|\.)fbcdn\.net$/;
const SHORTCODE_PATTERN = /^[A-Za-z0-9_-]{5,30}$/;

export const revalidate = 300;

function isAllowedInstagramImageUrl(url: URL): boolean {
  return (
    url.protocol === "https:" && ALLOWED_IMAGE_HOST_PATTERN.test(url.hostname)
  );
}

export async function GET(request: NextRequest) {
  const shortcode = request.nextUrl.searchParams.get("shortcode");

  if (!shortcode || !SHORTCODE_PATTERN.test(shortcode)) {
    return NextResponse.json({ error: "Invalid shortcode" }, { status: 400 });
  }

  try {
    const post = (await fetchInstagramFeedPosts()).find(
      (feedPost) => feedPost.shortcode === shortcode
    );

    if (!post) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    const parsedImageUrl = new URL(post.imageUrl);

    if (!isAllowedInstagramImageUrl(parsedImageUrl)) {
      return NextResponse.json(
        { error: "Unsupported image URL" },
        { status: 400 }
      );
    }

    const response = await fetch(parsedImageUrl, {
      headers: {
        Accept:
          "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        Referer: "https://www.instagram.com/",
        "User-Agent":
          "Mozilla/5.0 (compatible; KobeOngakusaiBot/1.0; +https://kobe-ongakusai.com)",
      },
      next: { revalidate },
    });

    if (!response.ok || !response.body) {
      return NextResponse.json(
        { error: "Failed to load image" },
        { status: 502 }
      );
    }

    return new NextResponse(response.body, {
      headers: {
        "Cache-Control": "s-maxage=300, stale-while-revalidate=3600",
        "Content-Type": response.headers.get("Content-Type") ?? "image/jpeg",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to load image" },
      { status: 502 }
    );
  }
}
