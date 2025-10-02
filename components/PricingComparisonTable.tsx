
'use client';

import { useState } from 'react';

export default function PricingComparisonTable() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Basic',
      monthlyPrice: 99,
      yearlyPrice: 84,
      description: 'Perfect for small teams',
      isPopular: false,
      buttonText: 'Start recruiting',
      buttonStyle: 'border-2 border-blue-300 text-blue-600 hover:bg-blue-50'
    },
    {
      name: 'Pro',
      monthlyPrice: 199,
      yearlyPrice: 169,
      description: 'Ideal for growing companies',
      isPopular: false,
      buttonText: 'Start recruiting',
      buttonStyle: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
    },
    {
      name: 'Enterprise',
      monthlyPrice: null,
      yearlyPrice: null,
      description: 'Custom solutions',
      isPopular: false,
      buttonText: 'Talk to sales',
      buttonStyle: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
    }
  ];

  const features = [
    {
      name: 'Unlocks per month',
      basic: '25',
      pro: '75',
      enterprise: 'Unlimited'
    },
    {
      name: 'Seats (users)',
      basic: '3',
      pro: '10',
      enterprise: 'Unlimited'
    },
    {
      name: 'Email support',
      basic: '48-72 hrs',
      pro: false,
      enterprise: true
    },
    {
      name: 'Standard support',
      basic: true,
      pro: false,
      enterprise: true
    },
    {
      name: 'Priority support',
      basic: false,
      pro: '24 hrs',
      enterprise: '24/7'
    },
    {
      name: 'Basic candidate filters',
      basic: true,
      pro: true,
      enterprise: true
    },
    {
      name: 'Advanced candidate filters',
      basic: false,
      pro: true,
      enterprise: true
    },
    {
      name: 'Interview scheduler & calendar sync',
      basic: false,
      pro: true,
      enterprise: true
    },
    {
      name: 'Analytics & reporting',
      basic: false,
      pro: true,
      enterprise: true
    },
    {
      name: 'API access',
      basic: false,
      pro: true,
      enterprise: true
    },
    {
      name: 'Single Sign-On (SSO)',
      basic: false,
      pro: false,
      enterprise: true
    },
    {
      name: 'Dedicated account manager & SLA',
      basic: false,
      pro: false,
      enterprise: true
    },
    {
      name: 'Bulk import & ATS integrations',
      basic: false,
      pro: false,
      enterprise: true
    },
    {
      name: 'Admin controls & audit logs',
      basic: false,
      pro: false,
      enterprise: true
    },
    {
      name: 'Custom workflows',
      basic: false,
      pro: false,
      enterprise: true
    }
  ];

  const renderFeatureValue = (value: any) => {
    if (value === true) {
      return (
        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <i className="ri-check-line text-green-600 text-sm"></i>
        </div>
      );
    } else if (value === false) {
      return (
        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
          <i className="ri-close-line text-gray-400 text-sm"></i>
        </div>
      );
    } else {
      return <span className="text-sm font-medium text-gray-900">{value}</span>;
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
            <i className="ri-table-line mr-2"></i>
            Detailed Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Compare All Features
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See exactly what's included in each plan to make the best decision for your team.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
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

        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            {/* Header Row */}
            <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Features</h3>
              </div>
              {plans.map((plan, index) => (
                <div key={index} className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div>
                    {plan.monthlyPrice ? (
                      <>
                        <div className="text-3xl font-bold text-gray-900">
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </div>
                        <div className="text-sm text-gray-600">/month</div>
                      </>
                    ) : (
                      <div className="text-2xl font-bold text-gray-900">Custom</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Rows */}
            {features.map((feature, featureIndex) => (
              <div key={featureIndex} className={`grid grid-cols-4 ${featureIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-100 last:border-b-0`}>
                <div className="p-6">
                  <span className="text-sm font-medium text-gray-900">{feature.name}</span>
                </div>
                <div className="p-6 text-center">
                  {renderFeatureValue(feature.basic)}
                </div>
                <div className="p-6 text-center">
                  {renderFeatureValue(feature.pro)}
                </div>
                <div className="p-6 text-center">
                  {renderFeatureValue(feature.enterprise)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Accordion View */}
        <div className="lg:hidden space-y-6">
          {plans.map((plan, planIndex) => (
            <div key={planIndex} className="bg-white border-2 border-gray-200 rounded-3xl overflow-hidden">
              {/* Plan Header */}
              <div className="p-6 text-center bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div>
                  {plan.monthlyPrice ? (
                    <>
                      <div className="text-3xl font-bold text-gray-900">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </div>
                      <div className="text-sm text-gray-600">/month</div>
                    </>
                  ) : (
                    <div className="text-2xl font-bold text-gray-900">Custom</div>
                  )}
                </div>
              </div>

              {/* Features List */}
              <div className="p-6">
                <div className="space-y-4">
                  {features.map((feature, featureIndex) => {
                    const value = planIndex === 0 ? feature.basic : planIndex === 1 ? feature.pro : feature.enterprise;
                    return (
                      <div key={featureIndex} className="flex items-center justify-between py-2">
                        <span className="text-sm text-gray-700">{feature.name}</span>
                        <div className="ml-4">
                          {renderFeatureValue(value)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm mb-6">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="w-full sm:w-auto px-6 py-3 border-2 border-blue-300 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all duration-200 whitespace-nowrap cursor-pointer">
              Schedule Demo
            </button>
            <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 whitespace-nowrap cursor-pointer">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
