import Navigation from '../components/Navigation';

const Publication = () => {
  const items = [
    {
      id: 1,
      title:
        'A graph neural network approach to investigate brain critical states over neurodevelopment',
      authors:
        'Rodrigo M. Cabral-Carvalho, Walter H. L. Pinaya, João R. Sato',
      journal: 'Network Neuroscience 2025',
      doi: 'https://doi.org/10.1162/netn_a_00451',
    },
    {
      id: 2,
      title:
        'Ayahuasca Shifts Brain Dynamics Toward Higher Entropy: Persistent Elevation of Ising Temperature Correlates with Acute Subjective Effects',
      authors:
        'Rodrigo M. Cabral-Carvalho, Fernanda Palhano-Fontes, Draulio B. Araujo, João R. Sato',
      journal: 'bioRxiv 2025.04.25.650509',
      doi: 'https://doi.org/10.1101/2025.04.25.650509',
    },
    {
      id: 3,
      title:
        'Self-report measures of subjective time: An overview of existing measures and their semantic similarities',
      authors:
        'Bonifácio, T. A. S., Cabral-Carvalho, R., & Cravo, A.',
      journal: '2024, December 5',
      doi: 'https://doi.org/10.31234/osf.io/sjwm2',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-serif">
      <Navigation />

      <main className="pt-32 pb-24 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-8">
            Publications
          </h1>
          <p className="font-serif text-xl text-gray-600 mb-24 max-w-2xl">
            A selection of my recent academic work.
          </p>

          <div className="space-y-20">
            {items.map((item) => (
              <div key={item.id} className="border-b border-gray-200 pb-12 last:border-b-0">
                <h2 className="font-serif text-3xl text-gray-900 mb-4">
                  {item.title}
                </h2>
                <p className="font-serif text-gray-600 mb-2">{item.authors}</p>
                <p className="font-serif text-gray-500 mb-6">{item.journal}</p>
                <a
                  href={item.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                  View Article
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Publication;

