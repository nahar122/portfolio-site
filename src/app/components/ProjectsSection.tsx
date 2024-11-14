// components/ProjectsSection.tsx
import Banner from "./Banner";
import ImageCarousel from "./ImageCarousel";

const projects = [
  {
    title: "VibeSplit",
    description:
      "An AI-powered web/mobile app that creates Spotify playlists for you based on 'vibes'.",
    imageUrls: ["/projects/vibesplit1.png", "/projects/vibesplit2.png"],
    link: "/projects/vibesplit",
  },
  {
    title: "ShareMemez",
    description:
      "A mobile application for users to share and consume cross-application media all in one place.",
    imageUrls: ["/projects/sharememez1.png", "/projects/sharememez2.png"],
    link: "/projects/sharememez",
  },
  // Add more projects as needed
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="mt-20 bg-gray-100 py-20">
      <Banner />
      <div className="container mx-auto text-center">
        <h2 className="mb-12 text-left font-mohave text-7xl font-bold text-black">
          PROJECTS
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg bg-light shadow-md">
              <ImageCarousel images={project.imageUrls} />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold text-black">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
