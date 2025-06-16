
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const BlogPost = () => {
  const { id } = useParams();
  
  // There are no local blog posts since all articles live on external platforms
  const posts: Record<string, never> = {};

  const post = posts[id as keyof typeof posts];

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="text-blue-600 hover:text-blue-700 underline">
              Back to Blog
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back to blog link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            ← Back to Blog
          </Link>

          <article>
            {/* Article header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-6">
                <time>
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Navigation to other posts */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <Link 
                to="/blog" 
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                ← All Posts
              </Link>
              <div className="text-gray-500 text-sm">
                Share this post
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
