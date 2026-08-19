import React from 'react';
import { Metadata } from 'next';
import { Printer, CheckCircle2, Package, Shirt, FileText, Tag, ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { StyledUnderline } from '@/components/ui/StyledUnderline';
import { servicesData } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'Design and Printing',
  description:
    'High quality custom printing, flyers, posters, stickers, business cards, letterheads, branded t-shirts, pens, and personalized souvenirs by Zendel.',
};

export default function DesignPrintingPage() {
  const service = servicesData.find((s) => s.slug === 'design-printing')!;

  const productOfferings = [
    { num: '01', title: 'Posters & Flyers', icon: FileText, tag: 'MARKETING' },
    { num: '02', title: 'Stickers & Decals', icon: Tag, tag: 'PACKAGING' },
    { num: '03', title: 'Business Stationery', icon: FileText, tag: 'CORPORATE' },
    { num: '04', title: 'Branded T-Shirts', icon: Shirt, tag: 'APPAREL' },
    { num: '05', title: 'Souvenirs & Favors', icon: Package, tag: 'EVENTS' },
    { num: '06', title: 'Promotional Pens', icon: Printer, tag: 'GIFTING' },
  ];

  return (
    <>
      {/* Hero Header with Background Image & Dark Luxury Overlay */}
      <section className="relative min-h-[440px] flex items-center justify-center text-center bg-slate-950 text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/IMG-20260602-WA0014.jpg"
            alt="Design and Printing Background"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00A2C9]/20 blur-[130px] rounded-full pointer-events-none" />
        </div>

        <Container className="relative z-10 py-16 max-w-4xl mx-auto space-y-5">
          <span className="text-xs uppercase tracking-widest font-black px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#09BAF4] border border-white/20 inline-block shadow-lg">
            Zendel Print &amp; Branding
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
            Design &amp;{' '}
            <span className="relative inline-block text-[#09BAF4]">
              Printing Services
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
                Print Credibility &amp; Branding
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight">
                Top Quality Custom Design &amp; Printing Works
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
                  Request Print Quotation
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

      {/* Numbered Print Offerings Grid */}
      <section className="py-24 bg-[#f8fafc]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-black px-4 py-1.5 rounded-full bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20 inline-block">
              Print Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
              Popular Print &amp;{' '}
              <span className="relative inline-block text-[#00A2C9]">
                Branding Offerings
                <StyledUnderline color="#00A2C9" variant="curve" />
              </span>
            </h2>
            <p className="text-base text-gray-600 font-normal">
              From business stationery to bespoke event apparel and branded souvenirs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productOfferings.map((item, idx) => {
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
                    <span>High Grade Custom Quality</span>
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
