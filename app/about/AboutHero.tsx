
'use client';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen flex items-center py-20 pt-32">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: '#EBF4FF', color: '#2563EB' }}>
            <i className="ri-refresh-line mr-2"></i>
            Flipping the Hiring Game
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
            We're here to
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> flip</span>
            <br />
            how talent gets hired
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
            The old way is broken: endless job hunting, resume shortlisting, interview loops, and background checks that frustrate both talent and recruiters. 
            <br />
            <span className="font-semibold text-gray-900">TalentFlip lets recruiters connect directly with top talent through short intro calls.</span>
          </p>
          
          <div className="mb-12 max-w-4xl mx-auto">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20team%20collaboration%20and%20innovation%20in%20modern%20office%2C%20diverse%20group%20of%20people%20working%20together%20on%20laptops%20and%20tablets%2C%20clean%20minimalist%20workspace%20with%20blue%20and%20white%20color%20scheme%2C%20modern%20corporate%20environment%20showing%20teamwork%20and%20productivity%2C%20people%20connecting%20and%20sharing%20ideas%2C%20bright%20natural%20lighting%20with%20contemporary%20design%20elements&width=800&height=400&seq=about-hero-image&orientation=landscape"
              alt="Team Collaboration and Innovation"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="text-white px-8 py-4 rounded-full transition-all duration-200 font-semibold text-lg whitespace-nowrap cursor-pointer shadow-xl hover:shadow-2xl transform hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)' }}>
              <i className="ri-rocket-line mr-2"></i>
              Join TalentFlip Today
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-200 font-semibold text-lg whitespace-nowrap cursor-pointer">
              <i className="ri-play-circle-line mr-2"></i>
              See How It Works
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-blue-300/30 to-indigo-300/30 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-full blur-2xl"></div>
    </section>
  );
}
