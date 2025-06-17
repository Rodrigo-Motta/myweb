
import { Github, Linkedin, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Image and Name */}
          <div className="text-center md:text-left">
            <img
              src="/eu.png"
              alt="Portrait"
              className="w-32 h-32 mx-auto md:mx-0 rounded-full mb-6 object-cover"
            />
            <h1 className="font-serif text-2xl md:text-3xl text-gray-900 mb-6 leading-tight">
              Rodrigo da Motta Cabral-Carvalho
            </h1>
            <p className="font-serif text-lg text-gray-600 mb-8 leading-relaxed">
              Designer, Developer & Creative Thinker
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
                Welcome to my digital space where I share my work, thoughts, and creative journey. 
                I'm passionate about creating meaningful experiences through design and code.
              </p>
              <p>
                I specialize in the intersection of technology and human experience, with particular 
                interests in neuroscience, artificial intelligence, and creative applications of 
                data science.
              </p>
              <p>
                My work spans from academic research in brain dynamics and consciousness studies 
                to practical applications in machine learning and web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
