import React from "react";
import { FaHandshake } from "react-icons/fa";

export function SponsorSection() {
  return (
    <section id="sponsor" className="py-20 bg-kobe-light-blue relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <div className="inline-block bg-white text-kobe-dark-teal px-8 py-4 rounded-full border-4 border-kobe-dark-teal mb-6">
            <h2 className="text-4xl md:text-5xl font-black">
              協賛企業・団体
            </h2>
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
            <p className="md:text-2xl text-lg font-bold text-kobe-gray mb-6">
              ongakusai.kobe@gmail.com
            </p>

            {/* 協賛・協力 — Coming Soon */}
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 bg-gray-50">
              <p className="text-2xl font-black text-kobe-yellow mb-2">
                Coming Soon
              </p>
              <p className="text-kobe-gray font-bold text-sm">
                協賛企業・団体は決定次第掲載いたします
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
