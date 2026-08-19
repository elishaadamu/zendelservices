'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Camera,
  Scissors,
  Palette,
  Utensils,
  Wine,
  Music,
  Users,
  ShieldCheck,
  Megaphone,
  Compass,
  CheckCircle2,
  ArrowRight,
  HeartHandshake,
  Award,
  Star,
  Briefcase,
  BookOpen,
  UserCircle2,
  Mail,
  ExternalLink,
  MapPin,
  Globe,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { ArtisanEnquiryForm } from '@/components/forms/ArtisanEnquiryForm';
import { ArtisanRegistrationForm } from '@/components/forms/ArtisanRegistrationForm';
import { StyledUnderline } from '@/components/ui/StyledUnderline';
import { Artisan } from '@/lib/types/artisan';

/* ─────────────────────────────────────────────
   DATA (Using Authentic Local Gallery Images)
───────────────────────────────────────────── */
const teamDepartments = [
  {
    id: 'creative-vision',
    category: 'Creative Vision',
    tagline: 'The visionaries behind the experience.',
    disciplines: 'Event Planning & Creative Direction',
    description:
      'Our event planners and creative directors transform ideas, aspirations, and individual stories into beautifully considered celebrations. From the first concept to the final detail, they bring structure, creativity, precision, and imagination together to create experiences that feel effortless and extraordinary.',
    icon: Compass,
    image: '/artisan-event-planner.jpg',
    accentBg: 'bg-[#00A2C9]/10',
    accentText: 'text-[#00A2C9]',
    accentBorder: 'border-[#00A2C9]',
    accentHex: '#00A2C9',
  },
  {
    id: 'beauty-presentation',
    category: 'Beauty & Presentation',
    tagline: 'The artists who create the visual language of every celebration.',
    disciplines: 'Makeup · Hair · Couture · Fashion · Styling · Décor',
    description:
      'From refined beauty and bespoke fashion to couture styling and immersive décor, our creative specialists ensure that every element feels intentional, harmonious, and unmistakably personal.',
    icon: Sparkles,
    image: '/collective-makeup.jpg',
    accentBg: 'bg-[#6747ee]/10',
    accentText: 'text-[#6747ee]',
    accentBorder: 'border-[#6747ee]',
    accentHex: '#6747ee',
  },
  {
    id: 'memories-storytelling',
    category: 'Memories & Storytelling',
    tagline: 'The storytellers who preserve the moments that matter.',
    disciplines: 'Photography · Videography · Media',
    description:
      'Our photographers, filmmakers, and media creatives capture the emotion, atmosphere, beauty, and details that make every occasion unique—transforming fleeting moments into visual stories that can be remembered for years to come.',
    icon: Camera,
    image: '/collective-photographer.jpg',
    accentBg: 'bg-[#ff6900]/10',
    accentText: 'text-[#ff6900]',
    accentBorder: 'border-[#ff6900]',
    accentHex: '#ff6900',
  },
  {
    id: 'hospitality-atmosphere',
    category: 'Hospitality & Atmosphere',
    tagline: 'The specialists who bring the celebration to life.',
    disciplines: 'Catering · Mixology · Entertainment · Hosting',
    description:
      'Exceptional hospitality is at the heart of an unforgettable event. From exquisite culinary experiences and signature cocktails to entertainment, hosting, and atmosphere, these artisans create the moments guests experience, enjoy, and remember.',
    icon: Wine,
    image: '/gallery/IMG-20260602-WA0019.jpg',
    accentBg: 'bg-emerald-500/10',
    accentText: 'text-emerald-600',
    accentBorder: 'border-emerald-600',
    accentHex: '#059669',
  },
  {
    id: 'guest-care-protection',
    category: 'Guest Care & Protection',
    tagline: 'The professionals who make every guest feel cared for.',
    disciplines: 'Ushers · Concierge · Security',
    description:
      'Behind a seamless experience is a team dedicated to comfort, coordination, discretion, and safety. Our ushers, concierge professionals, and security specialists ensure every guest is welcomed, supported, and protected throughout the occasion.',
    icon: ShieldCheck,
    image: '/collective-ushers.jpg',
    accentBg: 'bg-sky-500/10',
    accentText: 'text-sky-600',
    accentBorder: 'border-sky-600',
    accentHex: '#0ea5e9',
  },
];

