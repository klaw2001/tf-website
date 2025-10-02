
'use client';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen flex items-center py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6" style={{ backgroundColor: '#EBF4FF', color: '#2563EB' }}>
            <i className="ri-sparkle-2-line mr-2"></i>
            Experience-First Hiring Platform
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8">
            Transform your
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              talent acquisition
            </span>
            <br />
            with AI
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
            Skip the traditional job application process. Our AI-powered platform connects experienced professionals directly with opportunities based on their skills and career aspirations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 justify-center px-4">
            <button className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-200 font-semibold text-sm sm:text-lg whitespace-nowrap cursor-pointer shadow-xl hover:shadow-2xl transform hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)' }}>
              <i className="ri-rocket-line mr-2"></i>
              Get Started Free
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-50 transition-all duration-200 font-semibold text-sm sm:text-lg whitespace-nowrap cursor-pointer">
              <i className="ri-play-circle-line mr-2"></i>
              Watch Demo
            </button>
          </div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-2 sm:px-4">
          <div className="relative">
            <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl"></div>
            
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-white rounded-full text-xs sm:text-sm text-gray-600 border border-gray-300">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-1 sm:mr-2"></div>
                      <span className="font-medium">My Profile</span>
                      <span className="mx-1 hidden sm:inline">/</span>
                      <span className="hidden sm:inline">Career Dashboard</span>
                    </div>
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <i className="ri-user-line text-gray-600 text-sm sm:text-base"></i>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                  <div className="text-left">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-base sm:text-xl">SJ</span>
                        </div>
                        <div className="ml-3 sm:ml-4">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900">Sarah Johnson</h3>
                          <p className="text-sm sm:text-base text-gray-600">Senior Software Engineer</p>
                          <div className="flex items-center mt-1">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-1 sm:mr-2"></div>
                            <span className="text-xs sm:text-sm text-green-600 font-medium">Available</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl sm:text-2xl font-bold text-blue-600">98%</div>
                        <div className="text-xs text-gray-500">Match</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                      <div className="bg-blue-50 rounded-lg p-2 sm:p-4 border border-blue-200">
                        <div className="text-xs sm:text-sm text-blue-600 font-medium mb-1">Experience</div>
                        <div className="text-sm sm:text-lg font-bold text-gray-900">8+ Years</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-2 sm:p-4 border border-green-200">
                        <div className="text-xs sm:text-sm text-green-600 font-medium mb-1">Salary</div>
                        <div className="text-sm sm:text-lg font-bold text-gray-900">$160k-$200k</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-2 sm:p-4 border border-purple-200">
                        <div className="text-xs sm:text-sm text-purple-600 font-medium mb-1">Location</div>
                        <div className="text-sm sm:text-lg font-bold text-gray-900">SF Bay Area</div>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-2 sm:p-4 border border-orange-200">
                        <div className="text-xs sm:text-sm text-orange-600 font-medium mb-1">Interests</div>
                        <div className="text-sm sm:text-lg font-bold text-gray-900">5 Active</div>
                      </div>
                    </div>
                    
                    <div className="mb-4 sm:mb-6">
                      <div className="text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">Top Skills</div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">React</span>
                        <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">Node.js</span>
                        <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">Python</span>
                        <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">AWS</span>
                        <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs sm:text-sm">+8 more</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200">
                      <div className="text-center mb-4 sm:mb-6">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Recruiter Interest</h4>
                        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Companies viewing your profile</p>
                        
                        <div className="space-y-2 sm:space-y-3">
                          <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200 shadow-sm">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                  <span className="text-white font-bold text-xs sm:text-sm">MS</span>
                                </div>
                                <div className="ml-2 sm:ml-3 text-left">
                                  <div className="font-medium text-gray-900 text-xs sm:text-sm">Microsoft</div>
                                  <div className="text-xs text-gray-500">Senior SDE</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-xs sm:text-sm font-bold text-green-600">$185k</div>
                                <div className="text-xs text-gray-500">Interested</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200 shadow-sm">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center">
                                  <span className="text-white font-bold text-xs sm:text-sm">G</span>
                                </div>
                                <div className="ml-2 sm:ml-3 text-left">
                                  <div className="font-medium text-gray-900 text-xs sm:text-sm">Google</div>
                                  <div className="text-xs text-gray-500">Staff Engineer</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-xs sm:text-sm font-bold text-green-600">$220k</div>
                                <div className="text-xs text-gray-500">Invited</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200 shadow-sm">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-lg flex items-center justify-center">
                                  <span className="text-white font-bold text-xs sm:text-sm">N</span>
                                </div>
                                <div className="ml-2 sm:ml-3 text-left">
                                  <div className="font-medium text-gray-900 text-xs sm:text-sm">Netflix</div>
                                  <div className="text-xs text-gray-500">Tech Lead</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-xs sm:text-sm font-bold text-blue-600">$195k</div>
                                <div className="text-xs text-gray-500">Viewing</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-3 sm:p-4 text-center">
                        <div className="text-white font-semibold mb-1 text-sm sm:text-base">12 Companies</div>
                        <div className="text-blue-100 text-xs sm:text-sm">viewed your profile this week</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 sm:mt-6 text-center">
                      <div className="text-xs text-gray-500 mb-2">Powered by AI matching</div>
                      <div className="flex justify-center items-center space-x-1">
                        <div className="flex -space-x-2">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full border-2 border-white"></div>
                        </div>
                        <span className="text-xs text-blue-600 font-medium ml-2 cursor-pointer">150k+ professionals</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-orange-300/30 to-red-300/30 rounded-full blur-2xl hidden lg:block"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-full blur-2xl hidden lg:block"></div>
        </div>
        
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-center sm:space-x-8 space-y-2 sm:space-y-0 text-xs sm:text-sm text-gray-500">
          <div className="flex items-center justify-center">
            <i className="ri-check-line text-green-500 mr-2"></i>
            No applications needed
          </div>
          <div className="flex items-center justify-center">
            <i className="ri-check-line text-green-500 mr-2"></i>
            AI-powered matching
          </div>
          <div className="flex items-center justify-center">
            <i className="ri-check-line text-green-500 mr-2"></i>
            Direct invitations
          </div>
        </div>
      </div>
    </section>
  );
}
