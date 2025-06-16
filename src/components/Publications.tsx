import React from 'react';

const Publications = () => {
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
    <section className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-16">
          Publications
        </h2>

        <div className="space-y-16 mb-16">
          {items.map((pub) => (
            <div
              key={pub.id}
              className="border-b border-gray-200 pb-12 last:border-b-0"
            >
              <h3 className="font-serif text-2xl text-gray-900 mb-4">
                {pub.title}
              </h3>
              <p className="font-serif text-gray-600 mb-2">{pub.authors}</p>
              <p className="font-serif text-gray-500 mb-6">{pub.journal}</p>
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-gray-900 border-b border-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                View Publication
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
