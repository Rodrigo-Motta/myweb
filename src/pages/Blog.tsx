import Navigation from '../components/Navigation';
import { useEffect, useState } from 'react';

const FALLBACK_PLACEHOLDER =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#f5f5f5" offset="0"/><stop stop-color="#e7e7e7" offset="1"/></linearGradient></defs><rect width="400" height="300" fill="url(#g)"/><text x="200" y="160" fill="#9ca3af" font-family="serif" font-size="32" text-anchor="middle">No preview</text></svg>',
  );

const buildThumbnail = (url: string) => {
  try {
    const { hostname } = new URL(url);
    const fallback = `https://logo.clearbit.com/${hostname}?size=800`;

    if (hostname.includes('medium.com')) {
      return {
        primary: fallback,
        fallback,
      };
    }

    return {
      primary: `https://v1.screenshot.11ty.dev/${encodeURIComponent(url)}/opengraph/`,
      fallback,
    };
  } catch (error) {
    return {
      primary: FALLBACK_PLACEHOLDER,
      fallback: FALLBACK_PLACEHOLDER,
    };
  }
};

const Blog = () => {
  const [ogMap, setOgMap] = useState<Record<string, string | null>>({});
  const rawPosts = [
    {
      id: 13,
      title: 'FIRST TOKEN BIAS: TRANSFORMERS AS GRAPHS',
      excerpt:
        'Recent investigations suggest why Transformers don’t treat all tokens equally, routing favors at the start of the sequence',
      date: '2025-08-19',
      readTime: '5 min read',
      tags: ['AI', 'Transformers', 'Deep Learning'],
      url:
        'https://www.cloudwalk.io/ai/first-token-bias-transformers-as-graphs',
      featured: false,
    },
    {
      id: 1,
      title:
        'The Emerging Spirituality of Artificial Intelligence? From Kurzweil to Claude, Language Quietus and Psychedelic Reports',
      excerpt:
        "CW's researcher-in-residence discuss \u201cemergent spirituality\u201d on AI models, as well as the ethical implications for development and alignment",
      date: '2025-06-05',
      readTime: '7 min read',
      tags: ['AI', 'Science', 'Futurism'],
      url:
        'https://www.cloudwalk.io/ai/the-emerging-spirituality-of-artificial-intelligence-from-kurzweil-to-claude-language-quietus-and-psychedelic-reports',
      featured: false,
    },
    {
      id: 2,
      title:
        'A ciência de dados dos dados de dados do Nerdcast de RPG: O dado é realmente justo?',
      excerpt:
        'Usando episódios de Ghanor para investigar se os dados do podcast Nerdcast são justos.',
      date: '2025-05-08',
      readTime: '6 min read',
      tags: ['Data Science', 'Podcast', 'RPG'],
      url:
        'https://medium.com/@rodrigodamottacc/a-ci%C3%AAncia-de-dados-dos-dados-de-dados-do-nerdcast-de-rpg-o-dado-%C3%A9-realmente-justo-d41e8e0eaeb3',
      featured: false,
    },
    {
      id: 3,
      title: 'Simulating Vibrations: The Advanced Physics Behind Drums and Speakers',
      excerpt:
        'Exploring the 2D Wave Equation through simulations and by hearing them.',
      date: '2024-06-05',
      readTime: '12 min read',
      tags: ['Physics', 'Simulation', 'Audio'],
      url:
        'https://medium.com/@rodrigodamottacc/simulating-vibrations-the-advanced-physics-behind-drums-and-speakers-b350f6fb1362',
      featured: false,
    },
    {
      id: 4,
      title:
        'Using Pre-Trained Transformers for Semantic Analysis of Self-Report measures in Psychology: A tutorial',
      excerpt:
        'In our recently published paper we reviewed self-report scales for subjective time and evaluated their semantic similarities using transformer models.',
      date: '2024-05-01',
      readTime: '6 min read',
      tags: ['AI', 'LLMs', 'Psychology'],
      url:
        'https://medium.com/@rodrigodamottacc/using-pre-trained-transformers-for-semantic-analysis-of-self-report-measures-in-psychology-a-fc412d5bbb5e',
      featured: true,
    },
    {
      id: 5,
      title: 'How I Organized a One-week University Course on Deep Learning',
      excerpt:
        'A hot topic in data science is how to teach it; this article details my experience organizing a 20-hour deep learning course at USP.',
      date: '2024-03-08',
      readTime: '8 min read',
      tags: ['AI', 'Education', 'Courses'],
      url:
        'https://medium.com/towards-artificial-intelligence/how-i-organized-a-one-week-university-course-on-deep-learning-3bf99432f31c',
      featured: false,
    },
    {
      id: 6,
      title: 'From a Deep Learning Model to a Web Application',
      excerpt:
        'How to deploy your model for thousands using only Python frameworks.',
      date: '2024-02-16',
      readTime: '8 min read',
      tags: ['AI', 'Deployment', 'Web'],
      url:
        'https://medium.com/towards-artificial-intelligence/from-a-deep-learning-model-to-a-web-application-4b289cb55452',
      featured: false,
    },
    {
      id: 7,
      title: "Introduction to MRI: Forget the classical explanations, let's go quantum",
      excerpt:
        'An accessible dive into MRI fundamentals using the quantum framework without heavy math.',
      date: '2024-01-10',
      readTime: '9 min read',
      tags: ['MRI', 'Quantum', 'Education'],
      url:
        'https://medium.com/@rodrigodamottacc/introduction-to-mri-forget-the-classical-explanations-lets-go-quantum-c2bc14273437',
      featured: false,
    },
    {
      id: 8,
      title: 'Solving Autocorrelation Problems in General Linear Model on a Real-World Application',
      excerpt:
        'Delving into one of the most common nightmares for data scientists.',
      date: '2023-12-13',
      readTime: '8 min read',
      tags: ['Data Science', 'Statistics'],
      url:
        'https://medium.com/data-science/solving-autocorrelation-problems-in-general-linear-model-on-a-real-world-application-0bd3eeda20a1',
      featured: false,
    },
    {
      id: 9,
      title:
        'The Power of Independent Component Analysis (ICA) on Real-World Applications — EEG Example',
      excerpt:
        'Independent component analysis (ICA) is a powerful data-driven tool capable of separating linear contributions in the data.',
      date: '2023-10-23',
      readTime: '6 min read',
      tags: ['Data Science', 'Neuroscience'],
      url:
        'https://medium.com/data-science/the-power-of-independent-component-analysis-ica-on-real-world-applications-egg-example-48df336a1bd8',
      featured: false,
    },
    {
      id: 10,
      title: 'How Does the Uncertainty Principle Limit Time Series Analysis?',
      excerpt:
        'Why we cannot extract precise time and frequency information simultaneously and how wavelets help.',
      date: '2023-08-31',
      readTime: '6 min read',
      tags: ['Time Series', 'Signal Processing'],
      url:
        'https://medium.com/data-science/how-does-the-uncertainty-principle-limit-time-series-analysis-c94c442ba953',
      featured: false,
    },
    {
      id: 11,
      title: 'Unsupervised Learning Meets Emergent Pattern',
      excerpt:
        'How unsupervised learning can help detect phase transitions and emergent phenomena.',
      date: '2023-04-26',
      readTime: '6 min read',
      tags: ['Unsupervised', 'Physics'],
      url:
        'https://medium.com/data-science/unsupervised-learning-meets-emergent-pattern-ae5948a714f1',
      featured: false,
    },
    {
      id: 12,
      title: 'Neural Networks via Information',
      excerpt:
        'A way to better understand learning with deep neural networks.',
      date: '2022-12-13',
      readTime: '7 min read',
      tags: ['Deep Learning', 'Information Theory'],
      url:
        'https://medium.com/data-science/neural-network-via-information-68af7f49b978',
      featured: false,
    },
  ];

  const posts = rawPosts.map((post) => ({
    ...post,
    ...buildThumbnail(post.url),
  }));

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  // Fetch Open Graph images for each post URL once
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const entries = await Promise.all(
          rawPosts.map(async (p) => {
            try {
              const r = await fetch(`/api/link-preview?url=${encodeURIComponent(p.url)}`);
              if (!r.ok) throw new Error(String(r.status));
              const data = await r.json();
              return [p.url, (data?.image as string | null) || null] as const;
            } catch {
              return [p.url, null] as const;
            }
          })
        );
        if (!cancelled) {
          const next: Record<string, string | null> = {};
          for (const [u, img] of entries) next[u] = img;
          setOgMap(next);
        }
      } catch {
        // ignore
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Where a personal projects, Data Science, Cognition, Neuroscience, AI, Physics, Education, and some entropy meet.
            </p>
          </div>

          

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 md:p-4">
                <div className="flex items-center mb-1">
                  <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-[10px] font-medium">
                    Featured
                  </span>
                </div>

                <a
                  href={featuredPost.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="overflow-hidden rounded-md mb-3 aspect-[16/6]">
                    <img
                      src={ogMap[featuredPost.url] || featuredPost.primary}
                      alt={`Thumbnail for ${featuredPost.title}`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      data-fallback-applied="false"
                      onError={(event) => {
                        const img = event.currentTarget;
                        if (img.dataset.fallbackApplied === 'true') {
                          img.src = FALLBACK_PLACEHOLDER;
                        } else {
                          img.dataset.fallbackApplied = 'true';
                          img.src = featuredPost.fallback;
                        }
                      }}
                    />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </a>
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-gray-500 mb-2">
                  <time>
                    {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {featuredPost.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-white text-gray-700 text-[10px] rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts */}
          <div className="space-y-10">
            {regularPosts.map((post) => (
              <article key={post.id} className="border-b border-gray-200 pb-10 last:border-b-0">
                <div className="flex flex-col md:flex-row gap-6">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block md:w-60 overflow-hidden rounded-xl flex-shrink-0"
                  >
                    <img
                      src={ogMap[post.url] || post.primary}
                      alt={`Thumbnail for ${post.title}`}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                      data-fallback-applied="false"
                      onError={(event) => {
                        const img = event.currentTarget;
                        if (img.dataset.fallbackApplied === 'true') {
                          img.src = FALLBACK_PLACEHOLDER;
                        } else {
                          img.dataset.fallbackApplied = 'true';
                          img.src = post.fallback;
                        }
                      }}
                    />
                  </a>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 mb-3 gap-2">
                      <time>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span>{post.readTime}</span>
                    </div>

                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 leading-relaxed text-base">
                        {post.excerpt}
                      </p>
                    </a>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs md:text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
