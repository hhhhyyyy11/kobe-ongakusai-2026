import type { Metadata } from "next";
import Image from "next/image";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaImages,
} from "react-icons/fa";
import { DecorativeNotes } from "@/components/DecorativeNotes";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WavePattern } from "@/components/WavePattern";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "アーカイブ｜神戸音学祭2026",
  description:
    "神戸音学祭の過去開催をまとめたアーカイブです。2025年開催ページへのリンクや会場の熱気を写真で紹介します。",
  path: "/archive",
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
  "/images/archive/S__21094537_0.jpg",
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

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-kobe-light-blue font-sans">
      <Header />

      <main>
        <section className="relative pt-32 pb-16 overflow-hidden">
          <DecorativeNotes />

          <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-6 border-kobe-dark-teal shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4">
                  <FaImages className="text-6xl text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-kobe-dark-teal mb-6">
                アーカイブ
              </h1>
              <div>
                <p className="inline-block px-6 py-2 rounded-full text-lg md:text-2xl font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500">
                  過去の神戸音学祭を振り返る
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white relative">
          <WavePattern fillColor="white" backgroundColor="bg-kobe-light-blue" />

          <div className="max-w-7xl mx-auto px-4 pt-16">
            <div className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-black text-kobe-dark-teal mb-4">
                  開催アーカイブ
                </h2>
                <p className="max-w-3xl mx-auto text-base md:text-lg font-bold leading-relaxed text-kobe-dark-teal">
                  これまでに開催された神戸音学祭の記録をまとめています。
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
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
                        <h3 className="text-2xl md:text-3xl font-black text-kobe-dark-teal mb-3">
                          {event.title}
                        </h3>
                        <p className="text-base font-bold leading-relaxed text-kobe-dark-teal">
                          {event.description}
                        </p>
                      </div>

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white transition-transform duration-300 group-hover:translate-x-1">
                        <FaExternalLinkAlt
                          className="text-xl"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-black text-kobe-orange">
                      2025年ページを見る
                      <FaArrowRight aria-hidden="true" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-kobe-dark-teal mb-4">
                フォトアーカイブ
              </h2>
              <p className="max-w-3xl mx-auto text-base md:text-lg font-bold leading-relaxed text-kobe-dark-teal">
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
                      priority={index < 3}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
