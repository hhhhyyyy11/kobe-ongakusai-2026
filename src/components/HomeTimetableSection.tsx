import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
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

        <div className="mx-auto max-w-3xl rounded-3xl border-6 border-kobe-dark-teal bg-white p-5 shadow-2xl md:p-10">
          <TimetablePoster compact />

          <div className="mt-8 text-center">
            <Link
              href="/timetable"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-7 py-4 text-lg font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
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
