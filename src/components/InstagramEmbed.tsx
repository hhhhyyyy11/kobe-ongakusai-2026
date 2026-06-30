"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { SNS_INFO } from "@/constants/sns";

type InstagramFeedPost = {
  shortcode: string;
  imageUrl: string;
  permalink: string;
  isVideo: boolean;
};

type InstagramFeedResponse = {
  posts?: InstagramFeedPost[];
};

export const InstagramEmbed: React.FC = () => {
  const { instagram } = SNS_INFO;
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoadEmbed, setShouldLoadEmbed] = useState(false);
  const [isSmallViewport, setIsSmallViewport] = useState(false);
  const [mobilePosts, setMobilePosts] = useState<InstagramFeedPost[]>([]);
  const [hasLoadedMobilePosts, setHasLoadedMobilePosts] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  useEffect(() => {
    if (shouldLoadEmbed) {
      return;
    }

    const container = containerRef.current;

    if (!container || !("IntersectionObserver" in window)) {
      setShouldLoadEmbed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoadEmbed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [shouldLoadEmbed]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsSmallViewport(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    if (!shouldLoadEmbed || !isSmallViewport || hasLoadedMobilePosts) {
      return;
    }

    const controller = new AbortController();

    async function loadMobilePosts() {
      try {
        const response = await fetch("/api/instagram-feed", {
          signal: controller.signal,
        });
        const data = (await response.json()) as InstagramFeedResponse;
        setMobilePosts(data.posts?.slice(0, 9) ?? []);
      } catch {
        if (!controller.signal.aborted) {
          setMobilePosts([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setHasLoadedMobilePosts(true);
        }
      }
    }

    loadMobilePosts();

    return () => controller.abort();
  }, [hasLoadedMobilePosts, isSmallViewport, shouldLoadEmbed]);

  const embedFrameClassName = "w-full h-[720px] sm:h-[760px] md:h-[600px]";
  const mobileGridClassName =
    "w-full aspect-square md:aspect-auto md:h-[600px]";

  const instagramIframe = (
    <iframe
      src={instagram.embedUrl}
      width="100%"
      height="760"
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      sandbox="allow-popups allow-same-origin allow-scripts"
      style={{ border: "none" }}
      scrolling="no"
      className={`${embedFrameClassName} transition-opacity duration-500 ${
        isIframeLoaded ? "opacity-100" : "opacity-0"
      }`}
      title="Instagram Feed"
      onLoad={() => setIsIframeLoaded(true)}
    />
  );

  return (
    <div
      ref={containerRef}
      className="w-full max-w-2xl mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl border-4 border-kobe-dark-teal shadow-xl p-6"
    >
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
        {!shouldLoadEmbed ? (
          <InstagramLoadingState className={mobileGridClassName} />
        ) : isSmallViewport ? (
          hasLoadedMobilePosts && mobilePosts.length === 0 ? (
            <>
              {!isIframeLoaded ? (
                <InstagramLoadingState
                  className={`${embedFrameClassName} absolute inset-0 z-10`}
                />
              ) : null}
              {instagramIframe}
            </>
          ) : (
            <InstagramMobileGrid
              isLoading={!hasLoadedMobilePosts}
              posts={mobilePosts}
            />
          )
        ) : (
          <>
            {!isIframeLoaded ? (
              <InstagramLoadingState
                className={`${embedFrameClassName} absolute inset-0 z-10`}
              />
            ) : null}
            {instagramIframe}
          </>
        )}
      </div>
    </div>
  );
};

type InstagramLoadingStateProps = {
  className?: string;
};

const InstagramLoadingState: React.FC<InstagramLoadingStateProps> = ({
  className = "w-full aspect-square",
}) => {
  return (
    <div
      aria-label="Instagram Feed"
      role="status"
      className={`flex flex-col items-center justify-center bg-white p-4 ${className}`}
    >
      <div className="mb-5 flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-3 text-kobe-dark-teal shadow-sm">
        <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white shadow">
          <span className="absolute inset-0 rounded-full border-2 border-purple-100 border-t-pink-500 animate-spin" />
          <FaInstagram className="relative text-2xl text-purple-500" />
        </span>
        <span className="text-sm font-bold md:text-base">
          Instagramを読み込み中...
        </span>
      </div>
      <div className="grid w-full max-w-md grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="aspect-square rounded-lg bg-gradient-to-br from-gray-100 via-purple-50 to-pink-100 animate-pulse"
            style={{ animationDelay: `${index * 120}ms` }}
          />
        ))}
      </div>
    </div>
  );
};

type InstagramMobileGridProps = {
  isLoading: boolean;
  posts: InstagramFeedPost[];
};

const InstagramMobileGrid: React.FC<InstagramMobileGridProps> = ({
  isLoading,
  posts,
}) => {
  if (isLoading && posts.length === 0) {
    return <InstagramLoadingState />;
  }

  return (
    <div
      aria-label="Instagram Feed"
      className="grid w-full grid-cols-3 gap-2 p-2"
    >
      {posts.slice(0, 9).map((post, index) => (
        <a
          key={post.shortcode}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-square overflow-hidden rounded-md bg-gray-100"
          aria-label={`Instagram post ${index + 1}`}
        >
          <img
            src={post.imageUrl}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {post.isVideo ? (
            <span className="absolute right-1.5 top-1.5 rounded-full bg-black/60 p-1 text-white">
              <FaInstagram className="text-xs" />
            </span>
          ) : null}
        </a>
      ))}
    </div>
  );
};
