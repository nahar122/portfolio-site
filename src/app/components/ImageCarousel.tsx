// components/Carousel.tsx
import React, { useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = images.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative aspect-[1] bg-light">
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        fill
        objectFit="contain"
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-lg p-4"
      />
      <button
        onClick={prevSlide}
        className={`absolute ${
          images.length <= 1 ? "hidden " : "visible "
        } left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 py-2 px-4 text-white`}
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className={`absolute ${
          images.length <= 1 ? "hidden " : "visible "
        }right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 py-2 px-4 text-white`}
      >
        ❯
      </button>
    </div>
  );
};

export default ImageCarousel;
