
import { Github, Linkedin, BookOpen, GraduationCap } from 'lucide-react';
import { withBasePath } from '../utils/assetPath';

const Hero = () => {
  return (
    <section className="pt-24 md:pt-28 pb-8 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left side - Image and Name */}
          <div className="text-center md:text-left">
            <img
              src={withBasePath('eu.png')}
              alt="Portrait"
              className="w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 rounded-full mb-4 object-cover"
            />
            <h1 className="font-serif text-xl md:text-2xl text-gray-900 mb-4 leading-tight">
              Rodrigo da Motta Cabral-Carvalho
            </h1>
            <p className="font-serif text-base text-gray-600 leading-relaxed">
              Research Scientist & Data Scientist @ CloudWalk, Inc.
            </p>
            <p className="font-serif text-sm text-gray-500 leading-relaxed">
              M.Sc. in Neuroscience and Cognition - UFABC & King's College London
            </p>
            <p className="font-serif text-sm text-gray-500 mb-6 leading-relaxed">
              B.Sc. in Physics - University of São Paulo (USP)
            </p>
            
            {/* Social Media Buttons */}
            <div className="flex justify-center md:justify-start space-x-3">
              <a
                href="https://www.linkedin.com/in/rodrigo-m-cabral-carvalho-7422ba181/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-gray-700" />
              </a>
              <a
                href="https://github.com/Rodrigo-Motta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} className="text-gray-700" />
              </a>
              <a
                href="https://scholar.google.com/citations?user=jaaS6acAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Google Scholar"
              >
                <GraduationCap size={18} className="text-gray-700" />
              </a>
              <a
                href="https://medium.com/@rodrigodamottacc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Medium"
              >
                <BookOpen size={18} className="text-gray-700" />
              </a>
            </div>
          </div>

          {/* Right side - About Me */}
          <div>
            <div className="space-y-3 font-serif text-gray-600 leading-relaxed">
              <p>
                I've been working in the intersection of AI and complex systems, mainly neuroscience and finance, for fundamental research and product development. I have publications in ICLR, Network Neuroscience (MIT Press), NeuroInformatics (Springer) and others.
              </p>
              <p>I deeply value diversity, empathy, and respect.</p>
              <p>
                And remember: creativity thrives when we occasionally increase our entropy!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
