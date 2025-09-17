import Navigation from '../components/Navigation';
import { withBasePath } from '../utils/assetPath';

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
              Here you can find a brief timeline and some pieces of information about me.
            </p>
            <p>
              When I figured out that astrophysics was not quite for me, I was absolutely captivated by the world of complex systems, computers, data, and probability. From that moment on, my mind became absorbed by challenging questions: how can intelligence emerge from simple rules? Can we model consciousness? How do networks and algorithms shape our understanding of reality?
            </p>
            <p>
              I specialize in the intersection of technology and human experience, with particular interests in neuroscience, artificial intelligence, and creative applications of data science.
            </p>
            <p>
              My work spans from academic research in brain and mind studies
              to more practical applications of data science in industry.
            </p>
          </div>


          <div className="mt-12 flex justify-center">
            <img
              src={withBasePath('timeline.png')}
              alt="Timeline of my experience"
              className="max-w-full h-auto"
            />
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={withBasePath('community.png')}
            alt="Community engagement"
            className="w-2/5 max-w-sm h-auto"
          />
          <div className="space-y-4 font-serif text-gray-600 leading-relaxed">
            <p className="font-bold text-gray-900">Tech & Innovation Community Building:</p>
            <p>
              I have been deeply involved in building and nurturing the Tech & Innovation Community at the Institute of Physics. I led initiatives to create a space where students and researchers could regularly meet to explore new technologies, discuss recent scientific papers, and share emerging ideas.
            </p>
            <p>
              To make knowledge and inovation accessible, I developed and taught an open-access Deep Learning course that is freely available online. The course breaks down core concepts in a clear and practical way for beginners and curious learners. You can watch the full series here:
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
