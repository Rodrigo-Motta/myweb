
import { Link } from 'react-router-dom';

const WorkPreview = () => {
  const projects = [
      {
      id: 1,
      title: "Improving machines by cognition",
      description:
        "Is it possible to better understand complex machines using the human cognition framework? Can we develop better AI by incorporating such theories?",
      tags: ["AI", "LLM", "Cognition"],
      year: "2025-ongoing"
    },
    {
      id: 4,
      title: "Complex System Approach to the Brain functioning",
      description:
        "Somehow we manage to create the conscious experience from a result of interacting components: neurons, neurotransmitters, glia, and environment. I'm continuing to fail in solving these questions, but I'm persistent as many from the field.",
      tags: ["Neuroscience", "Complex Systems"],
      year: "2024"
    },
  ];

  return (
    <section className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-16">
          Selected Work
        </h2>

        <div className="space-y-16 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="border-b border-gray-200 pb-12 last:border-b-0">
              <h3 className="font-serif text-2xl text-gray-900 mb-4">
                {project.title}
              </h3>
              <p className="font-serif text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-serif text-sm text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Link 
          to="/work" 
          className="font-serif text-gray-900 border-b border-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default WorkPreview;
