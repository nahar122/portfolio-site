// components/ProjectsBanner.tsx
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="bg-theme 4xl:items-end 4xl:pr-14 absolute left-0 top-1/2 -z-10 hidden h-[115%] w-[calc(100vw-83%)] -translate-y-1/2 flex-col items-center justify-center rounded-r-xl shadow-2xl xl:flex">
      <h2 className="4xl:text-6xl -rotate-90 text-5xl uppercase tracking-wide text-light xl:mb-0">
        Projects
      </h2>
    </div>
  );
};

export default Banner;
