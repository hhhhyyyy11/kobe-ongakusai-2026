export interface FeaturedSponsor {
  name: string;
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  paragraphs?: string[];
}

export interface GoodsSponsor {
  name: string;
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  paragraphs?: string[];
}

export interface Supporter {
  name: string;
  image?: {
    src: string;
    width: number;
    height: number;
  };
}

export const supporters: Supporter[] = [
  {
    name: "神戸市中央区役所",
  },
  {
    name: "神戸新聞社",
  },
  {
    name: "サンテレビ",
    image: {
      src: "/images/sponsors/suntv.png",
      width: 859,
      height: 612,
    },
  },
];

export const sponsorContactEmail = "ongakusai.kobe@gmail.com";

/**
 * 公式サイトで特別枠として紹介する協賛企業・団体。
 * 紹介素材がない場合は名称のみを設定し、配列順で掲載する。
 */
export const featuredSponsors: FeaturedSponsor[] = [
  {
    name: "神戸トータル教育サービス",
    image: {
      src: "/images/sponsors/kobe-total-education-services.jpg",
      width: 1084,
      height: 1511,
      alt: "神戸トータル教育サービスの受験・学校生活サポート案内",
    },
    paragraphs: [
      "こんにちは！\n神戸トータル教育サービスです！",
      "我々は神戸に地盤を置き、学校の勉強のサポートからメンタルヘルスケアまで、包括的に援助を行っている団体です。",
      "神戸で生まれ育ち、神戸高校、神戸大学に通った代表が打ち出す指針に基づき、皆様のサポートをおこなっております。",
      "興味をお持ちいただきましたら\n080-8541-0899 ホンダタカマサまで\nお電話、SMSでご連絡下さいませ。",
    ],
  },
  {
    name: "TOOTH MART FOOD HALL & NIGHT FES",
    image: {
      src: "/images/sponsors/tooth-mart-food-hall.jpg",
      width: 3000,
      height: 2000,
      alt: "TOOTH MART FOOD HALL & NIGHT FESの店内",
    },
    paragraphs: [
      "神戸発祥のブランド「TOOTH TOOTH」がプロデュースする「TOOTH MART FOOD HALL & NIGHT FES」は、神戸ポートミュージアム1階に位置する、神戸最大級のフードホールです。",
      "“食でつながる”をコンセプトに、神戸牛や洋食、スイーツ、灘の日本酒など、神戸ならではの味わいを楽しめる多彩なショップが集結。約400席を備えた開放的な空間では、仲間と語らいながら食を楽しむ時間や、音楽とともに過ごす特別なひとときを演出します。",
      "また、TOOTH MARTは神戸のウォーターフロントエリアの新たなにぎわいを創出する拠点として、訪れる人々に神戸の魅力を発信しています。海辺の街並みとともに、食・カルチャー・エンターテインメントが融合する空間は、神戸音学祭を楽しむ皆さまにとって、もうひとつの思い出となる場所です。",
      "神戸の海辺で、美味しい料理と心地よい音楽に包まれる時間を。",
      "「TOOTH MART」で、神戸音学祭の余韻まで楽しむ特別なひとときをお過ごしください。",
    ],
  },
  {
    name: "株式会社ワイドウィンドウズ",
    image: {
      src: "/images/sponsors/wide-windows.jpg",
      width: 1024,
      height: 582,
      alt: "株式会社ワイドウィンドウズ",
    },
    paragraphs: [
      "株式会社ワイドウィンドウズは、関西を中心に音楽リハーサルスタジオ「スタジオ246」を運営するほか、ライブハウス、レコーディング、映像制作、音響機材レンタルなど、音楽や映像に関わるさまざまな事業を展開しています。",
      "私たちが大切にしているのは、音楽や映像を通じて人と人がつながり、そこから生まれる笑顔や文化を未来へつないでいくことです。",
      "神戸音学祭は、大学生が中心となってつくり上げ、音楽を通して人と人、そして神戸の街をつなぐイベントです。私たちはその想いに共感し、学生の皆さんの挑戦を応援するとともに、音楽を楽しむ人、演奏する人、地域の皆さんが一緒になって笑顔になれる場を支えたいという想いから、神戸音学祭に協賛しています。",
      "この音学祭で生まれたつながりや笑顔が、神戸の街から未来へとつながっていくことを願っています。",
    ],
  },
];

/** 物品提供で神戸音学祭をご支援いただいている企業。 */
export const goodsSponsors: GoodsSponsor[] = [
  {
    name: "富永貿易株式会社",
  },
  {
    name: "トーラク株式会社",
    image: {
      src: "/images/sponsors/toraku.jpg",
      width: 884,
      height: 1024,
      alt: "トーラク株式会社 神戸プリン",
    },
    paragraphs: [
      "神戸土産の定番「神戸プリン」をはじめ、おうちで手軽にスイーツ作りを楽しんでいただける「らくらくホイップ」や、スーパーやコンビニなどで手軽にお買い求めいただける「チルドカップデザート」などを製造・販売しています。\nスイーツの可能性の探求に取り組み、新しい美味しさをお届けしています。",
      "お見かけの際はぜひお買い求めください！",
    ],
  },
];
