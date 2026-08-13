import { EventItem } from '@/types';

export const eventsData: EventItem[] = [
  {
    slug: 'dress-to-impress-gala-2027',
    title: 'Dress 2 Impress Gala 2027',
    subtitle: 'Dress 2 Impress Is Our Annual Event Hosted In London',
    description:
      'Experience London’s premiere annual celebration of elegance, fashion, high networking, and entertainment hosted by Zendel Services Limited. Join us for a night of glamour, exquisite dining, live performances, and unforgettable memories.',
    date: 'Annual Flagship Event',
    location: 'London, United Kingdom',
    venue: 'Exclusive London Venue',
    image: 'https://zendelserviceslimited.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-02-at-17.16.24.jpeg',
    videoUrl: 'https://zendelserviceslimited.com/wp-content/uploads/2025/01/IMG_2391.mp4',
    ticketUrl:
      'https://www.eventbrite.co.uk/e/dress-to-impress-gala-2027-tickets-1990517220590?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-source=wa&utm-term=checkoutwidget',
    featured: true,
    status: 'upcoming',
    highlights: [
      'Red Carpet Entrance & VIP Reception',
      'Live Entertainment & Musical Performances',
      'Exclusive Fashion Showcase',
      'Gourmet Dining & Signature Cocktails',
      'High-level Professional Networking',
    ],
  },
  {
    slug: 'zendel-corporate-networking-mixer',
    title: 'Zendel Corporate & Creative Mixer',
    subtitle: 'Connecting Industry Leaders and Creative Professionals',
    description:
      'An evening dedicated to connecting business leaders, event organizers, property managers, and creative professionals across London.',
    date: 'Quarterly Event',
    location: 'Central London, UK',
    venue: 'Zendel Corporate Lounge',
    image: 'https://zendelserviceslimited.com/wp-content/uploads/2026/06/TP-525-scaled.jpg',
    ticketUrl: '/contact',
    featured: false,
    status: 'upcoming',
    highlights: [
      'Keynote Panel Discussion',
      'Interactive Networking Sessions',
      'Service Exhibition Showcase',
    ],
  },
];
