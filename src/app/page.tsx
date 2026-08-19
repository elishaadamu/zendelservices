import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { MissionVisionSection } from "@/components/sections/MissionVisionSection";
import { UpcomingEventSection } from "@/components/sections/UpcomingEventSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { EventGallerySection } from "@/components/sections/EventGallerySection";
import { FounderSection } from "@/components/sections/FounderSection";
import { ContactCTASection } from "@/components/sections/ContactCTASection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <MissionVisionSection />
      <UpcomingEventSection />
      <TestimonialsSection />
      <EventGallerySection />
      <FounderSection />
      <ContactCTASection />
    </>
  );
}
