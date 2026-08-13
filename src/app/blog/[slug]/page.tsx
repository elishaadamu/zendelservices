import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import { blogPostsData } from '@/lib/data/blog';
import { Container } from '@/components/layout/Container';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPostsData.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: 'Article Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function SingleArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const post = blogPostsData.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="bg-gradient-zendel py-16 sm:py-20 text-white">
        <Container className="max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-xs font-semibold text-[#09BAF4] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to News & Blog
          </Link>

          <span className="text-xs uppercase tracking-widest font-bold px-3.5 py-1 rounded-full bg-[#00A2C9]/20 text-[#09BAF4] border border-[#00A2C9]/30 block w-fit mb-4">
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-6 text-xs text-gray-300">
            <span className="flex items-center">
              <User className="w-4 h-4 mr-1.5 text-[#00A2C9]" />
              {post.author.name} ({post.author.role})
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1.5 text-purple-400" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1.5 text-gray-400" />
              {post.readTime}
            </span>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container className="max-w-4xl">
          <div className="space-y-8">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img src={post.image} alt={post.title} className="w-full h-auto max-h-[480px] object-cover" />
            </div>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-6 leading-relaxed">
              <p className="text-lg font-medium text-gray-700 leading-relaxed italic border-l-4 border-[#00A2C9] pl-4">
                {post.excerpt}
              </p>
              <div className="whitespace-pre-line">{post.content}</div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
