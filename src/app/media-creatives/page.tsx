import React from 'react';
import { Metadata } from 'next';
import { MediaCreativesClient } from '@/components/sections/MediaCreativesClient';

export const metadata: Metadata = {
  title: 'Zendel Creatives — A Collective of Extraordinary Event Artisans',
  description:
    'Zendel Creatives is an exclusive collective of premier event artisans across luxury event planning, beauty, photography, mixology, couture fashion, and guest care.',
};

export default function MediaCreativesPage() {
  return <MediaCreativesClient />;
}
