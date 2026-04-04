import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import { DecorativeNotes } from "./DecorativeNotes";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"
      style={{
        backgroundImage: `url('/images/logo_sub.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-white/20"></div>

      {/* Decorative Elements */}
      <DecorativeNotes />

      <div className="relative text-center px-4 max-w-5xl mx-auto z-10 pb-8">
        {/* Main Logo Display */}
        <div className="mb-8">
          <Image
            src="/images/logo_transparent.png"
            alt="Kobe Ongakusai Main Logo"
            width={256}
            height={256}
            className="w-72 h-72 md:w-80 md:h-80 mx-auto"
          />
        </div>

        <div
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-6 border-kobe-dark-teal shadow-2xl mb-8"
          style={{ borderWidth: "6px" }}
        >
          <p className="text-xl md:text-2xl font-black mb-4 text-kobe-yellow">
            学生音楽 × 神戸
          </p>
          <p className="text-lg md:text-xl font-bold mb-6 text-kobe-dark-teal">
            今年も、夏の神戸で学生たちが奏でる音楽が響きわたる。
            <br />
            関西最大級の学生音楽フェス！
            <br />
            詳細は近日発表！
          </p>
          <div className="text-xl md:text-2xl font-bold text-kobe-dark-teal space-y-3">
            <div className="flex items-center justify-center space-x-3">
              <FaCalendarAlt className="text-3xl" />
              <span>2026年8月21日（金）</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <FaMapMarkerAlt className="text-3xl" />
              <div className="text-center">
                <div>
                  <Link
                    href="https://www.totteikobe.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-kobe-dark-teal hover:text-kobe-yellow underline decoration-2 underline-offset-4 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    TOTTEI PARK
                    <FaExternalLinkAlt className="text-base" />
                  </Link>
                </div>
                <div className="text-lg">（神戸市中央区）</div>
              </div>
            </div>
            <div className="bg-kobe-yellow text-kobe-dark-teal px-6 py-3 rounded-full text-lg font-black mt-4">
              入場無料・入退場自由
            </div>
          </div>
        </div>

        {/* ボタンエリア */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/artists"
            className="bg-kobe-dark-teal text-white px-10 py-5 rounded-full text-2xl font-black border-4 border-kobe-yellow shadow-xl text-center pointer-events-none opacity-50"
          >
            出演団体（Coming Soon）
          </Link>
          <Link
            href="/timetable"
            className="bg-kobe-yellow text-white px-10 py-5 rounded-full text-2xl font-black border-4 border-kobe-dark-teal shadow-xl text-center pointer-events-none opacity-50"
          >
            タイムテーブル（Coming Soon）
          </Link>
        </div>
      </div>
    </section>
  );
}
