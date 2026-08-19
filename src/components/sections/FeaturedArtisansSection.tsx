'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Star,
  UserCircle2,
  Mail,
  MapPin,
  Award,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
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
  const [selectedArtisan, setSelectedArtisan] = useState<{ name: string; role: string }>({
    name: '',
    role: '',
  });

  useEffect(() => {
    async function loadArtisans() {
      try {
        const res = await fetch('/api/artisans');
        if (res.ok) {
          const data = await res.json();
          setArtisans(data.slice(0, 3)); // Featured top 3
        }
      } catch (err) {
        console.error('Error loading featured artisans:', err);
      } finally {
        setLoading(false);
      }
    }
    loadArtisans();
  }, []);

  const handleOpenEnquiry = (name: string, role: string) => {
    setSelectedArtisan({ name, role });
    setEnquiryModalOpen(true);
  };

  return (
    <section className="py-24 bg-white border-b border-gray-200 relative">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-black px-4 py-1.5 rounded-full bg-[#6747ee]/10 text-[#6747ee] border border-[#6747ee]/20 inline-block">
              The Zendel Creatives
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight leading-tight">
              Hire Elite{' '}
              <span className="relative inline-block text-[#00A2C9]">
                Artisans &amp; Talent
                <StyledUnderline color="#00A2C9" variant="curve" />
              </span>
            </h2>
            <p className="text-base text-gray-600 font-normal leading-relaxed">
              Every profile within the Zendel Creatives Team represents distinctive talent, passion, and verified excellence for your upcoming celebrations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setRegisterModalOpen(true)}
              className="px-5 py-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-black shadow-md transition-all flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-[#09BAF4]" />
              <span>Register as Artisan</span>
            </button>
            <Button href="/media-creatives" variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              View All Artisans
            </Button>
          </div>
        </div>

        {/* Artisans Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-3 py-12 text-center text-gray-400 font-bold">Loading creative artisans...</div>
          ) : (
            artisans.map((artisan, index) => (
              <div
                key={artisan.id || index}
                className="rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Image Banner */}
                  <div className="relative h-64 overflow-hidden bg-slate-950">
                    <img
                      src={artisan.image || '/artisan-event-planner.jpg'}
                      alt={artisan.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                    {/* Category Pill & Verification Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/95 text-gray-950 shadow-md backdrop-blur-md">
                        {artisan.category}
                      </span>
                      <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-black shadow-md backdrop-blur-md">
                        <ShieldCheck className="w-3 h-3" />
                        <span>VERIFIED</span>
                      </span>
                    </div>

                    {/* Bottom Floating Info */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xl font-black text-white">{artisan.name}</p>
                      <p className="text-xs text-[#09BAF4] font-bold">{artisan.title}</p>
                    </div>
                  </div>

                  {/* Body Content Details */}
                  <div className="p-6 space-y-4 text-xs">
                    {/* Location */}
                    <div className="flex items-center space-x-1.5 text-gray-500 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-[#00A2C9]" />
                      <span>{artisan.city}, {artisan.country}</span>
                    </div>

                    {/* About */}
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1">
                        About &amp; Approach
                      </span>
                      <p className="text-gray-700 line-clamp-3 leading-relaxed font-normal">
                        {artisan.about}
                      </p>
                    </div>

                    {/* Expertise */}
                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-1">
                        Key Expertise
                      </span>
                      <p className="text-gray-900 font-bold line-clamp-2">
                        {artisan.expertise}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleOpenEnquiry(artisan.name, artisan.title)}
                    className="w-full py-3 px-4 rounded-xl bg-[#00A2C9] hover:bg-[#008ba8] text-white font-black text-xs flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Connect / Enquire →</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Client Hire Enquiry Modal */}
        <Modal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
          title="Book / Hire Artisan"
        >
          <ArtisanEnquiryForm
            artisanName={selectedArtisan.name}
            artisanRole={selectedArtisan.role}
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
