// SNS情報定数
export const SNS_INFO = {
  instagram: {
    handle: "kobe_ongakusai",
    url: "https://www.instagram.com/kobe_ongakusai?igsh=Nmtsa2JhZGpkb3Rv",
    embedUrl: "https://www.instagram.com/kobe_ongakusai/embed",
    displayName: "Instagram",
  },
  twitter: {
    handle: "K0beOngakusai",
    url: "https://x.com/K0beOngakusai",
    displayName: "X（旧Twitter）",
  },
} as const;

// SNSシェア用の定数
export const SHARE_CONFIG = {
  title: "神戸音学祭2026",
  text: "関西圏6大学10団体が出演する学生音楽フェス！2026年8月21日(金)",
  baseUrl: "https://kobe-ongakusai.vercel.app",
  hashtags:
    "神戸,神戸イベント,音楽イベント,フェス,野外フェス,学生,学生イベント,コピーバンド,コピーバンドライブ,tottei,totteipark,glion,神戸音学祭",

  // 各SNSのシェアURL
  shareUrls: {
    line: "https://social-plugins.line.me/lineit/share",
  },

  // SNSカラー
  colors: {
    line: "#00B900", // LINEブランドカラー
  },
} as const;

export type SNSInfo = typeof SNS_INFO;
export type ShareConfig = typeof SHARE_CONFIG;
