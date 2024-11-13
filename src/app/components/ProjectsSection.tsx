// components/ProjectsSection.tsx
import Image from "next/image";

const projects = [
  {
    title: "VibeSplit",
    description:
      "An AI powered web/mobile app that will create Spofiy playlists for you based on 'vibes'",
    imageUrl: "/projects/vibesplit.png",
    link: "/projects/vibesplit.png",
  },
  {
    title: "ShareMemez",
    description:
      "A mobile application for users to share and consume cross-application media all in one place",
    imageUrl: "/projects/sharememez.png",
    link: "/projects/sharememez.png",
  },
  // Add more projects as needed
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="mb-12 text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg bg-white shadow-md">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={800}
                height={400}
                className="h-96 w-full rounded-lg object-cover"
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
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
