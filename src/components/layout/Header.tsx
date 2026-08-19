"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import { mainNavigationItems } from "@/lib/data/navigation";
import { companyData } from "@/lib/data/company";
import { Container } from "./Container";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <header className="relative z-50">
      {/* Top Notification Bar */}
      <div className="bg-[#f8fafc] text-gray-700 text-xs py-2 border-b border-gray-200 hidden sm:block">
        <Container className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${companyData.phoneRaw}`}
              className="flex items-center hover:text-[#00A2C9] transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-[#00A2C9]" />
              <span>{companyData.phone}</span>
            </a>
            <a
              href={`https://wa.me/${companyData.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-[#00A2C9] transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
              <span>WhatsApp: {companyData.whatsapp}</span>
            </a>
            <a
              href={`mailto:${companyData.email}`}
              className="flex items-center hover:text-[#00A2C9] transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 mr-1.5 text-[#00A2C9]" />
              <span>{companyData.email}</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-500 font-medium">
              Bespoke Event & Property Solutions
            </span>
            <Link
              href="/contact"
              className="text-[#00A2C9] font-bold hover:underline flex items-center"
            >
              Enquire Now <ChevronRight className="w-3 h-3 ml-0.5" />
            </Link>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-white py-4 border-b border-gray-200">
        <Container className="flex items-center justify-between">
          {/* Official Logo Image */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/logo/logo.jpg"
              alt="Zendel Services Limited Logo"
              className="h-10 sm:h-12 w-auto object-contain rounded-lg shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-gray-900 font-black text-lg tracking-wider group-hover:text-[#00A2C9] transition-colors">
                ZENDEL
              </span>
              <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">
                Services Limited
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (4 main links + persistent hamburger for the rest) */}
          <div className="hidden lg:flex items-center space-x-2">
            {mainNavigationItems.slice(0, 4).map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-extrabold transition-all duration-200 ${
                    isActive
                      ? "bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/30"
                      : "text-gray-700 hover:text-[#00A2C9] hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Persistent Desktop Hamburger Toggle for remaining links */}
            <div className="relative">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-800 hover:bg-slate-100 focus:outline-none flex items-center justify-center border border-gray-200 ml-2"
                aria-label="More navigation links"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* Desktop Dropdown for remaining links */}
              {mobileMenuOpen && (
                <div className="hidden lg:block absolute right-0 top-12 w-64 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 overflow-hidden divide-y divide-gray-100 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="p-2.5 space-y-1">
                    <p className="text-[10px] uppercase font-bold text-gray-400 px-3 py-1.5">
                      More Services &amp; Info
                    </p>
                    {mainNavigationItems.slice(4).map((item) => {
                      const isActive = pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          href={item.path}
                          className={`flex items-center px-4 py-2.5 text-sm font-bold rounded-xl transition-all ${
                            isActive
                              ? "bg-[#00A2C9]/10 text-[#00A2C9]"
                              : "text-gray-700 hover:bg-slate-50"
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Direct CTA Action Button */}
            <Link
              href="/events"
              className="ml-3 px-4 py-2 text-xs font-black uppercase tracking-wider text-white bg-[#00A2C9] hover:bg-[#008ba8] rounded-xl shadow-sm transition-all hover:scale-105"
            >
              Plan Event
            </Link>
          </div>

          {/* Mobile Navigation Toggle (Visible on smaller viewports) */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-800 hover:bg-slate-100 focus:outline-none border border-gray-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Drawer Menu (Visible on smaller viewports, showing all links) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[112px] bg-white/98 backdrop-blur-xl border-b border-gray-200 z-40 px-4 py-6 shadow-2xl transition-all animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-2">
            {mainNavigationItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    isActive
                      ? "bg-[#00A2C9] text-white"
                      : "text-gray-700 hover:bg-slate-100 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-gray-200 mt-2 space-y-2">
              <div className="text-center text-xs text-gray-500 pt-2 space-y-1">
                <p>Call Us: {companyData.phone}</p>
                <p>Email: {companyData.email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
