import Image from "next/image";

type SupporterCardProps = {
  name: string;
  image?: {
    src: string;
    width: number;
    height: number;
  };
};

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
          className="h-40 w-auto object-contain md:h-52"
        />
      ) : (
        <p className="text-3xl md:text-4xl font-black text-black">{name}</p>
      )}
    </div>
  );
}
