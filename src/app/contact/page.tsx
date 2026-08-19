import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactCTASection } from "@/components/sections/ContactCTASection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zendel Services Limited. Call +44 20 3952 4577, WhatsApp +44 7713 136911, or submit an event booking enquiry.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Header with Background Image */}
      <section className="relative min-h-[450px] h-[55vh] flex items-center justify-center text-center bg-slate-950 text-white overflow-hidden border-b border-white/10">
        {/* Background Image & Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80"
            alt="Contact Zendel Services Limited Background"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00A2C9]/20 blur-[130px] rounded-full pointer-events-none" />
        </div>

        <Container className="relative z-10 py-12 max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#09BAF4] border border-white/20 inline-block shadow-lg">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-md">
            Contact Zendel Services Limited
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Have an upcoming celebration, need trained ushers or coordinators,
            require custom print branding, or building maintenance? Let's talk.
          </p>
        </Container>
      </section>

      <ContactCTASection />
    </>
  );
}
