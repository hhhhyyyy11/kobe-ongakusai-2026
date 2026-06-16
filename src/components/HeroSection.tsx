import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const heroSlides = [
  "/images/archive/S__21094535_0.jpg",
  "/images/archive/S__21094537_0.jpg",
  "/images/archive/S__21094538_0.jpg",
  "/images/archive/S__21094539_0.jpg",
  "/images/archive/S__21094541_0.jpg",
  "/images/archive/S__21094542_0.jpg",
  "/images/archive/S__21094544_0.jpg",
  "/images/archive/S__21094551_0.jpg",
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-950 pt-20 pb-40 sm:pt-28 sm:pb-48 md:pt-32 md:pb-56"
    >
      <div className="absolute inset-0">
        {heroSlides.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="hero-slide object-cover"
            style={{
              animationDelay: `${index * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,239,94,0.18)_0%,rgba(255,107,71,0.08)_34%,transparent_68%)]" />

      <div className="relative z-10 w-full px-4 text-center text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center">
          <Image
            src="/images/logos/logo_transparent_2026.png"
            alt="Kobe Ongakusai Main Logo"
            width={256}
            height={256}
            className="mb-3 h-24 w-24 drop-shadow-2xl sm:mb-4 sm:h-40 sm:w-40 md:h-48 md:w-48"
          />

          <div className="mb-4 inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-white/15 px-4 py-2 text-xs font-black tracking-[0.3em] shadow-xl backdrop-blur-md sm:mb-5 sm:px-5 sm:text-sm md:text-lg">
            学生音楽 × 神戸
          </div>

          <Image
            src="/images/title_white.png"
            alt="神戸音学祭"
            width={2615}
            height={572}
            className="w-full max-w-5xl drop-shadow-[0_10px_26px_rgba(0,0,0,0.75)]"
          />

          <div className="my-4 inline-flex rotate-[-2deg] items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-yellow-300 via-orange-400 to-orange-600 px-7 py-3 text-3xl font-black text-white shadow-2xl sm:my-6 sm:px-8 sm:py-4 sm:text-4xl md:px-12 md:py-5 md:text-6xl">
            入場無料
          </div>

          <p className="mb-5 max-w-3xl text-base leading-relaxed font-black drop-shadow-lg sm:mb-7 sm:text-lg md:text-2xl">
            今年も、夏の神戸で学生たちが奏でる音楽が響きわたる。
            <br />
            関西最大級の学生音楽フェス！
          </p>

          <div className="mb-5 grid w-full max-w-3xl gap-2 text-base font-black sm:mb-8 sm:gap-3 md:grid-cols-2 md:text-xl">
            <div className="flex items-center justify-center gap-3 rounded-2xl border-2 border-white/50 bg-black/35 px-4 py-3 shadow-xl backdrop-blur-md sm:px-5 sm:py-4">
              <FaCalendarAlt className="text-2xl text-kobe-yellow md:text-3xl" />
              <span>2026年8月21日（金）</span>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-2xl border-2 border-white/50 bg-black/35 px-4 py-3 shadow-xl backdrop-blur-md sm:px-5 sm:py-4">
              <FaMapMarkerAlt className="text-2xl text-kobe-yellow md:text-3xl" />
              <Link
                href="https://www.totteikobe.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 underline decoration-2 underline-offset-4 transition-colors duration-300 hover:text-kobe-yellow"
              >
                TOTTEI PARK
                <FaExternalLinkAlt className="text-sm" />
              </Link>
            </div>
          </div>

          <div className="flex w-full max-w-3xl flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/artists"
              aria-disabled="true"
              tabIndex={-1}
              onClick={(e) => e.preventDefault()}
              className="pointer-events-none rounded-full border-2 border-white/30 bg-white/20 px-6 py-3 text-base font-black text-white opacity-60 shadow-xl backdrop-blur-md sm:px-8 sm:py-4 sm:text-lg md:text-xl"
            >
              出演団体を見る（Coming Soon）
            </Link>
            <Link
              href="/timetable"
              aria-disabled="true"
              tabIndex={-1}
              onClick={(e) => e.preventDefault()}
              className="pointer-events-none rounded-full border-2 border-orange-300 bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 text-base font-black text-white opacity-80 shadow-xl sm:px-8 sm:py-4 sm:text-lg md:text-xl"
            >
              タイムテーブル（Coming Soon）
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 h-40 bg-gradient-to-b from-transparent to-kobe-light-blue" />
    </section>
  );
}
