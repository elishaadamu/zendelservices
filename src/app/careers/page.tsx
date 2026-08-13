'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Star,
  MapPin,
  Clock,
  Wine,
  IdCard,
  Mic,
  ClipboardCheck,
  CheckCircle2,
  Check,
  ArrowRight,
  Sparkles,
  Award,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

type RoleId = 'usher' | 'host' | 'coordinator';

interface JobRole {
  id: RoleId;
  title: string;
  tabLabel: string;
  icon: React.ElementType;
  overview: string;
  image: string;
  responsibilities: string[];
  requirements: string[];
}

const jobRoles: JobRole[] = [
  {
    id: 'usher',
    title: 'Event Usher',
    tabLabel: 'Event Usher',
    icon: IdCard,
    overview:
      'As an Event Usher at Zendel Events, you will be the first point of contact for guests, ensuring a smooth, organised, and welcoming experience at events.',
    image: 'https://zendelserviceslimited.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-25-at-14.36.45-1.jpeg',
    responsibilities: [
      'Welcome and direct guests professionally',
      'Manage seating arrangements',
      'Assist with registration and check-in',
      'Provide information and answer guest queries',
      'Maintain organisation and flow of the event',
    ],
    requirements: [
      'Strong communication skills',
      'Friendly and approachable attitude',
      'Punctual and reliable',
      'Well-presented (smart/formal dress)',
      'Ability to work in a fast-paced environment',
    ],
  },
  {
    id: 'host',
    title: 'Event Host',
    tabLabel: 'Event Host',
    icon: Mic,
    overview:
      'As an Event Host, you will engage with guests, manage event flow, and ensure a high-quality experience throughout the event.',
    image: 'https://zendelserviceslimited.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-25-at-14.36.45-6.jpeg',
    responsibilities: [
      'Welcome and engage guests',
      'Make announcements when required',
      'Support event flow and transitions',
      'Represent the brand professionally',
      'Handle guest concerns confidently',
    ],
    requirements: [
      'Confident and outgoing personality',
      'Excellent communication and presentation skills',
      'Previous hospitality or hosting experience (preferred)',
      'Professional appearance and attitude',
      'Ability to think on your feet',
    ],
  },
  {
    id: 'coordinator',
    title: 'Event Coordinator',
    tabLabel: 'Event Coordinator',
    icon: ClipboardCheck,
    overview:
      'Event Coordinators oversee the smooth execution of events, ensuring everything runs according to plan.',
    image: 'https://zendelserviceslimited.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-25-at-14.36.45-8.jpeg',
    responsibilities: [
      'Manage event timelines and schedules',
      'Coordinate with vendors and staff',
      'Supervise ushers and hosts',
      'Handle on-the-day problem solving',
      'Ensure client satisfaction',
    ],
    requirements: [
      'Strong organisational and leadership skills',
      'Ability to manage multiple tasks under pressure',
      'Experience in event planning or coordination (preferred)',
      'Excellent communication and problem-solving skills',
      'Professional and proactive approach',
    ],
  },
];

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState<RoleId>('usher');

  const activeRole = jobRoles.find((role) => role.id === activeTab)!;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[420px] h-[55vh] flex items-center justify-center text-center bg-slate-950 text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://zendelserviceslimited.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-25-at-14.36.45-8.jpeg"
            alt="Zendel Careers Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#b92f8d]/20 blur-[130px] rounded-full pointer-events-none" />
        </div>

        <Container className="relative z-10 py-12 max-w-4xl mx-auto space-y-5">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-md">
            Zendel Events
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Join our elite team and deliver unforgettable experiences. We are looking for passionate individuals for our upcoming premium events.
          </p>

          <div className="flex items-center justify-center space-x-1 text-[#d844a9] pt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
        </Container>
      </section>

      {/* Main Body Container */}
      <section className="py-20 bg-slate-50 border-b border-gray-200">
        <Container className="-mt-24 relative z-20">
          {/* General Info Banner */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-6 sm:p-10 mb-16 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center justify-around">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <strong className="block text-gray-900 font-extrabold text-base">Location</strong>
                <span className="text-sm text-gray-600 font-medium">London</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <strong className="block text-gray-900 font-extrabold text-base">Commitment</strong>
                <span className="text-sm text-gray-600 font-medium">Flexible, part-time roles</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                <Wine className="w-6 h-6" />
              </div>
              <div>
                <strong className="block text-gray-900 font-extrabold text-base">Event Types</strong>
                <span className="text-sm text-gray-600 font-medium">Weddings, Corporate, Private</span>
              </div>
            </div>
          </div>

          {/* Role Tabs Header */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            {jobRoles.map((role) => {
              const IconComp = role.icon;
              const isActive = activeTab === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveTab(role.id)}
                  className={`px-8 py-4 rounded-full text-base font-extrabold tracking-wide transition-all duration-300 flex items-center space-x-3 cursor-pointer ${
                    isActive
                      ? 'bg-[#00A2C9] text-white shadow-xl scale-105 border-0'
                      : 'bg-white text-gray-700 hover:bg-slate-100 border border-gray-200 shadow-sm'
                  }`}
                >
                  <IconComp className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#00A2C9]'}`} />
                  <span>{role.tabLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-8 sm:p-14 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Role Details */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                    {activeRole.title}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 mt-3 leading-relaxed">
                    {activeRole.overview}
                  </p>
                </div>

                <div className="space-y-8 pt-2">
                  {/* Responsibilities */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-gray-900 flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-[#00A2C9]" />
                      <span>Key Responsibilities</span>
                    </h3>
                    <ul className="space-y-3">
                      {activeRole.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start space-x-3 text-sm text-gray-700 font-medium leading-relaxed">
                          <span className="w-2 h-2 rounded-full bg-[#00A2C9] mt-2 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-gray-900 flex items-center space-x-2">
                      <Award className="w-5 h-5 text-[#b92f8d]" />
                      <span>Requirements</span>
                    </h3>
                    <ul className="space-y-3">
                      {activeRole.requirements.map((req, reqIdx) => (
                        <li key={reqIdx} className="flex items-start space-x-3 text-sm text-gray-700 font-medium leading-relaxed">
                          <Check className="w-4 h-4 text-[#b92f8d] mt-1 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Role Image */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group h-[450px] bg-slate-900">
                  <img
                    src={activeRole.image}
                    alt={activeRole.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center bg-white border border-gray-200 rounded-3xl p-10 sm:p-16 shadow-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Ready to Join Our Team?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Apply now to secure your position and start creating unforgettable events with us.
            </p>
            <div className="pt-2">
              <Button
                href="/contact?subject=Career+Application"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                className="bg-gradient-to-r from-[#b92f8d] to-[#d844a9] hover:from-[#a0287a] hover:to-[#c53e98] text-white border-0 shadow-xl py-4 px-10 text-base"
              >
                Apply Here
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
