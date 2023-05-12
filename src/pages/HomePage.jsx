import React from "react";
import {
  AboutSection,
  FAQSection,
  FeatureSection,
  Landing,
  PricingSection,
  TestimonialsSection,
} from "../components";
import VideoPlayer from "../components/home/VideoPlayer";

export default function HomePage() {
  return (
    <div className="relative ">
      <Landing />
      <div className="player absolute top-[210px]  w-full">
        <VideoPlayer />
      </div>
      <FeatureSection />
      <PricingSection />
      <TestimonialsSection />
      <AboutSection />
      <FAQSection />
    </div>
  );
}
