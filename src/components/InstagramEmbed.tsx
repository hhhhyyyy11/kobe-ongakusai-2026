"use client";

import React from "react";
import { FaInstagram } from "react-icons/fa";
import { SNS_INFO } from "@/constants/sns";

export const InstagramEmbed: React.FC = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const { instagram } = SNS_INFO;

  return (
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl border-4 border-kobe-dark-teal shadow-xl p-6">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <FaInstagram className="text-5xl text-purple-500" />
          <div>
            <h3 className="text-3xl font-black text-kobe-dark-teal">
              {instagram.displayName}
            </h3>
          </div>
        </div>
        <a
          href={instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
        >
          <FaInstagram className="text-xl" />
          <span>@{instagram.handle} をフォロー</span>
        </a>
      </div>

      <div className="relative bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
        {!isLoaded && (
          <div
            className="absolute inset-0 z-10 flex h-[480px] md:h-[600px] items-center justify-center bg-white"
            aria-label="Instagram feed loading"
            role="status"
          >
            <div className="absolute inset-0 p-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 animate-pulse" />
                <div className="space-y-3">
                  <div className="h-4 w-36 rounded-full bg-gray-200 animate-pulse" />
                  <div className="h-3 w-24 rounded-full bg-gray-100 animate-pulse" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 9 }, (_, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-xl bg-gradient-to-br from-gray-100 via-purple-50 to-pink-100 animate-pulse"
                    style={{ animationDelay: `${index * 120}ms` }}
                  />
                ))}
              </div>
            </div>
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl">
              <div className="absolute inset-0 rounded-full border-4 border-purple-100 border-t-pink-500 animate-spin" />
              <FaInstagram className="text-3xl text-purple-500" />
            </div>
          </div>
        )}
        <iframe
          src={instagram.embedUrl}
          width="100%"
          height="600"
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-popups allow-same-origin allow-scripts"
          style={{ border: "none" }}
          scrolling="no"
          className={`w-full h-[480px] md:h-[600px] transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          title="Instagram Feed"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
};
