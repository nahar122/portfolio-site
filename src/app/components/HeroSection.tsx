// HeroSection.tsx

import React from "react";
import Carousel from "./Carousel";
import TypeWriter from "./TypeWriter";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="container mx-auto bg-light">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:gap-16">
        <div className="text-center sm:gap-10 lg:max-w-xl lg:text-left">
          <TypeWriter text="About Me" speed={100} />
          <p className="mb-4 mt-4 text-center font-quicksand text-gray-500 lg:text-left lg:text-2xl">
            I empower your business with state-of-the-art digital solutions,
            such as websites, web applications, web scraping, and web
            automations, with a tailored approach based on your specific needs.
          </p>
          <Carousel
            items={[
              "Web Automations",
              "Web Scraping",
              "Website Development",
              "And much more...",
            ]}
          />
          <div className="mt-7 flex w-full flex-col gap-4 lg:mt-10 lg:flex-row">
            <a
              href="#contact"
              className="flex-1 border-2 border-black bg-primary-red p-3 text-center font-quicksand font-semibold text-black shadow-[7px_7px_0px_black] transition-shadow duration-300 hover:shadow-none lg:px-10"
            >
              Contact
            </a>
            <a
              href="#services"
              className="flex-1 border-2 border-black bg-white p-3 text-center font-quicksand font-semibold text-black shadow-[7px_7px_0px_black] transition-shadow duration-300 hover:shadow-none lg:px-10"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="mt-10 flex justify-center align-middle">
          <Image
            src="/test1234.png" // Use the generated image here
            alt="hero image"
            width={500}
            height={500}
            className="rounded-full bg-transparent object-contain mix-blend-hard-light" // Ensure it adapts well to the surrounding white space
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
