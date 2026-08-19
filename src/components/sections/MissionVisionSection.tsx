import React from 'react';
import { Compass, Eye, Target } from 'lucide-react';
import { companyData } from '@/lib/data/company';
import { Container } from '../layout/Container';
import { StyledUnderline } from '../ui/StyledUnderline';

export const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 text-gray-900 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A2C9]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6747ee]/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold px-3.5 py-1 rounded-full bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20">
            Welcome to Zendel Services Limited
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-4 tracking-tight text-gray-900 leading-[1.2]">
            Guided By{' '}
            <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950">Excellence</span> &amp;{' '}
            <span className="relative inline-block text-[#6747ee] font-black text-4xl sm:text-5xl lg:text-6xl">
              Passion
              <StyledUnderline color="#6747ee" variant="double" />
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-xl relative group hover:border-[#00A2C9] transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00A2C9] to-[#09BAF4] text-white flex items-center justify-center mb-6 shadow-lg">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-base text-gray-600 leading-relaxed font-normal">
              "{companyData.mission}"
            </p>
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center text-xs font-bold text-[#00A2C9]">
              <Compass className="w-4 h-4 mr-2" />
              <span>Global Event & Management Standard</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-xl relative group hover:border-[#6747ee] transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6747ee] to-[#8b5cf6] text-white flex items-center justify-center mb-6 shadow-lg">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-base text-gray-600 leading-relaxed font-normal">
              "{companyData.vision}"
            </p>
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center text-xs font-bold text-[#6747ee]">
              <Compass className="w-4 h-4 mr-2" />
              <span>Mind, Sight & Hearing Inspiration</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
