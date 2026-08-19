"use client";

import React, { useState } from "react";
import { Maximize2, ChevronDown } from "lucide-react";
import { galleryData } from "@/lib/data/gallery";
import { GalleryItem } from "@/types";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";

import { StyledUnderline } from "../ui/StyledUnderline";

const INITIAL_VISIBLE_COUNT = 16;

export const EventGallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(
    INITIAL_VISIBLE_COUNT,
  );

  const displayedItems = galleryData.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 16, galleryData.length));
  };

  return (
    <section className="py-24 bg-white text-gray-900 border-b border-gray-200">
      <Container>
        {/* Creative Section Heading with Styled Underline */}
        <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-black px-4 py-1.5 rounded-full bg-[#00A2C9]/10 text-[#00A2C9] border border-[#00A2C9]/20 inline-block">
            Event &amp; Project Gallery
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight leading-tight">
            Capturing Perfection &amp;{' '}
            <span className="relative inline-block text-[#00A2C9]">
              Signature Style
              <StyledUnderline color="#00A2C9" variant="curve" />
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl font-normal leading-relaxed">
            Browse through past weddings, corporate summits, ushering teams, print branding works, and property maintenance projects.
          </p>
        </div>

        {/* Ultra-Compact Responsive Gallery Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2.5 sm:gap-3">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-24 sm:h-48 md:h-48 w-full rounded-lg overflow-hidden bg-slate-100 border border-gray-200 shadow-sm cursor-pointer hover:border-[#00A2C9] hover:shadow-md transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-2 rounded-full bg-[#00A2C9] text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < galleryData.length && (
          <div className="mt-12 text-center">
            <Button
              onClick={handleShowMore}
              variant="outline"
              size="lg"
              icon={<ChevronDown className="w-5 h-5" />}
            >
              Show More Photos ({galleryData.length - visibleCount} Remaining)
            </Button>
          </div>
        )}
      </Container>

      {/* Clean Lightbox Pop-up Modal */}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          title=""
        >
          <div className="relative w-full max-h-[82vh] flex items-center justify-center overflow-hidden">
            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              className="max-h-[80vh] w-auto max-w-full object-contain mx-auto rounded-lg"
            />
          </div>
        </Modal>
      )}
    </section>
  );
};
