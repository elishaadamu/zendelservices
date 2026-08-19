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
  Briefcase,
  Layers,
  Send,
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
          // Verified artisans only
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

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#f8fafc] border-b border-gray-200 relative overflow-hidden">
      <Container>
        {/* Top Header & Enquire Here CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-black px-4 py-1.5 rounded-full bg-[#6747ee]/10 text-[#6747ee] border border-[#6747ee]/20 inline-block">
              Zendel Talent Directory
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight leading-tight">
              Verified Creative{' '}
              <span className="relative inline-block text-[#00A2C9]">
                Artisans Roster
                <StyledUnderline color="#00A2C9" variant="curve" />
              </span>
            </h2>
            <p className="text-base text-gray-600 font-normal leading-relaxed">
              Explore the premier roster of vetted artisans and specialists available for your luxury events, galas, and productions.
            </p>
          </div>

          {/* Top of Carousel Action Buttons: ENQUIRE HERE & Register */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Primary Enquire Here Button */}
            <button
              onClick={() => setEnquiryModalOpen(true)}
              className="px-7 py-4 rounded-2xl bg-[#ff6900] hover:bg-[#e05d00] text-white font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Enquire Here</span>
            </button>

            <button
              onClick={() => setRegisterModalOpen(true)}
              className="px-5 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-[#09BAF4]" />
              <span>Register as Artisan</span>
            </button>

            {/* Carousel Arrow Controls */}
            <div className="flex items-center space-x-2 ml-auto sm:ml-0">
              <button
                onClick={scrollLeft}
                className="w-11 h-11 rounded-2xl bg-white border border-gray-200 text-gray-700 hover:bg-[#00A2C9] hover:text-white hover:border-[#00A2C9] flex items-center justify-center shadow-sm transition-all"
                aria-label="Previous Artisans"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollRight}
                className="w-11 h-11 rounded-2xl bg-white border border-gray-200 text-gray-700 hover:bg-[#00A2C9] hover:text-white hover:border-[#00A2C9] flex items-center justify-center shadow-sm transition-all"
                aria-label="Next Artisans"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container (No images, No connect button, Clean Numbered Luxury Styling) */}
        {loading ? (
          <div className="py-20 text-center text-gray-400 font-bold">Loading verified artisans...</div>
        ) : (
          <div
            ref={carouselRef}
            className="flex space-x-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {artisans.map((artisan, index) => {
              const numStr = String(index + 1).padStart(2, '0');
              return (
                <div
                  key={artisan.id || index}
                  className="snap-start shrink-0 w-[310px] sm:w-[360px] p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
                >
                  <div className="space-y-4">
                    {/* Top Row: Numeral, Pillar Tag & Verified Badge */}
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-3xl font-black text-slate-200 group-hover:text-[#00A2C9]/30 transition-colors">
                        {numStr}
                      </span>
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-black uppercase tracking-wider">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>VERIFIED ARTISAN</span>
                      </span>
                    </div>

                    {/* Category Pill */}
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 inline-block">
                      {artisan.category}
                    </span>

                    {/* Name & Role */}
                    <div>
                      <h3 className="text-xl font-black text-gray-950 group-hover:text-[#00A2C9] transition-colors leading-snug">
                        {artisan.name}
                      </h3>
                      <p className="text-xs font-bold text-[#00A2C9] mt-1">
                        {artisan.title}
                      </p>
                    </div>

                    {/* Location */}
                    <div className="flex items-center space-x-1.5 text-xs text-gray-500 font-semibold pt-1 border-t border-slate-100">
                      <MapPin className="w-3.5 h-3.5 text-[#ff6900] shrink-0" />
                      <span>{artisan.city}, {artisan.country}</span>
                    </div>

                    {/* About Excerpt */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block">
                        About
                      </span>
                      <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed font-normal">
                        {artisan.about}
                      </p>
                    </div>

                    {/* Key Expertise */}
                    <div className="space-y-1 pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block">
                        Expertise
                      </span>
                      <p className="text-xs font-bold text-gray-900 line-clamp-2 leading-relaxed">
                        {artisan.expertise}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom: Portfolio Link Only (No Connect Button) */}
                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    {artisan.portfolio ? (
                      <a
                        href={artisan.portfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-black text-[#00A2C9] hover:underline underline-offset-4"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>View Portfolio</span>
                      </a>
                    ) : (
                      <span className="text-[11px] font-bold text-gray-400">Portfolio via Zendel</span>
                    )}

                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Zendel Roster
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
