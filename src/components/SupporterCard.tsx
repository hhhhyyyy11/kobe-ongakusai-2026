import Image from "next/image";

interface SupporterCardImage {
  src: string;
  width: number;
  height: number;
}

interface SupporterCardProps {
  /** 後援名。テキストカードでは表示文字列、画像カードでは alt テキストとして使う。 */
  name: string;
  /** ロゴ画像を表示する場合の画像情報。未指定の場合は後援名をテキストで表示する。 */
  image?: SupporterCardImage;
}

/**
 * 後援一覧で使うカード。
 * テキストだけの後援とロゴ画像付きの後援を同じレイアウトで表示する。
 */
export function SupporterCard({ name, image }: SupporterCardProps) {
  const cardClassName = image
    ? "rounded-2xl border-2 border-gray-200 bg-white p-4 flex min-h-56 items-center justify-center"
    : "rounded-2xl border-2 border-gray-200 bg-white p-6 flex min-h-56 flex-col items-center justify-center";

  return (
    <div className={cardClassName}>
      {image ? (
        <Image
          src={image.src}
          alt={name}
          width={image.width}
          height={image.height}
          loading="eager"
          className="h-40 w-auto object-contain md:h-52"
        />
      ) : (
        <p className="text-3xl md:text-4xl font-black text-black">{name}</p>
      )}
    </div>
  );
}
