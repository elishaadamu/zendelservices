import React from 'react';
import { Phone, Mail, MessageSquare, Clock, MapPin, CheckCircle } from 'lucide-react';
import { companyData } from '@/lib/data/company';
import { Container } from '../layout/Container';
import { EnquiryForm } from '../forms/EnquiryForm';

import { StyledUnderline } from '../ui/StyledUnderline';

export const ContactCTASection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 text-gray-900 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Call & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-black px-4 py-1.5 rounded-full bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20 inline-block">
                Contact Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-4 tracking-tight leading-tight text-gray-950">
                Send Us Your <br />
                <span className="relative inline-block text-[#00A2C9]">
                  Bright Ideas
                  <StyledUnderline color="#00A2C9" variant="curve" />
                </span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
                Whether you are planning a corporate conference, a wedding gala, require trained event staff, print marketing, or property care—we are ready to deliver.
              </p>
            </div>

            {/* Direct Phone Box */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#00A2C9]/10 text-[#00A2C9] flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-bold uppercase block">Call Us Now</span>
                <a
                  href={`tel:${companyData.phoneRaw}`}
                  className="text-lg font-bold text-gray-900 hover:text-[#00A2C9] transition-colors"
                >
                  {companyData.phone}
                </a>
              </div>
            </div>

            {/* WhatsApp Box */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-bold uppercase block">WhatsApp Line</span>
                <a
                  href={`https://wa.me/${companyData.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-gray-900 hover:text-emerald-600 transition-colors"
                >
                  {companyData.whatsapp}
                </a>
              </div>
            </div>

            {/* Direct Email Box */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#6747ee]/10 text-[#6747ee] flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-bold uppercase block">Send Us Email</span>
                <a
                  href={`mailto:${companyData.email}`}
                  className="text-base font-bold text-gray-900 hover:text-[#00A2C9] transition-colors break-all"
                >
                  {companyData.email}
                </a>
              </div>
            </div>

            {/* Guarantees List */}
            <div className="pt-2 space-y-2 text-xs font-semibold text-gray-700">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#00A2C9]" />
                <span>Fast response within 24 business hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#00A2C9]" />
                <span>Customized event & staffing quotations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form Component */}
          <div className="lg:col-span-7">
            <EnquiryForm darkTheme={false} />
          </div>
        </div>
      </Container>
    </section>
  );
};
