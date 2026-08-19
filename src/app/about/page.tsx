import React from 'react';
import { Metadata } from 'next';
import { Sparkles, Shield, HeartHandshake } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { MissionVisionSection } from '@/components/sections/MissionVisionSection';
import { FounderSection } from '@/components/sections/FounderSection';
import { ContactCTASection } from '@/components/sections/ContactCTASection';
import { StyledUnderline } from '@/components/ui/StyledUnderline';
import { companyData } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Zendel Services Limited, our mission, vision, founder Cyndi, and commitment to excellence in event management, staffing, print, and property care.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Header with Dark Luxury Overlay & Background Grid */}
      <section className="relative min-h-[440px] flex items-center justify-center text-center bg-slate-950 text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/IMG-20260602-WA0016.jpg"
            alt="About Zendel Services Limited"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00A2C9]/20 blur-[130px] rounded-full pointer-events-none" />
        </div>

        <Container className="relative z-10 py-16 max-w-4xl mx-auto space-y-5">
          <span className="text-xs uppercase tracking-widest font-black px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#09BAF4] border border-white/20 inline-block shadow-lg">
            About Zendel Services Limited
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
            Who We Are &amp;{' '}
            <span className="relative inline-block text-[#09BAF4]">
              What Drives Us
              <StyledUnderline color="#09BAF4" variant="curve" />
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            {companyData.tagline}
          </p>
        </Container>
      </section>

      <MissionVisionSection />
      <FounderSection />

      {/* Core Principles / Pillars with Numbered Cards */}
      <section className="py-24 bg-white border-t border-gray-200 relative overflow-hidden">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-black px-4 py-1.5 rounded-full bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20 inline-block">
              Our Core Pillars
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-950 leading-tight">
              Built On{' '}
              <span className="relative inline-block text-[#00A2C9]">
                Quality &amp; Trust
                <StyledUnderline color="#00A2C9" variant="curve" />
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-normal">
              Every project undertaken by Zendel is executed with unwavering commitment to international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group hover:-translate-y-1 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20 flex items-center justify-center group-hover:bg-[#00A2C9] group-hover:text-white transition-all">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-3xl font-black text-slate-200 group-hover:text-[#00A2C9]/30 transition-colors">
                    01
                  </span>
                </div>
                <h3 className="text-xl font-black text-gray-950 mb-2">Innovative Ideas</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  We bring creative flair and fresh bespoke concepts to every event, design campaign, and staffing solution we deliver.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-[10px] font-black uppercase tracking-wider text-slate-400">
                CREATIVE EXCELLENCE
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group hover:-translate-y-1 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#6747ee]/10 text-[#6747ee] border border-[#6747ee]/20 flex items-center justify-center group-hover:bg-[#6747ee] group-hover:text-white transition-all">
                    <Shield className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-3xl font-black text-slate-200 group-hover:text-[#6747ee]/30 transition-colors">
                    02
                  </span>
                </div>
                <h3 className="text-xl font-black text-gray-950 mb-2">Flawless Execution</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  Meticulous attention to detail from the first consultation through to the final guest departure or product delivery.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-[10px] font-black uppercase tracking-wider text-slate-400">
                PRECISION PROTOCOL
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group hover:-translate-y-1 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#ff6900]/10 text-[#ff6900] border border-[#ff6900]/20 flex items-center justify-center group-hover:bg-[#ff6900] group-hover:text-white transition-all">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-3xl font-black text-slate-200 group-hover:text-[#ff6900]/30 transition-colors">
                    03
                  </span>
                </div>
                <h3 className="text-xl font-black text-gray-950 mb-2">Dedicated Partnership</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  We work closely with clients to understand their vision and goals, translating aspirations into seamless, memorable realities.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-[10px] font-black uppercase tracking-wider text-slate-400">
                CLIENT PARTNERSHIP
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ContactCTASection />
    </>
  );
}
