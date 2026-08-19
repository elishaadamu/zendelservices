import React from "react";
import { Ticket, Sparkles, Film } from "lucide-react";
import { eventsData } from "@/lib/data/events";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";

import { StyledUnderline } from "../ui/StyledUnderline";

export const UpcomingEventSection: React.FC = () => {
  const featuredEvent =
    eventsData.find((e) => e.slug === "dress-to-impress-gala-2027") ||
    eventsData[0];

  return (
    <section className="py-20 bg-slate-100 text-gray-900 border-t border-b border-gray-200 relative">
      <Container>
        {/* Banner Announcement with Creative Typography & Styled Underline */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#ff6900]/10 border border-[#ff6900]/30 text-[#ff6900] text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" />
            <span>London Annual Flagship Event </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.2]">
            <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#ff6900]">Dress 2 Impress</span> is Our{' '}
            <span className="relative inline-block text-[#00A2C9] font-black">
              Annual Flagship Event
              <StyledUnderline color="#00A2C9" variant="curve" />
            </span>{' '}
            Hosted in London.
          </h2>
        </div>

        {/* Featured Event Showcase with Staffing Advert Video */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl">
          {/* Poster & Ticket Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 group">
              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="w-full h-auto max-h-[480px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#ff6900] text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg">
                Upcoming Flagship
              </div>
            </div>

            {/* Ticket CTA Button */}
            {featuredEvent.ticketUrl && (
              <Button
                href={featuredEvent.ticketUrl}
                variant="warning"
                size="lg"
                fullWidth
                icon={<Ticket className="w-5 h-5" />}
              >
                BUY TICKET ON EVENTBRITE
              </Button>
            )}
          </div>

          {/* Right Column: Inline Video Player replacing text */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center space-x-3 pb-2 border-b border-gray-100">
              <div className="w-9 h-9 rounded-xl bg-[#00A2C9]/10 text-[#00A2C9] flex items-center justify-center">
                <Film className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Zendel Staffing & Event Advert
                </h3>
                <p className="text-xs text-gray-500">
                  Official promotional showcase video
                </p>
              </div>
            </div>

            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-slate-900 relative">
              <video
                src="/ZENDEL-STAFFING-ADVERT.mp4"
                controls
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                Your browser does not support video playback.
              </video>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
