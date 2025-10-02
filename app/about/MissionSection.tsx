
'use client';

export default function MissionSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("https://readdy.ai/api/search-image?query=Futuristic%20AI%20network%20with%20glowing%20nodes%20and%20connections%20representing%20human%20relationships%2C%20digital%20transformation%20background%20with%20flowing%20data%20streams%2C%20blue%20and%20indigo%20neon%20lights%2C%20abstract%20network%20visualization%20showing%20professional%20connections%2C%20modern%20tech%20illustration%20with%20geometric%20patterns%20and%20interconnected%20circles&width=1920&height=1080&seq=mission-bg&orientation=landscape")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
            <i className="ri-rocket-line mr-2"></i>
            Our Mission
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Reimagining hiring by giving back
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> time, trust, and opportunities</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We believe great talent deserves great opportunities, and innovative companies deserve efficient access to the best people. Technology should enable human connection, not complicate it.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
              <i className="ri-time-line text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Give Back Time</h3>
            <p className="text-blue-200 leading-relaxed">
              Stop wasting weeks on applications and screening. Our platform creates instant, meaningful connections that respect everyone's time.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
              <i className="ri-shield-check-line text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Rebuild Trust</h3>
            <p className="text-blue-200 leading-relaxed">
              Transparent processes, honest communication, and mutual respect. No more ghosting, no more false promises - just authentic connections.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
              <i className="ri-door-open-line text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Create Opportunities</h3>
            <p className="text-blue-200 leading-relaxed">
              Break down barriers between talent and opportunity. Every professional deserves access to roles that match their skills and ambitions.
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 max-w-4xl mx-auto">
          <img 
            src="https://readdy.ai/api/search-image?query=Futuristic%20AI%20visualization%20showing%20human%20connections%20and%20professional%20networks%2C%20glowing%20nodes%20representing%20people%20connected%20by%20flowing%20data%20streams%2C%20modern%20digital%20illustration%20with%20blue%20and%20indigo%20colors%2C%20abstract%20representation%20of%20talent%20and%20opportunity%20matching%2C%20network%20of%20professionals%20with%20AI-powered%20connections%2C%20minimalist%20tech%20background&width=800&height=500&seq=mission-vision&orientation=landscape"
            alt="Future of Hiring"
            className="w-full h-64 object-cover rounded-2xl mb-8"
          />
          
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">The Future We're Building</h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              A world where talent flows freely to where it's needed most. Where hiring is about human potential, not perfect resumes. Where technology amplifies what makes us uniquely human: our ability to create, innovate, and grow together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-white mb-2">1M+</div>
                <div className="text-blue-200">Professionals Connected</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-white mb-2">50K+</div>
                <div className="text-blue-200">Companies Partnered</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-white mb-2">95%</div>
                <div className="text-blue-200">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-500/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-500"></div>
    </section>
  );
}
