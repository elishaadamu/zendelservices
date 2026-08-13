import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[75vh] lg:h-[85vh] bg-slate-900 overflow-hidden">
      {/* Full-Bleed Background Video */}
      <video
        src="/hero_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </section>
  );
};
