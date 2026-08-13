export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  iconName: string;
  image: string;
  features: string[];
  featured?: boolean;
}

export interface EventItem {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  time?: string;
  location: string;
  venue?: string;
  image: string;
  videoUrl?: string;
  ticketUrl?: string;
  featured?: boolean;
  status: 'upcoming' | 'past';
  highlights?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'events' | 'staffing' | 'printing' | 'maintenance' | 'branding' | 'creatives';
  categoryLabel: string;
  image: string;
  alt: string;
  caption?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export interface NavigationItem {
  label: string;
  path: string;
  external?: boolean;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  address: {
    street?: string;
    city: string;
    country: string;
    postcode?: string;
  };
  social: {
    facebook: string;
    instagram: string;
    twitter?: string;
    linkedin?: string;
  };
  mission: string;
  vision: string;
  tagline: string;
  copyright: string;
}

export interface FounderInfo {
  name: string;
  role: string;
  title: string;
  credentials: string[];
  image: string;
  bio: string[];
  hobbies: string;
}

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  locationPostcode: string;
  participantsCount: number | string;
  staffCount: number | string;
  staffTypes: ('Ushers' | 'Hosts' | 'Coordinators')[];
  additionalInfo: string;
}
