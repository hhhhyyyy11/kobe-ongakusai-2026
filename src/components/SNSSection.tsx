import React from "react";
import { InstagramEmbed } from "./InstagramEmbed";
import { WavePattern } from "./WavePattern";

export const SNSSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      {/* Wave Pattern at Top */}
      <WavePattern fillColor="white" backgroundColor="bg-kobe-light-blue" />

      <div className="max-w-6xl mx-auto px-4 pt-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full border-4 border-kobe-dark-teal mb-6">
            <h2 className="text-4xl md:text-5xl font-black">SNS</h2>
          </div>
          <p className="text-xl font-bold text-kobe-dark-teal">
            最新情報をSNSでチェック！ #神戸音学祭
          </p>
        </div>

        <div className="flex justify-center">
          <InstagramEmbed />
        </div>
      </div>
    </section>
  );
};
