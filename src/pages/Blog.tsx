import Navigation from '../components/Navigation';
import { OEmbedThumbnail } from '../hooks/use-oembed-thumbnail';

const Blog = () => {
  const posts = [
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

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

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
              Thoughts, insights, and stories about design, development, and the creative process.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                
                <a
                  href={featuredPost.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <OEmbedThumbnail
                    url={featuredPost.url}
                    alt={featuredPost.title}
                    className="w-full h-64 object-cover rounded mb-6"
                  />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </a>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
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
                
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts */}
          <div className="space-y-12">
            {regularPosts.map((post) => (
              <article key={post.id} className="border-b border-gray-200 pb-12 last:border-b-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <time className="text-sm text-gray-500 mb-2 sm:mb-0">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {post.excerpt}
                  </p>
                </a>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
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
