
'use client';

export default function TalentCRMSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 lg:pr-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-blue-50 text-blue-600">
              <i className="ri-eye-line mr-2"></i>
              Your Profile View
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              See how
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> recruiters view </span>
              your profile
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Your profile appears in recruiter dashboards with AI-powered insights, skill matching scores, and availability status. Get discovered by the right opportunities.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                  <i className="ri-check-line text-green-600 text-sm"></i>
                </div>
                <span className="text-gray-700">AI-powered skill matching with 95% accuracy</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                  <i className="ri-check-line text-green-600 text-sm"></i>
                </div>
                <span className="text-gray-700">Real-time availability and salary expectations</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                  <i className="ri-check-line text-green-600 text-sm"></i>
                </div>
                <span className="text-gray-700">Anonymous until recruiter shows genuine interest</span>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold text-base sm:text-lg whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <i className="ri-user-add-line mr-2"></i>
              Create Your Profile
            </button>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden max-w-lg mx-auto lg:max-w-none">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex space-x-1 sm:space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="ml-3 sm:ml-4 text-xs sm:text-sm text-gray-600 font-medium">TalentFlip CRM</div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="ri-search-line text-blue-600 text-xs sm:text-sm"></i>
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <i className="ri-user-line text-gray-600 text-xs sm:text-sm"></i>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Talent Pipeline</h3>
                  <div className="flex items-center space-x-2">
                    <div className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      24 Active
                    </div>
                    <button className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer">
                      <i className="ri-add-line text-white text-xs sm:text-sm"></i>
                    </button>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-blue-200">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm sm:text-lg">SJ</span>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Sarah Johnson</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Senior Software Engineer</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        98% Match
                      </div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                    <div className="bg-white rounded-lg p-2 sm:p-3 border border-blue-200">
                      <div className="text-xs text-gray-500 mb-1">Experience</div>
                      <div className="font-semibold text-gray-900 text-xs sm:text-sm">8+ years</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 sm:p-3 border border-blue-200">
                      <div className="text-xs text-gray-500 mb-1">Location</div>
                      <div className="font-semibold text-gray-900 text-xs sm:text-sm">San Francisco</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 sm:p-3 border border-blue-200">
                      <div className="text-xs text-gray-500 mb-1">Salary</div>
                      <div className="font-semibold text-gray-900 text-xs sm:text-sm">$180k</div>
                    </div>
                    <div className="bg-white rounded-lg p-2 sm:p-3 border border-blue-200">
                      <div className="text-xs text-gray-500 mb-1">Availability</div>
                      <div className="font-semibold text-green-600 text-xs sm:text-sm">Available</div>
                    </div>
                  </div>
                  
                  <div className="mb-3 sm:mb-4">
                    <div className="text-xs text-gray-500 mb-2">Top Skills</div>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">React</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">Node.js</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">Python</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">+5 more</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="text-xs text-gray-500">
                      <i className="ri-time-line mr-1"></i>
                      Last active: 2 hours ago
                    </div>
                    <div className="flex space-x-2 w-full sm:w-auto">
                      <button className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-white border border-blue-300 text-blue-600 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap">
                        View Profile
                      </button>
                      <button className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                        Send Invite
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-medium text-xs sm:text-sm">MK</span>
                      </div>
                      <div className="ml-2 sm:ml-3">
                        <div className="font-medium text-gray-900 text-xs sm:text-sm">Mike Chen</div>
                        <div className="text-xs text-gray-500">Frontend Developer</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">85% Match</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-medium text-xs sm:text-sm">AL</span>
                      </div>
                      <div className="ml-2 sm:ml-3">
                        <div className="font-medium text-gray-900 text-xs sm:text-sm">Anna Liu</div>
                        <div className="text-xs text-gray-500">Product Manager</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">92% Match</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-300/30 to-indigo-300/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-indigo-300/20 to-blue-300/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
