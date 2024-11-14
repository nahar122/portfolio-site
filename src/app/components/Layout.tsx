// components/Layout.tsx
import React from "react";
import Head from "next/head";
import Header from "./Header";
import ContactSection from "./ContactSection";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main
        // className="mx-auto mt-20 flex flex-col bg-light p-10 pb-0 lg:max-w-[2250px] xl:py-16"
        className="mt-20 bg-light"
      >
        <div className="mx-auto w-3/4 px-20 md:border-x-[1px] md:border-black">
          {children}
        </div>
      </main>
      <footer className="w-full text-center text-white">
        <ContactSection />
      </footer>
    </>
  );
};

export default Layout;
