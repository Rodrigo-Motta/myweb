import Navigation from '../components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen bg-white font-serif">
      <Navigation />
      <main className="pt-32 pb-24 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl text-gray-900 mb-8">
            About Me
          </h1>

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

          <div className="mt-12 flex justify-center">
            <img
              src="/timeline.png"
              alt="Timeline of my experience"
              className="max-w-full h-auto"
            />
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src="/community.png"
              alt="Community engagement"
              className="w-2/5 max-w-sm h-auto"
            />
            <div className="space-y-4 font-serif text-gray-600 leading-relaxed">
              <p className="font-bold text-gray-900">Committed to Community Building:</p>
              <p>
                I founded the Tech & Innovation Community in the Institute of Physics, where I
                host seminars for students and researchers to discuss new technologies, recent
                papers and emerging ideas.
              </p>
              <p>
                These meetings offer practical exposure to tools in data science, machine
                learning and computational physics, encouraging interdisciplinary
                collaboration.
              </p>
              <p>
                Teaching data science can be daunting. In a 20-hour Deep Learning course I
                organized at USP – Universidade de São Paulo, Latin America's leading
                university, I broke down core concepts so participants could confidently
                navigate this vast field.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
