
'use client';

import { useState } from 'react';

export default function RecruiterPricingSection() {
  const [isYearly, setIsYearly] = useState(false);

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
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
            <i className="ri-price-tag-3-line mr-2"></i>
            Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Browse free. Pay only when you engage.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your hiring needs. Start with our free trial and scale as you grow.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
              Save 15%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                plan.isPopular 
                  ? 'border-blue-500 shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Recommended
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                {plan.monthlyPrice ? (
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600 ml-1">/mo</span>
                    </div>
                    {isYearly && (
                      <div className="text-sm text-gray-500 mt-2">
                        Yearly: ${plan.yearlyPrice * 12} /mo — Save {plan.yearlyDiscount}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-900 mb-2">Custom</div>
                  </div>
                )}

                <button className={`w-full py-4 px-6 rounded-full font-bold text-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>

              <div className="space-y-4">
                <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                  Features
                </div>
                
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <i className="ri-check-line text-green-600 text-sm"></i>
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}

                {plan.excludedFeatures.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start opacity-50">
                    <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <i className="ri-close-line text-gray-400 text-sm"></i>
                    </div>
                    <span className="text-gray-500 text-sm line-through">{feature}</span>
                  </div>
                ))}
              </div>

              {plan.name === 'Basic' && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full text-center text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer">
                    Request demo
                  </button>
                </div>
              )}

              {plan.name === 'Pro' && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full text-center text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer">
                    Request demo
                  </button>
                </div>
              )}

              {plan.name === 'Enterprise' && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full text-center text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer">
                    Request demo
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            Pay-per-chat unlock: $5–$15 per unlock • Pay-per-consult: Talent-set hourly rate
          </p>
        </div>

        {/* Compare All Plans CTA */}
        <div className="text-center mt-8">
          <a 
            href="/pricing"
            className="inline-flex items-center px-6 py-3 bg-white border-2 border-blue-300 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            Compare All Plans
            <i className="ri-arrow-right-line ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
