// Carousel.tsx

import React from "react";

interface CarouselProps {
  items: string[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  // Duplicate the items to create a seamless loop
  const repeatedItems = [...items, ...items];

  return (
    <div className="overflow-x-hidden py-2">
      <div className="flex w-max animate-scroll-infinite hover:paused">
        {repeatedItems.map((item, index) => (
          <span
            className="flex-shrink-0 text-nowrap bg-white shadow-sm shadow-gray-300 rounded-lg px-4 py-1 mr-4 "
            key={index}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
