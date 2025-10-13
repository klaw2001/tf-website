
'use client';

import Link from 'next/link';

export default function RecruiterCTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-full text-blue-600 text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-blue-200">
            <i className="ri-building-2-line mr-2"></i>
            Ready to Transform Your Hiring?
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Stop searching.
            <br />
            Start
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {' '}
              hiring.
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
            Join 500+ companies that have revolutionized their talent acquisition with our AI-powered platform. 
            Access pre-vetted candidates and hire 70% faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4">
            <Link 
              href="/signup?role=recruiter"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-bold text-sm sm:text-lg whitespace-nowrap cursor-pointer shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <i className="ri-search-eye-line mr-2"></i>
              Start Hiring Today
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-blue-300 text-blue-600 px-6 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-blue-50 transition-all duration-200 font-bold text-sm sm:text-lg whitespace-nowrap cursor-pointer backdrop-blur-sm"
            >
              <i className="ri-calendar-line mr-2"></i>
              Schedule Demo
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">14 Days</div>
              <div className="text-gray-600 text-sm">Free Trial</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">No Setup</div>
              <div className="text-gray-600 text-sm">Fees Required</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-200/20 rounded-full animate-pulse delay-1000 hidden lg:block"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-blue-300/30 rounded-full animate-pulse delay-500 hidden lg:block"></div>
    </section>
  );
}
