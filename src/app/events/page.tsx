import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  Users,
  GlassWater,
  Building2,
  Crown,
  Compass,
  CheckCircle,
  Ticket,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { EventGallerySection } from "@/components/sections/EventGallerySection";
import { StyledUnderline } from "@/components/ui/StyledUnderline";

export const metadata: Metadata = {
  title: "Event Organisation & Management — Zendel Services Limited",
  description:
    "Zendel Events is a luxury provider of world-class corporate events and conferences, parties, traditional marriage and weddings, and brand events worldwide.",
};

const corporateServices = [
  "Venue finding",
  "Logistics",
  "Delegate management",
  "Entertainment",
  "Technical Production",
  "Content and more.",
];

export default function EventsPage() {
  return (
    <>
      {/* Hero Header with Authentic Background Image & Dark Luxury Overlay */}
      <section className="relative min-h-[460px] flex items-center justify-center text-center bg-slate-950 text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/IMG-20260602-WA0009.jpg"
            alt="Event Organisation & Management Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00A2C9]/20 blur-[130px] rounded-full pointer-events-none" />
        </div>

        <Container className="relative z-10 py-16 max-w-4xl mx-auto space-y-5">
          <span className="text-xs uppercase tracking-widest font-black px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#09BAF4] border border-white/20 inline-block shadow-lg">
            ZENDEL EVENTS
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
            Event Organisation &amp;{' '}
            <span className="relative inline-block text-[#09BAF4]">
              Management
              <StyledUnderline color="#09BAF4" variant="curve" />
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-200 font-normal max-w-3xl mx-auto leading-relaxed">
            Imaginatively designing and meticulously executing bespoke
            celebrations worldwide.
          </p>
        </Container>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="py-16 bg-white border-b border-gray-200">
        <Container>
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden text-center max-w-5xl mx-auto space-y-6 border border-slate-800">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#00A2C9]" />

            <span className="text-xs uppercase font-black tracking-widest text-[#09BAF4] px-4 py-1.5 rounded-full bg-[#00A2C9]/20 border border-[#00A2C9]/30 inline-block">
              INTRODUCTION
            </span>

            <p className="text-base sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-normal">
              <strong className="text-white font-black">Zendel Events</strong>{" "}
              is a luxury provider of world-class corporate events and
              conferences, parties, traditional marriage and weddings, and other
              brand events. Based in the UK, planning creative celebrations
              worldwide. From venue searching to personal styling. We have got
              you covered.
            </p>
          </div>
        </Container>
      </section>

      {/* EVENT CATEGORIES SECTION */}
      <section className="py-20 bg-slate-50 border-b border-gray-200">
        <Container className="space-y-16">
          {/* Card 1: EVENT */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:border-[#00A2C9] transition-all">
            <div className="lg:col-span-5 h-72 lg:h-full relative overflow-hidden bg-slate-900 min-h-[300px]">
              <img
                src="/gallery/IMG-20260602-WA0016.jpg"
                alt="Event Logistics"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#00A2C9] text-white shadow-md">
                  LOGISTICS &amp; STRATEGY
                </span>
              </div>
            </div>
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#00A2C9]/10 text-[#00A2C9] flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                  EVENT LOGISTICS
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-semibold">
                The backbone of every successful event lies in the effective
                planning, procurement and management of the right logistics.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Ensuring a great implementation of an event strategy involves
                the appropriate deployment of logistics for a seamless flow and
                flawless execution of the event process.
              </p>
            </div>
          </div>

          {/* Card 2: PARTIES */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:border-[#b92f8d] transition-all">
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-4 order-2 lg:order-1">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#b92f8d]/10 text-[#b92f8d] flex items-center justify-center font-bold">
                  <GlassWater className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                  PARTIES &amp; CELEBRATIONS
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                As party organisers, let us take the pressure and worry out of
                planning your next party. We’ll help you design the perfect
                party experience, from sourcing fantastic venues and suppliers
                to creating enthralling experiences for your teams to enjoy. We
                have it all under control.
              </p>
            </div>
            <div className="lg:col-span-5 h-72 lg:h-full relative overflow-hidden bg-slate-900 order-1 lg:order-2 min-h-[300px]">
              <img
                src="/gallery/IMG-20260602-WA0019.jpg"
                alt="Parties"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#b92f8d] text-white shadow-md">
                  PARTY ORGANISERS
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: WEDDINGS */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:border-[#6747ee] transition-all">
            <div className="lg:col-span-5 h-72 lg:h-full relative overflow-hidden bg-slate-900 min-h-[300px]">
              <img
                src="/gallery/IMG-20260602-WA0031.jpg"
                alt="Weddings"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#6747ee] text-white shadow-md">
                  LUXURY WEDDINGS
                </span>
              </div>
            </div>
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#6747ee]/10 text-[#6747ee] flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                  WEDDINGS &amp; RECEPTIONS
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                Firstly, let's raise a proverbial glass to you -
                congratulations! Secondly, Zendel is a luxury wedding and event
                planning company dedicated to creating breathtaking weddings
                throughout London and beyond, so you are already in a great spot
                to begin wherever you are planning your big day.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                At Zendel we’re all about innovation, beauty, honesty and
                ultimately - fun. Every wedding we create is bound by
                understated old school romance and stylised by an addiction to
                producing cool, classy, one-off events that reflect you as a
                couple.
              </p>
            </div>
          </div>

          {/* Card 4: TRADITIONAL MARRIAGE */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:border-[#ff6900] transition-all">
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-4 order-2 lg:order-1">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#ff6900]/10 text-[#ff6900] flex items-center justify-center font-bold">
                  <Crown className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                  TRADITIONAL MARRIAGES
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                Planning your special day should be fun. However, with endless
                options available to couples, it can quickly become both
                overwhelming and time-consuming. We are here to make the journey
                as smooth as possible. We know how important culture is when it
                comes to traditional marriage. Our team researches and studies
                every culture and ensures nothing is missed in your traditional
                marriage. From Ghanaian Ashanti traditional marriage to Nigerian
                traditional weddings, we are here to plan it.
              </p>
            </div>
            <div className="lg:col-span-5 h-72 lg:h-full relative overflow-hidden bg-slate-900 order-1 lg:order-2 min-h-[300px]">
              <img
                src="/gallery/IMG-20260602-WA0026.jpg"
                alt="Traditional Marriage"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#ff6900] text-white shadow-md">
                  CULTURAL CEREMONIES
                </span>
              </div>
            </div>
          </div>

          {/* Card 5: CORPORATE EVENTS */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group hover:border-[#00A2C9] transition-all">
            <div className="lg:col-span-5 h-72 lg:h-full relative overflow-hidden bg-slate-900 min-h-[300px]">
              <img
                src="/gallery/IMG-20260602-WA0052.jpg"
                alt="Corporate Events"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#00A2C9] text-white shadow-md">
                  CORPORATE SOLUTIONS
                </span>
              </div>
            </div>
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#00A2C9]/10 text-[#00A2C9] flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                  CORPORATE EVENTS
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                The corporate events we produce include meetings, conferences,
                company parties, serminars, corporate festivals, Christmas
                parties, away days, and everything else in between.
              </p>
              <div>
                <span className="text-sm font-bold text-gray-900 block mb-3 uppercase tracking-wider">
                  Our services include:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {corporateServices.map((service, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center space-x-2 text-sm font-semibold text-gray-800"
                    >
                      <CheckCircle className="w-4 h-4 text-[#00A2C9] flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* DRESS 2 IMPRESS FLAGSHIP SHOWCASE SECTION */}
      <section className="py-20 bg-white border-b border-gray-200">
        <Container>
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-8 sm:p-14 shadow-2xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text Information */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#09BAF4] px-4 py-1.5 rounded-full bg-[#00A2C9]/20 border border-[#00A2C9]/30 inline-block">
                  FLAGSHIP ANNUAL EVENT
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                  About Zendel's Dress To Impress Event
                </h2>
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light">
                  Dress2Impress is a prestigious dinner and dance event with a
                  focus on fashion and style. Hosted annually in London by
                  Zendel Events. Guests show up in their fanciest elegant
                  attire, ready to impress everyone with their style. We provide
                  a luxurious venue with an A-class service. The ticket price is
                  inclusive of 3-course meals, cocktails, and drinks. There is a
                  live DJ with great music and a red carpet for an unforgettable
                  photography moment. Guests enjoy good company with a great
                  atmosphere of a fun-filled night of fashion and flair with
                  like-minded individuals who appreciate a good outfit. Whether
                  you are into formal wear or prefer a more casual look, this is
                  your chance to shine and express yourself through your
                  wardrobe choices. It is usually a night full of surprises.
                </p>
                <div className="pt-2">
                  <Button
                    href="https://www.eventbrite.co.uk/e/dress-to-impress-gala-2027-tickets-1990517220590?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-source=wa&utm-term=checkoutwidget"
                    variant="warning"
                    size="lg"
                    icon={<Ticket className="w-5 h-5" />}
                  >
                    GET DRESS 2 IMPRESS TICKETS
                  </Button>
                </div>
              </div>

              {/* Video Player */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-black">
                  <video
                    controls
                    preload="metadata"
                    poster="https://zendelserviceslimited.com/wp-content/uploads/2026/06/Screenshot-2026-06-18-at-12.58.09.png"
                    className="w-full h-auto max-h-[500px] object-cover"
                  >
                    <source
                      src="/ZENDEL-STAFFING-ADVERT.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support HTML5 video playback.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* EVENT GALLERY SECTION */}
      <EventGallerySection />
    </>
  );
}
