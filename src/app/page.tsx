import type { Metadata } from "next";
import { SNSSection } from "@/components/SNSSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TicketSection } from "@/components/TicketSection";
import { SponsorSection } from "@/components/SponsorSection";
import { CrowdfundingSection } from "@/components/CrowdfundingSection";
import { HomeTimetableSection } from "@/components/HomeTimetableSection";
import { createPageMetadata } from "@/lib/metadata";
import { eventInfo } from "@/constants/event";

export const metadata: Metadata = createPageMetadata({
  title: "神戸音学祭2026",
  description: `神戸音学祭2026は、${eventInfo.dateTimeLabel}に神戸・TOTTEI PARKで開催する学生主催の野外音楽フェスです。入場無料・入退場自由で、学生音楽から神戸を盛り上げます。`,
});

function MainComponent() {
  return (
    <div className="min-h-screen bg-kobe-light-blue font-sans">
      {/* Navigation Bar */}
      <Header />

      {/* Main Visual Section */}
      <HeroSection />

      {/* Crowdfunding Section */}
      <CrowdfundingSection />

      {/* Ticket Section */}
      <TicketSection />

      {/* Timetable Section */}
      <HomeTimetableSection />

      {/* SNS Section */}
      <SNSSection />

      {/* Sponsor Section */}
      <SponsorSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MainComponent;
