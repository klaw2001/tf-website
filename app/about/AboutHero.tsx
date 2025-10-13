
'use client';

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white min-h-screen flex items-center py-20 pt-32">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-tf-secondary/10 text-tf-secondary">
            <i className="ri-refresh-line mr-2"></i>
            Flipping the Hiring Game
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-tf-black leading-tight mb-8">
            We're here to
            <span className="highlight"> flip</span>
            <br />
            how talent gets hired
          </h1>
          
          <p className="subtitle mb-8 leading-relaxed max-w-4xl mx-auto">
            The old way is broken: endless job hunting, resume shortlisting, interview loops, and background checks that frustrate both talent and recruiters. 
            <br />
            <span className="font-semibold text-tf-black">TalentFlip lets recruiters connect directly with top talent through short intro calls.</span>
          </p>
          
          <div className="mb-12 max-w-4xl mx-auto">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20team%20collaboration%20and%20innovation%20in%20modern%20office%2C%20diverse%20group%20of%20people%20working%20together%20on%20laptops%20and%20tablets%2C%20clean%20minimalist%20workspace%20with%20blue%20and%20white%20color%20scheme%2C%20modern%20corporate%20environment%20showing%20teamwork%20and%20productivity%2C%20people%20connecting%20and%20sharing%20ideas%2C%20bright%20natural%20lighting%20with%20contemporary%20design%20elements&width=800&height=400&seq=about-hero-image&orientation=landscape"
              alt="Team Collaboration and Innovation"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="btn text-white px-6 py-3 rounded-full transition-all duration-200 text-lg whitespace-nowrap cursor-pointer shadow-xl hover:shadow-2xl transform hover:-translate-y-1 bg-tf-gradient">
              <i className="ri-rocket-line mr-2"></i>
              Join TalentFlip Today
            </button>
            <button className="btn border-2 border-tf-secondary text-tf-secondary px-6 py-3 rounded-full hover:bg-tf-secondary/5 transition-all duration-200 text-lg whitespace-nowrap cursor-pointer">
              <i className="ri-play-circle-line mr-2"></i>
              See How It Works
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-tf-primary/10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-tf-secondary/10 rounded-full blur-2xl"></div>
    </section>
  );
}
