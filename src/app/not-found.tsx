import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 text-gray-900 py-20">
      <Container className="text-center space-y-6">
        <span className="text-6xl font-black text-[#00A2C9]">404</span>
        <h1 className="text-3xl font-extrabold text-gray-900">Page Not Found</h1>
        <p className="text-gray-600 max-w-md mx-auto text-sm">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div>
          <Button href="/" variant="primary" size="md">
            Return to Homepage
          </Button>
        </div>
      </Container>
    </div>
  );
}
