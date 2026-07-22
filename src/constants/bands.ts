export type ArtistSocials = {
  instagram?: string;
  x?: string;
  youtube?: string;
};

export type Artist = {
  name: string;
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
        socials: {
          instagram: "https://www.instagram.com/sounds_kobe/",
          x: "https://x.com/SoundS_kobe",
          youtube: "https://www.youtube.com/user/kobesounds",
        },
      },
      {
        name: "MMC",
        socials: {
          instagram: "https://www.instagram.com/mmc.kobe/",
          x: "https://x.com/Kobe_MMC",
          youtube: "https://www.youtube.com/@mmc7639",
        },
      },
      {
        name: "軽音楽部ROCK",
        socials: {
          instagram: "https://www.instagram.com/kobe_u_rock/",
          x: "https://x.com/kobe_u_rock",
          youtube: "https://www.youtube.com/@ROCK-wh7ih",
        },
      },
      {
        name: "軽音楽部Ⅲ",
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
        socials: {
          instagram: "https://www.instagram.com/konan_forson/",
          x: "https://x.com/konanfolksong",
        },
      },
      {
        name: "軽音学部",
        socials: {
          x: "https://x.com/konan_keion",
        },
      },
    ],
  },
  {
    university: "神戸市外国語大学",
    artists: [
      {
        name: "学部軽音楽部",
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
        socials: {
          x: "https://x.com/HG_Rits_OIC",
          youtube: "https://www.youtube.com/channel/UCkyGtLjA60FNjuCbr0fRD6A",
        },
      },
      {
        name: "Jack&Beans",
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
        socials: {
          instagram: "https://www.instagram.com/1bu.keion.1bu/",
          x: "https://x.com/ku_keion01",
        },
      },
    ],
  },
  {
    university: "同志社大学",
    artists: [
      {
        name: "ひなたぼっこ",
        socials: {
          instagram: "https://www.instagram.com/hinatabokko._.doshisha/",
        },
      },
    ],
  },
  {
    university: "神戸市芸術工科大学",
    artists: [
      {
        name: "軽音楽部Oton",
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
        name: "軽音楽部西支部ROCK",
        socials: {
          x: "https://x.com/kon_west_UofH",
        },
      },
      {
        name: "軽音楽部東支部",
        socials: {
          x: "https://x.com/kendai_keion_",
        },
      },
    ],
  },
];
