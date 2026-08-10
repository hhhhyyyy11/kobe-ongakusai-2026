import React from "react";
import Link from "next/link";
import { FaArrowRight, FaHandshake } from "react-icons/fa";
import { SupporterCard } from "./SupporterCard";
import { WavePattern } from "./WavePattern";
import { featuredSponsors, supporters } from "@/constants/sponsors";

export function SponsorSection() {
  return (
    <section id="sponsor" className="relative bg-kobe-light-blue py-16">
      {/* Wave Pattern at Top */}
      <WavePattern fillColor="#94cef5" backgroundColor="bg-white" />

      <div className="mx-auto max-w-6xl px-4 pt-8">
        <div className="mb-6 text-center">
          <div className="mb-6 inline-block rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 text-white">
            <h2 className="text-4xl font-black md:text-5xl">スポンサー</h2>
          </div>
        </div>

        <div className="text-center">
          <div className="rounded-3xl border-4 border-kobe-dark-teal bg-white p-5 shadow-xl sm:p-8 md:p-10">
            <div className="mb-6 flex justify-center text-6xl">
              <FaHandshake className="text-kobe-dark-teal" />
            </div>

            <div className="mb-8">
              <div className="mb-5 inline-block rounded-full bg-kobe-dark-teal px-6 py-2">
                <h3 className="text-2xl font-black text-white">後援</h3>
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

            <div className="rounded-2xl bg-orange-50 p-5 sm:p-6">
              <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2">
                <h3 className="text-xl font-black text-white">特別協賛</h3>
              </div>
              <ul className="space-y-3 text-lg font-black leading-snug text-kobe-dark-teal sm:text-xl">
                {featuredSponsors.map((sponsor) => (
                  <li key={sponsor.name}>{sponsor.name}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/sponsors"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-7 py-4 text-lg font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
              >
                スポンサー情報を詳しく見る
                <FaArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
