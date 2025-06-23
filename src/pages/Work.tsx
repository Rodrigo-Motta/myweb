import Navigation from '../components/Navigation';
import Link from 'next/link';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Improving machines by cognition",
      description:
        "Is it possible to better understand complex machines using the human cognition framework? Can we develop better AI by incorporating such theories?",
      tags: ["AI", "LLM", "Cognition"],
      year: "2025-ongoing",
      links: []
    },
    {
      id: 2,
      title: "Investigating Subjective Experience with LLMs",
      description:
        "How does our introspection translate to language? Particularly, can we understand language as positions in a rich semantic space?",
      tags: ["AI", "LLM", "Cognition"],
      year: "2024-ongoing",
      links: [
        "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=jaaS6acAAAAJ&citation_for_view=jaaS6acAAAAJ:9yKSN-GCB0IC"
      ]
    },
    {
      id: 3,
      title: "Querying the Psychedelic Experience",
      description:
        "To better understand the mind we may alter it. Psychedelics might be an incredible opportunity for the exploration of the cognitive, social and emotional systems. But maybe not only for humans—but also in machines.",
      tags: ["Psychedelics", "Research"],
      year: "2024-ongoing",
      links: [
        "https://www.biorxiv.org/content/10.1101/2025.04.25.650509v1"
      ]
    },
    {
      id: 4,
      title: "Complex System Approach to the Brain Functioning",
      description:
        "Somehow we manage to create the conscious experience from a result of interacting components: neurons, neurotransmitters, glia, and environment. I'm continuing to fail in solving these questions, but I'm persistent as many from the field.",
      tags: ["Neuroscience", "Complex Systems"],
      year: "2024",
      links: [
        "https://www.biorxiv.org/content/10.1101/2025.04.25.650509v1",
        "https://direct.mit.edu/netn/article/doi/10.1162/netn_a_00451/128325/A-graph-neural-network-approach-to-investigate"
      ]
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

                {project.links.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-4">
                    {project.links.map((url, idx) => (
                      <Link href={url} passHref key={idx}>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                          View Paper{project.links.length > 1 ? ` (${idx + 1})` : ''}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Work;