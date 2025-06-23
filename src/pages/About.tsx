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
            <p className="font-bold text-gray-900">Strong Commitment to Tech & Innovation Community Building:</p>
            <p>
              I have been deeply involved in building and nurturing the Tech & Innovation Community at the Institute of Physics. I led initiatives to create a space where students and researchers could regularly meet to explore new technologies, discuss recent scientific papers, and share emerging ideas.
            </p>
            <p>
              To make cutting-edge knowledge accessible, I developed and taught an open-access Deep Learning course that is freely available online. The course breaks down core concepts in a clear and practical way for beginners and curious learners alike. You can watch the full series here:
              {" "}
              <a
                href="https://www.youtube.com/watch?v=oWuDvjnGdvU&list=PLgK8OuJjPC4Pi5rn9LmCeQuuDVuzj_6TF"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Deep Learning Course on YouTube
              </a>.
            </p>
            <p>
              These community-driven efforts promote interdisciplinary learning and empower people from diverse backgrounds to explore data science, machine learning, and computational thinking.
            </p>
          </div>
        </div>

        </div>
      </main>
    </div>
  );
};

export default About;
