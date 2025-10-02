
'use client';

export default function RecruiterCRMSection() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden max-w-lg mx-auto lg:max-w-none">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex space-x-1 sm:space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="ml-3 sm:ml-4 text-xs sm:text-sm text-gray-600 font-medium">Recruiter Dashboard</div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="ri-notification-line text-blue-600 text-xs sm:text-sm"></i>
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <i className="ri-user-line text-gray-600 text-xs sm:text-sm"></i>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Active Searches</h3>
                  <div className="flex items-center space-x-2">
                    <div className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      12 Open Roles
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-green-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Senior React Developer</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Tech Startup • San Francisco</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          15 Matches
                        </div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="bg-white rounded-lg p-2 text-center border border-green-200">
                        <div className="text-sm sm:text-lg font-bold text-gray-900">$160k</div>
                        <div className="text-xs text-gray-500">Budget</div>
                      </div>
                      <div className="bg-white rounded-lg p-2 text-center border border-green-200">
                        <div className="text-sm sm:text-lg font-bold text-gray-900">5+</div>
                        <div className="text-xs text-gray-500">Years Exp</div>
                      </div>
                      <div className="bg-white rounded-lg p-2 text-center border border-green-200">
                        <div className="text-sm sm:text-lg font-bold text-gray-900">Remote</div>
                        <div className="text-xs text-gray-500">Location</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center space-x-2">
                        <div className="flex -space-x-1">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                        </div>
                        <span className="text-xs text-gray-600">+12 more candidates</span>
                      </div>
                      <button className="px-3 py-1 bg-green-600 text-white rounded-lg text-xs font-medium hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap">
                        View All
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">UX Designer</h4>
                        <p className="text-xs text-gray-500">E-commerce • New York</p>
                      </div>
                      <div className="text-xs text-gray-500">8 Matches</div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="text-xs text-gray-500">
                        <i className="ri-time-line mr-1"></i>
                        Posted 3 days ago
                      </div>
                      <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-300 transition-colors cursor-pointer whitespace-nowrap">
                        Review
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">Backend Engineer</h4>
                        <p className="text-xs text-gray-500">FinTech • Austin</p>
                      </div>
                      <div className="text-xs text-gray-500">3 Matches</div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="text-xs text-gray-500">
                        <i className="ri-time-line mr-1"></i>
                        Posted 1 week ago
                      </div>
                      <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-300 transition-colors cursor-pointer whitespace-nowrap">
                        Review
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-blue-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="font-medium text-blue-900 text-sm">AI Suggestions</h4>
                      <p className="text-xs sm:text-sm text-blue-700">3 new profiles match your criteria</p>
                    </div>
                    <button className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                      Review Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-green-300/30 to-blue-300/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-full blur-xl"></div>
          </div>
          
          <div className="order-1 lg:order-2 lg:pl-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 bg-green-50 text-green-600">
              <i className="ri-dashboard-line mr-2"></i>
              Recruiter Dashboard
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Manage your
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> entire pipeline </span>
              in one place
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Track active searches, review AI-matched candidates, and manage your entire recruiting workflow from a single, intuitive dashboard designed for modern recruiters.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                  <i className="ri-check-line text-green-600 text-sm"></i>
                </div>
                <span className="text-gray-700">Real-time candidate matching with AI insights</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                  <i className="ri-check-line text-green-600 text-sm"></i>
                </div>
                <span className="text-gray-700">Automated pipeline management and tracking</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                  <i className="ri-check-line text-green-600 text-sm"></i>
                </div>
                <span className="text-gray-700">Smart suggestions based on hiring patterns</span>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-green-700 hover:to-blue-700 transition-all duration-200 font-semibold text-base sm:text-lg whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <i className="ri-dashboard-2-line mr-2"></i>
              Start Recruiting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
