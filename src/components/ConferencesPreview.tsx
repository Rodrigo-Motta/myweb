import { Link } from 'react-router-dom';
import { conferenceAppearances, conferencesPresentations, conferencesInvitedTalks } from '../lib/conferences';

const ConferencesPreview = () => {
  return (
    <section className="py-12 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">
          Conferences & Talks
        </h2>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {conferenceAppearances.map((appearance) => (
            <article
              key={appearance.id}
              className="rounded-lg border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-1 mb-3">
                <div>
                  <h3 className="font-serif text-lg text-gray-900">
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

              <p className="font-serif text-gray-600 leading-relaxed mb-3 text-sm">
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

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div>
            <h3 className="font-serif text-2xl text-gray-900 mb-3">Presentations</h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
              {conferencesPresentations.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      {item.label}
                    </a>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-gray-900 mb-3">Invited Talks (on site)</h3>
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
              {conferencesInvitedTalks.map((talk) => (
                <li key={talk.text ?? talk.prefix ?? talk.linkLabel}>
                  {talk.text ? (
                    talk.text
                  ) : (
                    <span>
                      {talk.prefix}
                      <a
                        href={talk.linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {talk.linkLabel}
                      </a>
                      {talk.suffix}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
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