const collectiveCategories = [
  {
    title: 'Event Planning & Creative Direction',
    description:
      'Visionary planners and creative directors who transform concepts into flawlessly executed experiences.',
    icon: Compass,
    image: '/artisan-event-planner.jpg',
  },
  {
    title: 'Makeup Artistry',
    description:
      'Elite beauty professionals creating refined, timeless looks tailored to each individual and occasion.',
    icon: Sparkles,
    image: '/collective-makeup.jpg',
  },
  {
    title: 'Photography & Videography',
    description:
      'Visual storytellers capturing the emotion, atmosphere, and unforgettable details of every celebration.',
    icon: Camera,
    image: '/collective-photographer.jpg',
  },
  {
    title: 'Hairstyling & Beauty Design',
    description:
      'Creative specialists delivering elegant and sophisticated styling that completes every vision.',
    icon: Scissors,
    image: '/collective-hairstyling.jpg',
  },
  {
    title: 'Couture Fashion & Styling',
    description:
      'Designers and stylists creating bespoke looks that reflect individuality, elegance, and luxury.',
    icon: Palette,
    image: '/collective-fashion.jpg',
  },
  {
    title: 'Bespoke Décor & Event Design',
    description:
      "Creative designers transforming venues into immersive environments where every detail reflects the occasion's unique story.",
    icon: Sparkles,
    image: '/gallery/IMG-20260602-WA0009.jpg',
  },
  {
    title: 'Luxury Catering & Culinary Experiences',
    description:
      'Exceptional culinary artisans delivering memorable dining experiences through exquisite presentation and service.',
    icon: Utensils,
    image: '/gallery/IMG-20260602-WA0038.jpg',
  },
  {
    title: 'Cocktail Mixology & Beverage Experiences',
    description:
      'Expert mixologists creating bespoke cocktail experiences, signature drinks, and elevated beverage concepts.',
    icon: Wine,
    image: '/gallery/IMG-20260602-WA0019.jpg',
  },
  {
    title: 'Entertainment & Event Experiences',
    description:
      'Hosts, DJs, performers, and experience creators who bring energy, emotion, and unforgettable moments.',
    icon: Music,
    image: '/gallery/IMG-20260602-WA0041.jpg',
  },
  {
    title: 'Event Ushers & Guest Experience Specialists',
    description:
      'Professional hospitality teams ensuring guests receive a warm, seamless, and refined experience.',
    icon: Users,
    image: '/collective-ushers.jpg',
  },
  {
    title: 'Event Security & Safety Personnel',
    description:
      'Highly trained security professionals providing discreet protection, guest safety, and peace of mind.',
    icon: ShieldCheck,
    image: '/collective-security.jpg',
  },
  {
    title: 'Media & Brand Presence',
    description:
      'Creative media professionals capturing, promoting, and amplifying exceptional moments through strategic storytelling.',
    icon: Megaphone,
    image: '/gallery/IMG-20260602-WA0014.jpg',
  },
];

const artisanProfileFields = [
  { icon: UserCircle2, label: 'Name', desc: 'Professional title / speciality' },
  { icon: BookOpen, label: 'About', desc: 'Creative identity, experience, and approach' },
  { icon: Star, label: 'Expertise', desc: 'Key services, skills, and specialities' },
  { icon: Sparkles, label: 'Signature Style', desc: 'What makes their work distinctive' },
  { icon: Award, label: 'Experience & Credentials', desc: 'Qualifications, awards & notable collaborations' },
  { icon: Camera, label: 'Portfolio', desc: 'Selected work and visual highlights' },
  { icon: Briefcase, label: 'Zendel Creatives Role', desc: 'How they contribute to the collective' },
  { icon: Mail, label: 'Connect / Enquire →', desc: 'Direct contact and client booking' },
];

const philosophyPillars = [
  'Creativity is intentional.',
  'Quality is uncompromising.',
  'Execution is flawless.',
  'Every detail has purpose.',
  'Every experience tells a story.',
];

