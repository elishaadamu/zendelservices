import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { companyData } from '@/lib/data/company';

export const metadata: Metadata = {
  title: {
    default: 'Zendel Services Limited | Event Planning, Staffing & Property Maintenance',
    template: '%s | Zendel Services Limited',
  },
  description:
    'Zendel Services Limited provides top-notch bespoke event planning, executive event staffing (ushers, hosts, coordinators), design & printing, media creatives, and property maintenance services.',
  keywords: [
    'Zendel Services Limited',
    'Event Planning London',
    'Events Staffing UK',
    'Event Ushers Hosts Coordinators',
    'Design and Printing',
    'Property Maintenance',
    'Dress 2 Impress Gala',
  ],
  authors: [{ name: 'Zendel Services Limited' }],
  creator: 'Zendel Services Limited',
  metadataBase: new URL('https://zendelserviceslimited.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://zendelserviceslimited.com',
    title: 'Zendel Services Limited',
    description:
      'Exceeding client expectations through innovative ideas and excellent service in events, staffing, print, and property management.',
    siteName: 'Zendel Services Limited',
    images: [
      {
        url: 'https://zendelserviceslimited.com/wp-content/uploads/2026/06/TP-101-scaled.jpg',
        width: 1200,
        height: 630,
        alt: 'Zendel Services Limited',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zendel Services Limited',
    description:
      'Top-notch bespoke event planning, executive staffing, design & printing, and property maintenance.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo/logo.jpg',
    shortcut: '/logo/logo.jpg',
    apple: '/logo/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#00A2C9] selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
