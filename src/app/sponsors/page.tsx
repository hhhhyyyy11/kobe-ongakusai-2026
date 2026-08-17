import type { Metadata } from "next";
import { FaHandshake } from "react-icons/fa";
import { DecorativeNotes } from "@/components/DecorativeNotes";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SponsorDetailCard } from "@/components/SponsorDetailCard";
import { SupporterCard } from "@/components/SupporterCard";
import { WavePattern } from "@/components/WavePattern";
import {
  featuredSponsors,
  goodsSponsors,
  sponsorContactEmail,
  supporters,
} from "@/constants/sponsors";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "スポンサー｜神戸音学祭2026",
  description:
    "神戸音学祭2026をご支援いただいている後援団体・特別協賛企業・物品協賛企業と、協賛に関するお問い合わせ先をご紹介します。",
  path: "/sponsors",
});

function SponsorsPage() {
  return (
    <div className="min-h-screen bg-kobe-light-blue font-sans">
      <Header />

      <section className="relative overflow-hidden pt-32 pb-16">
        <DecorativeNotes />

        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
          <div className="rounded-3xl border-6 border-kobe-dark-teal bg-white/90 p-8 shadow-2xl backdrop-blur-sm md:p-12">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 p-4">
                <FaHandshake className="text-6xl text-white" />
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-black text-kobe-dark-teal md:text-6xl">
              スポンサー
            </h1>
            <p className="text-lg leading-relaxed font-bold text-kobe-dark-teal md:text-xl">
              神戸音学祭をご支援いただいている企業・団体をご紹介します
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-20">
        <WavePattern fillColor="white" backgroundColor="bg-kobe-light-blue" />

        <div className="mx-auto max-w-6xl space-y-12 px-4 pt-12">
          <div className="rounded-3xl border-4 border-kobe-dark-teal bg-white p-5 text-center shadow-xl sm:p-8 md:p-10">
            <div className="mb-6 inline-block rounded-full bg-kobe-dark-teal px-6 py-2">
              <h2 className="text-2xl font-black text-white">後援</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {supporters.map((supporter) => (
                <SupporterCard
                  key={supporter.name}
                  name={supporter.name}
                  image={supporter.image}
                />
              ))}
            </div>

            <p className="mt-5 rounded-2xl border border-kobe-dark-teal bg-kobe-light-blue/20 px-4 py-3 text-sm leading-relaxed font-bold text-kobe-dark-teal">
              この事業は、令和 8 年度
              神戸市地域貢献活動補助金を受けて実施しています。
            </p>
          </div>

          <div>
            <div className="mb-8 text-center">
              <div className="inline-block rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-7 py-3">
                <h2 className="text-3xl font-black text-white md:text-4xl">
                  特別協賛
                </h2>
              </div>
            </div>

            <div className="grid gap-10">
              {featuredSponsors.map((sponsor) => (
                <SponsorDetailCard
                  key={sponsor.name}
                  name={sponsor.name}
                  badgeText="SPECIAL SPONSOR"
                  variant="special"
                  image={sponsor.image}
                  paragraphs={sponsor.paragraphs}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 text-center">
              <div className="inline-block rounded-full bg-kobe-dark-teal px-7 py-3">
                <h2 className="text-3xl font-black text-white md:text-4xl">
                  物品協賛
                </h2>
              </div>
            </div>

            <div className="grid gap-10">
              {goodsSponsors.map((sponsor) => (
                <SponsorDetailCard
                  key={sponsor.name}
                  name={sponsor.name}
                  badgeText="GOODS SPONSOR"
                  variant="goods"
                  image={sponsor.image}
                  paragraphs={sponsor.paragraphs}
                />
              ))}
            </div>
          </div>

          <div className="rounded-3xl border-4 border-kobe-dark-teal bg-kobe-light-blue/20 p-6 text-center shadow-xl sm:p-10">
            <h2 className="mb-4 text-2xl font-black text-kobe-dark-teal md:text-3xl">
              協賛に関するお問い合わせ
            </h2>
            <p className="mb-4 leading-relaxed font-bold text-kobe-dark-teal md:text-lg">
              ご支援いただける企業様・団体様はこちらのメールアドレスまでご連絡ください！
            </p>
            <a
              href={`mailto:${sponsorContactEmail}`}
              className="break-all text-lg font-black text-kobe-dark-teal underline decoration-2 underline-offset-4 transition-colors hover:text-kobe-orange md:text-2xl"
            >
              {sponsorContactEmail}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SponsorsPage;
