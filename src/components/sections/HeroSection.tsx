import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Users, Video, Printer, Building2, ShieldCheck, CheckCircle } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[720px] flex items-center justify-center bg-slate-950 text-white overflow-hidden">
      {/* Full-Bleed Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/hero_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>

      <Container className="relative z-10 py-16 sm:py-24 text-center max-w-5xl mx-auto space-y-8">
        {/* Top Trust Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#09BAF4] text-xs font-black uppercase tracking-widest shadow-lg">
          <Sparkles className="w-4 h-4" />
          <span>Bespoke Event Planning &amp; Artisan Collective</span>
        </div>

        {/* Main Headline & Subtitle */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Plan Bespoke Celebrations. <br className="hidden sm:block" />
            <span className="text-[#09BAF4]">Hire Exceptional Event Artisans.</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed">
            From creative event direction and executive staffing to visual storytelling, custom design, and property management — we bring every celebration to life with precision.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button
            href="/events"
            variant="warning"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Plan Your Event
          </Button>
          <Button
            href="/media-creatives"
            variant="outline"
            size="lg"
          >
            Explore Zendel Creatives
          </Button>
        </div>

        {/* Quick Category Marketplace Pills */}
        <div className="pt-6 border-t border-white/10">
          <p className="text-[11px] uppercase font-bold text-slate-400 tracking-widest mb-3">
            Explore Core Disciplines
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { label: 'Event Planning', href: '/event-planning', icon: Sparkles },
              { label: 'Events Staffing', href: '/events-staffing', icon: Users },
              { label: 'Media & Creatives', href: '/media-creatives', icon: Video },
              { label: 'Design & Printing', href: '/design-printing', icon: Printer },
              { label: 'Property Care', href: '/property-maintenance', icon: Building2 },
            ].map((cat, i) => {
              const CatIcon = cat.icon;
              return (
                <Link
                  key={i}
                  href={cat.href}
                  className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-sm border border-white/15 transition-all hover:scale-105"
                >
                  <CatIcon className="w-3.5 h-3.5 text-[#09BAF4]" />
                  <span>{cat.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-3xl mx-auto text-left">
          <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-2xl p-3.5 border border-white/10">
            <CheckCircle className="w-5 h-5 text-[#09BAF4] flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Full Event Directing</p>
              <p className="text-[10px] text-slate-400">Concept to execution</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-2xl p-3.5 border border-white/10">
            <Users className="w-5 h-5 text-[#09BAF4] flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Trained Ushers &amp; Hosts</p>
              <p className="text-[10px] text-slate-400">Professional protocol team</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-2xl p-3.5 border border-white/10">
            <ShieldCheck className="w-5 h-5 text-[#09BAF4] flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Curated Artisans</p>
              <p className="text-[10px] text-slate-400">Premier event collective</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

