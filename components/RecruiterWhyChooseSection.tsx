
'use client';

export default function RecruiterWhyChooseSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
            Why choose us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why TalentFlip is the right choice for you
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
            AI-powered discovery, bias-free evaluation, and flexible engagement options help you build high-signal shortlists faster.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <i className="ri-user-star-line text-2xl text-blue-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Expert-matched talent
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Discover senior professionals by outcomes and skills. Our AI ranks fit so you shortlist faster.
            </p>
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <i className="ri-menu-line text-xl text-blue-600"></i>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                High-intent, senior talent
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Access a growing network of vetted professionals with verified outcomes. Filter by skills, region, budget, and availability to hit your hiring goals with precision.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <i className="ri-shield-check-line text-2xl text-blue-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Bias-free evaluation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Anonymous, skill-first profiles with AI summaries and tiering so teams focus on what matters.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
            <button className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
              <i className="ri-close-line text-white"></i>
            </button>
            
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <i className="ri-flashlight-line text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">
              Flexible engagement, faster results
            </h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Pay-per-unlock or subscribe. Chat in-app or WhatsApp. Move from match to interview in days, not weeks.
            </p>
            
            <div className="space-y-3 mb-6 sm:mb-8">
              <div className="flex items-start text-white/90">
                <i className="ri-check-line text-white mr-2 mt-0.5 flex-shrink-0"></i>
                <span className="text-sm">Region & budget aware discovery</span>
              </div>
              <div className="flex items-start text-white/90">
                <i className="ri-check-line text-white mr-2 mt-0.5 flex-shrink-0"></i>
                <span className="text-sm">Pay only when you engage (unlock or consult)</span>
              </div>
              <div className="flex items-start text-white/90">
                <i className="ri-check-line text-white mr-2 mt-0.5 flex-shrink-0"></i>
                <span className="text-sm">WhatsApp + in-app chat with read receipts</span>
              </div>
              <div className="flex items-start text-white/90">
                <i className="ri-check-line text-white mr-2 mt-0.5 flex-shrink-0"></i>
                <span className="text-sm">Convert to interview, retainer, or hire</span>
              </div>
            </div>
            
            <button className="bg-white text-indigo-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer flex items-center text-sm sm:text-base">
              Start recruiting
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
