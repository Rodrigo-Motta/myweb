import Navigation from '../components/Navigation';
import {
  conferenceAppearances,
  conferencesPresentations,
  conferencesInvitedTalks,
} from '../lib/conferences';

const conferencesAwards = [
  'Best Work Presentation, 10th BRAINN Congress 2024 (UNICAMP, Brazil)',
];

const Conferences = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-serif">
      <Navigation />
      <main className="pt-24 md:pt-28 pb-16 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif font-semibold text-4xl md:text-5xl text-gray-900 mb-4">
            Conferences & Talks
          </h1>
          <p className="font-serif text-lg text-gray-600 mb-10 max-w-2xl">
            Highlights from keynotes, invited talks, and panels where I share
            insights on neuroscience, artificial intelligence, and community
            building.
          </p>

          {/* Overview cards: Presentations, Invited Talks, Awards */}
          <section className="grid gap-4 md:grid-cols-3 mb-12">
            {/* Presentations */}
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <h2 className="font-serif text-lg text-gray-900 mb-3 pb-2 border-b border-gray-100">
                Presentations
              </h2>
              <ul className="space-y-2 text-xs text-gray-600">
                {conferencesPresentations.map((item) => (
                  <li key={item.label} className="leading-relaxed">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {item.label}
                      </a>
                    ) : (
                      item.label
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Invited Talks */}
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <h2 className="font-serif text-lg text-gray-900 mb-3 pb-2 border-b border-gray-100">
                Invited Talks
              </h2>
              <ul className="space-y-2 text-xs text-gray-600">
                {conferencesInvitedTalks.map((talk) => (
                  <li
                    key={talk.text ?? talk.prefix ?? talk.linkLabel}
                    className="leading-relaxed"
                  >
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

            {/* Awards */}
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <h2 className="font-serif text-lg text-gray-900 mb-3 pb-2 border-b border-gray-100">
                Awards
              </h2>
              <ul className="space-y-2 text-xs text-gray-600">
                {conferencesAwards.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Highlighted appearances */}
          <section>
            <h2 className="font-serif text-xl text-gray-900 mb-4">
              Highlights
            </h2>
            <div className="space-y-3">
              {conferenceAppearances.map((appearance) => (
                <article
                  key={appearance.id}
                  className="rounded-lg border border-gray-200 bg-white p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-1">
                    <div className="flex-1">
                      <h3 className="font-serif text-base text-gray-900 leading-snug">
                        {appearance.title}
                      </h3>
                      <p className="font-serif text-gray-600 text-xs">
                        {appearance.event}
                      </p>
                    </div>
                    <div className="flex flex-row gap-3 md:flex-col md:gap-0 md:text-right flex-shrink-0">
                      <span className="font-serif text-[11px] text-gray-500">
                        {appearance.location}
                      </span>
                      <span className="font-serif text-[11px] text-gray-900 font-semibold">
                        {appearance.year}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-serif text-gray-600 leading-relaxed mb-2 text-xs">
                    {appearance.description}
                  </p>

                  {/* Links */}
                  {appearance.links.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {appearance.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-serif text-[11px] text-blue-600 underline break-words"
                        >
                          {link.label}
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

export default Conferences;
