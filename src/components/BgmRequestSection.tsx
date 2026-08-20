import Link from "next/link";
import { FaArrowRight, FaHeadphones, FaMusic } from "react-icons/fa";

export function BgmRequestSection() {
  return (
    <section id="bgm-request" className="relative bg-kobe-light-blue py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-7 py-3 text-white">
            <h2 className="text-3xl font-black md:text-4xl">BGMリクエスト</h2>
          </div>
          <p className="text-base font-black text-kobe-dark-teal md:text-xl">
            あなたの好きな曲が会場で流れるかも！
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border-6 border-kobe-dark-teal bg-white shadow-2xl">
          <div className="grid items-stretch lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col items-center justify-center bg-kobe-dark-teal p-8 text-center text-white md:p-10">
              <div className="mb-5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 p-5 shadow-xl">
                <FaHeadphones className="text-6xl" aria-hidden="true" />
              </div>
              <p className="mb-2 text-3xl font-black text-kobe-yellow md:text-4xl">
                8/21 当日
              </p>
              <p className="max-w-md text-base leading-relaxed font-bold md:text-lg">
                転換間や休憩時間に流れるBGMプレイリストに追加されます！
              </p>
            </div>

            <div className="p-6 md:p-10">
              <div className="mb-5 flex items-center gap-3">
                <FaMusic
                  className="shrink-0 text-4xl text-kobe-orange"
                  aria-hidden="true"
                />
                <h3 className="text-2xl font-black text-kobe-dark-teal md:text-3xl">
                  会場で聴きたい曲を教えてください
                </h3>
              </div>

              <p className="mb-6 text-base leading-relaxed font-bold text-kobe-dark-teal md:text-lg">
                リクエストした楽曲が、神戸音学祭2026の会場BGMとして流れるかもしれません。是非リクエストしてください！
              </p>

              <div className="mb-6 space-y-2 rounded-2xl bg-kobe-yellow-light p-5 text-sm font-bold text-kobe-dark-teal md:text-base">
                <p>※リクエストは1人1曲までとさせていただきます。</p>
                <p>
                  ※センシティブな内容を含む楽曲の場合、採用されない場合がございます。
                </p>
              </div>

              <Link
                href="/bgm-request"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-4 text-lg font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-kobe-dark-teal"
              >
                BGMをリクエストする
                <FaArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
