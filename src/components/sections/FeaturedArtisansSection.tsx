'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Send,
  Heart,
} from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { StyledUnderline } from '../ui/StyledUnderline';
import { ArtisanEnquiryForm } from '../forms/ArtisanEnquiryForm';
import { ArtisanRegistrationForm } from '../forms/ArtisanRegistrationForm';
import { Artisan } from '@/lib/types/artisan';

export const FeaturedArtisansSection: React.FC = () => {
  const [artisans, setArtisans] = useState<Artisan[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Modals
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  // Carousel ref
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadArtisans() {
      try {
        const res = await fetch('/api/artisans');
        if (res.ok) {
          const data: Artisan[] = await res.json();
          setArtisans(data.filter((a) => a.status === 'verified'));
        }
      } catch (err) {
        console.error('Error loading verified artisans:', err);
      } finally {
        setLoading(false);
      }
    }
    loadArtisans();
  }, []);

  // Automatic moving carousel (pauses on hover)
  useEffect(() => {
    if (artisans.length === 0 || isPaused) return;

    const timer = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 280, behavior: 'smooth' });
        }
      }
    }, 2800);

    return () => clearInterval(timer);
  }, [artisans, isPaused]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Helper to extract initials for circular avatar
  const getInitials = (name: string) => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section className="py-20 bg-white border-b border-gray-200 relative overflow-hidden">
      <Container>
        {/* Top Header & Enquire Here CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-black px-4 py-1.5 rounded-full bg-[#6747ee]/10 text-[#6747ee] border border-[#6747ee]/20 inline-block">
              Talent &amp; Artisans Collective
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight">
              Discover Verified{' '}
              <span className="relative inline-block text-[#00A2C9]">
                Artisans
                <StyledUnderline color="#00A2C9" variant="curve" />
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
              Explore our vetted roster of artisans available for bookings across London and nationwide.
            </p>
          </div>

          {/* Action Buttons: ENQUIRE HERE & Arrows */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Primary Enquire Here Button */}
            <button
              onClick={() => setEnquiryModalOpen(true)}
              className="px-6 py-3.5 rounded-2xl bg-[#ff6900] hover:bg-[#e05d00] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Enquire Here</span>
            </button>

            <button
              onClick={() => setRegisterModalOpen(true)}
              className="px-5 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-[#09BAF4]" />
              <span>Register as Artisan</span>
            </button>

            {/* Carousel Navigation Arrows */}
            <div className="flex items-center space-x-2 ml-auto sm:ml-0">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 rounded-xl bg-slate-50 border border-gray-200 text-gray-700 hover:bg-[#00A2C9] hover:text-white hover:border-[#00A2C9] flex items-center justify-center shadow-sm transition-all"
                aria-label="Previous Artisans"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 rounded-xl bg-slate-50 border border-gray-200 text-gray-700 hover:bg-[#00A2C9] hover:text-white hover:border-[#00A2C9] flex items-center justify-center shadow-sm transition-all"
                aria-label="Next Artisans"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Moving Carousel of Artisan Cards (Circular Avatar, Name, Location · Role, Portfolio) */}
        {loading ? (
          <div className="py-16 text-center text-gray-400 font-bold">Loading verified artisans...</div>
        ) : (
          <div
            ref={carouselRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex space-x-5 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {artisans.map((artisan, index) => {
              const initials = getInitials(artisan.name);
              return (
                <div
                  key={artisan.id || index}
                  className="snap-start shrink-0 w-[240px] sm:w-[260px] p-5 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
                >
                  <div className="space-y-4">
                    {/* Top Row: Circular Avatar & Category Badge */}
                    <div className="flex items-center justify-between">
                      {/* Circular Avatar */}
                      <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-[#00A2C9] text-white flex items-center justify-center font-serif text-lg font-black shadow-md group-hover:scale-105 transition-transform duration-300 relative">
                        <span>{initials}</span>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm" title="Verified">
                          <ShieldCheck className="w-2.5 h-2.5" />
                        </div>
                      </div>

                      {/* Category Pill */}
                      <span className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200 shadow-2xs">
                        {artisan.category}
                      </span>
                    </div>

                    {/* Name & Verified Title */}
                    <div className="pt-1">
                      <h3 className="text-base font-black text-gray-950 group-hover:text-[#00A2C9] transition-colors leading-snug truncate">
                        {artisan.name}
                      </h3>
                      {/* Subtitle: Location · Role */}
                      <p className="text-xs text-gray-500 font-medium truncate mt-1">
                        {artisan.city || 'London'}, {artisan.country || 'UK'} · <span className="font-semibold text-gray-700">{artisan.title}</span>
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom: Portfolio Link */}
                  <div className="pt-3 mt-4 border-t border-slate-200/70 flex items-center justify-between text-xs">
                    {artisan.portfolio ? (
                      <a
                        href={artisan.portfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-1 text-xs font-black text-[#00A2C9] hover:underline underline-offset-4"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Portfolio</span>
                      </a>
                    ) : (
                      <span className="text-[10px] font-bold text-gray-400">Via Zendel</span>
                    )}

                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                      Verified
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Client Hire Enquiry Modal (Opened by the top "Enquire Here" button) */}
        <Modal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
          title="Hire Artisans & Event Booking Enquiry"
        >
          <ArtisanEnquiryForm
            artisanName="Zendel Verified Artisans Roster"
            artisanRole="Customized Artisan Collective"
            onSuccess={() => setEnquiryModalOpen(false)}
          />
        </Modal>

        {/* Artisan Registration Modal */}
        <Modal
          isOpen={registerModalOpen}
          onClose={() => setRegisterModalOpen(false)}
          title="Register as an Artisan"
        >
          <ArtisanRegistrationForm onSuccess={() => setRegisterModalOpen(false)} />
        </Modal>
      </Container>
    </section>
  );
};
