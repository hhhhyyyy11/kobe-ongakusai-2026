import React from "react";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTicketAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { WavePattern } from "./WavePattern";

export function TicketSection() {
  return (
    <section id="ticket" className="py-20 bg-kobe-yellow relative">
      {/* Wave Pattern at Top */}
      <WavePattern fillColor="#F59E0B" backgroundColor="bg-kobe-light-blue" />

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block bg-white text-kobe-dark-teal px-8 py-4 rounded-full border-4 border-kobe-dark-teal my-6">
            <h2 className="text-4xl md:text-5xl font-black">
              開催概要・入場について
            </h2>
          </div>
        </div>

        <div
          className="bg-white rounded-3xl border-6 border-kobe-dark-teal shadow-2xl p-8 md:p-12"
          style={{ borderWidth: "6px" }}
        >
          {/* 基本情報を中央配置 */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* 日時情報 */}
              <div className="bg-kobe-yellow text-kobe-dark-teal p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 flex flex-col h-full">
                <div className="text-center flex-1">
                  <FaCalendarAlt className="text-4xl mb-4 mx-auto" />
                  <h3 className="text-xl font-black mb-4">日時</h3>
                  <p className="text-lg font-bold mb-2">2026年8月21日（金）</p>
                  <p className="text-base font-bold">時間未定</p>
                </div>
              </div>

              {/* 会場情報 */}
              <div className="bg-kobe-dark-teal text-white p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 flex flex-col h-full">
                <div className="text-center flex-1">
                  <FaMapMarkerAlt className="text-4xl mb-4 mx-auto" />
                  <h3 className="text-xl font-black mb-4">会場</h3>
                  <p className="text-lg font-bold mb-2">
                    <Link
                      href="https://www.totteikobe.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-kobe-yellow underline decoration-2 underline-offset-4 transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      TOTTEI PARK
                      <FaExternalLinkAlt className="text-sm" />
                    </Link>
                  </p>
                  <p className="text-base font-bold text-gray-300">
                    神戸市中央区新港町2-1
                  </p>
                </div>
                <div className="bg-white/20 rounded-lg p-3 mt-4">
                  <p className="text-sm font-bold text-center">
                    各線三宮駅から
                    <br />
                    徒歩約17分
                  </p>
                </div>
              </div>

              {/* 入場情報 */}
              <div className="bg-white border-4 border-kobe-light-blue text-kobe-dark-teal p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 flex flex-col h-full">
                <div className="text-center flex-1">
                  <FaTicketAlt className="text-4xl mb-4 mx-auto text-kobe-dark-teal" />
                  <h3 className="text-xl font-black mb-4">入場について</h3>
                  <p className="text-lg font-black mb-2">
                    入退場自由・予約不要
                  </p>
                  <p className="text-3xl font-black text-kobe-yellow mb-2">
                    無料
                  </p>
                </div>
                <div className="bg-kobe-light-blue/20 rounded-lg p-3 mt-4">
                  <p className="text-sm font-bold text-center">
                    気軽にお立ち寄りください
                    <br />
                    途中参加・途中退場OK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
