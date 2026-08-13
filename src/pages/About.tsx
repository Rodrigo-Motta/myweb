import Navigation from '../components/Navigation';
import { withBasePath } from '../utils/assetPath';

const About = () => {
  return (
    <div className="min-h-screen bg-white font-serif">
      <Navigation />
      <main className="pt-24 md:pt-28 pb-16 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start justify-between gap-4 mb-6">
            <h1 className="font-serif font-semibold text-4xl md:text-5xl text-gray-900">
              About Me
            </h1>
            <a
              href={withBasePath('CV_Rodrigo_academic_up-2.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              CV
            </a>
          </div>
          <div className="space-y-3 font-serif text-gray-600 leading-relaxed">
            <p>
              Welcome to my digital space where I share my work, thoughts, and creative journey.
              Here you can find a brief timeline and some pieces of information about me.
            </p>
            <p>
              When I figured out that astrophysics was not quite for me, I was absolutely captivated by the world of complex systems, computers, data, and probability. From that moment on, my mind became absorbed by challenging questions: how can intelligence emerge from simple rules? Can we model consciousness? How do networks and algorithms shape our understanding of reality?
            </p>
            <p>
              I'm currently doing work on representation learning of clients for financial foundation models and post-training for downstream tasks at CloudWalk. Moreover, I've been investigating collective behavior and complex systems, spanning brain dynamics to AI agentic systems. My work bridges academic research in brain and mind studies with practical applications of data science in industry.
            </p>
            <p>
              One of my recent projects explores marketplaces as computational laboratories: agents act as merchants and the network structure is endogenous and time-varying (links form and dissolve as a consequence of interaction outcomes).
            </p>
          </div>


          <div className="mt-8 flex justify-center">
            <img
              src={withBasePath('timeline.png')}
              alt="Timeline of my experience"
              className="max-w-full h-auto"
            />
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-6">
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
