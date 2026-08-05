export type ArtistSocials = {
  instagram?: string;
  x?: string;
  youtube?: string;
};

export type Artist = {
  name: string;
  copyArtists: string[];
  socials?: ArtistSocials;
};

export type ArtistGroup = {
  university: string;
  artists: Artist[];
};

// 出演団体情報（大学・団体・公式SNS）
export const artistGroups: ArtistGroup[] = [
  {
    university: "神戸大学",
    artists: [
      {
        name: "SoundS",
        copyArtists: ["The Birthday"],
        socials: {
          instagram: "https://www.instagram.com/sounds_kobe/",
          x: "https://x.com/SoundS_kobe",
          youtube: "https://www.youtube.com/user/kobesounds",
        },
      },
      {
        name: "MMC",
        copyArtists: ["フレデリック"],
        socials: {
          instagram: "https://www.instagram.com/mmc.kobe/",
          x: "https://x.com/Kobe_MMC",
          youtube: "https://www.youtube.com/@mmc7639",
        },
      },
      {
        name: "軽音楽部ROCK",
        copyArtists: ["Saucy Dog", "ART-SCHOOL", "NEE"],
        socials: {
          instagram: "https://www.instagram.com/kobe_u_rock/",
          x: "https://x.com/kobe_u_rock",
          youtube: "https://www.youtube.com/@ROCK-wh7ih",
        },
      },
      {
        name: "軽音楽部Ⅲ",
        copyArtists: ["Larry Carlton"],
        socials: {
          instagram: "https://www.instagram.com/keion2bu/",
          x: "https://x.com/kobe_u_keion2",
          youtube: "https://www.youtube.com/@kobe_keion3_nibu",
        },
      },
    ],
  },
  {
    university: "甲南大学",
    artists: [
      {
        name: "フォークソング同好会",
        copyArtists: ["相対性理論"],
        socials: {
          instagram: "https://www.instagram.com/konan_forson/",
          x: "https://x.com/konanfolksong",
          youtube:
            "https://www.youtube.com/@%E7%94%B2%E5%8D%97%E5%A4%A7%E5%AD%A6%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF%E3%82%BD%E3%83%B3%E3%82%B0%E5%90%8C%E5%A5%BD/featured",
        },
      },
      {
        name: "軽音楽部",
        copyArtists: ["赤い公園", "Age Factory"],
        socials: {
          instagram: "https://www.instagram.com/konan_keion/",
          x: "https://x.com/konan_keion",
          youtube: "https://www.youtube.com/channel/UCUq3pqPuC7YjfqXuDuTRtwg",
        },
      },
    ],
  },
  {
    university: "神戸市外国語大学",
    artists: [
      {
        name: "学部軽音楽部",
        copyArtists: ["kurayamisaka"],
        socials: {
          instagram: "https://www.instagram.com/rock_the_k_on/",
          x: "https://x.com/rock_the_k_on",
          youtube:
            "https://www.youtube.com/@%E7%A5%9E%E6%88%B8%E5%B8%82%E5%A4%96%E5%A4%A7%E5%AD%A6%E9%83%A8%E8%BB%BD%E9%9F%B3%E6%A5%BD",
        },
      },
    ],
  },
  {
    university: "立命館大学",
    artists: [
      {
        name: "Hansel&Gretel",
        copyArtists: ["King Gnu"],
        socials: {
          x: "https://x.com/HG_Rits_OIC",
          youtube: "https://www.youtube.com/channel/UCkyGtLjA60FNjuCbr0fRD6A",
        },
      },
      {
        name: "Jack&Beans",
        copyArtists: ["ASIAN KUNG-FU GENERATION"],
        socials: {
          instagram: "https://www.instagram.com/jack_bkc.ins/",
          x: "https://x.com/jack_bkc",
          youtube: "https://www.youtube.com/@jackbeansbkc8419",
        },
      },
    ],
  },
  {
    university: "関西学院大学",
    artists: [
      {
        name: "文化総部軽音楽部",
        copyArtists: ["Oasis"],
        socials: {
          instagram: "https://www.instagram.com/kglmc_official/",
          x: "https://x.com/KGLMC",
          youtube: "https://www.youtube.com/@kglmc589",
        },
      },
    ],
  },
  {
    university: "関西大学",
    artists: [
      {
        name: "軽音I部",
        copyArtists: ["スピッツ"],
        socials: {
          instagram: "https://www.instagram.com/1bu.keion.1bu/",
          x: "https://x.com/ku_keion01",
          youtube: "https://www.youtube.com/@KansaiUniv_LMC1",
        },
      },
    ],
  },
  {
    university: "同志社大学",
    artists: [
      {
        name: "ひなたぼっこ",
        copyArtists: ["MOSHIMO", "Nagakumo", "レイラ"],
        socials: {
          instagram: "https://www.instagram.com/hinatabokko._.doshisha/",
        },
      },
    ],
  },
  {
    university: "神戸芸術工科大学",
    artists: [
      {
        name: "軽音楽部Oton",
        copyArtists: ["きのこ帝国"],
        socials: {
          instagram: "https://www.instagram.com/oton__official/",
          x: "https://x.com/Oton_official",
          youtube: "https://www.youtube.com/channel/UCvdmdbeDI0AAxVvORHFUG5w",
        },
      },
    ],
  },
  {
    university: "兵庫県立大学",
    artists: [
      {
        name: "兵庫県立大学西支部ロック部",
        copyArtists: ["ヨルシカ"],
        socials: {
          instagram: "https://www.instagram.com/uh_rock/",
          x: "https://x.com/UH_ROCK69",
          youtube: "https://www.youtube.com/channel/UCSmT7H3E-l8KzXtxBu1Cttg",
        },
      },
      {
        name: "兵庫県立大学東支部軽音楽部",
        copyArtists: ["SUNNY CAR WASH"],
        socials: {
          instagram: "https://www.instagram.com/kendai.keion/",
          x: "https://x.com/kendai_keion_",
        },
      },
    ],
  },
  {
    university: "京都大学",
    artists: [
      {
        name: "ZETS",
        copyArtists: ["君島大空合奏形態"],
        socials: {
          instagram: "https://www.instagram.com/zets.official/",
          x: "https://x.com/KyodaiZETS",
          youtube: "https://www.youtube.com/@zets3990",
        },
      },
    ],
  },
];
