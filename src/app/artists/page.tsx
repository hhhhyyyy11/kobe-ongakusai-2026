"use client";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { BsMusicNote } from "react-icons/bs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ArtistsPage() {
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden bg-kobe-light-blue">
          {/* Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-28 left-12 text-3xl text-kobe-dark-teal animate-bounce delay-100">
              <BsMusicNote />
            </div>
            <div className="absolute top-32 right-20 text-2xl text-kobe-yellow animate-bounce delay-300">
              <BsMusicNote />
            </div>
            <div className="absolute bottom-32 left-24 text-4xl text-kobe-dark-teal animate-bounce delay-500">
              <BsMusicNote />
            </div>
            <div className="absolute bottom-20 right-16 text-3xl text-kobe-yellow animate-bounce delay-700">
              <BsMusicNote />
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-6 border-kobe-dark-teal shadow-2xl mb-16">
              <div className="flex justify-center mb-6">
                <div className="bg-kobe-yellow rounded-full p-4">
                  <FaUsers className="text-6xl text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-kobe-dark-teal mb-6">
                出演団体
              </h1>
              <p className="text-xl md:text-2xl font-bold text-kobe-yellow mb-4">
                Coming Soon
              </p>
            </div>
          </div>
        </section>

        {/* Artists List Section — Coming Soon */}
        <section className="py-16 bg-white relative">
          {/* Wave Pattern at Top */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-kobe-light-blue">
            <svg
              viewBox="0 0 1200 120"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0,60 C200,0 400,120 600,60 C800,0 1000,120 1200,60 L1200,120 L0,120 Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-4 pt-16">
            <div className="text-center py-20">
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 bg-gray-50">
                <FaUsers className="text-6xl text-gray-300 mx-auto mb-6" />
                <p className="text-2xl font-black text-kobe-dark-teal mb-2">
                  出演団体は近日発表
                </p>
                <p className="text-kobe-gray font-bold">
                  続報をお楽しみに！
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

