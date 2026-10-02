"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToImage = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: index * containerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollLeft;
      const index = Math.round(scrollPosition / containerRef.current.clientWidth);
      if (index !== currentIndex) {
        setCurrentIndex(index);
      }
    }
  };

  const nextImage = () => {
    const nextIdx = (currentIndex + 1) % images.length;
    scrollToImage(nextIdx);
  };

  const prevImage = () => {
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    scrollToImage(prevIdx);
  };

  if (images.length === 0) return null;

  const containerClassName =
    "relative mt-10 aspect-[16/9] w-full overflow-hidden border border-black/[0.08] hover:!border-black/[0.08] hover:ring-0 hover:outline-none focus:outline-none bg-surface-muted shadow-sm hover:shadow-lg transition-shadow duration-300 md:mt-12 md:aspect-[21/9] rounded-2xl";

  if (images.length === 1) {
    return (
      <div className={`${containerClassName}`}>
        <Image
          src={images[0]}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 1200px, 100vw"
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`${containerClassName} group`}>
      <div
        ref={containerRef}
        className="flex h-full w-full snap-x snap-mandatory overflow-x-auto scrollbar-hide"
        onScroll={handleScroll}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="relative min-w-full h-full snap-start shrink-0">
            <Image
              src={img}
              alt={`${alt} - image ${idx + 1}`}
              fill
              priority={idx === 0}
              sizes="(min-width: 1024px) 1200px, 100vw"
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => { e.preventDefault(); prevImage(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black opacity-0 transition-opacity hover:bg-white group-hover:opacity-100 focus:opacity-100"
        aria-label="Previous image"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={(e) => { e.preventDefault(); nextImage(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black opacity-0 transition-opacity hover:bg-white group-hover:opacity-100 focus:opacity-100"
        aria-label="Next image"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToImage(idx)}
            className={`h-2 w-2 rounded-full transition-all ${idx === currentIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/75"
              }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </div>
  );
}
