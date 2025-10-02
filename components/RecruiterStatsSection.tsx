
'use client';

export default function RecruiterStatsSection() {
  const stats = [
    {
      icon: 'ri-building-2-line',
      number: '500+',
      label: 'Companies',
      description: 'Active employers seeking experienced talent.',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: 'ri-team-line',
      number: '2M+',
      label: 'Professionals',
      description: 'Pre-vetted candidates ready for new opportunities.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'ri-time-line',
      number: '70%',
      label: 'Faster Hiring',
      description: 'Reduce time-to-hire with our AI-powered matching.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'ri-star-line',
      number: '96%',
      label: 'Success Rate',
      description: 'Candidates successfully placed in their roles.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
            <i className="ri-trophy-line mr-2"></i>
            Trusted by Leading Companies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Transforming careers</span>
            <br />
            with proven results
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of companies that have revolutionized their talent acquisition process with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-500/20"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${stat.icon} text-2xl text-white`}></i>
              </div>
              
              <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              
              <div className="text-lg font-semibold text-blue-600 mb-3">
                {stat.label}
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
