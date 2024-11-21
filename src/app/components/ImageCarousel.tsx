// components/ImageCarousel.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);
  const totalSlides = images.length;

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setPrevIndex(currentIndex);
    setDirection("prev");
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setPrevIndex(currentIndex);
    setDirection("next");
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => {
        setAnimating(false);
        setPrevIndex(null); // Clean up previous image
      }, 500); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [animating]);

  return (
    <div className="relative aspect-square overflow-hidden bg-light">
      {/* Previous Image */}
      {animating && prevIndex !== null && (
        <Image
          key={prevIndex}
          src={images[prevIndex]}
          alt={`Slide ${prevIndex}`}
          fill
          className={`absolute inset-0 h-full w-full rounded-lg p-4 object-contain ${
            direction === "next"
              ? "animate-slideOutToLeft"
              : "animate-slideOutToRight"
          }`}
        />
      )}

      {/* Current Image */}
      <Image
        key={currentIndex}
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        fill
        className={`absolute inset-0 h-full w-full rounded-lg p-4 object-contain ${
          animating
            ? direction === "next"
              ? "animate-slideInFromRight"
              : "animate-slideInFromLeft"
            : ""
        }`}
      />

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 px-4 py-2 text-white"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 px-4 py-2 text-white"
          >
            ❯
          </button>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
