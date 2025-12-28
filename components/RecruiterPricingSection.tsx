
'use client';

export default function RecruiterPricingSection() {
  const plans = [
    {
      name: 'Basic',
      monthlyPrice: 99,
      yearlyPrice: 84,
      yearlyDiscount: '15%',
      description: 'Perfect for small teams just getting started',
      features: [
        '25 unlocks per month',
        '3 seats (users)',
        'Email support (48-72 hrs)',
        'Basic candidate filters',
        'Standard support'
      ],
      excludedFeatures: [
        'Priority response',
        'SSO & SLA',
        'Advanced integrations'
      ],
      isPopular: false,
      buttonText: 'Start recruiting',
      buttonStyle: 'border-2 border-blue-300 text-blue-600 hover:bg-blue-50'
    },
    {
      name: 'Pro',
      monthlyPrice: 199,
      yearlyPrice: 169,
      yearlyDiscount: '15%',
      description: 'Ideal for growing companies with active hiring needs',
      features: [
        '75 unlocks per month',
        '10 seats (users)',
        'Priority support (24 hrs)',
        'Advanced candidate filters',
        'Interview scheduler & calendar sync',
        'Analytics & reporting',
        'API access'
      ],
      excludedFeatures: [
        'SSO & custom SLA'
      ],
      isPopular: true,
      buttonText: 'Start recruiting',
      buttonStyle: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-1'
    },
    {
      name: 'Enterprise',
      monthlyPrice: null,
      yearlyPrice: null,
      description: 'Custom solutions for large organizations',
      features: [
        'Unlimited unlocks',
        'Single Sign-On (SSO)',
        'Dedicated account manager & SLA',
        'Bulk import & ATS integrations',
        'Admin controls & audit logs',
        'Custom workflows',
        '24/7 priority support'
      ],
      excludedFeatures: [],
      isPopular: false,
      buttonText: 'Talk to sales',
      buttonStyle: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
    }
  ];

  return (
    <section data-aos="fade-up" className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-blue-600 text-sm font-medium mb-6 border border-blue-200">
            <i className="ri-gift-line mr-2"></i>
            Limited Time Offer
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Everything is free.</span>
            <br />
            Start recruiting today.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're currently offering all our premium features at no cost. Browse unlimited profiles, unlock candidates, and access our full platform—completely free.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border-2 border-blue-200 shadow-2xl">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                🎉 100% FREE
              </div>
            </div>

            <div className="text-center mb-12 mt-4">
              <div className="mb-8">
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    $0
                  </span>
                  <span className="text-2xl text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-xl text-gray-600">No credit card required</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className="ri-infinity-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Unlimited Browsing</h3>
                  <p className="text-gray-600 text-sm">Browse all talent profiles without restrictions</p>
                </div>
                
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className="ri-unlock-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Free Unlocks</h3>
                  <p className="text-gray-600 text-sm">Unlock candidate profiles at no cost</p>
                </div>
                
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className="ri-team-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Unlimited Team Members</h3>
                  <p className="text-gray-600 text-sm">Add as many team members as you need</p>
                </div>
                
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className="ri-customer-service-2-line text-2xl text-white"></i>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Priority Support</h3>
                  <p className="text-gray-600 text-sm">Get help when you need it, fast</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-check-line text-blue-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">AI-powered candidate matching</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-check-line text-blue-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Advanced filters and search</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-check-line text-blue-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Analytics and reporting dashboard</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-check-line text-blue-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">WhatsApp and in-app messaging</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-check-line text-blue-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">API access and integrations</span>
                </div>
              </div>

              <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 sm:px-12 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer">
                <i className="ri-rocket-line mr-2"></i>
                Get Started Free
              </button>

              <p className="text-sm text-gray-500 mt-6">
                No credit card required • Cancel anytime • Full access to all features
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            <i className="ri-information-line mr-2"></i>
            This free offer is available for a limited time. Start recruiting today and lock in your free access.
          </p>
        </div>
      </div>
    </section>
  );
}
