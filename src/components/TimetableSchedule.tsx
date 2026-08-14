import { FaChevronDown, FaClock, FaInstagram, FaMusic } from "react-icons/fa";
import { ArtistSocialLinks } from "./ArtistSocialLinks";
import { getArtistById } from "@/constants/bands";
import { eventInfo } from "@/constants/event";
import { timetableEntries } from "@/constants/timetable";

const eventDate = eventInfo.startDate.slice(0, 10);
const eventTimezone = eventInfo.startDate.slice(-6);

function getEntryDateTime(startTime: string) {
  return `${eventDate}T${startTime}:00${eventTimezone}`;
}

export function TimetableSchedule() {
  return (
    <ol className="mx-auto grid max-w-4xl gap-3">
      {timetableEntries.map((entry) => {
        if (entry.kind === "break") {
          return (
            <li
              key={`${entry.startTime}-${entry.label}`}
              className="flex items-center justify-center gap-3 rounded-2xl bg-sky-500 px-5 py-3 font-black text-white shadow-md"
            >
              <FaClock aria-hidden="true" />
              <time dateTime={getEntryDateTime(entry.startTime)}>
                {entry.startTime}
              </time>
              <span>{entry.label}</span>
            </li>
          );
        }

        const artist = getArtistById(entry.artistId);
        const labelPrefix = `${artist.university} ${artist.name}`;

        return (
          <li key={`${entry.startTime}-${entry.copyArtist}`}>
            <details className="group overflow-hidden rounded-2xl border-2 border-kobe-dark-teal bg-white shadow-md transition-shadow open:shadow-xl">
              <summary className="flex cursor-pointer list-none items-center gap-4 p-4 text-left transition-colors hover:bg-kobe-yellow-light focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-orange-500 [&::-webkit-details-marker]:hidden sm:p-5">
                <time
                  dateTime={getEntryDateTime(entry.startTime)}
                  className="shrink-0 rounded-xl bg-kobe-dark-teal px-3 py-2 text-lg font-black text-white sm:text-xl"
                >
                  {entry.startTime}
                </time>

                <span className="min-w-0 flex-1">
                  <span className="block text-lg leading-tight font-black text-kobe-dark-teal sm:text-xl">
                    {entry.copyArtist}
                  </span>
                  <span className="mt-1 block text-sm font-bold text-gray-600 sm:text-base">
                    {artist.university} {artist.name}
                  </span>
                </span>

                <span className="shrink-0 rounded-full bg-orange-100 p-3 text-kobe-orange transition-transform duration-300 group-open:rotate-180">
                  <FaChevronDown aria-hidden="true" />
                  <span className="sr-only">出演団体の詳細を見る</span>
                </span>
              </summary>

              <div className="border-t-2 border-gray-200 bg-gray-50 px-5 py-6 sm:px-8">
                <div className="text-center">
                  <FaMusic
                    className="mx-auto mb-3 text-3xl text-kobe-orange"
                    aria-hidden="true"
                  />
                  <h3 className="text-2xl font-black text-kobe-dark-teal">
                    {artist.name}
                  </h3>
                  <p className="mt-1 font-bold text-kobe-gray">
                    {artist.university}
                  </p>

                  {artist.copyArtists.length > 1 && (
                    <div className="mt-5">
                      <p className="text-sm font-black tracking-wide text-kobe-orange">
                        この団体の出演内容
                      </p>
                      <div className="mt-3 flex flex-wrap justify-center gap-2">
                        {artist.copyArtists.map((copyArtist) => (
                          <span
                            key={copyArtist}
                            className={`rounded-full px-3 py-1.5 text-sm font-black shadow-sm ${
                              copyArtist === entry.copyArtist
                                ? "bg-gradient-to-r from-yellow-300 to-orange-400 text-kobe-dark-teal"
                                : "bg-white text-kobe-dark-teal ring-1 ring-gray-200"
                            }`}
                          >
                            {copyArtist}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {entry.introVideoUrl && (
                    <div className="mt-6">
                      <p className="mb-3 text-sm font-black text-kobe-dark-teal">
                        出演バンド紹介
                      </p>
                      <a
                        href={entry.introVideoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${entry.copyArtist}（${labelPrefix}）の紹介動画をInstagramで新しいタブで開く`}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-5 py-3 font-black text-white shadow-md transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-kobe-orange"
                      >
                        <FaInstagram className="text-xl" aria-hidden="true" />
                        <span>Instagramで紹介動画を見る</span>
                      </a>
                    </div>
                  )}

                  <div className="mt-6">
                    <p className="mb-3 text-sm font-black text-kobe-dark-teal">
                      団体の公式SNS
                    </p>
                    <ArtistSocialLinks
                      socials={artist.socials}
                      labelPrefix={labelPrefix}
                      showLabels
                    />
                  </div>
                </div>
              </div>
            </details>
          </li>
        );
      })}
    </ol>
  );
}
