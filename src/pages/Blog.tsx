
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies that will shape how we build for the web in the coming years. From AI integration to new frameworks.",
      content: "Full content would go here...",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["Web Dev", "Technology", "Trends"],
      featured: true
    },
    {
      id: 2,
      title: "Design Systems That Scale",
      excerpt: "How to build and maintain design systems that grow with your product and team. Best practices from real-world experience.",
      content: "Full content would go here...",
      date: "2024-01-10",
      readTime: "8 min read",
      tags: ["Design", "Systems", "Scalability"],
      featured: false
    },
    {
      id: 3,
      title: "My Journey into Tech",
      excerpt: "Reflections on my path from beginner to professional developer and the lessons learned along the way.",
      content: "Full content would go here...",
      date: "2024-01-05",
      readTime: "6 min read",
      tags: ["Personal", "Career", "Learning"],
      featured: false
    },
    {
      id: 4,
      title: "Building Accessible Web Apps",
      excerpt: "Why accessibility matters and practical steps to make your applications inclusive for all users.",
      content: "Full content would go here...",
      date: "2024-01-01",
      readTime: "7 min read",
      tags: ["Accessibility", "Web Dev", "UX"],
      featured: false
    },
    {
      id: 5,
      title: "State Management in React",
      excerpt: "A comprehensive guide to different state management solutions in React and when to use each one.",
      content: "Full content would go here...",
      date: "2023-12-28",
      readTime: "10 min read",
      tags: ["React", "State Management", "Frontend"],
      featured: false
    }
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
                
                <Link to={`/blog/${featuredPost.id}`} className="block group">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </Link>
                
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
                
                <Link to={`/blog/${post.id}`} className="block group">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {post.excerpt}
                  </p>
                </Link>
                
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
