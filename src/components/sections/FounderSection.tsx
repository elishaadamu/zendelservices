import React from 'react';
import { Award, Heart, Sparkles, CheckCircle2, Music, GraduationCap } from 'lucide-react';
import { founderData } from '@/lib/data/founder';
import { Container } from '../layout/Container';
import { StyledUnderline } from '../ui/StyledUnderline';

export const FounderSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#f8fafc] text-gray-900 border-t border-gray-200 relative overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#00A2C9_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Heading with Creative Font Sizing & Styled Underline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-black px-4 py-1.5 rounded-full bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20 inline-block">
            Leadership &amp; Creative Vision
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-950 leading-tight">
            Meet Our{' '}
            <span className="relative inline-block text-[#00A2C9]">
              Founder
              <StyledUnderline color="#00A2C9" variant="curve" />
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Founder Portrait Column */}
          <div className="lg:col-span-5 relative mx-auto max-w-md lg:max-w-none w-full">
            {/* Clean Luxury Editorial Frame without synthetic gradients */}
            <div className="relative rounded-3xl bg-white p-3.5 border border-slate-200/90 shadow-2xl">
              <div className="rounded-2xl overflow-hidden bg-slate-100 relative group aspect-[4/5] sm:aspect-[4/4.8]">
                <img
                  src={founderData.image}
                  alt={founderData.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Top Corner Pill Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900/90 text-white backdrop-blur-sm shadow-md flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#09BAF4]" />
                    <span>Founder &amp; Creative Director</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Credential Card */}
            <div className="absolute -bottom-6 right-2 sm:right-6 bg-white border border-slate-200/90 p-4 sm:p-5 rounded-2xl shadow-xl flex items-center space-x-3.5 z-20">
              <div className="w-11 h-11 rounded-xl bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-sm font-black text-gray-950">BA (Hons) &amp; MBA</span>
                <span className="text-[11px] text-gray-500 font-semibold">Management &amp; Consulting</span>
              </div>
            </div>
          </div>

          {/* Founder Biography Column */}
          <div className="lg:col-span-7 space-y-7">
            {/* Name & Title */}
            <div>
              <div className="flex items-center space-x-3 mb-1">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
                  {founderData.name}
                </h3>
              </div>
              <p className="text-sm sm:text-base font-extrabold text-[#00A2C9] uppercase tracking-wider">
                Creator &amp; Lead Director of Zendel Services Limited
              </p>
            </div>

            {/* Editorial Biography Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 border-l-4 border-l-[#00A2C9] shadow-sm">
                <p className="italic text-gray-800 font-medium text-sm sm:text-base">
                  &ldquo;{founderData.bio[0]}&rdquo;
                </p>
              </div>

              <p>{founderData.bio[1]}</p>
              <p>{founderData.bio[2]}</p>
            </div>

            {/* Credentials Badges */}
            <div className="pt-2">
              <span className="text-xs uppercase font-black text-gray-500 tracking-wider block mb-3">
                Key Credentials &amp; Background:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {founderData.credentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 text-xs font-bold text-gray-800 flex items-center shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00A2C9] mr-2.5 flex-shrink-0" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Beyond Business Box */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-wider text-[#6747ee]">
                <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                <span>Beyond Business:</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                {founderData.hobbies}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
