import { SNS_INFO } from "@/constants/sns";

export type InstagramFeedPost = {
  shortcode: string;
  imageUrl: string;
  permalink: string;
  isVideo: boolean;
};

const INSTAGRAM_FEED_LIMIT = 9;
const INSTAGRAM_FETCH_OPTIONS = {
  headers: {
    "Accept-Language": "ja,en-US;q=0.9,en;q=0.8",
    "User-Agent":
      "Mozilla/5.0 (compatible; KobeOngakusaiBot/1.0; +https://kobe-ongakusai.com)",
  },
  next: { revalidate: 300 },
} as const;

function decodeJsonString(value: string): string {
  let decoded = value;

  for (let index = 0; index < 3; index += 1) {
    try {
      const nextDecoded = JSON.parse(`"${decoded}"`) as string;

      if (nextDecoded === decoded) {
        break;
      }

      decoded = nextDecoded;
    } catch {
      break;
    }
  }

  return decoded.replace(/\\\//g, "/").replace(/\\u0025/g, "%");
}

export function extractInstagramFeed(html: string): InstagramFeedPost[] {
  const normalizedHtml = html.replace(/\\"/g, '"');
  const mediaPattern =
    /"shortcode":"([^"]+)"[\s\S]*?"is_video":(true|false)[\s\S]*?"display_url":"([^"]+)"/g;
  const seenShortcodes = new Set<string>();
  const seenImageUrls = new Set<string>();
  const posts: InstagramFeedPost[] = [];

  for (const match of normalizedHtml.matchAll(mediaPattern)) {
    const [, shortcode, isVideo, imageUrl] = match;
    const decodedImageUrl = decodeJsonString(imageUrl);

    if (seenShortcodes.has(shortcode) || seenImageUrls.has(decodedImageUrl)) {
      continue;
    }

    seenShortcodes.add(shortcode);
    seenImageUrls.add(decodedImageUrl);
    posts.push({
      shortcode,
      imageUrl: decodedImageUrl,
      permalink: `https://www.instagram.com/p/${shortcode}/`,
      isVideo: isVideo === "true",
    });

    if (posts.length >= INSTAGRAM_FEED_LIMIT) {
      break;
    }
  }

  return posts;
}

export async function fetchInstagramFeedPosts(): Promise<InstagramFeedPost[]> {
  const response = await fetch(
    SNS_INFO.instagram.embedUrl,
    INSTAGRAM_FETCH_OPTIONS
  );

  if (!response.ok) {
    throw new Error("Failed to load Instagram feed");
  }

  return extractInstagramFeed(await response.text());
}
