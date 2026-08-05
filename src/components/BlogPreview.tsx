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
    return {
      primary: `https://v1.screenshot.11ty.dev/${encodeURIComponent(url)}/opengraph/`,
      fallback: FALLBACK_PLACEHOLDER,
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
      id: 15,
      title:
        'Brazilian AI Researcher From CloudWalk Unveils Multi-Agent Marketplace Simulation at Stanford',
      excerpt:
        'A multi-agent marketplace simulation where AI agents spontaneously develop social dynamics and unexpected economic behaviors — including an unprompted barter between a Brazilian beach vendor and a Tibetan honey merchant.',
      date: '2025-11-26',
      url: 'https://www.cloudwalk.io/newsroom/brazilian-ai-researcher-from-cloudwalk-unveils-multi-agent-marketplace-simulation-at-stanford-pioneering-the-future-of-autonomous-digital-commerce',
      ...buildThumbnail(
        'https://www.cloudwalk.io/newsroom/brazilian-ai-researcher-from-cloudwalk-unveils-multi-agent-marketplace-simulation-at-stanford-pioneering-the-future-of-autonomous-digital-commerce',
      ),
    },
        {
      id: 12,
      title: 'Neural Networks via Information',
      excerpt:
        'A way to better understand learning with deep neural networks through the lens of information theory.',
      date: '2022-12-13',
      url: 'https://medium.com/data-science/neural-network-via-information-68af7f49b978',
      ...buildThumbnail(
        'https://medium.com/data-science/neural-network-via-information-68af7f49b978',
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
      id: 5,
      title: 'How I Organized a One-week University Course on Deep Learning',
      excerpt:
        'A hot topic in data science is how to teach it; this article details my experience organizing a 20-hour deep learning course at USP.',
      date: '2024-03-08',
      url:
        'https://medium.com/towards-artificial-intelligence/how-i-organized-a-one-week-university-course-on-deep-learning-3bf99432f31c',
      ...buildThumbnail(
        'https://medium.com/towards-artificial-intelligence/how-i-organized-a-one-week-university-course-on-deep-learning-3bf99432f31c',
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
    <section className="py-8 px-6 md:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6">
          Recent Writing
        </h2>

        <div className="grid gap-4 md:grid-cols-2 mb-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="flex group">
                <div className="w-40 sm:w-44 flex-shrink-0 aspect-[3/2] overflow-hidden bg-gray-100">
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
                <div className="p-3 flex-1">
                  <time className="font-serif text-[11px] text-gray-500 mb-0.5 block uppercase tracking-wide">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h3 className="font-serif text-sm text-gray-900 leading-snug mb-1 group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-serif text-gray-600 leading-relaxed text-xs line-clamp-2">
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
