import React from 'react';
import { Metadata } from 'next';
import { Printer, CheckCircle, Package, Shirt, FileText, Tag } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { servicesData } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'Design and Printing',
  description:
    'High quality custom printing, flyers, posters, stickers, business cards, letterheads, branded t-shirts, pens, and personalized souvenirs by Zendel.',
};

export default function DesignPrintingPage() {
  const service = servicesData.find((s) => s.slug === 'design-printing')!;

  return (
    <>
      <section className="bg-gradient-to-r from-sky-50 via-cyan-50/60 to-indigo-50 py-16 sm:py-24 text-gray-900 text-center border-b border-gray-200">
        <Container>
          <span className="text-xs uppercase tracking-widest font-bold px-3.5 py-1 rounded-full bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20">
            Zendel Print & Branding
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-4 tracking-tight text-gray-900">
            Design and Printing Services
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
              <span className="text-xs font-bold uppercase tracking-wider text-[#00A2C9]">
                Print Credibility & Branding
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                Top Quality Custom Design & Printing Works
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 pt-2">
                {service.features.map((feat, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm font-semibold text-gray-800">
                    <CheckCircle className="w-5 h-5 text-[#00A2C9] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button href="/contact" variant="primary" size="md">
                  Request Print Quotation
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

      {/* Print Products Grid */}
      <section className="py-20 bg-[#f8fafc]">
        <Container>
          <SectionHeading
            subtitle="Print Catalog"
            title="Popular Print & Branding Offerings"
            description="From business stationery to event apparel and souvenirs."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="p-6 rounded-2xl bg-white text-center border border-gray-200 shadow-sm space-y-3">
              <FileText className="w-8 h-8 text-[#00A2C9] mx-auto" />
              <span className="block text-sm font-bold text-gray-900">Posters & Flyers</span>
            </div>
            <div className="p-6 rounded-2xl bg-white text-center border border-gray-200 shadow-sm space-y-3">
              <Tag className="w-8 h-8 text-[#6747ee] mx-auto" />
              <span className="block text-sm font-bold text-gray-900">Stickers & Labels</span>
            </div>
            <div className="p-6 rounded-2xl bg-white text-center border border-gray-200 shadow-sm space-y-3">
              <FileText className="w-8 h-8 text-emerald-500 mx-auto" />
              <span className="block text-sm font-bold text-gray-900">Business Cards</span>
            </div>
            <div className="p-6 rounded-2xl bg-white text-center border border-gray-200 shadow-sm space-y-3">
              <Shirt className="w-8 h-8 text-[#ff6900] mx-auto" />
              <span className="block text-sm font-bold text-gray-900">Branded T-Shirts</span>
            </div>
            <div className="p-6 rounded-2xl bg-white text-center border border-gray-200 shadow-sm space-y-3">
              <Package className="w-8 h-8 text-purple-500 mx-auto" />
              <span className="block text-sm font-bold text-gray-900">Souvenirs & Gifts</span>
            </div>
            <div className="p-6 rounded-2xl bg-white text-center border border-gray-200 shadow-sm space-y-3">
              <Printer className="w-8 h-8 text-[#00A2C9] mx-auto" />
              <span className="block text-sm font-bold text-gray-900">Promotional Pens</span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
