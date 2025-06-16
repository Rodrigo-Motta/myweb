
import Navigation from '../components/Navigation';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A comprehensive e-commerce solution built with modern web technologies. Features include user authentication, payment processing, inventory management, and responsive design.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2024"
    },
    {
      id: 2,
      title: "Mobile App Design",
      description: "Complete UI/UX design for a fitness tracking mobile application. Includes user research, wireframing, prototyping, and final design system.",
      tags: ["UI/UX", "Figma", "Mobile", "Design System"],
      year: "2024"
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for business analytics with real-time data visualization, custom charts, and exportable reports.",
      tags: ["D3.js", "React", "Analytics", "TypeScript"],
      year: "2023"
    },
    {
      id: 4,
      title: "Content Management System",
      description: "Custom CMS built for content creators with drag-and-drop editor, media management, and SEO optimization tools.",
      tags: ["Vue.js", "PHP", "MySQL", "CMS"],
      year: "2023"
    },
    {
      id: 5,
      title: "Social Media App",
      description: "Full-stack social media application with real-time messaging, photo sharing, and social features.",
      tags: ["React Native", "Firebase", "Real-time", "Mobile"],
      year: "2023"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing work and blog posts with modern design and smooth animations.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Responsive"],
      year: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-serif">
      <Navigation />
      
      <main className="pt-32 pb-24 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-8">
            Work
          </h1>
          <p className="font-serif text-xl text-gray-600 mb-24 max-w-2xl">
            A collection of projects that demonstrate my skills in design, development, 
            and problem-solving.
          </p>

          <div className="space-y-20">
            {projects.map((project) => (
              <div key={project.id} className="border-b border-gray-200 pb-16 last:border-b-0">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="font-serif text-3xl text-gray-900">
                    {project.title}
                  </h2>
                  <span className="font-serif text-gray-500">{project.year}</span>
                </div>
                
                <p className="font-serif text-gray-600 leading-relaxed mb-8 max-w-3xl">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-serif text-sm text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Work;
