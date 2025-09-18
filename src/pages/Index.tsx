import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ConferencesPreview from '../components/ConferencesPreview';
import BlogPreview from '../components/BlogPreview';
import PublicationPreview from '../components/PublicationPreview';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-serif">
      <Navigation />
      <Hero />
      <PublicationPreview />
      <BlogPreview />
      <ConferencesPreview />
      
      {/* Footer */}
      <footer className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-gray-500 mb-6">
            © 2024 Rodrigo da Motta Cabral-Carvalho. All rights reserved.
          </p>
          <div className="flex justify-center space-x-8">
            <a href="https://www.linkedin.com/in/rodrigo-da-motta-c-de-carvalho-7422ba181/" target="_blank" rel="noopener noreferrer" className="font-serif text-gray-500 hover:text-gray-900 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/Rodrigo-Motta" target="_blank" rel="noopener noreferrer" className="font-serif text-gray-500 hover:text-gray-900 transition-colors">
              GitHub
            </a>
            <a href="https://medium.com/@rodrigodamottacc" target="_blank" rel="noopener noreferrer" className="font-serif text-gray-500 hover:text-gray-900 transition-colors">
              Medium
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
