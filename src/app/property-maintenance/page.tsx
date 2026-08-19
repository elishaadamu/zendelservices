import React from 'react';
import { Metadata } from 'next';
import { Building2, ShieldCheck, Wrench, CheckCircle2, Sparkles, ArrowRight, Home, Sparkle } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { StyledUnderline } from '@/components/ui/StyledUnderline';
import { servicesData } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'Property Maintenance',
  description:
    'Commercial and residential building maintenance, safety checks, repairs, and professional cleaning by Zendel Services Limited.',
};

export default function PropertyMaintenancePage() {
  const service = servicesData.find((s) => s.slug === 'property-maintenance')!;

  const maintenanceDisciplines = [
    { num: '01', title: 'Commercial Facility Upkeep', icon: Building2, tag: 'COMMERCIAL' },
    { num: '02', title: 'Residential Property Care', icon: Home, tag: 'RESIDENTIAL' },
    { num: '03', title: 'Deep Cleaning & Sanitization', icon: Sparkles, tag: 'HYGIENE' },
    { num: '04', title: 'Safety Checks & Compliance', icon: ShieldCheck, tag: 'SAFETY AUDIT' },
    { num: '05', title: 'Facility Repairs & Fixes', icon: Wrench, tag: 'RESTORATION' },
    { num: '06', title: 'Routine Scheduled Servicing', icon: CheckCircle2, tag: 'PREVENTATIVE' },
  ];

  return (
    <>
      {/* Hero Header with Background Image & Dark Luxury Overlay */}
      <section className="relative min-h-[440px] flex items-center justify-center text-center bg-slate-950 text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/IMG-20260602-WA0037.jpg"
            alt="Property Maintenance Background"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00A2C9]/20 blur-[130px] rounded-full pointer-events-none" />
        </div>

        <Container className="relative z-10 py-16 max-w-4xl mx-auto space-y-5">
          <span className="text-xs uppercase tracking-widest font-black px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#09BAF4] border border-white/20 inline-block shadow-lg">
            Zendel Facility &amp; Property Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
            Property{' '}
            <span className="relative inline-block text-[#09BAF4]">
              Maintenance
              <StyledUnderline color="#09BAF4" variant="curve" />
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            {service.shortDescription}
          </p>
        </Container>
      </section>

      {/* Main Feature Content */}
      <section className="py-24 bg-white border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black uppercase tracking-wider text-[#00A2C9] px-3.5 py-1 rounded-full bg-[#00A2C9]/10 border border-[#00A2C9]/20 inline-block">
                Safe &amp; Efficient Spaces
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight">
                Residential &amp; Commercial Maintenance Excellence
              </h2>
              <p className="text-base text-gray-600 leading-relaxed font-normal">
                {service.description}
              </p>

              <div className="space-y-3 pt-2">
                {service.features.map((feat, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm font-bold text-gray-800">
                    <CheckCircle2 className="w-5 h-5 text-[#00A2C9] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button href="/contact" variant="warning" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                  Inquire About Facility Care
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900 aspect-[4/3] group relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Numbered Maintenance Services Grid */}
      <section className="py-24 bg-[#f8fafc]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-black px-4 py-1.5 rounded-full bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20 inline-block">
              Disciplines &amp; Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
              Comprehensive{' '}
              <span className="relative inline-block text-[#00A2C9]">
                Property Solutions
                <StyledUnderline color="#00A2C9" variant="curve" />
              </span>
            </h2>
            <p className="text-base text-gray-600 font-normal">
              Reliable upkeep for corporate headquarters, hospitality suites, and private residences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {maintenanceDisciplines.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group hover:-translate-y-1 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20 flex items-center justify-center group-hover:bg-[#00A2C9] group-hover:text-white transition-all">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="font-serif text-3xl font-black text-slate-200 group-hover:text-[#00A2C9]/30 transition-colors">
                        {item.num}
                      </span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 inline-block mb-2">
                      {item.tag}
                    </span>
                    <h3 className="text-xl font-black text-gray-950">{item.title}</h3>
                  </div>
                  <div className="pt-4 border-t border-slate-100 text-xs font-bold text-[#00A2C9] flex items-center justify-between">
                    <span>Verified Standards &amp; Safety</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
