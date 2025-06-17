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
        </div>
      </main>
    </div>
  );
};

export default About;
