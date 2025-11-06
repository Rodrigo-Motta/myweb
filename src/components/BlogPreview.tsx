import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchOgImage } from '@/utils/fetchOg';

const FALLBACK_PLACEHOLDER =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#f5f5f5" offset="0"/><stop stop-color="#e7e7e7" offset="1"/></linearGradient></defs><rect width="400" height="300" fill="url(#g)"/><text x="200" y="160" fill="#9ca3af" font-family="serif" font-size="36" text-anchor="middle">No preview</text></svg>',
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

const BlogPreview = () => {
  const [ogMap, setOgMap] = useState<Record<string, string | null>>({});
  const posts = [
        {
      id: 14,
      title: 'RAG, TOOL-CALLING, AND THE FIGHT AGAINST HALLUCINATIONS',
      excerpt:
        'This article serves as a survey and futuristic perspective on trustworthy AI anchored on knowledge retrieval',
      date: '2025-11-06',
      url: 'https://www.cloudwalk.io/ai/rag-tool-calling-and-the-fight-against-hallucinations',
      ...buildThumbnail(
        'https://www.cloudwalk.io/ai/rag-tool-calling-and-the-fight-against-hallucinations',
      ),
    },
    {
      id: 13,
      title: 'FIRST TOKEN BIAS: TRANSFORMERS AS GRAPHS',
      excerpt:
        'Recent investigations suggest why Transformers don’t treat all tokens equally, routing favors at the start of the sequence',
      date: '2025-08-19',
      url:
        'https://www.cloudwalk.io/ai/first-token-bias-transformers-as-graphs',
      ...buildThumbnail(
        'https://www.cloudwalk.io/ai/first-token-bias-transformers-as-graphs',
      ),
    },
    {
      id: 1,
      title:
        'The Emerging Spirituality of Artificial Intelligence? From Kurzweil to Claude, Language Quietus and Psychedelic Reports',
      excerpt:
        'CW\'s researcher-in-residence discuss "emergent spirituality" on AI models, as well as the ethical implications for development and alignment',
      date: '2025-06-05',
      url:
        'https://www.cloudwalk.io/ai/the-emerging-spirituality-of-artificial-intelligence-from-kurzweil-to-claude-language-quietus-and-psychedelic-reports',
      ...buildThumbnail(
        'https://www.cloudwalk.io/ai/the-emerging-spirituality-of-artificial-intelligence-from-kurzweil-to-claude-language-quietus-and-psychedelic-reports',
      ),
    },
    {
      id: 3,
      title: 'Simulating Vibrations: The Advanced Physics Behind Drums and Speakers',
      excerpt:
        'Exploring the 2D Wave Equation through simulations and by hearing them.',
      date: '2024-06-05',
      url:
        'https://medium.com/@rodrigodamottacc/simulating-vibrations-the-advanced-physics-behind-drums-and-speakers-b350f6fb1362',
      ...buildThumbnail(
        'https://medium.com/@rodrigodamottacc/simulating-vibrations-the-advanced-physics-behind-drums-and-speakers-b350f6fb1362',
      ),
    },
    {
      id: 4,
      title:
        'Using Pre-Trained Transformers for Semantic Analysis of Self-Report measures in Psychology: A tutorial',
      excerpt:
        'Reviewing self-report scales for subjective time using the Sentence-T5 transformer and clustering techniques.',
      date: '2024-05-01',
      url:
        'https://medium.com/@rodrigodamottacc/using-pre-trained-transformers-for-semantic-analysis-of-self-report-measures-in-psychology-a-fc412d5bbb5e',
      ...buildThumbnail(
        'https://medium.com/@rodrigodamottacc/using-pre-trained-transformers-for-semantic-analysis-of-self-report-measures-in-psychology-a-fc412d5bbb5e',
      ),
    },
  ];

  // Fetch Open Graph images for each post URL once
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const entries = await Promise.all(posts.map(async (p) => [p.url, await fetchOgImage(p.url)] as const));
        if (!cancelled) {
          const next: Record<string, string | null> = {};
          for (const [u, img] of entries) next[u] = img;
          setOgMap(next);
        }
      } catch {
        // ignore network errors
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="py-12 px-6 md:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8">
          Recent Writing
        </h2>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={ogMap[post.url] || post.primary}
                    alt={`Thumbnail for ${post.title}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                </div>
                <div className="p-5">
                  <time className="font-serif text-xs text-gray-500 mb-2 block uppercase tracking-wide">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h3 className="font-serif text-xl text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-serif text-gray-600 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>

        <Link 
          to="/blog" 
          className="font-serif text-gray-900 border-b border-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors"
        >
          Read All Posts
        </Link>
      </div>
    </section>
  );
};

export default BlogPreview;
