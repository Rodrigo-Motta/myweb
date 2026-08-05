export type ConferenceAppearance = {
  id: number;
  title: string;
  event: string;
  location: string;
  year: string;
  description: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

export const conferenceAppearances: ConferenceAppearance[] = [
  {
    id: 1,
    title: 'Deep Learning Course — Geometric Deep Learning Lecturer',
    event: 'Institute of Physics – University of São Paulo (IFUSP)',
    location: 'São Paulo, Brazil',
    year: '2024',
    description:
      'One-week Deep Learning course with 5 professors from industry and academia, attended by 60 participants. I was the lecturer of the Geometric Deep Learning section at the Institute of Physics – University of São Paulo.',
    links: [
      {
        label: 'Content',
        href: 'https://www.youtube.com/@Hacker.SpaceIFUSP/playlists',
      },
    ],
  },
  {
    id: 2,
    title: 'Talk — Brain Modes 2025',
    event: 'Brain Modes 2025',
    location: 'Toronto, Canada',
    year: '2025',
    description: 'Talk presented at Brain Modes 2025. Recording available.',
    links: [
      {
        label: 'Talk recording',
        href: 'https://youtu.be/UfnNs7bVVfQ?list=PLArBKNfJxuum3IMjvqlr934_lD18mBX2j',
      },
    ],
  },
  {
    id: 3,
    title: 'AgentMarket: Generative Agents in Dynamic Market Networks',
    event: 'Stanford Graph Learning Workshop 2025',
    location: 'Palo Alto, US',
    year: '2025',
    description: 'Poster presentation on generative agents in dynamic market networks.',
    links: [],
  },
  {
    id: 4,
    title: 'Characterizing Human Semantic Navigation in Concept Production as Trajectories in Embedding Space',
    event: 'ICLR 2026',
    location: 'Rio de Janeiro, Brazil',
    year: '2026',
    description:
      'Poster presentation at the International Conference on Learning Representations (ICLR 2026). The work introduces a framework that represents concept production as navigation through embedding space, constructing participant-specific semantic trajectories to investigate how humans traverse meaning geometry.',
    links: [
      {
        label: 'Paper',
        href: 'https://doi.org/10.48550/arXiv.2602.05971',
      },
      {
        label: 'ICLR Poster',
        href: 'https://iclr.cc/virtual/2026/poster/10009590',
      },
    ],
  },
  {
    id: 5,
    title: 'Poster — Characterizing Human Semantic Navigation',
    event: 'Journée de la recherche 2026, Université de Montréal',
    location: 'Montréal, Canada',
    year: '2026',
    description:
      'Presented our ICLR paper with Jesuino Vieira at the Université de Montréal for the Journée de la recherche 2026, exchanging ideas on the intersection of cognitive science and AI. Also visited researchers at Mila — Quebec Artificial Intelligence Institute to discuss ongoing collaborations.',
    links: [
      {
        label: 'Mila — Quebec AI Institute',
        href: 'https://mila.quebec/',
      },
    ],
  },
];

// Structured presentations used on the Conferences page. Rendered as a
// compact table with type badges (Poster / Talk / Oral / Research visit)
// and a year column, so the list is scannable instead of long text lines.
export type Presentation = {
  type: 'Poster' | 'Talk' | 'Oral presentation' | 'Publication and Poster' | 'Research visit';
  venue: string;
  location: string;
  year: string;
  href?: string;
};

export const conferencesPresentations: Presentation[] = [
  {
    type: 'Publication and Poster',
    venue: 'ICLR 2026',
    location: 'Rio de Janeiro, Brazil',
    year: '2026',
    href: 'https://iclr.cc/virtual/2026/poster/10009590',
  },
  {
    type: 'Poster',
    venue: 'Stanford Graph Learning Workshop — AgentMarket',
    location: 'Palo Alto, USA',
    year: '2025',
  },
  {
    type: 'Talk',
    venue: 'Brazilian Society of Neuroscience and Behaviour — Quantifying Subjective Experiences with LLMs',
    location: 'São Paulo, Brazil',
    year: '2025',
  },
  {
    type: 'Talk',
    venue: 'Brain Modes 2025',
    location: 'Toronto, Canada',
    year: '2025',
    href: 'https://youtu.be/UfnNs7bVVfQ?list=PLArBKNfJxuum3IMjvqlr934_lD18mBX2j',
  },
  {
    type: 'Poster',
    venue: 'Brain Modes 2024',
    location: 'Bilbao, Spain',
    year: '2024',
  },
  {
    type: 'Poster',
    venue: 'Organization for Human Brain Mapping (OHBM) 2024',
    location: 'Seoul, South Korea',
    year: '2024',
  },
  {
    type: 'Oral presentation',
    venue: '10th BRAINN Congress',
    location: 'UNICAMP, Brazil',
    year: '2024',
  },
  {
    type: 'Poster',
    venue: 'Journée de la recherche 2026',
    location: 'Université de Montréal, Canada',
    year: '2026',
  },
  {
    type: 'Research visit',
    venue: 'Mila — Quebec Artificial Intelligence Institute',
    location: 'Montréal, Canada',
    year: '2026',
    href: 'https://mila.quebec/',
  },
];

// Uniqueness guard: throws if any presentation entries are duplicated (by
// venue + year) so accidental repeats surface immediately in dev/build
// instead of rendering with duplicate React keys.
const _dup = conferencesPresentations
  .map((p) => `${p.venue} · ${p.year}`)
  .filter((key, i, arr) => arr.indexOf(key) !== i);
if (_dup.length > 0) {
  throw new Error(
    `Duplicate conferencesPresentations entries found:\n${_dup.map((d) => `  - ${d}`).join('\n')}`,
  );
}

// Invited talks list used on Conferences page and preview
export type InvitedTalk = {
  text?: string;
  prefix?: string;
  linkLabel?: string;
  linkHref?: string;
  suffix?: string;
};

export const conferencesInvitedTalks: InvitedTalk[] = [
  {
    prefix: 'Yonsei University, South Korea (Prof. Byung-Hoon Kim & ',
    linkLabel: 'NAIPL',
    linkHref: 'https://egyptdj.notion.site/naipl',
    suffix: ')',
  },
  { text: 'Imperial College London (Dr. Pedro Mediano)' },
  {
    prefix: "King's College London (",
    linkLabel: 'MeTrICS Lab',
    linkHref: 'https://metrics-lab.github.io/',
    suffix: ', Dr. Emma Robinson)',
  },
  {
    prefix: 'University of Oxford (Prof. Rui Costa & ',
    linkLabel: 'NeuroAI group',
    linkHref: 'https://neuralml.github.io',
    suffix: ')',
  },
  { text: 'University of Zurich (Prof. Susanne Wegener & Prof. Nicolas Langer)' },
];
