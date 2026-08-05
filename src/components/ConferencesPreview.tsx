import { Link } from 'react-router-dom';
import { conferenceAppearances } from '../lib/conferences';

const ConferencesPreview = () => {
  return (
    <section className="py-8 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-5">
          Conferences & Talks
        </h2>

        <div className="grid gap-3 md:grid-cols-2 mb-5">
          {conferenceAppearances.map((appearance) => (
            <article
              key={appearance.id}
              className="rounded-lg border border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-0.5 mb-1.5">
                <div>
                  <h3 className="font-serif text-sm text-gray-900 leading-snug">
                    {appearance.title}
                  </h3>
                  <p className="font-serif text-gray-600 text-xs">
                    {appearance.event}
                  </p>
                </div>
                <div className="text-gray-500 text-[11px] uppercase tracking-wide">
                  <span>{appearance.location}</span> · <span>{appearance.year}</span>
                </div>
              </div>

              <p className="font-serif text-gray-600 leading-relaxed mb-1.5 text-xs line-clamp-2">
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
                      className="font-serif text-xs text-blue-600 underline"
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
