import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MissionVisionSection } from '@/components/sections/MissionVisionSection';
import { FounderSection } from '@/components/sections/FounderSection';
import { ContactCTASection } from '@/components/sections/ContactCTASection';
import { companyData } from '@/lib/data/company';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Zendel Services Limited, our mission, vision, founder Cyndi, and commitment to excellence in event management, staffing, print, and property care.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-sky-50 via-cyan-50/60 to-indigo-50 py-16 sm:py-24 text-gray-900 text-center border-b border-gray-200 relative overflow-hidden">
        <Container>
          <span className="text-xs uppercase tracking-widest font-bold px-3.5 py-1 rounded-full bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20">
            About Zendel Services Limited
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-4 tracking-tight text-gray-900">
            Who We Are & What Drives Us
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            {companyData.tagline}
          </p>
        </Container>
      </section>

      <MissionVisionSection />
      <FounderSection />

      {/* Core Principles */}
      <section className="py-20 bg-white border-t border-gray-200">
        <Container>
          <SectionHeading
            subtitle="Our Pillars"
            title="Built On Quality, Trust & Professionalism"
            description="Every project undertaken by Zendel is executed with unwavering commitment to high standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#f8fafc] border border-gray-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#00A2C9]/10 text-[#00A2C9] font-black text-xl flex items-center justify-center">
                01
              </div>
              <h3 className="text-xl font-bold text-gray-900">Innovative Ideas</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We bring creative flair and fresh concepts to every event, design, and staffing solution we create.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#f8fafc] border border-gray-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#6747ee]/10 text-[#6747ee] font-black text-xl flex items-center justify-center">
                02
              </div>
              <h3 className="text-xl font-bold text-gray-900">Executive Staffing</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our ushers, hosts, and coordinators are rigorously trained to represent your brand flawlessly.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#f8fafc] border border-gray-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 font-black text-xl flex items-center justify-center">
                03
              </div>
              <h3 className="text-xl font-bold text-gray-900">End-to-End Delivery</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                From pre-event planning and print production to post-event property maintenance, we manage it all.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ContactCTASection />
    </>
  );
}
