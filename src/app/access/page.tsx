import type { Metadata } from "next";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaCloudSun,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaTicketAlt,
  FaTrain,
} from "react-icons/fa";
import { DecorativeNotes } from "@/components/DecorativeNotes";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WavePattern } from "@/components/WavePattern";
import { createPageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "アクセス・FAQ｜神戸音学祭2026",
  description:
    "神戸音学祭2026のアクセス、開催概要、入場方法、雨天時対応、よくある質問をまとめています。会場は神戸・TOTTEI PARK、入場無料・入退場自由です。",
  path: "/access",
});

const overviewItems = [
  {
    title: "開催日",
    text: "2026年8月21日（金）",
    detail: "開催時間は決定次第お知らせします。",
    icon: FaCalendarAlt,
  },
  {
    title: "会場",
    text: "TOTTEI PARK",
    detail: "神戸ウォーターフロントエリア",
    icon: FaMapMarkerAlt,
  },
  {
    title: "入場",
    text: "無料・予約不要",
    detail: "入退場自由です。途中参加もできます。",
    icon: FaTicketAlt,
  },
];

const faqItems = [
  {
    question: "神戸音学祭2026はいつ開催されますか？",
    answer:
      "2026年8月21日（金）に開催予定です。開催時間は決定次第お知らせします。",
  },
  {
    question: "会場はどこですか？",
    answer: "会場はTOTTEI PARKです。各線三宮駅から徒歩約17分です。",
  },
  {
    question: "入場料や予約は必要ですか？",
    answer:
      "入場無料・予約不要です。入退場自由のため、気軽にお立ち寄りいただけます。",
  },
  {
    question: "雨天時は開催されますか？",
    answer:
      "天候による開催可否や変更がある場合は、公式サイトと公式SNSでお知らせします。",
  },
  {
    question: "出演団体やタイムテーブルはいつ公開されますか？",
    answer:
      "出演団体とタイムテーブルは決定次第、公式サイト内の出演団体ページ、タイムテーブルページ、公式SNSで公開します。",
  },
];

export default function AccessPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "TOP",
        item: absoluteUrl(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "アクセス・FAQ",
        item: absoluteUrl("/access"),
      },
    ],
  };

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
                  <FaQuestionCircle className="text-6xl text-white" />
                </div>
              </div>
              <h1 className="mb-6 text-4xl font-black text-kobe-dark-teal md:text-6xl">
                アクセス・FAQ
              </h1>
              <p className="inline-block rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 text-xl font-bold text-white md:text-2xl">
                来場前に知っておきたい情報をまとめました
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-white py-20">
          <WavePattern fillColor="white" backgroundColor="bg-kobe-light-blue" />

          <div className="mx-auto max-w-6xl px-4 pt-16">
            <div className="mb-12 grid gap-6 md:grid-cols-3">
              {overviewItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border-4 border-kobe-dark-teal bg-white p-6 text-center shadow-xl"
                  >
                    <Icon className="mx-auto mb-4 text-5xl text-kobe-orange" />
                    <h2 className="mb-3 text-xl font-black text-kobe-dark-teal">
                      {item.title}
                    </h2>
                    <p className="mb-2 text-2xl font-black text-kobe-dark-teal">
                      {item.text}
                    </p>
                    <p className="text-sm font-bold leading-relaxed text-gray-600">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mb-12 grid gap-8 lg:grid-cols-2">
              <section className="rounded-3xl border-4 border-kobe-dark-teal bg-kobe-dark-teal p-8 text-white shadow-xl">
                <div className="mb-5 flex items-center gap-3">
                  <FaTrain className="text-4xl text-kobe-yellow" />
                  <h2 className="text-3xl font-black">会場アクセス</h2>
                </div>
                <p className="mb-4 text-xl font-black">TOTTEI PARK</p>
                <p className="mb-6 font-bold leading-relaxed">
                  各線三宮駅から徒歩約17分です。公共交通機関での来場をおすすめします。
                </p>
                <Link
                  href="https://www.totteikobe.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-black text-kobe-dark-teal transition-colors hover:bg-kobe-yellow"
                >
                  TOTTEI PARK公式サイト
                  <FaExternalLinkAlt className="text-sm" />
                </Link>
              </section>

              <section className="rounded-3xl border-4 border-kobe-dark-teal bg-white p-8 shadow-xl">
                <div className="mb-5 flex items-center gap-3">
                  <FaCloudSun className="text-4xl text-kobe-orange" />
                  <h2 className="text-3xl font-black text-kobe-dark-teal">
                    当日の案内
                  </h2>
                </div>
                <div className="space-y-4 text-kobe-dark-teal">
                  <p className="font-bold leading-relaxed">
                    天候や会場状況により案内内容が変わる場合は、公式サイトと公式SNSでお知らせします。
                  </p>
                  <p className="font-bold leading-relaxed">
                    出演団体、タイムテーブル、ブース詳細は決定次第、各ページと公式SNSで順次公開します。
                  </p>
                </div>
              </section>
            </div>

            <section className="rounded-3xl border-4 border-kobe-dark-teal bg-gray-50 p-6 shadow-xl md:p-8">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-black text-kobe-dark-teal md:text-4xl">
                  よくある質問
                </h2>
              </div>

              <div className="grid gap-4">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="rounded-2xl border-2 border-gray-200 bg-white p-5"
                  >
                    <summary className="cursor-pointer text-lg font-black text-kobe-dark-teal">
                      {item.question}
                    </summary>
                    <p className="mt-3 font-bold leading-relaxed text-gray-700">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </div>
  );
}
