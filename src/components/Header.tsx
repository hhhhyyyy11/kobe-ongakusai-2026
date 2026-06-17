"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

const navItems = [
  { href: "/", label: "TOP" },
  { href: "/artists", label: "出演団体" },
  { href: "/timetable", label: "タイムテーブル" },
  { href: "/booths", label: "ブース" },
  { href: "/archive", label: "前回開催の様子" },
  { href: "/about", label: "神戸音学祭とは" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  // 現在のページに基づいてアクティブ状態を判定
  const isActive = (path: string) => pathname === path;

  // モバイルメニュー外部クリック時の閉じる処理
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest("nav")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg border-b-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/logos/logo_transparent_2026.png"
              alt="Kobe Ongakusai Logo"
              width={144}
              height={144}
              className="lg:w-18 lg:h-18 w-14 h-14 rounded-full"
            />
            <Image
              src="/images/title_dark_teal.png"
              alt="神戸音学祭"
              width={384}
              height={128}
              className="object-contain object-center lg:w-48 lg:h-16 w-36 h-12"
            />
          </Link>

          <div className="hidden lg:flex flex-wrap justify-end gap-2 xl:gap-3 ml-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3 rounded-full font-black text-sm xl:text-base border-2 transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-orange-400 shadow-lg transform scale-105"
                    : "text-gray-800 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-white border-gray-300 hover:border-orange-400 hover:shadow-lg"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 transform ${
              isMobileMenuOpen
                ? "bg-gray-800 scale-105 border-2 border-orange-400"
                : "bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-110 border-2 border-orange-400"
            }`}
          >
            <FaBars
              className={`w-6 h-6 transition-colors duration-300 ${
                isMobileMenuOpen ? "text-white" : "text-white"
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-[calc(100vh-5rem)] overflow-y-auto opacity-100"
              : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <div className="mt-4 pb-4 border-t-2 border-gray-200">
            <div
              className={`flex flex-col space-y-2 pt-4 transform transition-all duration-500 ease-in-out ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }`}
            >
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block w-full px-4 py-2.5 rounded-2xl font-black text-base border-2 transition-all duration-300 text-center transform hover:scale-105 ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-orange-400 shadow-lg"
                      : "text-gray-800 bg-white/50 border-gray-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-white"
                  }`}
                  style={{
                    borderWidth: "2px",
                    animationDelay: `${index * 100}ms`,
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
