
import Navigation from '../components/Navigation';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A comprehensive e-commerce solution built with modern web technologies. Features include user authentication, payment processing, inventory management, and responsive design.",
      image: `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop`,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Mobile App Design",
      description: "Complete UI/UX design for a fitness tracking mobile application. Includes user research, wireframing, prototyping, and final design system.",
      image: `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop`,
      tags: ["UI/UX", "Figma", "Mobile", "Design System"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for business analytics with real-time data visualization, custom charts, and exportable reports.",
      image: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop`,
      tags: ["D3.js", "React", "Analytics", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Content Management System",
      description: "Custom CMS built for content creators with drag-and-drop editor, media management, and SEO optimization tools.",
      image: `https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop`,
      tags: ["Vue.js", "PHP", "MySQL", "CMS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Social Media App",
      description: "Full-stack social media application with real-time messaging, photo sharing, and social features.",
      image: `https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop`,
      tags: ["React Native", "Firebase", "Real-time", "Mobile"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing work and blog posts with modern design and smooth animations.",
      image: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop`,
      tags: ["React", "TypeScript", "Tailwind CSS", "Responsive"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Work
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of projects that demonstrate my skills in design, development, 
              and problem-solving. Each project represents a unique challenge and learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div key={project.id} className="group">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      View Live
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all"
                    >
                      View Code
                    </a>
                  </div>
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
