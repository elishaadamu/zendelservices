'use client';

import React from 'react';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { StyledUnderline } from '../ui/StyledUnderline';

const testimonialsData = [
  {
    name: 'Sarah',
    role: 'Event Planner & Coordinator',
    avatar: '/artisan-event-planner.jpg',
    quote:
      'Planning a luxury wedding used to stress me out. Zendel gave me complete confidence — their team and coordinators handled the entire flow flawlessly, and we never looked back.',
    rating: 5,
    rotation: '-rotate-3 hover:-rotate-1',
    offset: 'sm:translate-y-4',
  },
  {
    name: 'Kemi',
    role: 'Wedding Celebrant & Bride',
    avatar: '/collective-makeup.jpg',
    quote:
      "I've worked with many service providers, but Zendel truly understands the luxury event industry. Clean coordination, bespoke presentation, and pure excellence from start to finish.",
    rating: 5,
    rotation: 'rotate-3 hover:rotate-1',
    offset: 'sm:-translate-y-2',
  },
  {
    name: 'Deji',
    role: 'Corporate Summit Director',
    avatar: '/artisan-photographer.jpg',
    quote:
      'From executive ushers to cinematic visual coverage, Zendel managed our flagship gala with unmatched professionalism. Every attendee remarked on the standard of hospitality.',
    rating: 5,
    rotation: '-rotate-2 hover:rotate-0',
    offset: 'sm:translate-y-6',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white text-gray-900 relative overflow-hidden border-b border-gray-200">
      {/* Background Subtle Dashed Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#00A2C9_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <Container className="relative z-10">
        {/* ── TOP CURATED PHOTO MOSAIC ─────────────────────────────────── */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-12 gap-3 sm:gap-4 items-center">
            {/* Left Cluster */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md h-28 sm:h-32 bg-slate-900 border border-gray-100 group">
                <img
                  src="/gallery/IMG-20260602-WA0041.jpg"
                  alt="Stage & Performance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md h-36 sm:h-44 bg-slate-900 border border-gray-100 group">
                <img
                  src="/gallery/IMG-20260602-WA0031.jpg"
                  alt="Couple Reception"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md h-36 sm:h-40 bg-slate-900 border border-gray-100 group">
                <img
                  src="/gallery/IMG-20260602-WA0038.jpg"
                  alt="Culinary Banquet"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md h-28 sm:h-36 bg-slate-900 border border-gray-100 group">
                <img
                  src="/gallery/IMG-20260602-WA0019.jpg"
                  alt="Mixology & Atmosphere"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Center Focal Masterpiece */}
            <div className="col-span-2 sm:col-span-4 lg:col-span-4 h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/80 bg-slate-900 relative group">
              <img
                src="/gallery/IMG-20260602-WA0009.jpg"
                alt="Luxury Canopy Setup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/90 text-slate-900 backdrop-blur-sm shadow-md">
                  Zendel Signature Atmosphere
                </span>
              </div>
            </div>

            {/* Right Cluster */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md h-28 sm:h-36 bg-slate-900 border border-gray-100 group">
                <img
                  src="/gallery/IMG-20260602-WA0016.jpg"
                  alt="Grand Hall Lighting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md h-36 sm:h-40 bg-slate-900 border border-gray-100 group">
                <img
                  src="/gallery/IMG-20260602-WA0044.jpg"
                  alt="Celebration Showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md h-36 sm:h-44 bg-slate-900 border border-gray-100 group">
                <img
                  src="/collective-ushers.jpg"
                  alt="Executive Ushers"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md h-28 sm:h-32 bg-slate-900 border border-gray-100 group">
                <img
                  src="/gallery/IMG-20260602-WA0052.jpg"
                  alt="Distinguished Guests"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── CENTER HEADLINE & CTA ────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
            Trusted by Celebrants and Clients{' '}
            <span className="relative inline-block text-[#00A2C9]">
              Worldwide
              <StyledUnderline color="#00A2C9" variant="curve" />
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            See how real clients and organisers use{' '}
            <strong className="text-gray-900 font-extrabold text-lg sm:text-xl">
              Zendel Services
            </strong>{' '}
            to plan unforgettable celebrations and corporate events —{' '}
            <span className="font-semibold text-gray-800 italic underline decoration-[#ff6900] decoration-2 underline-offset-4">
              without the stress.
            </span>
          </p>

          <div className="pt-2">
            <Button
              href="/events"
              variant="warning"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Our Events
            </Button>
          </div>
        </div>

        {/* ── CONNECTED TILTED TESTIMONIAL CARDS ───────────────────────── */}
        <div className="relative max-w-5xl mx-auto">
          {/* Curved connecting dotted line on desktop */}
          <svg
            className="hidden lg:block absolute top-12 left-10 right-10 w-[90%] h-32 pointer-events-none -z-0"
            viewBox="0 0 900 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 40 C 250 110, 350 -10, 500 50 C 650 110, 750 0, 850 60"
              stroke="#ff6900"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeOpacity="0.4"
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 relative z-10">
            {testimonialsData.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-300 transform ${item.rotation} ${item.offset}`}
              >
                <div className="bg-white rounded-3xl p-7 shadow-xl hover:shadow-2xl border border-gray-200/90 relative flex flex-col justify-between h-full group">
                  {/* Top Realistic Pin Head */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-900 shadow-md border-2 border-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  </div>

                  {/* Client Info Header */}
                  <div>
                    <div className="flex items-center space-x-3.5 mb-5 pt-1">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover object-top border-2 border-[#00A2C9]/30 shadow-sm"
                      />
                      <div>
                        <h4 className="text-base font-black text-gray-900 leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-500 font-semibold mt-0.5">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-sm text-gray-700 leading-relaxed font-normal italic mb-6">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* 5 Stars Rating & Stamp */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-1 text-[#ff6900]">
                      {[...Array(item.rating)].map((_, s) => (
                        <Star key={s} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">
                      Verified Client
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
