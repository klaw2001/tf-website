'use client';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Build a comprehensive profile showcasing your experience, skills, and career aspirations.',
      icon: 'ri-user-add-line',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      number: '02',
      title: 'AI Analysis',
      description: 'Our AI analyzes your profile and identifies the best opportunities that match your experience.',
      icon: 'ri-brain-line',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      number: '03',
      title: 'Get Invited',
      description: 'Companies reach out to you directly with personalized job offers and interview invitations.',
      icon: 'ri-mail-open-line',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '04',
      title: 'Choose Your Path',
      description: 'Review offers, compare opportunities, and choose the role that best fits your career goals.',
      icon: 'ri-roadmap-line',
      color: 'from-cyan-500 to-teal-500'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-purple-700 text-sm font-medium mb-6 border border-purple-200">
            <i className="ri-route-line mr-2"></i>
            How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your journey to the perfect role
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> starts here</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process puts you in control of your career journey, connecting you with opportunities that value your experience.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-indigo-200 to-cyan-200 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center`}>
                      <i className={`${step.icon} text-2xl text-white`}></i>
                    </div>
                    <div className="text-6xl font-bold text-gray-100">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 bg-white rounded-full border-4 border-purple-200 transform -translate-y-1/2 z-20">
                    <div className="absolute inset-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}