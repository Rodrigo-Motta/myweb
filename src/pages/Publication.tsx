import Navigation from '../components/Navigation';

type Publication = {
  id: number;
  title: string;
  authors: string;
  journal: string;
  doi: string;
  featured?: boolean;
};

const PublicationPage = () => {
  const items: Publication[] = [
    {
      id: 7,
      title:
        'RCWT: Measuring Task-Budget Displacement from Coordination Content in LLM Calls',
      authors:
        'Brenda Lelis, Rodrigo Cabral-Carvalho',
      journal: 'arXiv preprint arXiv:2607.12216 (2026)',
      doi: 'https://doi.org/10.48550/arXiv.2607.12216',
    },
    {
      id: 6,
      title:
        'Comparing Semantic Navigation in Humans and Large Language Models using Natural Language Processing',
      authors:
        'Gabriel Paris-Colombo, Rodrigo M Cabral-Carvalho, Felipe D Toro-Hernández',
      journal:
        'Proceedings of the Annual Meeting of the Cognitive Science Society, 2026, 48(0)',
      doi: 'https://doi.org/10.48550/arXiv.2607.12195',
    },
    {
      id: 1,
      title:
        'A graph neural network approach to investigate brain critical states over neurodevelopment',
      authors:
        'R. Cabral-Carvalho, Walter H. L. Pinaya, João R. Sato',
      journal: 'Network Neuroscience 2025',
      doi: 'https://doi.org/10.1162/netn_a_00451',
      featured: true,
    },
    {
      id: 2,
      title:
        'Characterizing Human Semantic Navigation in Concept Production as Trajectories in Embedding Space',
      authors:
        'Felipe D. Toro-Hernández, Jesuino Vieira Filho, Rodrigo M. Cabral-Carvalho',
      journal: 'International Conference on Learning Representations (ICLR), 2026',
      doi: 'https://doi.org/10.48550/arXiv.2602.05971',
      featured: true,
    },
    {
      id: 3,
      title:
        'Ayahuasca Shifts Brain Dynamics Toward Higher Entropy: Persistent Elevation of Ising Temperature Correlates with Acute Subjective Effects',
      authors:
        'R. Cabral-Carvalho, Fernanda Palhano-Fontes, Draulio B. Araujo, João R. Sato',
      journal: 'bioRxiv 2025.04.25.650509',
      doi: 'https://doi.org/10.1101/2025.04.25.650509',
    },
    {
      id: 4,
      title:
        'Self-report measures of subjective time: An overview of existing measures and their semantic similarities',
      authors:
        'Bonifácio, T. A. S., Cabral-Carvalho, R., & Cravo, A.',
      journal: '2024, December 5',
      doi: 'https://doi.org/10.31234/osf.io/sjwm2',
    },
    {
      id: 5,
      title:
        'Inferences on the Watts-Strogatz Model: A Study on Brain Functional Connectivity',
      authors:
        'Allan Falconi-Souto, Rodrigo M Cabral-Carvalho, André Fujita, João Ricardo Sato',
      journal: 'Neuroinformatics, 2025;23(4):57. Springer US',
      doi: 'https://link.springer.com/article/10.1007/s12021-025-09756-z',
    }
  ];

  const featuredItems = items.filter((item) => item.featured);
  const regularItems = items.filter((item) => !item.featured);

  const renderArticle = (item: Publication) => (
    <article key={item.id} className="border-b border-gray-200 pb-4">
      <h2 className="font-serif text-lg text-gray-900 mb-1">
        {item.title}
      </h2>
      <p className="font-serif text-gray-600 text-xs mb-1" dangerouslySetInnerHTML={{ __html: item.authors.replace(/Cabral-Carvalho/g, '<b style="color:#111">Cabral-Carvalho</b>') }} />
      <p className="font-serif text-gray-500 text-xs mb-2">{item.journal}</p>
      <a
        href={item.doi}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block font-serif text-xs text-blue-600 underline"
      >
        View Article
      </a>
    </article>
  );

  return (
    <div className="min-h-screen bg-white font-serif">
      <Navigation />

      <main className="pt-24 md:pt-28 pb-16 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif font-semibold text-4xl md:text-5xl text-gray-900 mb-4">
            Publications
          </h1>
          <p className="font-serif text-lg text-gray-600 mb-10 max-w-2xl">
            A selection of my recent academic work.
          </p>

          {/* Highlighted publications */}
          {featuredItems.length > 0 && (
            <div className="mb-10">
              <h2 className="font-serif text-xl text-gray-900 mb-4">
                Highlights
              </h2>
              <div className="grid gap-3 md:grid-cols-2">
                {featuredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-1 md:p-1.5"
                  >
                    <div className="rounded-md p-4 h-full">
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-[10px] font-medium">
                          Featured
                        </span>
                      </div>
                      <h3 className="font-serif text-base text-gray-900 mb-1 leading-snug">
                        {item.title}
                      </h3>
                      <p
                        className="font-serif text-gray-600 text-xs mb-1"
                        dangerouslySetInnerHTML={{ __html: item.authors.replace(/Cabral-Carvalho/g, '<b style="color:#111">Cabral-Carvalho</b>') }}
                      />
                      <p className="font-serif text-gray-500 text-xs mb-2">{item.journal}</p>
                      <a
                        href={item.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block font-serif text-xs text-blue-600 underline"
                      >
                        View Article
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All publications */}
          <div className="space-y-6">
            {regularItems.map(renderArticle)}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PublicationPage;
