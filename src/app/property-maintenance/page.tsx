import React from 'react';
import { Metadata } from 'next';
import { Building2, ShieldCheck, Wrench, CheckCircle, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { servicesData } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'Property Maintenance',
  description:
    'Commercial and residential building maintenance, safety checks, repairs, and professional cleaning by Zendel Services Limited.',
};

export default function PropertyMaintenancePage() {
  const service = servicesData.find((s) => s.slug === 'property-maintenance')!;

  return (
    <>
      <section className="bg-gradient-to-r from-sky-50 via-cyan-50/60 to-indigo-50 py-16 sm:py-24 text-gray-900 text-center border-b border-gray-200">
        <Container>
          <span className="text-xs uppercase tracking-widest font-bold px-3.5 py-1 rounded-full bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20">
            Zendel Facility & Property Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-4 tracking-tight text-gray-900">
            Property Maintenance
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            {service.shortDescription}
          </p>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Safe & Efficient Spaces
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                Residential & Commercial Maintenance Excellence
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 pt-2">
                {service.features.map((feat, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm font-semibold text-gray-800">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button href="/contact" variant="primary" size="md">
                  Inquire About Facility Care
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <img src={service.image} alt={service.title} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
