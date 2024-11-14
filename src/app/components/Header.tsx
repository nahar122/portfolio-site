"use client";

import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-light">
      <div className="flex items-center justify-between px-5 py-3 lg:px-20 lg:py-5">
        <div className="flex-shrink-0">
          <img className="h-8 w-8" src="/globe.svg" alt="Logo" />
        </div>
        <div className="hidden space-x-4 font-quicksand font-semibold text-black md:flex">
          {["Home", "Services", "Projects", "Contact"].map((item) => (
            <div key={item} className="group flex flex-col items-center">
              <a
                href={`#${item.toLowerCase()}`}
                className="rounded-md px-3 py-2 hover:text-primary-red lg:text-xl"
              >
                {item}
              </a>
              <hr className="mt-1 h-1 w-full origin-center scale-x-0 transform bg-primary-red transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </div>
          ))}
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {["Home", "Services", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
