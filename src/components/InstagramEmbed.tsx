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
  const [posts, setPosts] = useState<InstagramFeedPost[]>([]);
  const [hasLoadedPosts, setHasLoadedPosts] = useState(false);

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
    if (!shouldLoadEmbed || hasLoadedPosts) {
      return;
    }

    const controller = new AbortController();

    async function loadPosts() {
      try {
        const response = await fetch("/api/instagram-feed", {
          signal: controller.signal,
        });
        const data = (await response.json()) as InstagramFeedResponse;
        setPosts(data.posts?.slice(0, 9) ?? []);
      } catch {
        if (!controller.signal.aborted) {
          setPosts([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setHasLoadedPosts(true);
        }
      }
    }

    loadPosts();

    return () => controller.abort();
  }, [hasLoadedPosts, shouldLoadEmbed]);

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
        {!shouldLoadEmbed || !hasLoadedPosts ? (
          <InstagramLoadingState />
        ) : posts.length > 0 ? (
          <InstagramFeedGrid posts={posts} />
        ) : (
          <InstagramEmptyState />
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
      <div className="mb-4 flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-3 text-kobe-dark-teal shadow-sm">
        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow sm:h-11 sm:w-11">
          <span className="absolute inset-0 rounded-full border-2 border-purple-100 border-t-pink-500 animate-spin" />
          <FaInstagram className="relative text-xl text-purple-500 sm:text-2xl" />
        </span>
        <span className="text-sm font-bold leading-tight md:text-base">
          Instagramを読み込み中...
        </span>
      </div>
      <div className="grid w-2/3 max-w-sm grid-cols-3 gap-2 sm:w-3/4">
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

const InstagramEmptyState: React.FC = () => {
  return (
    <div
      aria-label="Instagram Feed"
      className="flex aspect-square w-full flex-col items-center justify-center gap-3 bg-white p-6 text-center text-kobe-dark-teal"
    >
      <FaInstagram className="text-4xl text-purple-500" />
      <p className="text-sm font-bold md:text-base">
        Instagramの投稿を読み込めませんでした
      </p>
    </div>
  );
};

type InstagramFeedGridProps = {
  posts: InstagramFeedPost[];
};

const InstagramFeedGrid: React.FC<InstagramFeedGridProps> = ({ posts }) => {
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
            src={`/api/instagram-feed/image/${post.shortcode}`}
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
