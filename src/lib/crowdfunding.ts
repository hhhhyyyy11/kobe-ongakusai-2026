export interface CrowdfundingStats {
  targetAmount: number;
  currentAmount: number;
  supporters: number;
  endAt: string;
  fetchedAt: string;
  isFallback: boolean;
}

export const crowdfundingUrl = "https://camp-fire.jp/projects/935171/view";

const fallbackCrowdfundingStats: CrowdfundingStats = {
  targetAmount: 1000000,
  currentAmount: 116500,
  supporters: 14,
  endAt: "2026-08-15T23:59:59+09:00",
  fetchedAt: "2026-06-29T00:00:00+09:00",
  isFallback: true,
};

const metaAttributePattern = /(\w+)=["']([^"']*)["']/g;

function getMetaContent(html: string, property: string): string | null {
  const metaTags = html.match(/<meta\s+[^>]*>/gi) ?? [];

  for (const tag of metaTags) {
    const attributes = new Map<string, string>();
    const matches = tag.matchAll(metaAttributePattern);

    for (const match of matches) {
      attributes.set(match[1], match[2]);
    }

    if (attributes.get("property") === property) {
      return attributes.get("content") ?? null;
    }
  }

  return null;
}

function parseRequiredNumber(html: string, property: string): number {
  const value = getMetaContent(html, property);
  const parsedValue = value === null ? Number.NaN : Number(value);

  if (!Number.isFinite(parsedValue)) {
    throw new Error(`Missing or invalid CAMPFIRE meta property: ${property}`);
  }

  return parsedValue;
}

function parseRequiredString(html: string, property: string): string {
  const value = getMetaContent(html, property);

  if (!value) {
    throw new Error(`Missing CAMPFIRE meta property: ${property}`);
  }

  return value;
}

function parseRequiredDateString(html: string, property: string): string {
  const value = parseRequiredString(html, property);

  if (Number.isNaN(Date.parse(value))) {
    throw new Error(
      `Missing or invalid CAMPFIRE date meta property: ${property}`
    );
  }

  return value;
}

export async function getCrowdfundingStats(): Promise<CrowdfundingStats> {
  try {
    const response = await fetch(crowdfundingUrl, {
      headers: {
        "User-Agent": "kobe-ongakusai-2026/1.0",
      },
      next: {
        revalidate: 300,
      },
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      throw new Error(`CAMPFIRE responded with ${response.status}`);
    }

    const html = await response.text();

    return {
      targetAmount: parseRequiredNumber(html, "note:target_amount"),
      currentAmount: parseRequiredNumber(html, "note:current_amount"),
      supporters: parseRequiredNumber(html, "note:supporters"),
      endAt: parseRequiredDateString(html, "note:end_at"),
      fetchedAt: new Date().toISOString(),
      isFallback: false,
    };
  } catch {
    return fallbackCrowdfundingStats;
  }
}
