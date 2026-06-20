import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaHeart } from "react-icons/fa";

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

        <div className="max-w-5xl mx-auto bg-white rounded-3xl border-6 border-kobe-dark-teal shadow-2xl px-2 py-8 sm:p-5 md:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(240px,0.9fr)_minmax(310px,1.1fr)] lg:gap-10">
            <div className="mx-auto w-full max-w-[285px] sm:max-w-[324px] lg:max-w-[320px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-kobe-dark-teal bg-orange-50 shadow-xl md:border-4">
                <Image
                  src="/images/crowd-fundings/funding.jpg"
                  alt="神戸音学祭2026 クラウドファンディングのお知らせ"
                  fill
                  sizes="(min-width: 1024px) 240px, (min-width: 768px) 35vw, 324px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mx-auto flex w-full max-w-[420px] flex-col items-center text-center">
              <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-kobe-yellow px-5 py-2 text-sm md:text-base font-black text-kobe-dark-teal">
                <FaHeart className="text-kobe-orange" />
                CAMPFIREにて実施中
              </div>

              <div className="flex min-h-[414px] w-full max-w-[348px] items-center justify-center overflow-hidden rounded-2xl border-2 border-kobe-dark-teal bg-orange-50 p-2 shadow-xl sm:min-h-[459px] sm:border-4 sm:p-4 md:min-h-[495px] lg:min-h-[515px] lg:max-w-[362px]">
                <div className="h-[394px] w-[265px] overflow-hidden rounded-xl bg-white sm:h-[431px] sm:w-[289px] md:h-[456px] md:w-[306px] lg:h-[475px] lg:w-[319px]">
                  <iframe
                    title="神戸音学祭2026 CAMPFIREクラウドファンディング支援状況"
                    src={crowdfundingWidgetUrl}
                    width="245"
                    height="365"
                    frameBorder="0"
                    scrolling="no"
                    loading="lazy"
                    className="h-[365px] w-[245px] origin-top-left scale-[1.08] bg-white sm:scale-[1.18] md:scale-[1.25] lg:scale-[1.3]"
                  />
                </div>
              </div>

              <Link
                href={crowdfundingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-3 rounded-full border-4 border-orange-400 bg-gradient-to-r from-yellow-400 to-orange-500 px-7 py-4 text-base lg:text-xl font-black text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                CAMPFIREで詳細を見る
                <FaExternalLinkAlt className="text-base" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
