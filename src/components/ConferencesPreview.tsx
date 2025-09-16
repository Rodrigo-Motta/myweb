import { Link } from 'react-router-dom';
import { conferenceAppearances } from '../lib/conferences';

const ConferencesPreview = () => {
  return (
    <section className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-16">
          Conferences & Talks
        </h2>

        <div className="space-y-16 mb-16">
          {conferenceAppearances.map((appearance) => (
            <article key={appearance.id} className="border-b border-gray-200 pb-12 last:border-b-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-serif text-2xl text-gray-900">
                    {appearance.title}
                  </h3>
                  <p className="font-serif text-gray-600">
                    {appearance.event}
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <p className="font-serif text-gray-500">{appearance.location}</p>
                  <p className="font-serif text-gray-500">{appearance.year}</p>
                </div>
              </div>

              <p className="font-serif text-gray-600 leading-relaxed mb-4">
                {appearance.description}
              </p>

              {appearance.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {appearance.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-sm text-blue-600 underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <Link
          to="/conferences"
          className="font-serif text-gray-900 border-b border-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors"
        >
          View All Conferences & Talks
        </Link>
      </div>
    </section>
  );
};

export default ConferencesPreview;
