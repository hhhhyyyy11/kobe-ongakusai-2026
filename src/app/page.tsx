"use client";
import React from "react";
import { SNSSection } from "@/components/SNSSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TicketSection } from "@/components/TicketSection";
import { SponsorSection } from "@/components/SponsorSection";

function MainComponent() {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-kobe-light-blue font-sans">
      {/* Navigation Bar */}
      <Header />

      {/* Main Visual Section */}
      <HeroSection />

      {/* Ticket Section */}
      <TicketSection />

      {/* SNS Section */}
      <SNSSection isClient={isClient} />

      {/* Sponsor Section */}
      <SponsorSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MainComponent;
