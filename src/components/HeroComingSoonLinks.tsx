import Link from "next/link";

export function HeroComingSoonLinks() {
  return (
    <div className="flex w-full max-w-3xl flex-col justify-center gap-3 sm:flex-row sm:gap-4">
      <Link
        href="/artists"
        className="rounded-full border-2 border-white/70 bg-white/20 px-6 py-3 text-base font-black text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/30 sm:px-8 sm:py-4 sm:text-lg md:text-xl"
      >
        出演団体を見る
      </Link>
      <Link
        href="/timetable"
        className="rounded-full border-2 border-orange-300 bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 text-base font-black text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:from-yellow-300 hover:to-orange-400 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-8 sm:py-4 sm:text-lg md:text-xl"
      >
        タイムテーブルを見る
      </Link>
    </div>
  );
}
