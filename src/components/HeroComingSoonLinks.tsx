import Link from "next/link";

export function HeroComingSoonLinks() {
  return (
    <div className="grid w-full max-w-5xl grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
      <Link
        href="/bgm-request"
        className="rounded-full border-2 border-orange-300 bg-gradient-to-r from-yellow-400 to-orange-500 px-5 py-3 text-base font-black text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:from-yellow-300 hover:to-orange-400 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-6 sm:py-4 sm:text-lg"
      >
        BGMをリクエスト
      </Link>
      <Link
        href="/artists"
        className="rounded-full border-2 border-white/70 bg-white/20 px-5 py-3 text-base font-black text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/30 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-6 sm:py-4 sm:text-lg"
      >
        出演団体を見る
      </Link>
      <Link
        href="/timetable"
        className="rounded-full border-2 border-white/70 bg-white/20 px-5 py-3 text-base font-black text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/30 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-6 sm:py-4 sm:text-lg"
      >
        タイムテーブルを見る
      </Link>
    </div>
  );
}
