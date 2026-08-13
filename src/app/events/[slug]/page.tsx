import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calendar, MapPin, Ticket, Play, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { eventsData } from '@/lib/data/events';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const event = eventsData.find((e) => e.slug === resolvedParams.slug);

  if (!event) {
    return { title: 'Event Not Found' };
  }

  return {
    title: event.title,
    description: event.description,
  };
}

export default async function SingleEventPage({ params }: EventPageProps) {
  const resolvedParams = await params;
  const event = eventsData.find((e) => e.slug === resolvedParams.slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <section className="bg-gradient-zendel py-16 sm:py-20 text-white">
        <Container>
          <Link
            href="/events"
            className="inline-flex items-center text-xs font-semibold text-[#09BAF4] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Events Hub
          </Link>

          <span className="text-xs uppercase tracking-widest font-bold px-3.5 py-1 rounded-full bg-[#ff6900]/20 text-[#ff6900] border border-[#ff6900]/30 block w-fit mb-4">
            {event.status === 'upcoming' ? 'Upcoming Event' : 'Past Event Archive'}
          </span>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">{event.title}</h1>
          <p className="text-[#09BAF4] text-lg font-semibold mt-2">{event.subtitle}</p>

          <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-300">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-[#00A2C9]" />
              {event.date}
            </span>
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-purple-400" />
              {event.location}
            </span>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img src={event.image} alt={event.title} className="w-full h-auto object-cover" />
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <h3 className="text-2xl font-bold text-gray-900">About This Event</h3>
                <p>{event.description}</p>
              </div>

              {event.highlights && (
                <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-3">
                  <h4 className="text-lg font-bold text-gray-900">Event Highlights</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {event.highlights.map((h, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00A2C9]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-[#14121a] text-white border border-white/10 shadow-xl space-y-6 sticky top-28">
                <h3 className="text-xl font-bold border-b border-white/10 pb-4">Event Information</h3>

                <div className="space-y-3 text-sm text-gray-300">
                  <div>
                    <span className="text-xs text-gray-400 block uppercase font-bold">Venue</span>
                    <span className="font-semibold text-white">{event.venue || event.location}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block uppercase font-bold">Date</span>
                    <span className="font-semibold text-white">{event.date}</span>
                  </div>
                </div>

                {event.ticketUrl && (
                  <Button
                    href={event.ticketUrl}
                    variant="warning"
                    size="lg"
                    fullWidth
                    icon={<Ticket className="w-5 h-5" />}
                  >
                    BUY TICKET NOW
                  </Button>
                )}

                <Button href="/contact" variant="primary" size="md" fullWidth>
                  Inquire About Custom Planning
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
