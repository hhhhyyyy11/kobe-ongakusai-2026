import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

export function HeroSection() {
  return (
    <>
      <section
        id="top"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24"
        style={{
          backgroundImage: `url('/images/logos/logo_sub.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Warm gradient overlay - 白すぎないように暖色グラデーション */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,249,235,0.85) 0%, rgba(255,237,200,0.80) 60%, rgba(255,255,255,1) 100%)",
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Main Logo Display */}
          <div className="mb-8">
            <Image
              src="/images/logos/logo_transparent_2026.png"
              alt="Kobe Ongakusai Main Logo"
              width={256}
              height={256}
              className="w-72 h-72 md:w-80 md:h-80 mx-auto drop-shadow-lg"
            />
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-6 border-kobe-dark-teal shadow-2xl mb-8">
            <div className="mb-6">
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 rounded-full text-xl md:text-2xl font-black text-white tracking-widest shadow-md">
                学生音楽 × 神戸
              </span>
            </div>
            <p className="text-lg md:text-xl font-bold mb-6 text-kobe-dark-teal">
              今年も、夏の神戸で学生たちが奏でる音楽が響きわたる。
              <br />
              関西最大級の学生音楽フェス！
              <br />
              詳細は近日発表！
            </p>
            <div className="text-xl md:text-2xl font-bold text-kobe-dark-teal space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <FaCalendarAlt className="text-3xl text-orange-500" />
                <span>2026年8月21日（金）</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <FaMapMarkerAlt className="text-3xl text-orange-500" />
                <span>
                  <Link
                    href="https://www.totteikobe.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-kobe-dark-teal hover:text-orange-500 underline decoration-2 underline-offset-4 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    TOTTEI PARK
                    <FaExternalLinkAlt className="text-sm" />
                  </Link>
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-black mt-6 inline-block shadow-md">
              入場無料
            </div>
          </div>

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/artists"
              className="bg-gray-800 text-white px-10 py-5 rounded-full text-xl md:text-2xl font-black border-2 border-gray-700 shadow-xl text-center pointer-events-none opacity-50"
            >
              出演団体を見る（Coming Soon）
            </Link>
            <Link
              href="/timetable"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-10 py-5 rounded-full text-xl md:text-2xl font-black border-2 border-orange-400 shadow-xl text-center pointer-events-none opacity-50"
            >
              タイムテーブル（Coming Soon）
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
