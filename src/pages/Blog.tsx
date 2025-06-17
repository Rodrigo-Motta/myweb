
import Navigation from '../components/Navigation';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title:
        'Using Pre-Trained Transformers for Semantic Analysis of Self-Report measures in Psychology: A tutorial',
      excerpt:
        'In our recently published paper we reviewed self-report scales for subjective time and evaluated their semantic similarities using transformer models.',
      date: '2024-05-01',
      readTime: '6 min read',
      tags: ['AI', 'LLMs', 'Psychology'],
      url:
        'https://medium.com/@rodrigodamottacc/using-pre-trained-transformers-for-semantic-analysis-of-self-report-measures-in-psychology-a-fc412d5bbb5e',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      featured: true,
    },
    {
      id: 2,
      title: 'How I Organized a One-week University Course on Deep Learning',
      excerpt:
        'Organizing a 20-hour course at USP taught me how to break down the massive field of data science into digestible topics.',
      date: '2024-03-08',
      readTime: '8 min read',
      tags: ['AI', 'Education', 'Courses'],
      url:
        'https://medium.com/towards-artificial-intelligence/how-i-organized-a-one-week-university-course-on-deep-learning-3bf99432f31c',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      featured: false,
    },
    {
      id: 3,
      title:
        'The Power of Independent Component Analysis (ICA) on Real-World Applications — EEG Example',
      excerpt:
        'Independent component analysis (ICA) is a powerful tool for separating linear contributions in real-world data like EEG.',
      date: '2024-02-15',
      readTime: '5 min read',
      tags: ['Data Science', 'Neuroscience'],
      url:
        'https://medium.com/data-science/the-power-of-independent-component-analysis-ica-on-real-world-applications-egg-example-48df336a1bd8',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
      featured: false,
    },
    {
      id: 4,
      title:
        'The Emerging Spirituality of Artificial Intelligence? From Kurzweil to Claude, Language Quietus and Psychedelic Reports',
      excerpt:
        "CW's researcher-in-residence discuss \u201cemergent spirituality\u201d on AI models, as well as the ethical implications for development and alignment",
      date: '2025-06-05',
      readTime: '7 min read',
      tags: ['AI', 'Science', 'Futurism'],
      url:
        'https://www.cloudwalk.io/ai/the-emerging-spirituality-of-artificial-intelligence-from-kurzweil-to-claude-language-quietus-and-psychedelic-reports',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop',
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
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 object-cover rounded mb-6"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop';
                    }}
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
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded mb-4"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop';
                    }}
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
