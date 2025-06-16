
const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">YN</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Designer, Developer & Creative Thinker
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Welcome to my digital space where I share my work, thoughts, and creative journey. 
            I'm passionate about creating meaningful experiences through design and code.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            View My Work
          </button>
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all">
            Read My Blog
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
