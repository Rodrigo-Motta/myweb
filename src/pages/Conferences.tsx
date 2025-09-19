import Navigation from '../components/Navigation';
import { conferenceAppearances, conferencesPresentations, conferencesInvitedTalks } from '../lib/conferences';

// presentations and invited talks moved to lib for reuse

const conferencesAwards = [
  'Best Work Presentation, 10th BRAINN Congress 2024 (UNICAMP, Brazil)',
];

const Conferences = () => {
  return (
    <div className="min-h-screen bg-white font-serif">
      <Navigation />
      <main className="pt-24 md:pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif font-semibold text-5xl md:text-6xl text-gray-900 mb-8">
            Conferences & Talks
          </h1>
          <p className="font-serif text-xl text-gray-600 mb-24 max-w-2xl">
            Highlights from keynotes, invited talks, and panels where I share insights on neuroscience,
            artificial intelligence, and community building.
          </p>

          <section className="grid gap-12 md:grid-cols-2 mb-20">
            <div>
              <h2 className="font-serif text-3xl text-gray-900 mb-4">Presentations</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                {conferencesPresentations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-gray-900 mb-4">Invited Talks (on site)</h2>
              <ul className="space-y-3 text-sm text-gray-600">
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
            <div className="md:col-span-2">
              <h2 className="font-serif text-3xl text-gray-900 mb-4">Awards</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                {conferencesAwards.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <div className="space-y-20">
            {conferenceAppearances.map((appearance) => (
              <article key={appearance.id} className="border-b border-gray-200 pb-16 last:border-b-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="font-serif text-3xl text-gray-900">{appearance.title}</h2>
                    <p className="font-serif text-gray-600">{appearance.event}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="font-serif text-gray-500">{appearance.location}</p>
                    <p className="font-serif text-gray-500">{appearance.year}</p>
                  </div>
                </div>

                <p className="font-serif text-gray-600 leading-relaxed mb-8 max-w-3xl">
                  {appearance.description}
                </p>

                {appearance.links.length > 0 && (
                  <div className="flex flex-col gap-2">
                    {appearance.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif text-sm text-blue-600 underline break-words"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Conferences;
