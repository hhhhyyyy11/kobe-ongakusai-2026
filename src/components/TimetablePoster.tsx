"use client";

import { useState } from "react";
import Image from "next/image";
import { FaDownload, FaSearchPlus } from "react-icons/fa";
import { ImageModal } from "./ImageModal";

const imageSrc = "/images/timetable.jpg";
const imageAlt = "神戸音学祭2026 タイムテーブル";
const downloadFileName = "神戸音学祭2026_タイムテーブル.jpg";

interface TimetablePosterProps {
  compact?: boolean;
  priority?: boolean;
}

export function TimetablePoster({
  compact = false,
  priority = false,
}: TimetablePosterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`mx-auto w-full ${compact ? "max-w-md" : "max-w-2xl"}`}>
        <div className="rounded-3xl border-4 border-kobe-dark-teal bg-gray-100 p-3 shadow-xl sm:p-5">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="タイムテーブル画像を拡大表示する"
            className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-white focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1144}
              height={1430}
              priority={priority}
              sizes={
                compact
                  ? "(min-width: 768px) 448px, 90vw"
                  : "(min-width: 768px) 672px, 92vw"
              }
              className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <span className="absolute right-3 bottom-3 inline-flex items-center gap-2 rounded-full bg-black/75 px-4 py-2 text-sm font-black text-white shadow-lg">
              <FaSearchPlus aria-hidden="true" />
              拡大する
            </span>
          </button>
        </div>

        <div className="mt-5 flex justify-center">
          <a
            href={imageSrc}
            download={downloadFileName}
            className="inline-flex items-center gap-2 rounded-full bg-kobe-dark-teal px-6 py-3 font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-kobe-orange focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-orange-500"
          >
            <FaDownload aria-hidden="true" />
            画像を保存
          </a>
        </div>
      </div>

      <ImageModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        downloadFileName={downloadFileName}
        width={1144}
        height={1430}
      />
    </>
  );
}
