import React from "react";
import Image from "next/image";
import { FaHandshake } from "react-icons/fa";
import { WavePattern } from "./WavePattern";

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

              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className="rounded-2xl border-2 border-gray-200 bg-white p-6 flex min-h-56 flex-col items-center justify-center"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <p
                    className="text-3xl md:text-4xl font-black text-black"
                    style={{ color: "#000000" }}
                  >
                    神戸新聞社
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-gray-200 bg-white p-4 flex min-h-56 items-center justify-center">
                  <Image
                    src="/images/sponsors/suntv.png"
                    alt="サンテレビ"
                    width={859}
                    height={612}
                    className="h-40 w-auto object-contain md:h-52"
                  />
                </div>
              </div>
            </div>

            {/* 協賛・協力 — Coming Soon */}
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 bg-gray-50">
              <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-1 rounded-full mb-3">
                <p className="text-xl font-black text-white">Coming Soon</p>
              </div>
              <p className="text-gray-500 font-bold text-sm">
                協賛企業・団体は決定次第掲載いたします
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
