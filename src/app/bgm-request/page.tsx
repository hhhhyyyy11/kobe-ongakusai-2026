import type { Metadata } from "next";
import Link from "next/link";
import { FaExternalLinkAlt, FaHeadphones, FaMusic } from "react-icons/fa";
import { DecorativeNotes } from "@/components/DecorativeNotes";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WavePattern } from "@/components/WavePattern";
import { createPageMetadata } from "@/lib/metadata";

const formUrl = "https://forms.gle/adCZneNU7C7HSUCp7";
const embeddedFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfMEUV0RF_-j1H4sWXvbYocEENEfbIJU4XoKN_OoRg1bdKuOw/viewform?embedded=true";

export const metadata: Metadata = createPageMetadata({
  title: "BGMリクエスト｜神戸音学祭2026",
  description:
    "神戸音学祭2026の会場で流れるBGMをリクエストできます。8月21日の転換間や休憩時間に、あなたの好きな曲が流れるかもしれません。",
  path: "/bgm-request",
});

export default function BgmRequestPage() {
  return (
    <div className="min-h-screen bg-kobe-light-blue font-sans">
      <Header />

      <main>
        <section className="relative overflow-hidden pt-32 pb-16">
          <DecorativeNotes />

          <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
            <div className="rounded-3xl border-6 border-kobe-dark-teal bg-white/90 p-8 shadow-2xl backdrop-blur-sm md:p-12">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 p-4">
                  <FaHeadphones
                    className="text-6xl text-white"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <h1 className="mb-6 text-4xl font-black text-kobe-dark-teal md:text-6xl">
                BGMリクエスト
              </h1>
              <p className="inline-block rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 text-xl font-bold text-white md:text-2xl">
                あなたの好きな曲が会場で流れるかも！
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-white py-20">
          <WavePattern fillColor="white" backgroundColor="bg-kobe-light-blue" />

          <div className="mx-auto max-w-5xl px-4 pt-16">
            <section className="mb-10 rounded-3xl border-4 border-kobe-dark-teal bg-kobe-yellow-light p-6 shadow-xl md:p-10">
              <div className="mb-6 flex items-center justify-center gap-3 text-center">
                <FaMusic
                  className="shrink-0 text-4xl text-kobe-orange"
                  aria-hidden="true"
                />
                <h2 className="text-2xl font-black text-kobe-dark-teal md:text-4xl">
                  あなたの好きな曲が会場で流れるかも！
                </h2>
              </div>

              <div className="space-y-5 text-base leading-relaxed font-bold text-kobe-dark-teal md:text-lg">
                <p>
                  こちらからリクエストした楽曲が、8/21当日の転換間や休憩時間に流れるBGMプレイリストに追加されます！
                  <br />
                  是非リクエストしてください！
                </p>
                <div className="space-y-2 rounded-2xl bg-white/80 p-5 text-sm md:text-base">
                  <p>※リクエストは1人1曲までとさせていただきます。</p>
                  <p>
                    ※センシティブな内容を含む楽曲の場合、採用されない場合がございます。
                  </p>
                </div>
              </div>
            </section>

            <section
              aria-labelledby="request-form-heading"
              className="overflow-hidden rounded-3xl border-4 border-kobe-dark-teal bg-white shadow-xl"
            >
              <div className="bg-kobe-dark-teal px-5 py-6 text-center text-white md:px-8">
                <h2
                  id="request-form-heading"
                  className="text-2xl font-black md:text-3xl"
                >
                  BGMリクエストフォーム
                </h2>
                <p className="mt-3 font-bold">
                  アーティスト名と楽曲名を入力して送信してください。
                </p>
              </div>

              <iframe
                src={embeddedFormUrl}
                title="神戸音学祭2026 BGMリクエストフォーム"
                className="h-[1100px] w-full border-0 sm:h-[1000px]"
                referrerPolicy="strict-origin-when-cross-origin"
              >
                BGMリクエストフォーム
              </iframe>

              <div className="border-t-2 border-gray-200 bg-gray-50 p-5 text-center">
                <Link
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-kobe-dark-teal"
                >
                  Googleフォームを別画面で開く
                  <FaExternalLinkAlt className="text-sm" aria-hidden="true" />
                </Link>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
