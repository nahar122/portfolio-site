// components/ContactSection.tsx
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="mt-20 w-full bg-deep-red">
      <div id="main" className="mx-auto w-[50%] py-10 text-center">
        <div>
          <h2 className="mb-12 font-mohave text-6xl font-bold text-white">
            CONTACT
          </h2>
          <p className="mb-8 text-lg text-white">
            Do you have any questions or would you like to request a free quote
            for a web application, scraper, automation, or anything else? Feel
            free to contact me, and I'll be happy to assist you.
          </p>
          <a
            href="mailto:nahar2002@gmail"
            className="hover:text-theme_dark relative mt-7 inline-block overflow-hidden border-2 border-white px-10 py-3 text-sm font-semibold uppercase tracking-wider text-white transition ease-linear sm:text-base"
          >
            <span className="relative z-10">Contact Me</span>
            <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-white transition-transform duration-300 hover:scale-x-100"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
