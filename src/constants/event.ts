const dateLabel = "2026年8月21日（金）";
const timeLabel = "10:00〜19:30";

export const eventInfo = {
  dateLabel,
  timeLabel,
  dateTimeLabel: `${dateLabel}${timeLabel}`,
  startDate: "2026-08-21T10:00:00+09:00",
  endDate: "2026-08-21T19:30:00+09:00",
} as const;
