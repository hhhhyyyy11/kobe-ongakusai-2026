"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

const SLIDE_INTERVAL_MS = 5000;
// Keep this in sync with .hero-slide's opacity transition duration.
const FADE_DURATION_MS = 1000;

export function HeroBackgroundSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState<number | null>(null);
  const [isNextSlideVisible, setIsNextSlideVisible] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (motionQuery.matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setNextSlide((slide) => slide ?? (currentSlide + 1) % heroSlides.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [currentSlide]);

  useEffect(() => {
    if (nextSlide === null || !isNextSlideVisible) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setCurrentSlide(nextSlide);
      setNextSlide(null);
      setIsNextSlideVisible(false);
    }, FADE_DURATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [isNextSlideVisible, nextSlide]);

  const showNextSlide = () => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsNextSlideVisible(true);
      });
    });
  };

  const resetNextSlide = () => {
    setNextSlide(null);
    setIsNextSlideVisible(false);
  };

  return (
    <div className="absolute inset-0">
      <Image
        key={heroSlides[currentSlide]}
        src={heroSlides[currentSlide]}
        alt=""
        fill
        loading={currentSlide === 0 ? "eager" : "lazy"}
        fetchPriority={currentSlide === 0 ? "low" : "auto"}
        quality={75}
        sizes="100vw"
        className={`hero-slide hero-slide-current ${
          isNextSlideVisible ? "hero-slide-exiting" : ""
        } object-cover`}
      />

      {nextSlide !== null && (
        <Image
          key={heroSlides[nextSlide]}
          src={heroSlides[nextSlide]}
          alt=""
          fill
          loading="lazy"
          quality={75}
          sizes="100vw"
          className={`hero-slide hero-slide-incoming ${
            isNextSlideVisible ? "hero-slide-incoming-visible" : ""
          } object-cover`}
          onLoad={showNextSlide}
          onError={resetNextSlide}
        />
      )}
    </div>
  );
}
