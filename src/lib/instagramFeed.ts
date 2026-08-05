import { SNS_INFO } from "@/constants/sns";

export type InstagramFeedPost = {
  shortcode: string;
  imageUrl: string;
  permalink: string;
  isVideo: boolean;
};

const INSTAGRAM_FEED_LIMIT = 9;
const INSTAGRAM_FEED_REVALIDATE_SECONDS = 300;
const INSTAGRAM_FETCH_OPTIONS = {
  headers: {
    "Accept-Language": "ja,en-US;q=0.9,en;q=0.8",
    "User-Agent":
      "Mozilla/5.0 (compatible; KobeOngakusaiBot/1.0; +https://kobe-ongakusai.com)",
  },
  next: { revalidate: INSTAGRAM_FEED_REVALIDATE_SECONDS },
} as const;

let cachedInstagramFeed:
  | {
      expiresAt: number;
      posts: InstagramFeedPost[];
    }
  | undefined;

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

function extractMediaFields(value: string) {
  const shortcode = value.match(/"shortcode":"([^"]+)"/)?.[1];
  const isVideo = value.match(/"is_video":(true|false)/)?.[1];
  const imageUrl = value.match(/"display_url":"([^"]+)"/)?.[1];

  if (!shortcode || !isVideo || !imageUrl) {
    return null;
  }

  return {
    shortcode,
    imageUrl: decodeJsonString(imageUrl),
    isVideo: isVideo === "true",
  };
}

function extractParentShortcode(value: string): string | undefined {
  const parentHeader = value.match(/^"shortcode_media":\s*\{([^{}]*)/)?.[1];

  return parentHeader?.match(/"shortcode":"([^"]+)"/)?.[1];
}

export function extractInstagramFeed(html: string): InstagramFeedPost[] {
  const normalizedHtml = html.replace(/\\"/g, '"');
  const mediaMarker = '"shortcode_media":';
  const seenShortcodes = new Set<string>();
  const seenImageUrls = new Set<string>();
  const posts: InstagramFeedPost[] = [];
  let cursor = 0;

  function addPost(media: NonNullable<ReturnType<typeof extractMediaFields>>) {
    if (
      seenShortcodes.has(media.shortcode) ||
      seenImageUrls.has(media.imageUrl) ||
      posts.length >= INSTAGRAM_FEED_LIMIT
    ) {
      return;
    }

    seenShortcodes.add(media.shortcode);
    seenImageUrls.add(media.imageUrl);
    posts.push({
      shortcode: media.shortcode,
      imageUrl: media.imageUrl,
      permalink: `https://www.instagram.com/p/${media.shortcode}/`,
      isVideo: media.isVideo,
    });
  }

  while (posts.length < INSTAGRAM_FEED_LIMIT) {
    const markerIndex = normalizedHtml.indexOf(mediaMarker, cursor);

    if (markerIndex === -1) {
      break;
    }

    const nextMarkerIndex = normalizedHtml.indexOf(
      mediaMarker,
      markerIndex + mediaMarker.length
    );
    const mediaSection = normalizedHtml.slice(
      markerIndex,
      nextMarkerIndex === -1 ? undefined : nextMarkerIndex
    );
    const parentMedia = extractMediaFields(mediaSection);
    const parentShortcode = extractParentShortcode(mediaSection);

    if (parentMedia && parentShortcode) {
      addPost({ ...parentMedia, shortcode: parentShortcode });
    }

    if (nextMarkerIndex === -1) {
      break;
    }

    cursor = nextMarkerIndex;
  }

  return posts;
}

export async function fetchInstagramFeedPosts(): Promise<InstagramFeedPost[]> {
  if (
    cachedInstagramFeed &&
    cachedInstagramFeed.expiresAt > Date.now() &&
    cachedInstagramFeed.posts.length > 0
  ) {
    return cachedInstagramFeed.posts;
  }

  const response = await fetch(
    SNS_INFO.instagram.embedUrl,
    INSTAGRAM_FETCH_OPTIONS
  );

  if (!response.ok) {
    throw new Error("Failed to load Instagram feed");
  }

  const posts = extractInstagramFeed(await response.text());

  if (posts.length > 0) {
    cachedInstagramFeed = {
      expiresAt: Date.now() + INSTAGRAM_FEED_REVALIDATE_SECONDS * 1000,
      posts,
    };
  }

  return posts;
}

export async function findInstagramFeedPost(
  shortcode: string
): Promise<InstagramFeedPost | undefined> {
  const cachedPost = cachedInstagramFeed?.posts.find(
    (post) => post.shortcode === shortcode
  );

  if (cachedPost) {
    return cachedPost;
  }

  const posts = await fetchInstagramFeedPosts();

  return posts.find((post) => post.shortcode === shortcode);
}
