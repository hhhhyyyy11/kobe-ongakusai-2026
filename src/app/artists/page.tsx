import type { Metadata } from "next";
import { FaInstagram, FaUsers, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DecorativeNotes } from "@/components/DecorativeNotes";
import { WavePattern } from "@/components/WavePattern";
import { artistGroups, type ArtistSocials } from "@/constants/bands";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "出演団体｜神戸音学祭2026",
  description:
    "神戸音学祭2026に出演する関西圏9大学15団体と、各団体の公式SNSをご紹介します。",
  path: "/artists",
});

const socialPlatforms = [
  {
    key: "instagram",
    label: "Instagram",
    icon: FaInstagram,
    className:
      "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500",
  },
  {
    key: "x",
    label: "X",
    icon: FaXTwitter,
    className: "bg-black hover:bg-gray-800",
  },
  {
    key: "youtube",
    label: "YouTube",
    icon: FaYoutube,
    className: "bg-red-600 hover:bg-red-700",
  },
] as const satisfies ReadonlyArray<{
  key: keyof ArtistSocials;
  label: string;
  icon: typeof FaInstagram;
  className: string;
}>;

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
                9大学15団体が出演
              </p>
            </div>
          </div>
        </section>

        <section className="relative bg-white py-16">
          <WavePattern fillColor="white" backgroundColor="bg-kobe-light-blue" />

          <div className="mx-auto max-w-6xl px-4 pt-16">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {artistGroups.map((group) => (
                <section
                  key={group.university}
                  className="overflow-hidden rounded-2xl border-4 border-kobe-dark-teal bg-white shadow-lg"
                >
                  <h2 className="bg-kobe-dark-teal px-5 py-4 text-center text-xl font-black text-white">
                    {group.university}
                  </h2>

                  <ul className="space-y-4 p-5">
                    {group.artists.map((artist) => (
                      <li
                        key={artist.name}
                        className="rounded-xl border-2 border-kobe-light-blue bg-gray-50 p-4"
                      >
                        <h3 className="text-center text-lg leading-tight font-black text-kobe-dark-teal">
                          {artist.name}
                        </h3>

                        {artist.socials && (
                          <div className="mt-4 flex justify-center gap-3">
                            {socialPlatforms.map((platform) => {
                              const href = artist.socials?.[platform.key];

                              if (!href) {
                                return null;
                              }

                              const Icon = platform.icon;

                              return (
                                <a
                                  key={platform.key}
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${group.university}${artist.name}の${platform.label}を新しいタブで開く`}
                                  title={platform.label}
                                  className={`rounded-full p-3 text-white shadow-md transition-all duration-300 hover:scale-110 ${platform.className}`}
                                >
                                  <Icon
                                    className="text-lg"
                                    aria-hidden="true"
                                  />
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
