import React from 'react';
import { Metadata } from 'next';
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
  CheckCircle,
  ArrowRight,
  HeartHandshake,
  Award,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Zendel Creatives — A Collective of Extraordinary Event Artisans',
  description:
    'Zendel Creatives is an exclusive collective of premier event artisans across luxury event planning, beauty, photography, mixology, couture fashion, and guest care.',
};

const collectiveCategories = [
  {
    title: 'Event Planning & Creative Direction',
    description: 'Visionary planners and creative directors who transform concepts into flawlessly executed experiences.',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Makeup Artistry',
    description: 'Elite beauty professionals creating refined, timeless looks tailored to each individual and occasion.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Photography & Videography',
    description: 'Visual storytellers capturing the emotion, atmosphere, and unforgettable details of every celebration.',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Hairstyling & Beauty Design',
    description: 'Creative specialists delivering elegant and sophisticated styling that completes every vision.',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Couture Fashion & Styling',
    description: 'Designers and stylists creating bespoke looks that reflect individuality, elegance, and luxury.',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Bespoke Décor & Event Design',
    description: 'Creative designers transforming venues into immersive environments where every detail reflects the occasion’s unique story.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Luxury Catering & Culinary Experiences',
    description: 'Exceptional culinary artisans delivering memorable dining experiences through exquisite presentation and service.',
    icon: Utensils,
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Cocktail Mixology & Beverage Experiences',
    description: 'Expert mixologists creating bespoke cocktail experiences, signature drinks, and elevated beverage concepts designed to enhance atmosphere.',
    icon: Wine,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Entertainment & Event Experiences',
    description: 'Hosts, DJs, performers, and experience creators who bring energy, emotion, and unforgettable moments to every celebration.',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Event Ushers & Guest Experience Specialists',
    description: 'Professional hospitality teams ensuring guests receive a warm, seamless, and refined experience from arrival to departure.',
    icon: Users,
    image: 'https://zendelserviceslimited.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-02-at-21.11.36.jpeg',
  },
  {
    title: 'Event Security & Safety Personnel',
    description: 'Highly trained security professionals providing discreet protection, guest safety, and peace of mind while maintaining elegance.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Media & Brand Presence',
    description: 'Creative media professionals capturing, promoting, and amplifying exceptional moments through strategic storytelling and visual content.',
    icon: Megaphone,
    image: 'https://zendelserviceslimited.com/wp-content/uploads/2026/06/TP-015-scaled.jpg',
  },
];

const teamStructure = [
  {
    category: 'Creative Vision',
    disciplines: 'Event Planning & Creative Direction',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    color: 'border-[#00A2C9] text-[#00A2C9] bg-[#00A2C9]/10',
  },
  {
    category: 'Beauty & Presentation',
    disciplines: 'Makeup Artistry, Hairstyling, Couture, Fashion, Styling, Bespoke Décor',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    color: 'border-[#6747ee] text-[#6747ee] bg-[#6747ee]/10',
  },
  {
    category: 'Memories & Storytelling',
    disciplines: 'Photography, Videography, Media & Brand Presence',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
    color: 'border-[#ff6900] text-[#ff6900] bg-[#ff6900]/10',
  },
  {
    category: 'Hospitality & Atmosphere',
    disciplines: 'Luxury Catering, Cocktail Mixology, Entertainment, Hosting & MCs',
    icon: Wine,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    color: 'border-emerald-600 text-emerald-600 bg-emerald-500/10',
  },
  {
    category: 'Guest Care & Protection',
    disciplines: 'Event Ushers, Concierge, Event Security & Safety',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
    color: 'border-sky-600 text-sky-600 bg-sky-500/10',
  },
];

const philosophyPillars = [
  'Creativity is intentional',
  'Quality is uncompromising',
  'Execution is flawless',
  'Every detail has purpose',
  'Every experience tells a story',
];

