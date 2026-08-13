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
    <section className="py-20 bg-[#f8fafc] border-b border-gray-200">
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
                className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00A2C9]/10 to-[#6747ee]/10 text-[#00A2C9] group-hover:bg-[#00A2C9] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                      Zendel Core
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00A2C9] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Highlight Features List */}
                  <ul className="space-y-2 mb-6 pt-4 border-t border-gray-100">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#00A2C9] mr-2 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Link */}
                <Link
                  href={`/${service.slug}`}
                  className="inline-flex items-center text-sm font-bold text-[#00A2C9] hover:text-[#6747ee] transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Explore {service.title}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
