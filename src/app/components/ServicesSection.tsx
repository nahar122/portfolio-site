import Image from "next/image";
import SkillCard from "./SkillCard";

const ServicesSection: React.FC = () => {
  const images = [
    {
      src: "csharp.svg",
      value: 80,
    },
    {
      src: "nextjs.svg",
      value: 75,
    },
    {
      src: "postgresql.svg",
      value: 80,
    },
    {
      src: "python.svg",
      value: 100,
    },
    {
      src: "tailwind.svg",
      value: 60,
    },
    {
      src: "typescript.svg",
      value: 100,
    },
    {
      src: "reactjs.svg",
      value: 90,
    },
  ];

  return (
    <section
      id="services"
      className="bg-light font-quicksand sm:mt-10 lg:mt-16"
    >
      <div className="container mx-auto flex-col md:flex-row md:border-x-[1px] md:border-black lg:flex">
        <div className="flex flex-1 flex-col justify-evenly px-5">
          {/* Updated Container with relative positioning and defined width & height */}
          <div className="relative mt-10 h-40 w-full transition-all lg:mt-0 lg:h-96">
            <Image
              src="/comptest.webp"
              alt="computer png"
              fill
              className="rounded-lg object-left"
              priority
            />
          </div>
          <div>
            <article className="mt-4 text-left font-mohave">
              <h4 className="text-xl font-semibold">
                Software Engineer | Miami, FL
              </h4>
              <p className="text-md font-quicksand text-gray-500">
                As a professional software developer, I specialize in web
                automation, web scraping, and full-stack engineering to drive
                efficiency and engagement for businesses. With expertise in
                Python, JavaScript/TypeScript, and frameworks like React and
                Next.js, I deliver powerful, user-focused web applications and
                streamlined data workflows. My services range from building
                dynamic websites to creating customized tools for operational
                management. By leveraging AWS and Azure, I ensure scalable,
                secure solutions. Focused on delivering value, I aim to boost
                productivity and help you achieve measurable results through
                tech-driven solutions.
              </p>
            </article>
          </div>
          <div className="mt-7 flex w-full flex-col gap-4 self-end lg:mt-10 lg:flex-row">
            <a
              download
              href="/nahar)saias_cv.pdf"
              className="flex-1 border-2 border-black bg-primary-red p-3 text-center font-quicksand font-semibold text-black shadow-[7px_7px_0px_black] transition-shadow duration-300 hover:shadow-none lg:px-10"
            >
              MY RESUME
            </a>
            <a
              href="#projects"
              className="flex-1 border-2 border-black bg-white p-3 text-center font-quicksand font-semibold text-black shadow-[7px_7px_0px_black] transition-shadow duration-300 hover:shadow-none lg:px-10"
            >
              PROJECTS
            </a>
          </div>
        </div>
        <div className="flex-1 px-5">
          <div className="mx-auto mt-2 flex h-full w-full flex-col gap-4 text-right md:justify-between">
            <h2 className="flex justify-center py-4 text-center font-mohave text-4xl font-bold lg:flex-col lg:text-7xl">
              <span>Services </span>
              <span>&nbsp;& Tech</span>
            </h2>

            {images
              .sort((a, b) => b.value - a.value)
              .map((image, index) => {
                return (
                  <SkillCard
                    reverse={true}
                    image={{
                      src: `/techstack/${image.src}`,
                      width: 50,
                      height: 50,
                      alt: `${image.src} icon`,
                    }}
                    key={index}
                    progressValue={image.value}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