export default function MediaCreativesPage() {
  return (
    <>
      {/* Hero Section with Showcase Imagery */}
      <section className="relative bg-gradient-to-r from-sky-50 via-cyan-50/60 to-indigo-50 py-16 sm:py-24 text-gray-900 border-b border-gray-200 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20 inline-block">
                ZENDEL CREATIVES
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-tight">
                A Collective of Extraordinary Event Artisans
              </h1>
              <p className="text-base sm:text-xl text-[#00A2C9] font-bold italic">
                Where artistry meets elegance. Where every detail becomes a masterpiece.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                Zendel Creatives is an exclusive collective of premier event artisans, bringing together visionary talent across luxury event planning, makeup artistry, photography, videography, couture fashion, cocktails mixology, bespoke décor, catering, entertainment, media, and beyond.
              </p>
              <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#00A2C9]/20 shadow-sm inline-block">
                <span className="text-sm sm:text-base font-bold text-gray-900">
                  Welcome to a world where every detail is designed with intention.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group bg-white p-2">
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80"
                  alt="Zendel Creatives Luxury Celebration Showcase"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-white border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 group">
                <img
                  src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=80"
                  alt="Luxury Event Vision & Atmosphere"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="text-xs uppercase font-extrabold text-[#6747ee] tracking-widest px-3.5 py-1 rounded-full bg-[#6747ee]/10 border border-[#6747ee]/20 inline-block">
                Our Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                Creating Moments Beyond Imagination
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                At Zendel Creatives, we believe luxury is not defined by excess—it is defined by excellence, emotion, and meticulous attention to detail.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our collective unites exceptional creatives who share one purpose: to craft immersive experiences that reflect elegance, individuality, and unforgettable style. From intimate celebrations to grand occasions, every project is approached as a work of art—carefully designed, flawlessly executed, and beautifully remembered.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* The Collective (12 Disciplines with Imagery) */}
      <section className="py-20 bg-slate-50 border-b border-gray-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase text-[#00A2C9] tracking-widest">
              The Collective
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              A Network of Premier Creative Excellence
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Zendel Creatives brings together a carefully selected community of exceptional artisans and specialists, each contributing their expertise to create seamless, immersive, and unforgettable luxury experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collectiveCategories.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 text-[#00A2C9] flex items-center justify-center shadow-lg backdrop-blur-md">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00A2C9] transition-colors leading-snug">
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

      {/* Dedicated Section: The Zendel Creatives Team */}
      <section className="py-20 bg-white border-b border-gray-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold text-[#ff6900] tracking-widest px-3.5 py-1 rounded-full bg-[#ff6900]/10 border border-[#ff6900]/20">
              Directory & Roster
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              The Zendel Creatives Team
            </h2>
            <p className="text-sm sm:text-base text-gray-500 italic">
              Every detail. Every interaction. Every moment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamStructure.map((dept, i) => {
              const DeptIcon = dept.icon;
              return (
                <div
                  key={i}
                  className="rounded-3xl bg-slate-50 border border-gray-200 shadow-lg overflow-hidden flex flex-col group hover:border-[#00A2C9] transition-all"
                >
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={dept.image}
                      alt={dept.category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                      <div className="flex items-center space-x-3 text-white">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${dept.color}`}>
                          <DeptIcon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-black text-white">{dept.category}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider font-bold text-gray-500 block mb-1">
                        Disciplines Covered:
                      </span>
                      <p className="text-sm font-semibold text-gray-800 leading-snug">
                        → {dept.disciplines}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-gray-200 text-xs text-gray-500 italic">
                      Individual artisan profiles showcased upon selection.
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* For Our Artisans (Join Us) */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white relative overflow-hidden">
        {/* Background Visual Texture */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80"
            alt="Event Atmosphere Background"
            className="w-full h-full object-cover"
          />
        </div>

        <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#00A2C9]/20 border border-[#00A2C9]/40 text-[#09BAF4] text-xs font-bold uppercase tracking-widest">
            <HeartHandshake className="w-4 h-4" />
            <span>For Our Artisans</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Join an Exclusive Creative Community
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Zendel Creatives is built for exceptional talent that values quality, professionalism, and innovation. By becoming part of our collective, you gain the opportunity to collaborate with like-minded creatives, participate in premium events, and contribute to experiences that represent the highest standards of luxury.
          </p>

          <p className="text-lg font-bold text-[#09BAF4] italic">
            You are not simply providing a service—you are helping shape a movement.
          </p>

          <div className="pt-4">
            <Button
              href="/contact?subject=Join+The+Collective"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Click here to JOIN US
            </Button>
          </div>
        </Container>
      </section>

      {/* Our Philosophy & Promise */}
      <section className="py-20 bg-white border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Philosophy */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#6747ee]/10 text-[#6747ee] text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Our Philosophy</span>
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Excellence Through Collaboration
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                At Zendel Creatives, collaboration is more than a partnership—it is a shared commitment to perfection. Every artisan within our collective represents a standard of excellence where:
              </p>
              <div className="space-y-3 pt-2">
                {philosophyPillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm font-bold text-gray-800">
                    <CheckCircle className="w-5 h-5 text-[#00A2C9] flex-shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-700 italic pt-2">
                Together, we create celebrations that are not only seen, but felt.
              </p>
            </div>

            {/* Promise */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200 shadow-xl space-y-6">
              <span className="text-xs uppercase font-extrabold text-[#00A2C9] tracking-widest block">
                Our Promise
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                Transforming Moments Into Timeless Memories
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Every celebration carries a story. Our role is to bring that story to life through creativity, craftsmanship, and unforgettable execution. Together, we create extraordinary experiences where elegance meets imagination.
              </p>
              <div className="p-6 rounded-2xl bg-white border border-[#00A2C9]/30 space-y-2">
                <span className="text-base font-black text-gray-900 block">Zendel Creatives</span>
                <p className="text-sm font-bold text-[#00A2C9] italic">
                  Curating luxury. Celebrating artistry. Creating timeless moments.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
