import React from 'react';
import { Award, Music, Gamepad2, Heart, Sparkles } from 'lucide-react';
import { founderData } from '@/lib/data/founder';
import { Container } from '../layout/Container';

export const FounderSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#f8fafc] text-gray-900 border-t border-gray-200 relative overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold px-3.5 py-1 rounded-full bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20">
            Leadership & Vision
          </span>
          <h2 className="text-3xl sm:text-5xl font-black mt-4 tracking-tight text-gray-900">
            Meet Our Founder
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Founder Image Column */}
          <div className="lg:col-span-5 relative mx-auto max-w-sm lg:max-w-none">
            <div className="relative rounded-3xl overflow-hidden p-3 bg-gradient-to-b from-[#00A2C9] to-[#6747ee] shadow-xl">
              <div className="rounded-2xl overflow-hidden bg-white">
                <img
                  src={founderData.image}
                  alt={founderData.name}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Float Credentials Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-4 bg-white border border-gray-200 p-4 rounded-2xl shadow-xl flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#00A2C9]/10 text-[#00A2C9] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-900">BA (Hons) & MBA</span>
                <span className="text-[10px] text-gray-500 font-medium">Management & Consulting</span>
              </div>
            </div>
          </div>

          {/* Founder Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900">{founderData.name}</h3>
              <p className="text-sm font-bold text-[#00A2C9]">{founderData.title}</p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              {founderData.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Credentials Badges */}
            <div className="pt-2">
              <span className="text-xs uppercase font-bold text-gray-500 block mb-3">
                Key Credentials & Background:
              </span>
              <div className="flex flex-wrap gap-2">
                {founderData.credentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-xs font-bold text-gray-800 flex items-center shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#00A2C9] mr-2" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Hobbies Box */}
            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#6747ee]">
                <Heart className="w-4 h-4 fill-current text-pink-500" />
                <span>Beyond Business:</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                {founderData.hobbies}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
