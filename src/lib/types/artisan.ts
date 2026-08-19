export interface Artisan {
  id: string;
  name: string;
  title: string;
  category: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  about: string;
  expertise: string;
  signatureStyle: string;
  experienceCredentials: string;
  portfolio: string;
  zendelRole: string;
  image: string;
  status: 'verified' | 'pending' | 'rejected';
  createdAt: string;
}

export interface ClientEnquiry {
  id: string;
  artisanName: string;
  artisanRole: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  eventType: string;
  locationPostcode: string;
  eventDate: string;
  numberOfArtisans: string;
  staffTypes?: string[];
  participantsCount?: string | number;
  staffCount?: string | number;
  source?: string;
  additionalInfo: string;
  createdAt: string;
}

