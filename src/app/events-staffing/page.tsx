import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Star,
  Building,
  Users,
  Handshake,
  Music,
  Wine,
  Heart,
  Calendar,
  Cake,
  CheckCircle,
  ArrowRight,
  Sparkles,
  DollarSign,
  ShieldCheck,
  Award,
  HeartHandshake,
  Check,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { EnquiryForm } from '@/components/forms/EnquiryForm';

export const metadata: Metadata = {
  title: 'Events Staffing Solutions — Zendel Services Limited',
  description:
    'Your one-stop shop for all event staffing solutions. Professional, well-trained Ushers, Hosts, and Coordinators to run your entire event smoothly.',
};

const eventBadges = [
  { label: 'Corporate Events', icon: Building },
  { label: 'Conferences', icon: Users },
  { label: 'Meetings', icon: Handshake },
  { label: 'Concerts & Shows', icon: Music },
  { label: 'Private Events', icon: Wine },
  { label: 'Weddings', icon: Heart },
  { label: 'Funeral Receptions', icon: Calendar },
  { label: 'Birthday Parties', icon: Cake },
];

const serviceCards = [
  {
    title: 'Ushers',
    image: 'https://zendelserviceslimited.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-25-at-14.36.45-1.jpeg',
    bullets: [
      'Guest reception & seating',
      'Registration support',
      'Crowd control',
      'Welcoming guests',
      'Support with drinks servicing and event catering.',
    ],
    accentColor: 'border-[#00A2C9] text-[#00A2C9] bg-[#00A2C9]/10',
    badge: 'Guest Relations',
  },
  {
    title: 'Event Hosts',
    image: 'https://zendelserviceslimited.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-25-at-14.36.45-2.jpeg',
    bullets: [
      'Managing event flow',
      'Announcements & guest engagement',
    ],
    accentColor: 'border-[#b92f8d] text-[#b92f8d] bg-[#b92f8d]/10',
    badge: 'Flow & Atmosphere',
  },
  {
    title: 'Event Coordinators',
    image: 'https://zendelserviceslimited.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-25-at-14.36.45-7.jpeg',
    bullets: [
      'Oversee event logistics',
      'Liaise with vendors',
      'Manage timelines & troubleshoot issues',
    ],
    accentColor: 'border-[#6747ee] text-[#6747ee] bg-[#6747ee]/10',
    badge: 'Operations & Logistics',
  },
];

export default function EventsStaffingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[480px] h-[55vh] flex items-center justify-center text-center bg-slate-950 text-white overflow-hidden border-b border-white/10">
        {/* Background Image & Ambient Glow Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://zendelserviceslimited.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-25-at-14.36.45-8.jpeg"
            alt="Zendel Events Staffing Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00A2C9]/20 blur-[130px] rounded-full pointer-events-none" />
        </div>

        <Container className="relative z-10 py-12 max-w-4xl mx-auto space-y-6">
          {/* Star Rating Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
            <div className="flex items-center space-x-1 text-[#09BAF4]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-white">
              5-Star Rated Staffing
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Events Staffing Solutions
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Your one-stop shop for all event staffing solutions. Our staff are a well-trained, professional, and well-presented team ready to elevate your event.
          </p>
        </Container>
      </section>

      {/* Main Body Container */}
      <section className="py-20 bg-slate-50 border-b border-gray-200">
        <Container className="-mt-24 relative z-20">
          {/* Intro Card */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-8 sm:p-14 text-center max-w-5xl mx-auto space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#00A2C9] via-[#6747ee] to-[#b92f8d]" />

            <div className="space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#00A2C9] px-3.5 py-1 rounded-full bg-[#00A2C9]/10 border border-[#00A2C9]/20 inline-block">
                Zendel Executive Staffing
              </span>
              <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed font-bold">
                We don't just provide <span className="text-[#00A2C9]">Ushers</span>—we provide <span className="text-[#b92f8d]">Hosts & Coordinators</span> to run your entire event smoothly from start to finish.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We provide staffing for corporate events, conferences, meetings, concerts, and shows, as well as private events including weddings, funeral receptions, and birthday parties.
              </p>
            </div>

            {/* Event Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {eventBadges.map((badge, idx) => {
                const IconComp = badge.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center space-x-2.5 px-5 py-2.5 rounded-full bg-slate-100/90 border border-gray-200 text-gray-800 text-xs sm:text-sm font-bold hover:bg-[#00A2C9] hover:text-white hover:border-[#00A2C9] shadow-sm hover:scale-105 transition-all duration-300 cursor-default group"
                  >
                    <IconComp className="w-4 h-4 text-[#00A2C9] group-hover:text-white transition-colors" />
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Services Section Header */}
          <div className="mt-28 text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase font-extrabold text-[#6747ee] tracking-widest px-3.5 py-1 rounded-full bg-[#6747ee]/10 border border-[#6747ee]/20 inline-block">
              Services Offered
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
              We Provide Specialized Event Personnel
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We provide specialized event personnel dedicated to making your event a remarkable success.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {serviceCards.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:border-[#00A2C9] transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-white/95 text-gray-900 shadow-md backdrop-blur-md">
                      {service.badge}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-gray-900 group-hover:text-[#00A2C9] transition-colors">
                      {service.title}
                    </h3>

                    <ul className="space-y-3">
                      {service.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start space-x-3 text-sm text-gray-700 leading-relaxed font-medium">
                          <CheckCircle className="w-5 h-5 text-[#00A2C9] flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Banner */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-xl mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="flex items-center space-x-6 pr-4 pb-6 md:pb-0">
              <div className="w-16 h-16 rounded-2xl bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-extrabold text-gray-900">Client-Focused Service</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Reliable and tailored to your specific event needs.</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 md:pl-8 pt-6 md:pt-0">
              <div className="w-16 h-16 rounded-2xl bg-[#b92f8d]/10 text-[#b92f8d] border border-[#b92f8d]/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                <DollarSign className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-extrabold text-gray-900">Flexible Packages</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Designed to provide high quality within your budget.</p>
              </div>
            </div>
          </div>

          {/* Call to Action Banner */}
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-10 sm:p-16 text-center overflow-hidden shadow-2xl space-y-6 border border-white/10">
            <div className="absolute inset-0 z-0 opacity-20">
              <img
                src="https://zendelserviceslimited.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-25-at-14.36.45-6.jpeg"
                alt="Extraordinary Event"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#b92f8d]/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#00A2C9]/20 text-[#09BAF4] border border-[#00A2C9]/40 inline-block">
                Start Planning Today
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Let's Make Your Event Extraordinary
              </h2>
              <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
                Ready to secure the best team for your upcoming event? Get in touch with us today for a personalized staffing solution.
              </p>
              <div className="pt-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="bg-gradient-to-r from-[#b92f8d] to-[#d844a9] hover:from-[#a0287a] hover:to-[#c53e98] text-white border-0 shadow-2xl text-base py-4 px-8"
                >
                  TO BOOK OR MAKE ENQUIRIES CLICK HERE
                </Button>
              </div>
            </div>
          </div>

          {/* Booking Form Section */}
          <div className="mt-24 max-w-4xl mx-auto">
            <EnquiryForm darkTheme={false} />
          </div>
        </Container>
      </section>
    </>
  );
}
