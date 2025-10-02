'use client';

export default function FeaturesSection() {
  const features = [
    {
      icon: 'ri-user-star-line',
      title: 'Expert-matched talent',
      description: 'Discover senior professionals by outcomes and skills. Our AI ranks fit so you shortlist faster.',
      color: '#6366F1'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Bias-free evaluation',
      description: 'Anonymous, skill-first profiles with AI summaries and tiering so teams focus on what matters.',
      color: '#6366F1'
    },
    {
      icon: 'ri-list-check-2',
      title: 'High-intent, senior talent',
      description: 'Access a growing network of vetted professionals with verified outcomes. Filter by skills, region, budget, and availability to hit your hiring goals with precision.',
      color: '#6366F1'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-indigo-100 text-indigo-700">
            <span>Why choose us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why TalentFlip is the right choice for you
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            AI-powered discovery, bias-free evaluation, and flexible engagement options help you build high-signal shortlists faster.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.slice(0, 2).map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className={`w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-6`}>
                <i className={`${feature.icon} text-xl text-indigo-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
          
          {/* Special third card with purple background */}
          <div className="bg-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer">
              <i className="ri-close-line text-white"></i>
            </button>
            
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
              <i className="ri-list-check-2 text-xl text-white"></i>
            </div>
            
            <h3 className="text-xl font-bold mb-2">Flexible engagement, faster results</h3>
            <p className="text-indigo-100 mb-6 text-sm leading-relaxed">
              Pay-per-unlock or subscribe. Chat in-app or WhatsApp. Move from match to interview in days, not weeks.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-indigo-100">
                <i className="ri-check-line mr-3 text-indigo-300"></i>
                Region & budget aware discovery
              </div>
              <div className="flex items-center text-sm text-indigo-100">
                <i className="ri-check-line mr-3 text-indigo-300"></i>
                Pay only when you engage (unlock or consult)
              </div>
              <div className="flex items-center text-sm text-indigo-100">
                <i className="ri-check-line mr-3 text-indigo-300"></i>
                WhatsApp + in-app chat with read receipts
              </div>
              <div className="flex items-center text-sm text-indigo-100">
                <i className="ri-check-line mr-3 text-indigo-300"></i>
                Convert to interview, retainer, or hire
              </div>
            </div>
            
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap">
              Start recruiting <i className="ri-arrow-right-line ml-1"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}