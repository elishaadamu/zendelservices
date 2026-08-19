import React from 'react';
import Link from 'next/link';
import { Sparkles, Users, Video, Printer, Building2, ArrowRight, Check } from 'lucide-react';
import { servicesData } from '@/lib/data/services';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';

const iconMap = {
  Sparkles,
  Users,
  Video,
  Printer,
  Building2,
};

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-gray-200">
      <Container>
        <SectionHeading
          subtitle="Why Choose Us"
          title="Top-Notch Services Built Around Your Needs"
          description="We take immense pride in helping our corporate and private clients achieve their goals through unparalleled creativity, professional execution, and innovation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName as keyof typeof iconMap] || Sparkles;

            return (
              <div
                key={service.slug}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Card Header Image with Floating Icon */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white text-[#00A2C9] flex items-center justify-center shadow-lg">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-sm border border-white/20">
                      Zendel Core
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Title & Short Description */}
                    <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-[#00A2C9] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>

                    {/* Highlight Features List */}
                    <ul className="space-y-2.5 pt-4 border-t border-gray-100">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-700 font-semibold">
                          <div className="w-4 h-4 rounded-full bg-[#00A2C9]/10 text-[#00A2C9] flex items-center justify-center mr-2.5 flex-shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More Link */}
                  <div className="pt-2">
                    <Link
                      href={`/${service.slug}`}
                      className="inline-flex items-center text-xs font-extrabold text-[#00A2C9] uppercase tracking-wider hover:text-[#6747ee] transition-colors group/link"
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

