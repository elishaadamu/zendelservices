import { CompanyInfo } from '@/types';

export const companyData: CompanyInfo = {
  name: 'Zendel Services Limited',
  legalName: 'Zendel Services Limited',
  phone: '+44 20 3952 4577',
  phoneRaw: '+442039524577',
  whatsapp: '+44 7713 136911',
  whatsappRaw: '+447713136911',
  email: 'info@zendelserviceslimited.com',
  address: {
    city: 'London',
    country: 'United Kingdom',
  },
  social: {
    facebook: 'https://www.facebook.com/share/19uRwmeYGK/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/zendelevents?igsh=MWlqc2o3ZDJudmRp',
  },
  mission:
    'To be the leading event and management company globally, by meeting and exceeding the expectations of our clients through innovative ideas and the delivery of excellent service.',
  vision:
    'To be the most creative and innovative company that speaks to the mind, sight, and hearing to the world.',
  tagline:
    'We provide top-notch services and take pride in helping our clients achieve their goal through creativity and innovation.',
  copyright: `© ${new Date().getFullYear()} Zendel Services Limited. All rights reserved.`,
};
