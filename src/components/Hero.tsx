
import { Github, Linkedin, BookOpen, GraduationCap } from 'lucide-react';
import { withBasePath } from '../utils/assetPath';

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-12 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left side - Image and Name */}
          <div className="text-center md:text-left">
            <img
              src={withBasePath('eu.png')}
              alt="Portrait"
              className="w-40 h-40 md:w-48 md:h-48 mx-auto md:mx-0 rounded-full mb-6 object-cover"
            />
            <h1 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 leading-tight">
              Rodrigo da Motta Cabral-Carvalho
            </h1>
            <p className="font-serif text-lg text-gray-600 leading-relaxed">
              Research Scientist & Data Scientist @ CloudWalk, Inc.
            </p>
            <p className="font-serif text-base text-gray-500 leading-relaxed">
              M.Sc. in Neuroscience and Cognition - UFABC & King's College London
            </p>
            <p className="font-serif text-base text-gray-500 mb-8 leading-relaxed">
              B.Sc. in Physics - University of São Paulo
            </p>
            
            {/* Social Media Buttons */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/in/rodrigo-da-motta-c-de-carvalho-7422ba181/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-700" />
              </a>
              <a
                href="https://github.com/Rodrigo-Motta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} className="text-gray-700" />
              </a>
              <a
                href="https://scholar.google.com/citations?user=jaaS6acAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Google Scholar"
              >
                <GraduationCap size={20} className="text-gray-700" />
              </a>
              <a
                href="https://medium.com/@rodrigodamottacc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Medium"
              >
                <BookOpen size={20} className="text-gray-700" />
              </a>
            </div>
          </div>

          {/* Right side - About Me */}
          <div>
            <div className="space-y-4 font-serif text-gray-600 leading-relaxed">
              <p>
                I see myself as a Data Scientist specializing in AI and Cognition, with practical
                experience in business applications and consulting. Alongside this, I'm a writer and
                content creator driven by a passion for communicating and sparking curiosity about
                Data Science, Artificial Intelligence, Physics, and Neuroscience. Community building
                and interdisciplinarity is central to my approach.
              </p>
              <p>I deeply value diversity, collaboration, and respect.</p>
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
