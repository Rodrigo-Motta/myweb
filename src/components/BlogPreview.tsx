
import { Link } from 'react-router-dom';

const BlogPreview = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies that will shape how we build for the web in the coming years.",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["Web Dev", "Technology", "Trends"]
    },
    {
      id: 2,
      title: "Design Systems That Scale",
      excerpt: "How to build and maintain design systems that grow with your product and team.",
      date: "2024-01-10",
      readTime: "8 min read",
      tags: ["Design", "Systems", "Scalability"]
    },
    {
      id: 3,
      title: "My Journey into Tech",
      excerpt: "Reflections on my path from beginner to professional developer and the lessons learned along the way.",
      date: "2024-01-05",
      readTime: "6 min read",
      tags: ["Personal", "Career", "Learning"]
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600">
            Thoughts, insights, and stories from my journey
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {posts.map((post) => (
            <article key={post.id} className="border-b border-gray-200 pb-8 last:border-b-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
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
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
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

        <div className="text-center">
          <Link 
            to="/blog" 
            className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all"
          >
            Read All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
