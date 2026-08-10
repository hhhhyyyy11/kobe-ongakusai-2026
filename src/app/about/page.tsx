import type { Metadata } from "next";
import Image from "next/image";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaHandshake,
  FaImages,
  FaMicrophone,
  FaMusic,
  FaStar,
} from "react-icons/fa";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DecorativeNotes } from "@/components/DecorativeNotes";
import { WavePattern } from "@/components/WavePattern";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "神戸音学祭とは｜神戸音学祭2026",
  description:
    "神戸音学祭は、学生音楽から神戸市を盛り上げることを目指す学生主催の野外音楽フェスです。企画の背景、コンセプト、過去の開催や写真をご紹介します。",
  path: "/about",
});

const pastEvents = [
  {
    year: "2025",
    title: "神戸音学祭 2025",
    url: "https://kobe-ongakusai-2025.vercel.app/",
    description:
      "神戸音学祭の初開催ページです。学生がつくる野外音楽フェスの雰囲気や、当日の開催情報を振り返れます。",
  },
];

const archiveImages = [
  "/images/archive/S__21094535_0.jpg",
  "/images/archive/S__21094536_0.jpg",
  "/images/archive/S__21094538_0.jpg",
  "/images/archive/S__21094539_0.jpg",
  "/images/archive/S__21094540_0.jpg",
  "/images/archive/S__21094541_0.jpg",
  "/images/archive/S__21094542_0.jpg",
  "/images/archive/S__21094543_0.jpg",
  "/images/archive/S__21094544_0.jpg",
  "/images/archive/S__21094546_0.jpg",
  "/images/archive/S__21094547_0.jpg",
  "/images/archive/S__21094548_0.jpg",
  "/images/archive/S__21094549_0.jpg",
  "/images/archive/S__21094550_0.jpg",
  "/images/archive/S__21094551_0.jpg",
];

