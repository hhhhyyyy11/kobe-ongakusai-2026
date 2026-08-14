import type { ArtistId } from "./bands";

export type TimetablePerformance = {
  kind: "performance";
  startTime: string;
  copyArtist: string;
  artistId: ArtistId;
  introVideoUrl?: string;
};

export type TimetableBreak = {
  kind: "break";
  startTime: string;
  label: string;
};

export type TimetableEntry = TimetablePerformance | TimetableBreak;

/** 2026年版公式タイムテーブル画像の掲載順。 */
export const timetableEntries = [
  {
    kind: "performance",
    startTime: "10:00",
    copyArtist: "赤い公園",
    artistId: "konan-keion",
    introVideoUrl: "https://www.instagram.com/reel/Db8ONPYSGnh/",
  },
  {
    kind: "performance",
    startTime: "10:25",
    copyArtist: "ASIAN KUNG-FU GENERATION",
    artistId: "rits-jack-beans",
  },
  {
    kind: "performance",
    startTime: "10:50",
    copyArtist: "SUNNY CAR WASH",
    artistId: "hyogo-east-keion",
    introVideoUrl: "https://www.instagram.com/reel/Db8AVlUzMw-/",
  },
  {
    kind: "performance",
    startTime: "11:15",
    copyArtist: "レイラ",
    artistId: "doshisha-hinatabokko",
  },
  {
    kind: "performance",
    startTime: "11:40",
    copyArtist: "kurayamisaka",
    artistId: "kobe-city-foreign-keion",
  },
  {
    kind: "performance",
    startTime: "12:05",
    copyArtist: "The Birthday",
    artistId: "kobe-sounds",
  },
  {
    kind: "performance",
    startTime: "12:30",
    copyArtist: "スピッツ",
    artistId: "kansai-keion-1",
    introVideoUrl: "https://www.instagram.com/reel/Db-lPVlytDd/",
  },
  { kind: "break", startTime: "12:55", label: "休憩" },
  {
    kind: "performance",
    startTime: "13:10",
    copyArtist: "MOSHIMO",
    artistId: "doshisha-hinatabokko",
  },
  {
    kind: "performance",
    startTime: "13:35",
    copyArtist: "相対性理論",
    artistId: "konan-folk",
    introVideoUrl: "https://www.instagram.com/reel/DcA8P-MSfpL/",
  },
  {
    kind: "performance",
    startTime: "14:00",
    copyArtist: "Age Factory",
    artistId: "konan-keion",
    introVideoUrl: "https://www.instagram.com/reel/Db5N24yyd8v/",
  },
  {
    kind: "performance",
    startTime: "14:25",
    copyArtist: "NEE",
    artistId: "kobe-rock",
    introVideoUrl: "https://www.instagram.com/reel/Db8HQiISRTS/",
  },
  {
    kind: "performance",
    startTime: "14:50",
    copyArtist: "King Gnu",
    artistId: "rits-hansel-gretel",
  },
  {
    kind: "performance",
    startTime: "15:15",
    copyArtist: "Nagakumo",
    artistId: "doshisha-hinatabokko",
    introVideoUrl: "https://www.instagram.com/reel/Db5bmasyUcx/",
  },
  {
    kind: "performance",
    startTime: "15:40",
    copyArtist: "Saucy Dog",
    artistId: "kobe-rock",
  },
  { kind: "break", startTime: "16:05", label: "休憩" },
  {
    kind: "performance",
    startTime: "16:20",
    copyArtist: "君島大空合奏形態",
    artistId: "kyoto-zets",
    introVideoUrl: "https://www.instagram.com/reel/Db-Xch_ylwS/",
  },
  {
    kind: "performance",
    startTime: "16:45",
    copyArtist: "ヨルシカ",
    artistId: "hyogo-west-rock",
  },
  {
    kind: "performance",
    startTime: "17:10",
    copyArtist: "ART-SCHOOL",
    artistId: "kobe-rock",
  },
  {
    kind: "performance",
    startTime: "17:35",
    copyArtist: "フレデリック",
    artistId: "kobe-mmc",
  },
  {
    kind: "performance",
    startTime: "18:00",
    copyArtist: "Larry Carlton",
    artistId: "kobe-keion-iii",
    introVideoUrl: "https://www.instagram.com/reel/Db5pUoySNVB/",
  },
  {
    kind: "performance",
    startTime: "18:25",
    copyArtist: "きのこ帝国",
    artistId: "kobe-design-oton",
    introVideoUrl: "https://www.instagram.com/reel/Db-y9GOS6rU/",
  },
  {
    kind: "performance",
    startTime: "18:50",
    copyArtist: "Oasis",
    artistId: "kwansei-keion",
  },
] satisfies TimetableEntry[];
