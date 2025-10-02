
'use client';

export default function RecruiterHeroSection() {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8">
            AI-powered project briefs
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              for recruiters
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
            Transform your ideas into comprehensive project briefs in seconds. Let AI create 
            your project brief while you focus on bringing your vision to life.
          </p>
          
          <div className="mb-12 sm:mb-16">
            <button className="bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-800 transition-all duration-200 font-semibold text-sm sm:text-lg whitespace-nowrap cursor-pointer shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Get started for free
            </button>
          </div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-2 sm:px-4">
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
                      <span className="font-medium">My briefs</span>
                      <span className="mx-1 hidden sm:inline">/</span>
                      <span className="hidden sm:inline">UI Studio 2024</span>
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
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Introduction</h3>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="h-2 sm:h-3 bg-gray-200 rounded-full"></div>
                        <div className="h-2 sm:h-3 bg-gray-200 rounded-full w-4/5"></div>
                        <div className="h-2 sm:h-3 bg-gray-200 rounded-full w-3/5"></div>
                      </div>
                    </div>
                    
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">Goal</h4>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                        <div className="bg-blue-600 h-1.5 sm:h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1 sm:space-y-2">
                      <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full"></div>
                      <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full w-5/6"></div>
                      <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full w-4/6"></div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-gradient-to-br from-pink-100 via-purple-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200">
                      <div className="text-center mb-4 sm:mb-6">
                        <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-3 sm:mb-4">What type of artwork?</h4>
                        
                        <div className="grid grid-cols-2 gap-2 sm:gap-4">
                          <div className="bg-white rounded-lg p-2 sm:p-4 border border-gray-200 cursor-pointer hover:border-blue-300 transition-colors">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
                              <i className="ri-window-line text-blue-600 text-sm sm:text-base"></i>
                            </div>
                            <p className="text-xs text-gray-600">Web app</p>
                          </div>
                          
                          <div className="bg-white rounded-lg p-2 sm:p-4 border border-blue-300 cursor-pointer">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
                              <i className="ri-smartphone-line text-white text-sm sm:text-base"></i>
                            </div>
                            <p className="text-xs text-gray-900 font-medium">UI / UX Design</p>
                          </div>
                          
                          <div className="bg-white rounded-lg p-2 sm:p-4 border border-gray-200 cursor-pointer hover:border-blue-300 transition-colors">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
                              <i className="ri-mobile-download-line text-gray-600 text-sm sm:text-base"></i>
                            </div>
                            <p className="text-xs text-gray-600">Mobile App</p>
                          </div>
                          
                          <div className="bg-white rounded-lg p-2 sm:p-4 border border-gray-200 cursor-pointer hover:border-blue-300 transition-colors">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2">
                              <i className="ri-palette-line text-gray-600 text-sm sm:text-base"></i>
                            </div>
                            <p className="text-xs text-gray-600">Brand & Logo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 sm:mt-6 text-center">
                      <div className="text-xs text-gray-500 mb-2">AI PM UCG designers</div>
                      <div className="flex justify-center items-center space-x-1">
                        <div className="flex -space-x-2">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full border-2 border-white"></div>
                        </div>
                        <span className="text-xs text-blue-600 font-medium ml-2 cursor-pointer">23k+</span>
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
      </div>
    </section>
  );
}
