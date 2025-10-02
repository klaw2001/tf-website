
'use client';

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%233B82F6\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 rounded-full text-blue-700 text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-blue-200">
            <i className="ri-rocket-line mr-2"></i>
            Ready to Transform Your Career?
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Stop applying.
            <br />
            Start getting
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {' '}
              invited.
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
            Join over 2 million experienced professionals who have discovered a better way to find their
            next career opportunity. Let companies compete for your talent.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-bold text-sm sm:text-lg whitespace-nowrap cursor-pointer shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <i className="ri-user-add-line mr-2"></i>
              Create Your Profile
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-gray-50 transition-all duration-200 font-bold text-sm sm:text-lg whitespace-nowrap cursor-pointer">
              <i className="ri-question-line mr-2"></i>
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 text-sm">Free to Join</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">24h</div>
              <div className="text-gray-600 text-sm">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">5★</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-200/20 rounded-full animate-pulse delay-1000 hidden lg:block"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-blue-300/20 rounded-full animate-pulse delay-500 hidden lg:block"></div>
    </section>
  );
}
