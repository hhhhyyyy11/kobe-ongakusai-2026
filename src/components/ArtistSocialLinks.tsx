import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { ArtistSocials } from "@/constants/bands";

const socialPlatforms = [
  {
    key: "instagram",
    label: "Instagram",
    icon: FaInstagram,
    className:
      "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500",
  },
  {
    key: "x",
    label: "公式X",
    icon: FaXTwitter,
    className: "bg-black hover:bg-gray-800",
  },
  {
    key: "youtube",
    label: "YouTube",
    icon: FaYoutube,
    className: "bg-red-600 hover:bg-red-700",
  },
] as const satisfies ReadonlyArray<{
  key: keyof ArtistSocials;
  label: string;
  icon: typeof FaInstagram;
  className: string;
}>;

interface ArtistSocialLinksProps {
  socials?: ArtistSocials;
  labelPrefix: string;
  showLabels?: boolean;
}

export function ArtistSocialLinks({
  socials,
  labelPrefix,
  showLabels = false,
}: ArtistSocialLinksProps) {
  if (!socials) {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {socialPlatforms.map((platform) => {
        const href = socials[platform.key];

        if (!href) {
          return null;
        }

        const Icon = platform.icon;

        return (
          <a
            key={platform.key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${labelPrefix}の${platform.label}を新しいタブで開く`}
            title={platform.label}
            className={`inline-flex items-center justify-center gap-2 rounded-full p-3 font-black text-white shadow-md transition-all duration-300 hover:scale-110 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-kobe-orange ${platform.className} ${showLabels ? "px-4" : ""}`}
          >
            <Icon className="text-lg" aria-hidden="true" />
            {showLabels && <span className="text-sm">{platform.label}</span>}
          </a>
        );
      })}
    </div>
  );
}
