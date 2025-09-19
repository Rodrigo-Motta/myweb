import Navigation from '../components/Navigation';

const Work = () => {
  const scholarships = [
    {
      label: 'Undergraduate',
      href: 'https://bv.fapesp.br/en/bolsas/197807/statistical-considerations-about-the-brain-rest-state-hemodynamics-with-functional-near-infrared-spe/',
    },
    {
      label: "Master's",
      href: 'https://bv.fapesp.br/en/bolsas/211915/use-of-graph-convolutional-neural-networks-in-fmri-data-for-characterization-of-psychiatric-disorder/',
    },
    {
      label: 'Research Internship Abroad',
      href: 'https://bv.fapesp.br/en/bolsas/215745/improving-the-characterization-of-psychiatric-disorders-with-spatio-temporal-graph-convolution-neura/',
    },
    {
      label: 'AI Research Residency',
      href: 'https://www.cloudwalk.io/residency/ai/selected',
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'Improving machines by cognition',
      description:
        'Is it possible to better understand complex machines using the human cognition framework? Can we develop better AI by incorporating such theories?',
      tags: ['AI', 'LLM', 'Cognition'],
      year: '2025-ongoing',
      links: [],
    },
    {
      id: 2,
      title: 'Investigating Subjective Experience with LLMs',
      description:
        'How does our introspection translate to language? Particularly, can we understand language as positions in a rich semantic space?',
      tags: ['AI', 'LLM', 'Cognition'],
      year: '2024-ongoing',
      links: ['https://osf.io/sjwm2_v1/'],
    },
    {
      id: 3,
      title: 'Querying the Psychedelic Experience',
      description:
        'To better understand the mind we may alter it. Psychedelics might be an incredible opportunity for the exploration of the cognitive, social and emotional systems. But maybe not only for humans—but also in machines.',
      tags: ['Psychedelics', 'Research'],
      year: '2024-ongoing',
      links: ['https://www.biorxiv.org/content/10.1101/2025.04.25.650509.abstract'],
    },
    {
      id: 4,
      title: 'Graph Neural Network (GNN) and Complex System Approach to the Brain Function',
      description:
        "Somehow we manage to create the conscious experience from a result of interacting components: neurons, neurotransmitters, glia, and environment. I'm continuing to fail in solving these questions, but I'm persistent as many from the field.",
      tags: ['Graph Neural Networks (GNNs)','Neuroscience', 'Complex Systems'],
      year: '2024-ongoing',
      links: [
        'https://direct.mit.edu/netn/article/doi/10.1162/netn_a_00451/128325',
        'https://www.biorxiv.org/content/10.1101/2025.04.25.650509.abstract',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-serif">
      <Navigation />

      <main className="pt-24 md:pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif font-semibold text-5xl md:text-6xl text-gray-900 mb-8">Work</h1>
          <p className="font-serif text-xl text-gray-600 mb-24 max-w-2xl">
          </p>

          <section className="mb-20">
            <h2 className="font-serif text-3xl text-gray-900 mb-6">Scholarships & Funding</h2>
            <p className="font-serif text-gray-600 leading-relaxed mb-4">
              Awarded prestigious research scholarships in AI and Neuroscience:
            </p>
            <div className="flex flex-wrap gap-3">
              {scholarships.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-sm text-blue-600 underline"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-gray-900 mb-10">Key Projects</h2>
            <div className="grid gap-12 md:grid-cols-2">
              {projects.map((project) => (
              <article
                key={project.id}
                className="rounded-lg border border-gray-200 p-8 shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-2xl text-gray-900">{project.title}</h3>
                  <span className="font-serif text-sm text-gray-500">{project.year}</span>
                </div>

                <p className="font-serif text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-serif text-xs uppercase tracking-wide text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.links && project.links.length > 0 && (
                  <div className="flex flex-col gap-2">
                    {project.links.map((href, idx) => (
                      <a
                        key={idx}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif text-sm text-blue-600 underline break-words"
                      >
                        {href}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Work;
