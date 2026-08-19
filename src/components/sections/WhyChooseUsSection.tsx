import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Users,
  Video,
  Printer,
  Building2,
  ArrowRight,
  Check,
} from "lucide-react";
import { servicesData } from "@/lib/data/services";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";

import { StyledUnderline } from '../ui/StyledUnderline';

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
        {/* Creative Section Heading with Styled Underline */}
        <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto">
          <span className="text-xs sm:text-sm uppercase tracking-widest font-bold mb-3 px-3.5 py-1 rounded-full bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.2]">
            Top-Notch Services{' '}
            <span className="relative inline-block text-[#00A2C9] font-black">
              Built Around Your Needs
              <StyledUnderline color="#00A2C9" variant="curve" />
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl font-normal leading-relaxed">
            We take immense pride in helping our corporate and private clients achieve their goals through unparalleled creativity, professional execution, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent =
              iconMap[service.iconName as keyof typeof iconMap] || Sparkles;

            return (
              <div
                key={service.slug}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200/90 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Card Cover Image with Badge */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 text-slate-900 shadow-md">
                        Zendel Core
                      </span>
                    </div>

                    {/* Floating Icon */}
                    <div className="absolute bottom-4 right-4 w-11 h-11 rounded-xl bg-white text-[#00A2C9] flex items-center justify-center shadow-lg">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-7">
                    {/* Title & Short Description */}
                    <h3 className="text-2xl font-black text-gray-900 mb-2.5 group-hover:text-[#00A2C9] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                      {service.shortDescription}
                    </p>

                    {/* Highlight Features List */}
                    <ul className="space-y-2.5 mb-6 pt-4 border-t border-gray-100">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-xs text-gray-700 font-semibold"
                        >
                          <Check className="w-4 h-4 text-[#00A2C9] mr-2.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Learn More Link */}
                <div className="px-7 pb-7 pt-0">
                  <Link
                    href={`/${service.slug}`}
                    className="inline-flex items-center text-sm font-extrabold text-[#00A2C9] hover:text-[#ff6900] transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