export const MediaCreativesClient: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [selectedArtisan, setSelectedArtisan] = useState({ name: '', role: '' });

  // Artisans Roster from API
  const [artisans, setArtisans] = useState<Artisan[]>([]);
  const [loadingArtisans, setLoadingArtisans] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    async function loadArtisans() {
      try {
        const res = await fetch('/api/artisans');
        if (res.ok) {
          const data = await res.json();
          setArtisans(data);
        }
      } catch (err) {
        console.error('Error fetching artisans for media creatives page:', err);
      } finally {
        setLoadingArtisans(false);
      }
    }
    loadArtisans();
  }, []);

  const handleOpenModal = (name: string, role: string) => {
    setSelectedArtisan({ name, role });
    setModalOpen(true);
  };

  const categoriesList = [
    'All',
    'Creative Vision',
    'Beauty & Presentation',
    'Memories & Storytelling',
    'Hospitality & Atmosphere',
    'Guest Care & Protection',
  ];

  const filteredArtisans = selectedCategory === 'All'
    ? artisans
    : artisans.filter((a) => a.category === selectedCategory);

  return (
    <>
      {/* ── HERO (Solid Modern Layout) ──────────────────────────────────── */}
      <section className="relative bg-slate-900 text-white py-20 sm:py-28 border-b border-slate-800 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full bg-[#00A2C9]/20 text-[#09BAF4] border border-[#00A2C9]/30 inline-block">
                ZENDEL CREATIVES
              </span>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  THE ZENDEL CREATIVES TEAM
                </p>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
                  Every detail.{' '}
                  <span className="relative inline-block text-[#09BAF4]">
                    Every interaction.
                    <StyledUnderline color="#09BAF4" variant="curve" />
                  </span>{' '}
                  <br className="hidden sm:block" />
                  Every moment.
                </h1>
              </div>
              <p className="text-base sm:text-xl text-[#09BAF4] font-bold italic">
                Where artistry meets elegance. Where every detail becomes a masterpiece.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Behind every extraordinary Zendel Creatives experience is a carefully selected
                team of exceptional individuals — the planners, beauty specialists, designers,
                storytellers, hospitality professionals, and guest-experience specialists who
                bring every celebration to life.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                <Button href="#the-artisans" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Meet the Artisans
                </Button>
                <button
                  onClick={() => setRegisterModalOpen(true)}
                  className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-black text-sm border border-white/20 backdrop-blur-md transition-all shadow-lg flex items-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-[#09BAF4]" />
                  <span>Register as an Artisan</span>
                </button>
              </div>
            </div>

            {/* Image mosaic (Real gallery photos) */}
            <div className="lg:col-span-5 relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl overflow-hidden border border-white/10 h-48 sm:h-56">
                  <img
                    src="/gallery/IMG-20260602-WA0009.jpg"
                    alt="Zendel Flagship Event"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 h-48 sm:h-56 mt-6">
                  <img
                    src="/gallery/IMG-20260602-WA0014.jpg"
                    alt="Zendel Creative Direction"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 h-36 sm:h-44">
                  <img
                    src="/collective-photographer.jpg"
                    alt="Cinematic Visuals"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 h-36 sm:h-44 -mt-6">
                  <img
                    src="/collective-makeup.jpg"
                    alt="Beauty & Presentation"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-slate-800 text-white rounded-2xl shadow-2xl px-5 py-3 border border-white/10 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-[#ff6900]/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#ff6900]" />
                </div>
                <div>
                  <p className="text-xs font-black">Exclusive Collective</p>
                  <p className="text-[10px] text-slate-400">Premier Artisans Only</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── MEET THE INDIVIDUALS (DYNAMIC ARTISANS PROFILES) ──────────────────── */}
      <section id="the-artisans" className="py-24 bg-slate-50 border-b border-gray-200">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-black uppercase text-[#6747ee] tracking-widest px-4 py-1.5 rounded-full bg-[#6747ee]/10 border border-[#6747ee]/20 inline-block">
                MEET THE INDIVIDUALS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight">
                The Artisans Behind the{' '}
                <span className="relative inline-block text-[#00A2C9]">
                  Experience
                  <StyledUnderline color="#00A2C9" variant="curve" />
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Every profile within The Zendel Creatives Team represents a distinctive talent, perspective, and verified contribution to the collective.
              </p>
            </div>

            {/* Top of Section Actions: ENQUIRE HERE & Register */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleOpenModal('Zendel Verified Artisans Roster', 'Customized Creative Collective')}
                className="px-7 py-4 rounded-2xl bg-[#ff6900] hover:bg-[#e05d00] text-white font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Enquire Here</span>
              </button>

              <button
                onClick={() => setRegisterModalOpen(true)}
                className="px-5 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-[#09BAF4]" />
                <span>Register as Artisan</span>
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 mb-12">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-black transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#00A2C9] text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Full Artisan Profiles Showcase (Clean Numbered Image-Free Cards with Portfolio and No Connect Button) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loadingArtisans ? (
              <div className="col-span-3 p-16 text-center text-gray-400 font-bold">Loading artisan profiles...</div>
            ) : filteredArtisans.length === 0 ? (
              <div className="col-span-3 p-16 text-center text-gray-500 bg-white rounded-3xl border border-gray-200 italic">
                No verified artisans found in this category yet.
              </div>
            ) : (
              filteredArtisans.map((artisan, index) => {
                const numStr = String(index + 1).padStart(2, '0');
                return (
                  <div
                    key={artisan.id || index}
                    className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
                  >
                    <div className="space-y-4">
                      {/* Top Bar: Numeral, Pillar & Verified Badge */}
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-3xl font-black text-slate-200 group-hover:text-[#00A2C9]/40 transition-colors">
                          {numStr}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                            {artisan.category}
                          </span>
                          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-black uppercase tracking-wider">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                            <span>VERIFIED</span>
                          </span>
                        </div>
                      </div>

                      {/* Name & Title */}
                      <div>
                        <h3 className="text-xl font-black text-gray-950 group-hover:text-[#00A2C9] transition-colors leading-snug">
                          {artisan.name}
                        </h3>
                        <p className="text-xs font-bold text-[#00A2C9] mt-1">
                          {artisan.title}
                        </p>
                      </div>

                      {/* Location */}
                      <div className="flex items-center space-x-1.5 text-xs text-gray-500 font-semibold pt-2 border-t border-slate-100">
                        <MapPin className="w-3.5 h-3.5 text-[#ff6900] shrink-0" />
                        <span>{artisan.city}, {artisan.country}</span>
                      </div>
                    </div>

                    {/* Card Footer: Portfolio Link Only (No Connect Button) */}
                    <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      {artisan.portfolio ? (
                        <a
                          href={artisan.portfolio}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center space-x-1.5 text-xs font-black text-[#00A2C9] hover:underline underline-offset-4"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>*Portfolio* (View Showcase)</span>
                        </a>
                      ) : (
                        <span className="text-[11px] font-bold text-gray-400">Portfolio via Zendel Collective</span>
                      )}

                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                        Zendel Verified Roster
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Join Directory CTA Banner */}
          <div className="mt-16 bg-white rounded-3xl border border-gray-200 shadow-md p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-[#6747ee]/10 text-[#6747ee] flex items-center justify-center mx-auto shadow-inner">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-950">
              Are you an Exceptional Creative Artisan?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We are constantly welcoming elite event planners, makeup artists, photographers, mixologists, and hospitality talent into the Zendel collective. Register your profile to be verified by our executive directorate.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setRegisterModalOpen(true)}
                className="px-6 py-3.5 rounded-2xl bg-[#6747ee] hover:bg-[#5839db] text-white font-black text-sm shadow-md transition-all inline-flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Register as an Artisan</span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── TEAM DEPARTMENTS (5 PILLARS) ──────────────────────── */}
      <section id="the-team" className="py-24 bg-white border-b border-gray-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-black uppercase text-[#ff6900] tracking-widest px-4 py-1.5 rounded-full bg-[#ff6900]/10 border border-[#ff6900]/20 inline-block">
              5 Pillars of Excellence
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight">
              The Zendel Creatives Team
            </h2>
            <p className="text-sm sm:text-base text-gray-500 italic">
              Five pillars of excellence. One extraordinary collective.
            </p>
          </div>

          <div className="space-y-8">
            {teamDepartments.map((dept, i) => {
              const DeptIcon = dept.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={dept.id}
                  className="group rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Image */}
                    <div
                      className={`lg:col-span-4 relative h-64 lg:h-auto overflow-hidden bg-slate-900 ${
                        !isEven ? 'lg:order-2' : ''
                      }`}
                    >
                      <img
                        src={dept.image}
                        alt={dept.category}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-5 left-5">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white border-2 ${dept.accentBorder} shadow-lg`}
                        >
                          <DeptIcon className={`w-6 h-6 ${dept.accentText}`} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`lg:col-span-8 p-8 sm:p-10 flex flex-col justify-center space-y-5 ${
                        !isEven ? 'lg:order-1' : ''
                      }`}
                    >
                      <div>
                        <span className={`text-xs uppercase tracking-widest font-black ${dept.accentText} block mb-2`}>
                          {dept.disciplines}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black text-gray-950">
                          {dept.category}
                        </h3>
                        <p className={`text-base font-bold italic ${dept.accentText} mt-1`}>
                          {dept.tagline}
                        </p>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                        {dept.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── THE COLLECTIVE (12 DISCIPLINES) ──────── */}
      <section className="py-24 bg-slate-50 border-b border-gray-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-black uppercase text-[#00A2C9] tracking-widest px-4 py-1.5 rounded-full bg-[#00A2C9]/10 border border-[#00A2C9]/20 inline-block">
              The Collective
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight">
              A Network of Premier Creative Excellence
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
              Zendel Creatives brings together a carefully selected community of exceptional
              artisans and specialists, each contributing their expertise to create seamless,
              immersive, and unforgettable luxury experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collectiveCategories.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white text-[#00A2C9] flex items-center justify-center shadow-lg">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <h3 className="text-base font-black text-gray-950 group-hover:text-[#00A2C9] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── JOIN THE COLLECTIVE ───────────────────── */}
      <section className="py-24 bg-slate-950 text-white border-b border-white/10 relative overflow-hidden">
        <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#00A2C9]/20 border border-[#00A2C9]/40 text-[#09BAF4] text-xs font-black uppercase tracking-widest">
            <HeartHandshake className="w-4 h-4" />
            <span>For Our Artisans</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Join an Exclusive <span className="text-[#09BAF4]">Creative Community</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Zendel Creatives is built for exceptional talent that values quality,
            professionalism, creativity, and innovation. By becoming part of our collective,
            you gain the opportunity to collaborate with like-minded creatives, participate in
            premium events, expand your professional network, and contribute to experiences
            that represent the highest standards of luxury.
          </p>

          <p className="text-xl font-black text-[#09BAF4] italic">
            You are not simply providing a service.{' '}
            <span className="text-white">You are helping shape a movement.</span>
          </p>

          {/* 3 pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left mt-4">
            {[
              {
                icon: Star,
                title: 'Premium Exposure',
                desc: 'Collaborate on luxury events seen by influential audiences.',
              },
              {
                icon: Users,
                title: 'A Creative Network',
                desc: "Connect with London's finest artisans and industry leaders.",
              },
              {
                icon: Award,
                title: 'Recognised Excellence',
                desc: 'Your talent showcased and celebrated by Zendel Creatives.',
              },
            ].map((p, i) => {
              const PIcon = p.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-slate-900 border border-white/10 p-6 space-y-3 hover:border-[#00A2C9] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00A2C9]/20 flex items-center justify-center">
                    <PIcon className="w-5 h-5 text-[#09BAF4]" />
                  </div>
                  <p className="text-base font-black text-white">{p.title}</p>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">{p.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="pt-4">
            <button
              onClick={() => setRegisterModalOpen(true)}
              className="px-8 py-4 rounded-2xl bg-[#00A2C9] hover:bg-[#008ba8] text-white font-black text-sm uppercase tracking-wider shadow-xl transition-all inline-flex items-center space-x-2"
            >
              <span>JOIN THE COLLECTIVE →</span>
            </button>
          </div>
        </Container>
      </section>

      {/* Client Hire Enquiry Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Book / Hire Artisan"
      >
        <ArtisanEnquiryForm
          artisanName={selectedArtisan.name}
          artisanRole={selectedArtisan.role}
          onSuccess={() => setModalOpen(false)}
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
    </>
  );
};
