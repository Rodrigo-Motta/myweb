
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import WorkPreview from '../components/WorkPreview';
import BlogPreview from '../components/BlogPreview';
import Publications from '../components/Publications';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-serif">
      <Navigation />
      <Hero />
      <WorkPreview />
      <BlogPreview />
      <Publications />
      
      {/* Footer */}
      <footer className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-gray-500 mb-6">
            © 2024 Rodrigo da Motta Cabral-Carvalho. All rights reserved.
          </p>
          <div className="flex justify-center space-x-8">
            <a href="#" className="font-serif text-gray-500 hover:text-gray-900 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="font-serif text-gray-500 hover:text-gray-900 transition-colors">
              GitHub
            </a>
            <a href="#" className="font-serif text-gray-500 hover:text-gray-900 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
