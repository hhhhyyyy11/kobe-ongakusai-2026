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
          <div className="grid items-center gap-8 md:grid-cols-[minmax(310px,0.95fr)_minmax(0,1.05fr)] lg:gap-10">
            <div className="mx-auto w-full max-w-[324px]">
              <div className="flex min-h-[414px] items-center justify-center overflow-hidden rounded-2xl border-2 border-kobe-dark-teal bg-orange-50 p-2 shadow-xl sm:min-h-[459px] sm:border-4 sm:p-4 md:min-h-[495px]">
                <div className="h-[394px] w-[265px] overflow-hidden rounded-xl bg-white sm:h-[431px] sm:w-[289px] md:h-[456px] md:w-[306px]">
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
            </div>

            <div className="text-center md:text-left">
              <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-kobe-yellow px-5 py-2 text-sm md:text-base font-black text-kobe-dark-teal">
                <FaHeart className="text-kobe-orange" />
                CAMPFIREにて実施中
              </div>

              <h3 className="mb-5 text-2xl lg:text-4xl font-black leading-tight text-kobe-dark-teal">
                音楽で神戸をもっと熱く。
                <br />
                応援よろしくお願いします！
              </h3>

              <p className="mb-7 text-base lg:text-lg font-bold leading-relaxed text-gray-600">
                学生たちがつくる野外音楽フェス「神戸音学祭」を、今年も神戸で開催するためのクラウドファンディングです。リターン内容や詳細はCAMPFIREのページをご覧ください。
              </p>

              <Link
                href={crowdfundingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border-4 border-orange-400 bg-gradient-to-r from-yellow-400 to-orange-500 px-7 py-4 text-base lg:text-xl font-black text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
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
