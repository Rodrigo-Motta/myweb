
import { Link } from 'react-router-dom';

const WorkPreview = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with React and Node.js",
      image: `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop`,
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Mobile App Design",
      description: "UI/UX design for a fitness tracking mobile application",
      image: `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop`,
      tags: ["UI/UX", "Figma", "Mobile"]
    },
    {
      id: 3,
      title: "Data Visualization",
      description: "Interactive dashboard for business analytics",
      image: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop`,
      tags: ["D3.js", "React", "Analytics"]
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600">
            A selection of projects that showcase my skills and passion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/work" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkPreview;
