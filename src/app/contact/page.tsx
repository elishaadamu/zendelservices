import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { ContactCTASection } from '@/components/sections/ContactCTASection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Zendel Services Limited. Call +44 20 3952 4577, WhatsApp +44 7713 136911, or submit an event booking enquiry.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Header with Background Image */}
      <section className="relative min-h-[450px] h-[55vh] flex items-center justify-center text-center bg-slate-950 text-white overflow-hidden border-b border-white/10">
        {/* Background Image & Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/IMG-20260602-WA0009.jpg"
            alt="Contact Zendel Services Limited Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <Container className="relative z-10 py-12 max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#09BAF4] border border-white/20 inline-block shadow-lg">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-md">
            Contact Zendel Services Limited
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Have an upcoming celebration, need trained ushers or coordinators, require custom print branding, or building maintenance? Let's talk.
          </p>
        </Container>
      </section>

      <ContactCTASection />
    </>
  );
}
