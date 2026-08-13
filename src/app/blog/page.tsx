import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { BlogPreviewSection } from '@/components/sections/BlogPreviewSection';

export const metadata: Metadata = {
  title: 'Blog & News',
  description:
    'Read insights, event tips, ushering standards, print branding ideas, and property maintenance advice from Zendel Services Limited.',
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-sky-50 via-cyan-50/60 to-indigo-50 py-16 sm:py-24 text-gray-900 text-center border-b border-gray-200">
        <Container>
          <span className="text-xs uppercase tracking-widest font-bold px-3.5 py-1 rounded-full bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20">
            Insights & News
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-4 tracking-tight text-gray-900">
            Zendel Blog & Articles
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            Industry trends, marketing tips, event planning advice, and company announcements.
          </p>
        </Container>
      </section>

      <BlogPreviewSection />
    </>
  );
}
