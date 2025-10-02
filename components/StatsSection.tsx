
'use client';

export default function StatsSection() {
  const stats = [
    {
      number: '500+',
      label: 'Companies',
      description: 'Active employers seeking experienced talent',
      icon: 'ri-building-line',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      number: '2M+',
      label: 'Professionals',
      description: 'Experienced professionals getting invited',
      icon: 'ri-team-line',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '95%',
      label: 'Success Rate',
      description: 'Of invitations lead to interviews',
      icon: 'ri-trophy-line',
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '30%',
      label: 'Salary Increase',
      description: 'Average salary boost for placed candidates',
      icon: 'ri-line-chart-line',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
            <i className="ri-trophy-line mr-2"></i>
            Our Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transforming careers with 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> proven results</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Real numbers from real professionals who have revolutionized their career journey with TalentFlip.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-surface rounded-3xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 border border-border hover:border-accent-DEFAULT/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-DEFAULT/5 to-accent-hover/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${stat.icon} text-2xl sm:text-3xl text-white`}></i>
                </div>
                
                <div className="text-3xl sm:text-4xl font-bold text-fg mb-2 group-hover:text-accent-DEFAULT transition-colors duration-300">
                  {stat.number}
                </div>
                
                <div className="text-lg sm:text-xl font-semibold text-fg mb-3">
                  {stat.label}
                </div>
                
                <p className="text-muted text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
