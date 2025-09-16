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
    title: 'Mapping Consciousness with Complex Systems',
    event: 'Complexity Science Summit',
    location: 'São Paulo, Brazil',
    year: '2025',
    description:
      'Shared research on modeling subjective experience using graph neural networks and statistical physics.',
    links: [
      {
        label: 'Conference Program',
        href: 'https://example.com/complexity-summit',
      },
    ],
  },
  {
    id: 2,
    title: 'Generative AI for Neuroscience Research',
    event: 'Latin America AI Forum',
    location: 'Bogotá, Colombia',
    year: '2024',
    description:
      'Talked about practical applications of large language models for neuroscience teams and scientific communication.',
    links: [
      {
        label: 'Slides',
        href: 'https://example.com/latam-ai-slides',
      },
    ],
  },
  {
    id: 3,
    title: 'Building Tech Communities Inside Universities',
    event: 'Academic Innovation Day',
    location: 'Rio de Janeiro, Brazil',
    year: '2024',
    description:
      'Presented lessons from leading open community programs focused on AI, data science, and interdisciplinary collaboration.',
    links: [],
  },
];
