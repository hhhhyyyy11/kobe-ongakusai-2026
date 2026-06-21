import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const crowdfundingUrl = "https://camp-fire.jp/projects/935171/view";
const crowdfundingWidgetUrl = "https://camp-fire.jp/projects/935171/widget";

export function CrowdfundingSection() {
  return (
    <section id="crowdfunding" className="bg-kobe-light-blue py-16 relative">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-7 py-3 rounded-full mb-4">
            <h2 className="text-3xl md:text-4xl font-black">
              クラウドファンディング
            </h2>
          </div>
          <p className="text-base md:text-xl font-black text-kobe-dark-teal">
            神戸音学祭2026の開催に向けて、ご支援を募集しています！
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border-6 border-kobe-dark-teal bg-white shadow-2xl">
          <div className="grid items-center gap-8 px-5 py-8 sm:p-8 lg:grid-cols-[minmax(320px,1fr)_minmax(340px,0.95fr)] lg:gap-10 lg:p-10">
            <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[430px]">
              <div className="absolute inset-5 rounded-[2rem] bg-gradient-to-br from-yellow-300 to-orange-400 opacity-35 blur-2xl" />
              <div className="relative rotate-[-2deg] rounded-[1.75rem] bg-gradient-to-br from-yellow-200 via-orange-100 to-white p-3 shadow-2xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
                  <Image
                    src="/images/crowd-fundings/funding.jpg"
                    alt="神戸音学祭2026 クラウドファンディングのお知らせ"
                    fill
                    quality={100}
                    sizes="(min-width: 1024px) 430px, (min-width: 640px) 360px, 320px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[420px]">
              <div className="mx-auto w-full max-w-[386px] overflow-hidden rounded-3xl bg-orange-50/80 text-center shadow-xl ring-2 ring-gray-200">
                <div className="flex min-h-[414px] w-full items-center justify-center bg-orange-50 p-4 sm:min-h-[459px] sm:p-5 md:min-h-[495px]">
                  <div className="h-[394px] w-[265px] overflow-hidden rounded-t-2xl bg-white shadow-lg sm:h-[431px] sm:w-[289px] md:h-[456px] md:w-[306px]">
                    <iframe
                      title="神戸音学祭2026 CAMPFIREクラウドファンディング支援状況"
                      src={crowdfundingWidgetUrl}
                      width="245"
                      height="365"
                      frameBorder="0"
                      scrolling="no"
                      loading="lazy"
                      className="h-[365px] w-[245px] origin-top-left scale-[1.08] bg-white sm:scale-[1.18] md:scale-[1.25]"
                    />
                  </div>
                </div>

                <Link
                  href={crowdfundingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 border-t-4 border-orange-400 bg-gradient-to-r from-yellow-400 to-orange-500 px-5 py-5 text-base font-black text-white transition-all duration-300 hover:from-yellow-300 hover:to-orange-500 lg:text-xl"
                >
                  CAMPFIREで詳細を見る
                  <FaExternalLinkAlt className="text-base" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
