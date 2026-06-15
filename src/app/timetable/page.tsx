"use client";
import React from "react";
import { FaMusic, FaClock } from "react-icons/fa";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { YouTubeLiveLink } from "@/components/YouTubeLiveLink";
import { DecorativeNotes } from "@/components/DecorativeNotes";
import { WavePattern } from "@/components/WavePattern";

function SetListPage() {
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
              <div className="bg-kobe-yellow rounded-full p-4">
                <FaMusic className="text-6xl text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-kobe-dark-teal mb-6">
              タイムテーブル
            </h1>
            <p className="text-xl md:text-2xl font-bold text-kobe-yellow mb-4">
              2026年8月21日（金）開催予定
            </p>
            <div className="flex items-center justify-center space-x-4 text-lg font-bold text-kobe-dark-teal">
              <div className="flex items-center space-x-2">
                <FaClock />
                <span>時間未定</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* パフォーマンス内容説明 */}
      <section className="py-16 bg-kobe-light-blue">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl border-4 border-kobe-dark-teal shadow-xl p-8">
            <div className="text-center">
              <div className="text-6xl mb-4 flex justify-center">
                <FaMusic className="text-kobe-orange" />
              </div>
              <h2 className="text-2xl font-black text-kobe-dark-teal mb-4">
                多彩なジャンルのコピーバンドライブ
              </h2>
              <p className="text-lg font-bold text-kobe-dark-teal leading-relaxed mb-6">
                各団体によるアーティストのコピー曲披露
                <br />
                多くの人が知っているようなアーティストから、ニッチな音楽に至るまで
                <br />
                ジャンルを問わず多様な演奏をお楽しみいただけます
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Schedule */}
      <section className="py-16 bg-white relative">
        {/* Wave Pattern at Top */}
        <WavePattern fillColor="white" backgroundColor="bg-kobe-light-blue" />

        <div className="max-w-4xl mx-auto px-4 pt-16">
          <div className="text-center py-20">
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 bg-gray-50">
              <FaMusic className="text-6xl text-gray-300 mx-auto mb-6" />
              <p className="text-2xl font-black text-kobe-dark-teal mb-2">
                タイムテーブルは近日公開
              </p>
              <p className="text-kobe-gray font-bold">
                出演団体・演奏スケジュールは決定次第お知らせします
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default SetListPage;
