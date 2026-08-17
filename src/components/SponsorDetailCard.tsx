import Image from "next/image";

interface SponsorDetailCardImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface SponsorDetailCardProps {
  /** 協賛企業・団体名 */
  name: string;
  /** カード上部に表示するバッジラベル（例: SPECIAL SPONSOR, GOODS SPONSOR） */
  badgeText: string;
  /** 特別協賛か物品協賛かのスタイルバリアント */
  variant?: "special" | "goods";
  /** 詳細画像 */
  image?: SponsorDetailCardImage;
  /** 詳細紹介文 */
  paragraphs?: string[];
}

/**
 * 特別協賛・物品協賛の詳細カードコンポーネント。
 * 詳細情報（画像・紹介文）がある場合は2カラムで表示し、名前のみの場合はテキストカードとして表示する。
 */
export function SponsorDetailCard({
  name,
  badgeText,
  variant = "special",
  image,
  paragraphs,
}: SponsorDetailCardProps) {
  const hasDetails = Boolean(image && paragraphs);

  const containerClassName =
    variant === "special"
      ? "overflow-hidden rounded-3xl border-4 border-kobe-orange bg-gradient-to-br from-white via-white to-orange-50 p-4 shadow-xl sm:p-7"
      : "overflow-hidden rounded-3xl border-4 border-kobe-dark-teal bg-gradient-to-br from-white via-white to-blue-50/40 p-4 shadow-xl sm:p-7";

  const badgeClassName =
    variant === "special"
      ? "mb-2 text-xs font-black tracking-[0.28em] text-kobe-orange"
      : "mb-2 text-xs font-black tracking-[0.28em] text-kobe-dark-teal";

  return (
    <article className={containerClassName}>
      <div className={hasDetails ? "mb-6 text-center" : "text-center"}>
        <p className={badgeClassName}>{badgeText}</p>
        <h3 className="text-2xl leading-tight font-black text-kobe-dark-teal sm:text-3xl">
          {name}
        </h3>
      </div>

      {image && paragraphs && (
        <div className="grid items-center gap-7 lg:grid-cols-2">
          <div className="flex min-h-64 items-center justify-center overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-3 shadow-inner">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 480px, 90vw"
              className="h-auto max-h-[38rem] w-full object-contain"
            />
          </div>

          <div className="space-y-4 text-left text-base leading-relaxed font-bold text-gray-700 sm:text-lg">
            {paragraphs.map((paragraph, paragraphIndex) => (
              <p
                key={`${name}-${paragraphIndex}`}
                className="whitespace-pre-line"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
