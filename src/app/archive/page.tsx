import type { Metadata } from "next";
import Image from "next/image";
import { FaImages } from "react-icons/fa";
import { DecorativeNotes } from "@/components/DecorativeNotes";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WavePattern } from "@/components/WavePattern";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "前回開催の様子｜神戸音学祭",
  description:
    "前回開催された神戸音学祭の写真アーカイブです。学生音楽フェスの会場の熱気や演奏の様子を写真で紹介します。",
  path: "/archive",
});

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
                前回開催の様子
              </h1>
              <div>
                <p className="inline-block px-6 py-2 rounded-full text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500">
                  神戸音学祭の熱気を写真で振り返る
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white relative">
          <WavePattern fillColor="white" backgroundColor="bg-kobe-light-blue" />

          <div className="max-w-7xl mx-auto px-4 pt-16">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {archiveImages.map((src, index) => (
                <div
                  key={src}
                  className="group overflow-hidden rounded-3xl border-4 border-kobe-dark-teal bg-gray-100 shadow-xl"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={src}
                      alt={`前回開催の様子 ${index + 1}`}
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
