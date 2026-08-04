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
    title: 'Talk — Characterizing Human Semantic Navigation',
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

// High-level list of presentations used on Conferences page and preview
// Each item may optionally include an href to link to a recording or resource
export const conferencesPresentations: { label: string; href?: string }[] = [
  { label: 'Oral presentation at 10th BRAINN Congress (Campinas 2024, UNICAMP, Brazil)' },
  { label: 'Poster at OHBM 2024 (Seoul, South Korea)' },
  { label: 'Poster at Brain Modes 2024 (Bilbao, Spain)' },
  { label: 'Talk at Brain Modes 2025 (Toronto, Canada)', href: 'https://youtu.be/UfnNs7bVVfQ?list=PLArBKNfJxuum3IMjvqlr934_lD18mBX2j' },
  { label: 'Poster at Stanford Graph Learning Workshop 2025 (Palo Alto, US)' },
  {
    label: 'Poster at ICLR 2026 (Rio de Janeiro, Brazil)',
    href: 'https://iclr.cc/virtual/2026/poster/10009590',
  },
  {
    label: 'Talk at Journée de la recherche 2026 (Université de Montréal, Canada)',
  },
  {
    label: 'Research visit at Mila — Quebec Artificial Intelligence Institute (2026)',
    href: 'https://mila.quebec/',
  },
];

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
