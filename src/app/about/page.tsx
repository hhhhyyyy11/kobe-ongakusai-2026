import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import { FaMusic, FaHandshake, FaMicrophone, FaStar } from "react-icons/fa";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DecorativeNotes } from "@/components/DecorativeNotes";
import { WavePattern } from "@/components/WavePattern";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "神戸音学祭とは｜学生主催の野外音楽フェス",
  description:
    "神戸音学祭は、学生音楽から神戸市を盛り上げることを目指す学生主催の野外音楽フェスです。企画の背景、コンセプト、学生主体の運営体制を紹介します。",
  path: "/about",
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-kobe-light-blue font-sans">
      {/* Navigation Bar */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Decorative Elements */}
        <DecorativeNotes />

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-6 border-kobe-dark-teal shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4">
                <FaMusic className="text-6xl text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-kobe-dark-teal mb-6">
              神戸音学祭について
            </h1>
            <div>
              <p className="inline-block px-6 py-2 rounded-full text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500">
                学生の、学生による、学生のための野外音楽フェス
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white relative">
        {/* Wave Pattern at Top */}
        <WavePattern fillColor="white" backgroundColor="bg-kobe-light-blue" />

        <div className="max-w-6xl mx-auto px-4 pt-16">
          {/* 集合写真 */}
          <div className="mb-12 rounded-3xl border-4 border-kobe-dark-teal shadow-xl overflow-hidden bg-gray-100">
            <Image
              src="/images/archive/S__21094537_0.jpg"
              alt="神戸音学祭 集合写真"
              width={1477}
              height={1108}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* コンセプト */}
            <div className="bg-white rounded-3xl border-4 border-kobe-dark-teal shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4 inline-block mb-4">
                  <FaMusic className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-black text-kobe-dark-teal mb-4">
                  コンセプト
                </h3>
              </div>
              <div className="text-kobe-dark-teal font-bold space-y-4">
                <div className="bg-kobe-light-blue/20 rounded-2xl p-4">
                  <p className="text-lg leading-relaxed">
                    「学生音楽から神戸市を盛り上げる、学生の、学生による、学生のための野外音楽フェス」をスローガンに掲げています。
                  </p>
                </div>
                <div className="bg-kobe-light-blue/20 rounded-2xl p-4">
                  <p className="leading-relaxed">
                    学生のエネルギッシュな主体性や世代の壁を超える音楽の力を通して、神戸全体を活気づけ、想いによって人と繋がる街を形作っていくことを目指しています。
                  </p>
                  <p className="text-sm mt-2 text-center opacity-80">
                    ※神戸アリーナプロジェクトの一環
                  </p>
                </div>
              </div>
            </div>

            {/* 特徴 */}
            <div className="bg-kobe-dark-teal rounded-3xl border-2 border-kobe-dark-teal shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="bg-white rounded-full p-4 inline-block mb-4">
                  <FaHandshake className="text-4xl text-kobe-dark-teal" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">
                  イベントの特徴
                </h3>
              </div>
              <div className="text-white font-bold space-y-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 text-white">
                  <p className="font-black mb-2 flex items-center gap-2">
                    <FaMusic />
                    学生主体の運営
                  </p>
                  <p className="text-sm">
                    企画・運営、音響PA、スタッフ業務全てを学生で実施
                  </p>
                </div>
                <div className="bg-kobe-light-blue rounded-2xl p-4 text-kobe-dark-teal">
                  <p className="font-black mb-2 flex items-center gap-2">
                    <FaMicrophone />
                    多様な音楽ジャンル
                  </p>
                  <p className="text-sm">
                    メジャーからニッチまで幅広いアーティストのコピー演奏
                  </p>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <p className="font-black mb-2 flex items-center gap-2">
                    <FaStar />
                    野外フェスの魅力
                  </p>
                  <p className="text-sm">
                    学生が全業務を手がける屋外音楽フェスは当イベントの強み
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ストーリー */}
          <div
            className="rounded-3xl border-4 border-white shadow-xl p-8 text-white"
            style={{
              background: "linear-gradient(to right, #2C5F5D, #B8960A)",
            }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-black mb-4">
                プロジェクトストーリー
              </h3>
              <p className="text-lg font-bold">
                神戸をもっと元気にしたいという想いから始まった挑戦
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white/20 rounded-2xl p-6">
                <p className="font-bold leading-relaxed">
                  神戸音学祭は、神戸大学の学生である澤田陽介（経営学部3年）と栄陽向太（理学部3年）により企画・立ち上げられた学生主導の音楽フェスティバルです。
                </p>
              </div>

              <div className="bg-white/20 rounded-2xl p-6">
                <p className="font-bold leading-relaxed">
                  本イベントは、「神戸をもっと元気にしたい」という想いを掲げるOne
                  Bright
                  Kobe代表・渋谷氏の講義に、澤田が受講生として参加したことをきっかけに始動しました。
                </p>
              </div>

              <div className="bg-white/20 rounded-2xl p-6">
                <p className="font-bold leading-relaxed">
                  講義後、澤田が渋谷氏に直接アポイントを取り、自身の「学生の手で大規模な音楽フェスを実現したい」という構想をプレゼンテーション。その熱意にご賛同いただき、本プロジェクトがスタートしました。
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-kobe-dark-teal">
                <p className="font-black text-center leading-relaxed">
                  2年目を迎える今回は、より多くの関係者や地域を巻き込みながら、神戸を代表するイベントへと発展させていくことを目指しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutPage;
