
'use client';

export default function RecruiterFeaturesSection() {
  const features = [
    {
      icon: 'ri-magic-line',
      title: 'AI-assisted shortlisting',
      description: 'Rank by skills, outcomes, and seniority. Reduce manual screening. Generate high-signal shortlists instantly with transparent reasons.',
      color: 'from-blue-600 to-indigo-600',
      link: '50% faster'
    },
    {
      icon: 'ri-sort-desc',
      title: 'Tier classification of talent',
      description: 'Automatic tiering highlights the strongest profiles first. Speed up debriefs with consistent criteria across teams.',
      color: 'from-blue-500 to-cyan-500',
      link: 'Auto-tiering'
    },
    {
      icon: 'ri-global-line',
      title: 'Smart region targeting',
      description: 'Filter by timezone, location, and comp bands without spreadsheets. Reach talent where hiring and budgets actually align.',
      color: 'from-green-500 to-emerald-500',
      link: 'Global ready'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Pay-per-unlock or subscribe',
      description: 'Browse free, pay only when you engage with real intent. Mix-and-match unlocks, consults, or plans to control cost.',
      color: 'from-orange-500 to-red-500',
      link: 'Cost control'
    },
    {
      icon: 'ri-whatsapp-line',
      title: 'WhatsApp + in-app chat',
      description: 'Meet talent where they are with seamless chat handoff. Read receipts and thread context keep decisions moving.',
      color: 'from-purple-500 to-pink-500',
      link: 'Faster replies'
    },
    {
      icon: 'ri-file-text-line',
      title: 'Project & impact previews',
      description: 'Preview outcomes, artifacts and links before you unlock. Spend time only with candidates who show real impact.',
      color: 'from-indigo-500 to-blue-500',
      link: 'Signal first'
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
            <i className="ri-star-line mr-2"></i>
            Platform capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Features built for
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> modern recruiting</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how TalentFlip streamlines every step, from discovery to decision, with high-signal interactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm cursor-pointer flex items-center group-hover:translate-x-1 transition-transform duration-300">
                  {feature.link}
                  <i className="ri-arrow-right-line ml-1"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
