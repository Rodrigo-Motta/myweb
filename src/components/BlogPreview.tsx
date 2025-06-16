
import { Link } from 'react-router-dom';

const BlogPreview = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies that will shape how we build for the web in the coming years.",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Design Systems That Scale",
      excerpt: "How to build and maintain design systems that grow with your product and team.",
      date: "2024-01-10",
    },
    {
      id: 3,
      title: "My Journey into Tech",
      excerpt: "Reflections on my path from beginner to professional developer and the lessons learned along the way.",
      date: "2024-01-05",
    }
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
              
              <Link to={`/blog/${post.id}`} className="block group">
                <h3 className="font-serif text-2xl text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h3>
                <p className="font-serif text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
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
