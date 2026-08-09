import React from "react";
import Image from "next/image";
import { FaHandshake } from "react-icons/fa";
import { SupporterCard } from "./SupporterCard";
import { WavePattern } from "./WavePattern";
import { featuredSponsors } from "@/constants/sponsors";

export function SponsorSection() {
  return (
    <section id="sponsor" className="py-20 bg-kobe-light-blue relative">
      {/* Wave Pattern at Top */}
      <WavePattern fillColor="#94cef5" backgroundColor="bg-white" />

      <div className="max-w-6xl mx-auto px-4 pt-8">
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full mb-6">
            <h2 className="text-4xl md:text-5xl font-black">協賛企業・団体</h2>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-3xl border-4 border-kobe-dark-teal shadow-xl md:p-12 p-4">
            <div className="text-8xl mb-6 flex justify-center">
              <FaHandshake className="text-kobe-dark-teal" />
            </div>
            <p className="md:text-2xl text-xl font-black text-kobe-dark-teal mb-2">
              ご支援いただける企業様・団体様はこちらのメールアドレスまでご連絡ください！
            </p>
            <p className="md:text-2xl text-lg font-bold text-gray-500 mb-6">
              ongakusai.kobe@gmail.com
            </p>

            <div className="mb-8">
              <div className="inline-block bg-kobe-dark-teal px-6 py-2 rounded-full mb-5">
                <h3 className="text-2xl font-black text-white">後援</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <SupporterCard name="神戸市中央区役所" />
                <SupporterCard name="神戸新聞社" />
                <SupporterCard
                  name="サンテレビ"
                  image={{
                    src: "/images/sponsors/suntv.png",
                    width: 859,
                    height: 612,
                  }}
                />
              </div>

              <p className="mt-5 rounded-2xl border border-kobe-dark-teal bg-kobe-light-blue/20 px-4 py-3 text-sm font-bold leading-relaxed text-kobe-dark-teal">
                この事業は、令和 8 年度
                神戸市地域貢献活動補助金を受けて実施しています。
              </p>
            </div>

            <div className="mt-10 border-t-2 border-gray-200 pt-10">
              <div className="mb-8 inline-block rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2">
                <h3 className="text-2xl font-black text-white">特別協賛</h3>
              </div>

              <div className="grid gap-10">
                {featuredSponsors.map((sponsor) => (
                  <article
                    key={sponsor.name}
                    className="overflow-hidden rounded-3xl border-4 border-kobe-orange bg-gradient-to-br from-white via-white to-orange-50 p-4 shadow-xl sm:p-7"
                  >
                    <div className="mb-6 text-center">
                      <p className="mb-2 text-xs font-black tracking-[0.28em] text-kobe-orange">
                        SPECIAL SPONSOR
                      </p>
                      <h4 className="text-2xl leading-tight font-black text-kobe-dark-teal sm:text-3xl">
                        {sponsor.name}
                      </h4>
                    </div>

                    <div className="grid items-center gap-7 lg:grid-cols-2">
                      <div className="flex min-h-64 items-center justify-center overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-3 shadow-inner">
                        <Image
                          src={sponsor.image.src}
                          alt={sponsor.image.alt}
                          width={sponsor.image.width}
                          height={sponsor.image.height}
                          sizes="(min-width: 1024px) 480px, 90vw"
                          className="h-auto max-h-[38rem] w-full object-contain"
                        />
                      </div>

                      <div className="space-y-4 text-left text-base leading-relaxed font-bold text-gray-700 sm:text-lg">
                        {sponsor.paragraphs.map((paragraph) => (
                          <p key={paragraph} className="whitespace-pre-line">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
