import { NextRequest, NextResponse } from "next/server";

const ALLOWED_IMAGE_HOST_PATTERN = /(^|\.)fbcdn\.net$/;

export const revalidate = 300;

function isAllowedInstagramImageUrl(url: URL): boolean {
  return (
    url.protocol === "https:" && ALLOWED_IMAGE_HOST_PATTERN.test(url.hostname)
  );
}

export async function GET(request: NextRequest) {
  const imageUrl = request.nextUrl.searchParams.get("url");

  if (!imageUrl) {
    return NextResponse.json({ error: "Missing image URL" }, { status: 400 });
  }

  let parsedImageUrl: URL;

  try {
    parsedImageUrl = new URL(imageUrl);
  } catch {
    return NextResponse.json({ error: "Invalid image URL" }, { status: 400 });
  }

  if (!isAllowedInstagramImageUrl(parsedImageUrl)) {
    return NextResponse.json(
      { error: "Unsupported image URL" },
      { status: 400 }
    );
  }

  try {
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
