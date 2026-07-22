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
        aria-disabled="true"
        tabIndex={-1}
        className="pointer-events-none rounded-full border-2 border-orange-300 bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 text-base font-black text-white opacity-80 shadow-xl sm:px-8 sm:py-4 sm:text-lg md:text-xl"
      >
        タイムテーブル（Coming Soon）
      </Link>
    </div>
  );
}
