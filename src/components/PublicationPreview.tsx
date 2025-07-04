
import { Link } from 'react-router-dom';

const PublicationPreview = () => {
  const selectedPublications = [
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
  ];

  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-16">
          Selected Publications
        </h2>

        <div className="space-y-12 mb-16">
          {selectedPublications.map((publication) => (
            <article key={publication.id} className="border-b border-gray-200 pb-8 last:border-b-0">
              <h3 className="font-serif text-2xl text-gray-900 mb-3">
                {publication.title}
              </h3>
              <p className="font-serif text-gray-600 mb-2">{publication.authors}</p>
              <p className="font-serif text-gray-500 mb-4">{publication.journal}</p>
              <a
                href={publication.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-serif text-gray-900 border-b border-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                View Article
              </a>
            </article>
          ))}
        </div>

        <Link 
          to="/publication" 
          className="font-serif text-gray-900 border-b border-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors"
        >
          View All Publications
        </Link>
      </div>
    </section>
  );
};

export default PublicationPreview;
