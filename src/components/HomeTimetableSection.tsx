import Link from "next/link";
import { FaArrowRight, FaClock } from "react-icons/fa";
import { TimetablePoster } from "./TimetablePoster";

export function HomeTimetableSection() {
  return (
    <section id="timetable" className="relative bg-kobe-light-blue py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <div className="mb-5 inline-block rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 text-white">
            <h2 className="text-4xl font-black md:text-5xl">タイムテーブル</h2>
          </div>
          <p className="text-lg font-black text-kobe-dark-teal md:text-xl">
            2026年の出演スケジュールを公開しました！
          </p>
        </div>

        <div className="grid items-center gap-8 rounded-3xl border-6 border-kobe-dark-teal bg-white p-5 shadow-2xl md:p-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <TimetablePoster compact />

          <div className="text-center lg:text-left">
            <FaClock
              className="mx-auto mb-5 text-5xl text-kobe-orange lg:mx-0"
              aria-hidden="true"
            />
            <h3 className="text-3xl font-black text-kobe-dark-teal md:text-4xl">
              気になる出演内容から
              <br />
              団体のSNSへ
            </h3>
            <p className="mt-5 text-base leading-relaxed font-bold text-gray-700 md:text-lg">
              詳細ページでは、時刻ごとの出演内容を選ぶと、出演団体の情報とInstagram・X・YouTubeを確認できます。
            </p>
            <Link
              href="/timetable"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-7 py-4 text-lg font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
            >
              詳しいタイムテーブルを見る
              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
