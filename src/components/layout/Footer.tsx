'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MessageSquare, ChevronUp, ArrowRight } from 'lucide-react';
import { companyData } from '@/lib/data/company';
import { footerNavigationItems } from '@/lib/data/navigation';
import { servicesData } from '@/lib/data/services';
import { Container } from './Container';

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const Footer: React.FC = () => {
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="bg-[#0a0504] text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Circle Grid Background Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="footer-circle-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="14" cy="14" r="1.5" fill="#09BAF4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-circle-grid)" />
      </svg>

      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A2C9]/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6747ee]/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Scroll to Top Floating Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-[#00A2C9] hover:bg-[#09BAF4] text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none z-20"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <img
                src="/logo/logo.jpg"
                alt="Zendel Services Limited Logo"
                className="h-10 sm:h-12 w-auto object-contain rounded-lg shadow-sm group-hover:scale-105 transition-transform bg-white p-1"
              />
              <div className="flex flex-col">
                <span className="text-white font-black text-lg tracking-wider group-hover:text-[#09BAF4] transition-colors">
                  ZENDEL
                </span>
                <span className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase">
                  Services Limited
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              We provide top-notch services and take pride in helping our clients achieve their goals through creativity, innovation, and excellence.
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={companyData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00A2C9] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={companyData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-500 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-l-4 border-[#00A2C9] pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerNavigationItems.slice(0, 5).map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-[#09BAF4] text-sm transition-colors flex items-center group font-medium"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 text-[#00A2C9] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-l-4 border-[#6747ee] pl-3">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-gray-400 hover:text-[#09BAF4] text-sm transition-colors flex items-center group font-medium"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 text-[#6747ee] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 border-l-4 border-[#ff6900] pl-3">
              Contact Info
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li className="flex items-start">
                <Phone className="w-4 h-4 text-[#00A2C9] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-gray-400 font-semibold">Main Call Line</span>
                  <a href={`tel:${companyData.phoneRaw}`} className="hover:text-[#09BAF4] transition-colors font-medium">
                    {companyData.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MessageSquare className="w-4 h-4 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-gray-400 font-semibold">WhatsApp Line</span>
                  <a
                    href={`https://wa.me/${companyData.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors font-medium"
                  >
                    {companyData.whatsapp}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 text-[#6747ee] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-gray-400 font-semibold">Email Address</span>
                  <a href={`mailto:${companyData.email}`} className="hover:text-[#09BAF4] transition-colors break-all font-medium">
                    {companyData.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>{companyData.copyright}</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
