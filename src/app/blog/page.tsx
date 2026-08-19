import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { BlogPreviewSection } from '@/components/sections/BlogPreviewSection';
import { StyledUnderline } from '@/components/ui/StyledUnderline';

export const metadata: Metadata = {
  title: 'Blog & News',
  description:
    'Read insights, event tips, ushering standards, print branding ideas, and property maintenance advice from Zendel Services Limited.',
};

export default function BlogPage() {
  return (
    <>
      {/* Hero Header with Background Image & Dark Luxury Overlay */}
      <section className="relative min-h-[440px] flex items-center justify-center text-center bg-slate-950 text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/IMG-20260602-WA0041.jpg"
            alt="Blog and Articles Background"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00A2C9]/20 blur-[130px] rounded-full pointer-events-none" />
        </div>

        <Container className="relative z-10 py-16 max-w-4xl mx-auto space-y-5">
          <span className="text-xs uppercase tracking-widest font-black px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#09BAF4] border border-white/20 inline-block shadow-lg">
            Insights &amp; News
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
            Zendel Blog &amp;{' '}
            <span className="relative inline-block text-[#09BAF4]">
              Articles
              <StyledUnderline color="#09BAF4" variant="curve" />
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Industry trends, event planning guides, staffing standards, and creative announcements.
          </p>
        </Container>
      </section>

      <BlogPreviewSection />
    </>
  );
}
