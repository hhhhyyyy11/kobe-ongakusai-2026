import type { Metadata } from "next";
import { FaUsers } from "react-icons/fa";
import { ArtistSocialLinks } from "@/components/ArtistSocialLinks";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DecorativeNotes } from "@/components/DecorativeNotes";
import { WavePattern } from "@/components/WavePattern";
import { artists } from "@/constants/bands";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "出演団体｜神戸音学祭2026",
  description:
    "神戸音学祭2026に出演する関西圏10大学16団体・21バンドと、各団体の公式SNS、コピーするアーティストをご紹介します。",
  path: "/artists",
});

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-kobe-light-blue font-sans">
      <Header />

      <main>
        <section className="relative overflow-hidden pt-32 pb-16">
          <DecorativeNotes />

          <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
            <div className="mb-16 rounded-3xl border-6 border-kobe-dark-teal bg-white/90 p-8 shadow-2xl backdrop-blur-sm md:p-12">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 p-4">
                  <FaUsers className="text-6xl text-white" />
                </div>
              </div>
              <h1 className="mb-6 text-4xl font-black text-kobe-dark-teal md:text-6xl">
                出演団体
              </h1>
              <p className="inline-block rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 text-xl font-bold text-white md:text-2xl">
                10大学16団体・21バンドが出演
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-white py-16">
          <WavePattern fillColor="white" backgroundColor="bg-kobe-light-blue" />

          <div className="mx-auto max-w-6xl px-4 pt-16">
            <ul className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
              {artists.map((artist) => (
                <li
                  key={`${artist.university}-${artist.name}`}
                  className="flex flex-col rounded-2xl border-4 border-kobe-dark-teal bg-gray-50 p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl focus-within:-translate-y-1 focus-within:shadow-2xl"
                >
                  <h2 className="text-xl leading-tight font-black text-kobe-dark-teal">
                    {artist.name}
                  </h2>
                  <p className="mt-2 text-sm font-bold text-kobe-gray">
                    {artist.university}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs font-black tracking-wide text-kobe-orange">
                      コピーするアーティスト
                    </p>
                    <div className="mt-2 flex flex-wrap justify-center gap-2">
                      {artist.copyArtists.map((copyArtist) => (
                        <span
                          key={copyArtist}
                          className="rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 px-3 py-1.5 text-sm font-black text-kobe-dark-teal shadow-sm"
                        >
                          {copyArtist}
                        </span>
                      ))}
                    </div>
                  </div>

                  {artist.socials && (
                    <div className="mt-5">
                      <ArtistSocialLinks
                        socials={artist.socials}
                        labelPrefix={`${artist.university} ${artist.name}`}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
