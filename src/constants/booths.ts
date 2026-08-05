export type BoothImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type BoothVendor = {
  name: string;
  affiliation?: string;
  offerings: string[];
  images: BoothImage[];
};

export const boothVendors: BoothVendor[] = [
  {
    name: "かちわり屋",
    affiliation: "from 神戸大学軽音サークルSoundS",
    offerings: ["かき氷"],
    images: [
      {
        src: "/images/booths/kachiwariya-logo.jpg",
        alt: "神戸大学軽音サークルSoundSによる、かちわり屋のロゴ",
        width: 825,
        height: 850,
      },
    ],
  },
  {
    name: "Cafe&Bar MONOCRO",
    offerings: ["ソフトドリンク", "アルコールドリンク"],
    images: [
      {
        src: "/images/booths/monocro-logo.jpg",
        alt: "Cafe&Bar MONOCROのロゴ",
        width: 750,
        height: 747,
      },
    ],
  },
  {
    name: "串かつ でんちゃん",
    offerings: ["串かつ", "唐揚げ串", "ソフトドリンク", "アルコールドリンク"],
    images: [
      {
        src: "/images/booths/denchan-logo-black.jpg",
        alt: "黒背景の串かつ でんちゃんのロゴ",
        width: 594,
        height: 340,
      },
      {
        src: "/images/booths/denchan-logo-white.jpg",
        alt: "白背景の串かつ でんちゃんのロゴ",
        width: 750,
        height: 524,
      },
      {
        src: "/images/booths/denchan-interior.jpg",
        alt: "串かつ でんちゃんの店内",
        width: 1567,
        height: 1045,
      },
      {
        src: "/images/booths/denchan-shrimp-skewers.jpg",
        alt: "串かつ でんちゃんの海老串かつ",
        width: 1567,
        height: 1045,
      },
      {
        src: "/images/booths/denchan-skewers.jpg",
        alt: "串かつ でんちゃんの串かつ盛り合わせ",
        width: 1567,
        height: 1045,
      },
      {
        src: "/images/booths/denchan-drinks.jpg",
        alt: "串かつ でんちゃんの串かつとドリンク",
        width: 1567,
        height: 1045,
      },
    ],
  },
  {
    name: "Cozy Studio Boa BASE",
    offerings: [
      "カフェドリンク",
      "ソフトドリンク",
      "アルコールドリンク",
      "雑貨",
    ],
    images: [
      {
        src: "/images/booths/cozy-studio-boa-base-logo.jpg",
        alt: "Cozy Studio Boa BASEのロゴ",
        width: 1633,
        height: 1002,
      },
    ],
  },
];
