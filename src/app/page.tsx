"use client";

import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Layout from "./components/Layout";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <div className="container mx-auto mt-10 flex items-center gap-4 p-0">
        <div className="flex h-[1px] w-64 bg-black"></div>
        <div className="flex justify-center gap-6 lg:justify-start">
          {/* <div className="rounded-full bg-black p-4"> */}
          <SocialIcon
            network="linkedin"
            onClick={() => window.open("https://linkedin.com/in/nahar-saias")}
            className="cursor-pointer before:h-full before:w-full before:bg-black"
          />
          {/* </div> */}
          <SocialIcon
            network="github"
            onClick={() => window.open("https://github.com/nahar122")}
            className="cursor-pointer"
          />
          <SocialIcon
            network="upwork"
            onClick={() =>
              window.open(
                "https://www.upwork.com/freelancers/~018bc296de572eb863"
              )
            }
            className="cursor-pointer"
          />
          <SocialIcon
            network="email"
            onClick={() => window.open("mailto:nahar2002@gmail.com")}
            className="cursor-pointer"
          />
        </div>
        <div className="flex h-[1px] w-64 bg-black"></div>
      </div>
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
}
