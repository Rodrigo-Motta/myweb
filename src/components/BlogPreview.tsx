
import { Link } from 'react-router-dom';

const BlogPreview = () => {
  const posts = [
    {
      id: 1,
      title:
        'The Emerging Spirituality of Artificial Intelligence? From Kurzweil to Claude, Language Quietus and Psychedelic Reports',
      excerpt:
        'CW\'s researcher-in-residence discuss "emergent spirituality" on AI models, as well as the ethical implications for development and alignment',
      date: '2025-06-05',
      url:
        'https://www.cloudwalk.io/ai/the-emerging-spirituality-of-artificial-intelligence-from-kurzweil-to-claude-language-quietus-and-psychedelic-reports',
    },
    {
      id: 2,
      title:
        'A ciência de dados dos dados de dados do Nerdcast de RPG: O dado é realmente justo?',
      excerpt:
        'Usando episódios de Ghanor para investigar se os dados do podcast Nerdcast são justos.',
      date: '2025-05-08',
      url:
        'https://medium.com/@rodrigodamottacc/a-ci%C3%AAncia-de-dados-dos-dados-de-dados-do-nerdcast-de-rpg-o-dado-%C3%A9-realmente-justo-d41e8e0eaeb3',
    },
    {
      id: 3,
      title: 'Simulating Vibrations: The Advanced Physics Behind Drums and Speakers',
      excerpt:
        'Exploring the 2D Wave Equation through simulations and by hearing them.',
      date: '2024-06-05',
      url:
        'https://medium.com/@rodrigodamottacc/simulating-vibrations-the-advanced-physics-behind-drums-and-speakers-b350f6fb1362',
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
