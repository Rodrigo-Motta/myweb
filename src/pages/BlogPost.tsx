
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock blog post data - in a real app, you'd fetch this from an API
  const posts = {
    "1": {
      title: "The Future of Web Development",
      content: `
        <p>The web development landscape is constantly evolving, and staying ahead of the curve is essential for any developer. In this post, we'll explore some of the most exciting trends and technologies that are shaping the future of web development.</p>

        <h2>AI Integration</h2>
        <p>Artificial Intelligence is no longer just a buzzword—it's becoming an integral part of web development. From AI-powered code completion tools like GitHub Copilot to intelligent user interfaces that adapt to user behavior, AI is revolutionizing how we build and interact with web applications.</p>

        <h2>WebAssembly (WASM)</h2>
        <p>WebAssembly is opening up new possibilities by allowing developers to run high-performance applications in the browser. Languages like Rust, C++, and Go can now be compiled to run on the web, bringing near-native performance to web applications.</p>

        <h2>Edge Computing</h2>
        <p>With the rise of edge computing, we're seeing a shift towards processing data closer to the user. This means faster load times, reduced latency, and better user experiences across the globe.</p>

        <h2>Progressive Web Apps (PWAs)</h2>
        <p>PWAs continue to bridge the gap between web and native applications. With improved offline capabilities, push notifications, and app-like experiences, PWAs are becoming an increasingly attractive option for businesses looking to reach users across multiple platforms.</p>

        <h2>Conclusion</h2>
        <p>The future of web development is bright and full of possibilities. By staying informed about these trends and continuously learning new technologies, we can build better, faster, and more engaging web experiences for users around the world.</p>
      `,
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["Web Dev", "Technology", "Trends"]
    },
    "2": {
      title: "Design Systems That Scale",
      content: `
        <p>Building a design system is one thing, but creating one that scales with your organization is an entirely different challenge. In this post, I'll share insights from building and maintaining design systems that have grown with teams and products.</p>

        <h2>Start Small, Think Big</h2>
        <p>The key to a scalable design system is starting with a solid foundation. Begin with your most basic components—buttons, inputs, typography—and ensure they're robust and flexible before building more complex components.</p>

        <h2>Documentation is Everything</h2>
        <p>A design system without proper documentation is just a collection of components. Invest heavily in documentation that explains not just how to use components, but when and why to use them.</p>

        <h2>Component API Design</h2>
        <p>Think carefully about your component APIs. They should be intuitive, consistent, and flexible enough to handle future requirements without breaking existing implementations.</p>

        <h2>Governance and Adoption</h2>
        <p>A design system is only as good as its adoption. Establish clear governance processes and make it easier to use your design system than to create one-off solutions.</p>
      `,
      date: "2024-01-10",
      readTime: "8 min read",
      tags: ["Design", "Systems", "Scalability"]
    },
    "3": {
      title: "My Journey into Tech",
      content: `
        <p>Looking back at my journey into technology, I'm amazed at how much I've learned and grown. This post is a reflection on the path that brought me here and the lessons I've learned along the way.</p>

        <h2>The Beginning</h2>
        <p>Like many developers, my journey started with curiosity. I remember the first time I saw a website's source code and wondered how all those tags and attributes created something beautiful and functional.</p>

        <h2>First Steps</h2>
        <p>My first real programming experience was with HTML and CSS. I spent countless hours tweaking margins and padding, learning about the box model, and struggling with browser compatibility issues.</p>

        <h2>The JavaScript Journey</h2>
        <p>Learning JavaScript was both exciting and frustrating. The flexibility of the language was liberating, but it also led to many hours debugging mysterious errors and trying to understand concepts like closures and prototypes.</p>

        <h2>Continuous Learning</h2>
        <p>One of the most important lessons I've learned is that learning never stops in tech. New frameworks, tools, and best practices emerge constantly, and staying curious and adaptable is key to long-term success.</p>

        <h2>Advice for Beginners</h2>
        <p>If I could give advice to someone starting their tech journey, it would be: be patient with yourself, practice consistently, and don't be afraid to ask questions. The tech community is generally welcoming and helpful to those who show genuine interest in learning.</p>
      `,
      date: "2024-01-05",
      readTime: "6 min read",
      tags: ["Personal", "Career", "Learning"]
    }
  };

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
