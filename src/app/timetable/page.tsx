import type { Metadata } from "next";
import { FaMusic, FaClock } from "react-icons/fa";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DecorativeNotes } from "@/components/DecorativeNotes";
import { TimetablePoster } from "@/components/TimetablePoster";
import { TimetableSchedule } from "@/components/TimetableSchedule";
import { WavePattern } from "@/components/WavePattern";
import { createPageMetadata } from "@/lib/metadata";
import { eventInfo } from "@/constants/event";

export const metadata: Metadata = createPageMetadata({
  title: "タイムテーブル｜神戸音学祭2026",
  description: `神戸音学祭2026は${eventInfo.dateTimeLabel}に開催します。全21組の出演スケジュールと各団体の公式SNSをご案内します。`,
  path: "/timetable",
});

function SetListPage() {
  return (
    <div className="min-h-screen bg-kobe-light-blue font-sans">
      {/* Navigation Bar */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Decorative Elements */}
        <DecorativeNotes />

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-6 border-kobe-dark-teal shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4">
                <FaMusic className="text-6xl text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-kobe-dark-teal mb-6">
              タイムテーブル
            </h1>
            <div className="mb-4">
              <p className="inline-block px-6 py-2 rounded-full text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500">
                {eventInfo.dateLabel}開催
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4 text-lg font-bold text-kobe-dark-teal">
              <div className="flex items-center space-x-2">
                <FaClock className="text-orange-500" />
                <span>{eventInfo.timeLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* パフォーマンス内容説明 */}
      <section className="py-16 bg-white relative">
        {/* Wave Pattern at Top */}
        <WavePattern fillColor="white" backgroundColor="bg-kobe-light-blue" />

        <div className="max-w-4xl mx-auto px-4 pt-16">
          <div className="bg-white rounded-3xl border-4 border-kobe-dark-teal shadow-xl p-8">
            <div className="text-center">
              <div className="text-6xl mb-4 flex justify-center">
                <FaMusic className="text-kobe-orange" />
              </div>
              <h2 className="text-2xl font-black text-kobe-dark-teal mb-4">
                多彩なジャンルのコピーバンドライブ
              </h2>
              <p className="text-lg font-bold text-kobe-dark-teal leading-relaxed mb-6">
                各団体によるアーティストのコピー曲披露
                <br />
                多くの人が知っているようなアーティストから、ニッチな音楽に至るまで
                <br />
                ジャンルを問わず多様な演奏をお楽しみいただけます
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 公式タイムテーブル画像 */}
      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black text-kobe-dark-teal md:text-4xl">
              公式タイムテーブル
            </h2>
            <p className="mt-3 font-bold text-gray-600">
              画像をタップすると拡大できます。保存して当日もご活用ください。
            </p>
          </div>

          <TimetablePoster priority />
        </div>
      </section>

      {/* Performance Schedule */}
      <section className="relative bg-kobe-light-blue py-20">
        <WavePattern fillColor="#94cef5" backgroundColor="bg-white" />

        <div className="mx-auto max-w-6xl px-4 pt-12">
          <div className="mb-10 text-center">
            <div className="mb-5 inline-block rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-7 py-3 text-white">
              <h2 className="text-3xl font-black md:text-4xl">
                出演スケジュール
              </h2>
            </div>
            <p className="font-bold leading-relaxed text-kobe-dark-teal md:text-lg">
              気になる出演内容を選ぶと、出演団体の詳細と公式SNSを確認できます。
            </p>
          </div>

          <TimetableSchedule />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default SetListPage;
