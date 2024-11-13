// components/Layout.tsx
import React from "react";
import Head from "next/head";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main
        // className="mx-auto mt-20 flex flex-col bg-light p-10 pb-0 lg:max-w-[2250px] xl:py-16"
        className="mt-20 bg-light p-10 pb-0"
      >
        {children}
      </main>
      <footer className="bg-gray-800 p-4 text-center text-white">
        &copy; {new Date().getFullYear()} Webdevamin. All rights reserved.
      </footer>
    </>
  );
};

export default Layout;
