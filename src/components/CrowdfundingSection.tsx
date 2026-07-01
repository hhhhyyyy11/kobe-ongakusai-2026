import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  crowdfundingUrl,
  getCrowdfundingStats,
  type CrowdfundingStats,
} from "@/lib/crowdfunding";

const yenFormatter = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0,
});

const tokyoDatePartsFormatter = new Intl.DateTimeFormat("ja-JP", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

function getProgressPercent(stats: CrowdfundingStats) {
  if (stats.targetAmount <= 0) {
    return 0;
  }

  return Math.floor((stats.currentAmount / stats.targetAmount) * 100);
}

function getTokyoDateUtcTime(date: Date) {
  const parts = Object.fromEntries(
    tokyoDatePartsFormatter
      .formatToParts(date)
      .map((part) => [part.type, part.value])
  );

  return Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day)
  );
}

function getRemainingDays(endAt: string) {
  const remainingMs =
    getTokyoDateUtcTime(new Date(endAt)) - getTokyoDateUtcTime(new Date());

  return Math.max(0, Math.ceil(remainingMs / (1000 * 60 * 60 * 24)));
}

function formatFetchedAt(fetchedAt: string) {
  return new Intl.DateTimeFormat("ja-JP", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Tokyo",
  }).format(new Date(fetchedAt));
}

export async function CrowdfundingSection() {
  const stats = await getCrowdfundingStats();
  const progressPercent = getProgressPercent(stats);
  const progressBarPercent = Math.min(progressPercent, 100);
  const remainingDays = getRemainingDays(stats.endAt);

  return (
    <section id="crowdfunding" className="bg-kobe-light-blue py-16 relative">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-7 py-3 rounded-full mb-4">
            <h2 className="text-3xl md:text-4xl font-black">
              クラウドファンディング
            </h2>
          </div>
          <p className="text-base md:text-xl font-black text-kobe-dark-teal">
            神戸音学祭2026の開催に向けて、ご支援を募集しています！
          </p>
        </div>

        <div className="mx-auto max-w-[460px] overflow-hidden rounded-3xl border-6 border-kobe-dark-teal bg-white shadow-2xl lg:max-w-5xl">
          <div className="grid items-center gap-8 px-4 py-8 sm:p-8 lg:grid-cols-[minmax(320px,1fr)_minmax(340px,0.95fr)] lg:gap-10 lg:p-10">
            <div className="relative mx-auto w-full max-w-[360px] lg:max-w-[430px]">
              <div className="absolute inset-5 rounded-[2rem] bg-gradient-to-br from-yellow-300 to-orange-400 opacity-35 blur-2xl" />
              <div className="relative rotate-[-2deg] rounded-[1.75rem] bg-gradient-to-br from-yellow-200 via-orange-100 to-white p-3 shadow-2xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
                  <Image
                    src="/images/crowd-fundings/funding.jpg"
                    alt="神戸音学祭2026 クラウドファンディングのお知らせ"
                    fill
                    quality={80}
                    sizes="(min-width: 1024px) 430px, (min-width: 640px) 360px, 320px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[420px]">
              <div className="overflow-hidden rounded-3xl bg-white text-kobe-dark-teal shadow-xl ring-4 ring-orange-200">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-5 py-4 text-center text-white">
                  <p className="text-sm font-black tracking-wide">
                    CAMPFIRE 支援状況
                  </p>
                  <p className="mt-1 text-3xl font-black md:text-4xl">
                    {progressPercent}%
                  </p>
                </div>

                <div className="space-y-6 px-5 py-6 sm:px-6">
                  <div>
                    <div className="mb-3 h-5 overflow-hidden rounded-full bg-kobe-light-blue/20 ring-2 ring-kobe-dark-teal/20">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                        style={{ width: `${progressBarPercent}%` }}
                      />
                    </div>
                    <p className="text-center text-sm font-bold text-kobe-gray">
                      目標 {yenFormatter.format(stats.targetAmount)} まで あと{" "}
                      {yenFormatter.format(
                        Math.max(stats.targetAmount - stats.currentAmount, 0)
                      )}
                    </p>
                  </div>

                  <dl className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-kobe-yellow-light px-3 py-4 text-center">
                      <dt className="text-xs font-black text-kobe-gray">
                        支援総額
                      </dt>
                      <dd className="mt-1 text-xl font-black md:text-2xl">
                        {yenFormatter.format(stats.currentAmount)}
                      </dd>
                    </div>
                    <div className="rounded-2xl bg-kobe-light-blue/20 px-3 py-4 text-center">
                      <dt className="text-xs font-black text-kobe-gray">
                        支援者数
                      </dt>
                      <dd className="mt-1 text-xl font-black md:text-2xl">
                        {stats.supporters.toLocaleString("ja-JP")}人
                      </dd>
                    </div>
                    <div className="rounded-2xl bg-orange-50 px-3 py-4 text-center">
                      <dt className="text-xs font-black text-kobe-gray">
                        残り日数
                      </dt>
                      <dd className="mt-1 text-xl font-black md:text-2xl">
                        {remainingDays}日
                      </dd>
                    </div>
                    <div className="rounded-2xl bg-sky-50 px-3 py-4 text-center">
                      <dt className="text-xs font-black text-kobe-gray">
                        目標金額
                      </dt>
                      <dd className="mt-1 text-xl font-black md:text-2xl">
                        {yenFormatter.format(stats.targetAmount)}
                      </dd>
                    </div>
                  </dl>

                  <p className="text-center text-xs font-bold text-kobe-gray">
                    {stats.isFallback
                      ? "最新状況を取得できないため、確認済みの支援状況を表示しています。"
                      : `${formatFetchedAt(stats.fetchedAt)} 時点の支援状況です。`}
                  </p>

                  <Link
                    href={crowdfundingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="CAMPFIREでクラウドファンディングの詳細を見る"
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-kobe-dark-teal px-5 py-4 text-base font-black text-white shadow-lg transition-colors hover:bg-kobe-orange md:text-lg"
                  >
                    CAMPFIREで支援する
                    <FaExternalLinkAlt className="text-base" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
