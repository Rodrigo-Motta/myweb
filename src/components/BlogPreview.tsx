import { Link } from 'react-router-dom';
import { OEmbedThumbnail } from '../hooks/use-oembed-thumbnail';

const BlogPreview = () => {
  const posts = [
    {
      id: 1,
      title:
        'Using Pre-Trained Transformers for Semantic Analysis of Self-Report measures in Psychology: A tutorial',
      excerpt:
        'Reviewing self-report scales for subjective time using the Sentence-T5 transformer and clustering techniques.',
      date: '2024-05-01',
      url:
        'https://medium.com/@rodrigodamottacc/using-pre-trained-transformers-for-semantic-analysis-of-self-report-measures-in-psychology-a-fc412d5bbb5e',
    },
    {
      id: 2,
      title: 'How I Organized a One-week University Course on Deep Learning',
      excerpt:
        'Insights from organizing a 20-hour deep learning course at USP and covering the main topics successfully.',
      date: '2024-03-08',
      url:
        'https://medium.com/towards-artificial-intelligence/how-i-organized-a-one-week-university-course-on-deep-learning-3bf99432f31c',
    },
    {
      id: 3,
      title:
        'The Power of Independent Component Analysis (ICA) on Real-World Applications — EEG Example',
      excerpt:
        'A look at ICA as a data-driven approach for separating linear contributions in EEG data.',
      date: '2024-02-15',
      url:
        'https://medium.com/data-science/the-power-of-independent-component-analysis-ica-on-real-world-applications-egg-example-48df336a1bd8',
    },
    {
      id: 4,
      title:
        'The Emerging Spirituality of Artificial Intelligence? From Kurzweil to Claude, Language Quietus and Psychedelic Reports',
      excerpt:
        'CW\'s researcher-in-residence discuss "emergent spirituality" on AI models, as well as the ethical implications for development and alignment',
      date: '2025-06-05',
      url:
        'https://www.cloudwalk.io/ai/the-emerging-spirituality-of-artificial-intelligence-from-kurzweil-to-claude-language-quietus-and-psychedelic-reports',
    },
  ];

  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-16">
          Recent Writing
        </h2>

        <div className="space-y-12 mb-16">
          {posts.map((post) => (
            <article key={post.id} className="border-b border-gray-200 pb-8 last:border-b-0">
              <time className="font-serif text-sm text-gray-500 mb-3 block">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
              
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <OEmbedThumbnail
                  url={post.url}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="font-serif text-2xl text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h3>
                <p className="font-serif text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
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
