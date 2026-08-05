import type { Metadata } from "next";
import Image from "next/image";
import {
  FaCommentDots,
  FaGamepad,
  FaGuitar,
  FaShoppingBag,
  FaStore,
  FaUtensils,
} from "react-icons/fa";
import { DecorativeNotes } from "@/components/DecorativeNotes";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WavePattern } from "@/components/WavePattern";
import { boothVendors } from "@/constants/booths";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "ブース・出店情報｜神戸音学祭2026",
  description:
    "神戸音学祭2026のブース・出店情報ページです。現在公開中の4店舗と、グッズ、ゲーム屋台、交流ブースなどを紹介します。",
  path: "/booths",
});

const boothCards = [
  {
    title: "音学祭グッズ",
    description: "運営による神戸音学祭グッズの販売を予定しています。",
    icon: FaShoppingBag,
    accent: "bg-kobe-dark-teal",
  },
  {
    title: "ゲーム屋台",
    description: "景品ありのゲーム屋台を委員で運営予定です。",
    icon: FaGamepad,
    accent: "bg-gradient-to-r from-orange-500 to-yellow-400",
  },
  {
    title: "書き込み交流ブース",
    description:
      "来場者同士がメッセージを書き込み、交流できるブースを設置予定です。",
    icon: FaCommentDots,
    accent: "bg-kobe-dark-teal",
  },
  {
    title: "アコギ演奏ブース",
    description: "アコースティックギターの演奏を楽しめるブースを設置予定です。",
    icon: FaGuitar,
    accent: "bg-gradient-to-r from-yellow-400 to-orange-500",
  },
];

export default function BoothsPage() {
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
                  <FaStore className="text-6xl text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-kobe-dark-teal mb-6">
                ブース
              </h1>
              <div>
                <p className="inline-block px-6 py-2 rounded-full text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500">
                  出店・ゲーム・交流を楽しめる会場内エリア
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white relative">
          <WavePattern fillColor="white" backgroundColor="bg-kobe-light-blue" />

          <div className="max-w-6xl mx-auto px-4 pt-16">
            <div className="mb-10 rounded-3xl border-4 border-kobe-dark-teal bg-kobe-light-blue/20 p-6 text-center shadow-xl md:p-8">
              <p className="text-xl font-black leading-relaxed text-kobe-dark-teal md:text-2xl">
                ライブだけでなく、食べる・遊ぶ・交流する時間も楽しめる！
                <br className="hidden md:block" />
                現在4店舗の出店情報を公開中です。
              </p>
            </div>

            <section aria-labelledby="vendor-heading" className="mb-20">
              <div className="mb-8 text-center">
                <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 p-4 text-white">
                  <FaUtensils className="text-4xl" aria-hidden="true" />
                </div>
                <h2
                  id="vendor-heading"
                  className="text-3xl font-black text-kobe-dark-teal md:text-4xl"
                >
                  出店店舗
                </h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {boothVendors.map((vendor) => {
                  const hasGallery = vendor.images.length > 1;

                  return (
                    <article
                      key={vendor.name}
                      className={`overflow-hidden rounded-3xl border-4 border-kobe-dark-teal bg-white shadow-xl ${
                        hasGallery ? "lg:col-span-2" : ""
                      }`}
                    >
                      <div
                        className={
                          hasGallery
                            ? "grid grid-cols-2 gap-1 bg-kobe-dark-teal sm:grid-cols-3"
                            : "flex min-h-72 items-center justify-center bg-gray-50 p-5"
                        }
                      >
                        {vendor.images.map((image, index) => (
                          <div
                            key={image.src}
                            className={
                              hasGallery
                                ? "flex aspect-[4/3] items-center justify-center overflow-hidden bg-white"
                                : "flex h-full w-full items-center justify-center"
                            }
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={image.width}
                              height={image.height}
                              className={`h-full w-full ${
                                !hasGallery || index < 2
                                  ? "object-contain"
                                  : "object-cover"
                              }`}
                              sizes={
                                hasGallery
                                  ? "(min-width: 640px) 33vw, 50vw"
                                  : "(min-width: 1024px) 520px, calc(100vw - 64px)"
                              }
                            />
                          </div>
                        ))}
                      </div>

                      <div className="p-6 md:p-8">
                        <h3 className="text-2xl font-black text-kobe-dark-teal md:text-3xl">
                          {vendor.name}
                        </h3>
                        {vendor.affiliation && (
                          <p className="mt-2 text-sm font-bold text-kobe-gray md:text-base">
                            {vendor.affiliation}
                          </p>
                        )}

                        <p className="mt-6 text-sm font-black tracking-wide text-kobe-orange">
                          出店内容
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {vendor.offerings.map((offering) => (
                            <li
                              key={offering}
                              className="rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 px-4 py-2 text-sm font-black text-kobe-dark-teal shadow-sm"
                            >
                              {offering}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section aria-labelledby="other-booths-heading">
              <div className="mb-8 text-center">
                <h2
                  id="other-booths-heading"
                  className="text-3xl font-black text-kobe-dark-teal md:text-4xl"
                >
                  そのほかのブース
                </h2>
              </div>

              <div className="mb-10 flex justify-center">
                <div className="w-full max-w-3xl overflow-hidden rounded-3xl border-4 border-kobe-dark-teal bg-white shadow-xl">
                  <Image
                    src="/images/booths/booth.jpg"
                    alt="神戸音学祭のブースエリア案内"
                    width={1280}
                    height={1280}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 768px) 768px, calc(100vw - 32px)"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {boothCards.map((booth) => {
                  const Icon = booth.icon;

                  return (
                    <article
                      key={booth.title}
                      className="rounded-3xl border-4 border-kobe-dark-teal bg-white p-6 shadow-xl"
                    >
                      <div
                        className={`${booth.accent} mb-5 inline-flex rounded-full p-4`}
                      >
                        <Icon
                          className="text-4xl text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="mb-3 text-2xl font-black text-kobe-dark-teal">
                        {booth.title}
                      </h3>
                      <p className="text-base font-bold leading-relaxed text-kobe-dark-teal">
                        {booth.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