function AboutPage() {
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
              神戸音学祭について
            </h1>
            <div>
              <p className="inline-block px-6 py-2 rounded-full text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500">
                学生の、学生による、学生のための野外音楽フェス
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white relative">
        {/* Wave Pattern at Top */}
        <WavePattern fillColor="white" backgroundColor="bg-kobe-light-blue" />

        <div className="max-w-6xl mx-auto px-4 pt-16">
          {/* 集合写真 */}
          <div className="mb-12 rounded-3xl border-4 border-kobe-dark-teal shadow-xl overflow-hidden bg-gray-100">
            <Image
              src="/images/archive/S__21094537_0.jpg"
              alt="神戸音学祭 集合写真"
              width={1477}
              height={1108}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* コンセプト */}
            <div className="bg-white rounded-3xl border-4 border-kobe-dark-teal shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4 inline-block mb-4">
                  <FaMusic className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-black text-kobe-dark-teal mb-4">
                  コンセプト
                </h3>
              </div>
              <div className="text-kobe-dark-teal font-bold space-y-4">
                <div className="bg-kobe-light-blue/20 rounded-2xl p-4">
                  <p className="text-lg leading-relaxed">
                    「学生音楽から神戸市を盛り上げる、学生の、学生による、学生のための野外音楽フェス」をスローガンに掲げています。
                  </p>
                </div>
                <div className="bg-kobe-light-blue/20 rounded-2xl p-4">
                  <p className="leading-relaxed">
                    学生のエネルギッシュな主体性や世代の壁を超える音楽の力を通して、神戸全体を活気づけ、想いによって人と繋がる街を形作っていくことを目指しています。
                  </p>
                  <p className="text-sm mt-2 text-center opacity-80">
                    ※神戸アリーナプロジェクトの一環
                  </p>
                </div>
              </div>
            </div>

            {/* 特徴 */}
            <div className="bg-kobe-dark-teal rounded-3xl border-2 border-kobe-dark-teal shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="bg-white rounded-full p-4 inline-block mb-4">
                  <FaHandshake className="text-4xl text-kobe-dark-teal" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">
                  イベントの特徴
                </h3>
              </div>
              <div className="text-white font-bold space-y-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 text-white">
                  <p className="font-black mb-2 flex items-center gap-2">
                    <FaMusic />
                    学生主体の運営
                  </p>
                  <p className="text-sm">
                    企画・運営、音響PA、スタッフ業務全てを学生で実施
                  </p>
                </div>
                <div className="bg-kobe-light-blue rounded-2xl p-4 text-kobe-dark-teal">
                  <p className="font-black mb-2 flex items-center gap-2">
                    <FaMicrophone />
                    多様な音楽ジャンル
                  </p>
                  <p className="text-sm">
                    メジャーからニッチまで幅広いアーティストのコピー演奏
                  </p>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <p className="font-black mb-2 flex items-center gap-2">
                    <FaStar />
                    野外フェスの魅力
                  </p>
                  <p className="text-sm">
                    学生が全業務を手がける屋外音楽フェスは当イベントの強み
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ストーリー */}
          <div
            className="rounded-3xl border-4 border-white shadow-xl p-8 text-white"
            style={{
              background: "linear-gradient(to right, #2C5F5D, #B8960A)",
            }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-black mb-4">
                プロジェクトストーリー
              </h3>
              <p className="text-lg font-bold">
                神戸をもっと元気にしたいという想いから始まった挑戦
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white/20 rounded-2xl p-6">
                <p className="font-bold leading-relaxed">
                  神戸音学祭は、神戸大学の学生である澤田陽介（経営学部3年）と栄陽向太（理学部3年）により企画・立ち上げられた学生主導の音楽フェスティバルです。
                </p>
              </div>

              <div className="bg-white/20 rounded-2xl p-6">
                <p className="font-bold leading-relaxed">
                  本イベントは、「神戸をもっと元気にしたい」という想いを掲げるOne
                  Bright
                  Kobe代表・渋谷氏の講義に、澤田が受講生として参加したことをきっかけに始動しました。
                </p>
              </div>

              <div className="bg-white/20 rounded-2xl p-6">
                <p className="font-bold leading-relaxed">
                  講義後、澤田が渋谷氏に直接アポイントを取り、自身の「学生の手で大規模な音楽フェスを実現したい」という構想をプレゼンテーション。その熱意にご賛同いただき、本プロジェクトがスタートしました。
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-kobe-dark-teal">
                <p className="font-black text-center leading-relaxed">
                  2年目を迎える今回は、より多くの関係者や地域を巻き込みながら、神戸を代表するイベントへと発展させていくことを目指しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section
        id="archive"
        className="relative scroll-mt-24 bg-kobe-light-blue py-20"
      >
        <WavePattern fillColor="#94cef5" backgroundColor="bg-white" />

        <div className="mx-auto max-w-7xl px-4 pt-16">
          <div className="mb-16 text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 p-4">
                <FaImages className="text-5xl text-white md:text-6xl" />
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-black text-kobe-dark-teal md:text-5xl">
              過去の開催・アーカイブ
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed font-bold text-kobe-dark-teal md:text-lg">
              これまでに開催された神戸音学祭の記録と、会場の様子をご紹介します。
            </p>
          </div>

          <div className="mb-16 grid gap-6 md:grid-cols-2">
            {pastEvents.map((event) => (
              <a
                key={event.year}
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl border-4 border-kobe-dark-teal bg-kobe-yellow-light p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-kobe-dark-teal px-4 py-2 text-sm font-black text-white">
                      <FaCalendarAlt aria-hidden="true" />
                      {event.year}年開催
                    </div>
                    <h3 className="mb-3 text-2xl font-black text-kobe-dark-teal md:text-3xl">
                      {event.title}
                    </h3>
                    <p className="text-base leading-relaxed font-bold text-kobe-dark-teal">
                      {event.description}
                    </p>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white transition-transform duration-300 group-hover:translate-x-1">
                    <FaExternalLinkAlt className="text-xl" aria-hidden="true" />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-black text-kobe-orange">
                  2025年ページを見る
                  <FaArrowRight aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>

          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-black text-kobe-dark-teal md:text-5xl">
              フォトアーカイブ
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed font-bold text-kobe-dark-teal md:text-lg">
              会場の熱気や演奏の様子を写真で振り返ります。
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {archiveImages.map((src, index) => (
              <div
                key={src}
                className="group overflow-hidden rounded-3xl border-4 border-kobe-dark-teal bg-gray-100 shadow-xl"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={src}
                    alt={`神戸音学祭アーカイブ写真 ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutPage;
