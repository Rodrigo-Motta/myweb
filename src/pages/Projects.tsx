import Navigation from '../components/Navigation';
import { withBasePath } from '../utils/assetPath';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  status: string;
  images?: string[];
  imageAlt?: string;
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Visual Language Action Models for Humanoids',
    description:
      "I've been collaborating with the CloudWalk Robotics Lab on post-training of Visual Language Action (VLA) models for humanoids. You can check some of the model checkpoints and datasets on Hugging Face.",
    tags: ['Robotics', 'VLA', 'Post-training'],
    status: 'Ongoing',
    images: [withBasePath('robot.png')],
    imageAlt: 'Visual Language Action model for humanoids',
    links: [
      {
        label: 'huggingface.co/cloudwalk-research',
        href: 'https://huggingface.co/cloudwalk-research',
      },
    ],
  },
  {
    id: 2,
    title: 'Self-Healing Multi-Agent Systems',
    description:
      'I led a team on self-healing multi-agentic systems for auto research and for a self-driven vending machine, which is in production, making money, and requires almost no human in the loop — just to fill the products inside of it.',
    tags: ['Multi-Agent', 'Self-Healing', 'Production'],
    status: 'In production',
    images: [withBasePath('vending_1.jpeg'), withBasePath('vending_2.jpeg')],
    imageAlt: 'Self-driven vending machine',
  },
  {
    id: 3,
    title: 'Do Machines Trip? Inducing Altered States in LLMs',
    description:
      'Can we artificially induce an altered state of consciousness (ASC) — like those triggered by psychedelics such as LSD — within Large Language Models? By prompting and fine-tuning with psychedelic-oriented data (ASC questionnaires and Reddit trip reports), I aim to create a measurable shift in the model\'s internal processes and embedding representations. Drawing on the entropic brain hypothesis (increased entropy in neural activity as a biomarker of altered consciousness), I compare the LLM with resting-state fMRI of the brain under LSD and placebo — the first work to connect artificially induced altered states in AI to the entropic brain framework.',
    tags: ['LLMs', 'Psychedelics', 'fMRI', 'Entropy'],
    status: 'Done',
    images: [withBasePath('cw_residency.jpeg')],
    imageAlt: 'AI Research Residency',
    links: [
      {
        label: 'cloudwalk.io/residency/ai/selected',
        href: 'https://www.cloudwalk.io/residency/ai/selected',
      },
    ],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-serif">
      <Navigation />

      <main className="pt-24 md:pt-28 pb-16 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif font-semibold text-4xl md:text-5xl text-gray-900 mb-4">
            Projects
          </h1>
          <p className="font-serif text-lg text-gray-600 mb-10 max-w-2xl">
            A few cool projects ongoing or already done.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Image banner */}
                {project.images && project.images.length > 0 && (
                  <div className="w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                    {project.images.length === 1 ? (
                      <div className="w-full h-56">
                        <img
                          src={project.images[0]}
                          alt={project.imageAlt}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="flex w-full h-60 gap-1">
                        {project.images.map((src, idx) => (
                          <img
                            key={idx}
                            src={src}
                            alt={project.imageAlt}
                            className="h-full w-1/2 object-cover"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h2 className="font-serif text-lg text-gray-900 leading-snug">
                      {project.title}
                    </h2>
                    <span className="font-serif text-[11px] text-gray-500 whitespace-nowrap mt-1">
                      {project.status}
                    </span>
                  </div>

                  <p className="font-serif text-gray-600 leading-relaxed text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-gray-100 text-gray-700 text-[11px] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.links && project.links.length > 0 && (
                    <div className="mt-auto flex flex-col gap-1.5">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-serif text-xs text-blue-600 underline break-words"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
