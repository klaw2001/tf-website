
'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-white">
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
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-tf-secondary/10 rounded-full text-tf-secondary text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-tf-secondary/20">
            <i className="ri-rocket-line mr-2"></i>
            Ready to Transform Your Career?
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-tf-black mb-6 sm:mb-8 leading-tight">
            Stop applying.
            <br />
            Start getting
            <span className="highlight">
              {' '}
              invited.
            </span>
          </h2>

          <p className="subtitle mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
            Join over 2 million experienced professionals who have discovered a better way to find their
            next career opportunity. Let companies compete for your talent.
          </p>

          <div className="flex flex-row gap-2 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4">
            <Link 
              href="/signup?role=talent"
              className="btn bg-tf-gradient text-white px-5 sm:px-8 py-2 sm:py-3 rounded-full hover:opacity-90 transition-all duration-200 text-sm sm:text-lg whitespace-nowrap cursor-pointer shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <i className="ri-user-add-line mr-2"></i>
              Create Your Profile
            </Link>
            <Link 
              href="/about"
              className="btn border-2 border-tf-secondary text-tf-secondary px-5 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-tf-secondary/5 transition-all duration-200 text-sm sm:text-lg whitespace-nowrap cursor-pointer"
            >
              <i className="ri-question-line mr-2"></i>
              Learn More
            </Link>
          </div>

          <div className="flex flex-row sm:grid sm:grid-cols-3 gap-2 sm:gap-8 max-w-2xl mx-auto justify-center">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-tf-primary mb-2">100%</div>
              <div className="text-tf-text-light text-sm">Free to Join</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-tf-primary mb-2">24h</div>
              <div className="text-tf-text-light text-sm">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-tf-primary mb-2">5★</div>
              <div className="text-tf-text-light text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 bg-tf-secondary/10 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-tf-primary/10 rounded-full animate-pulse delay-1000 hidden lg:block"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-tf-secondary/10 rounded-full animate-pulse delay-500 hidden lg:block"></div>
    </section>
  );
}
