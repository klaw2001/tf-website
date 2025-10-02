
'use client';

export default function EarlyAccessSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-12">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
              <i className="ri-star-line mr-2"></i>
              Early Access
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Be the first to experience
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> the hiring revolution</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of forward-thinking professionals and innovative companies who are already transforming how talent connects with opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <div className="bg-blue-600 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-star-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">For Talent</h3>
              <p className="text-gray-600 text-sm">Get discovered by top companies, skip applications, receive direct invitations</p>
            </div>
            
            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-200">
              <div className="bg-indigo-600 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <i className="ri-building-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">For Companies</h3>
              <p className="text-gray-600 text-sm">Access pre-qualified talent, reduce hiring time, improve candidate quality</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">What You'll Get</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-center">
                <i className="ri-check-line mr-3 text-blue-200"></i>
                <span>Priority platform access</span>
              </div>
              <div className="flex items-center">
                <i className="ri-check-line mr-3 text-blue-200"></i>
                <span>Exclusive hiring insights</span>
              </div>
              <div className="flex items-center">
                <i className="ri-check-line mr-3 text-blue-200"></i>
                <span>Personal onboarding session</span>
              </div>
              <div className="flex items-center">
                <i className="ri-check-line mr-3 text-blue-200"></i>
                <span>30% discount on premium plans</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full px-6 py-4 border border-gray-300 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="w-full text-white px-8 py-4 rounded-full transition-all duration-200 font-semibold text-lg whitespace-nowrap cursor-pointer shadow-xl hover:shadow-2xl transform hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)' }}>
              <i className="ri-rocket-line mr-2"></i>
              Get Early Access
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:space-x-8 space-y-2 sm:space-y-0 text-sm text-gray-500">
            <div className="flex items-center justify-center">
              <i className="ri-shield-check-line text-blue-500 mr-2"></i>
              No spam, ever
            </div>
            <div className="flex items-center justify-center">
              <i className="ri-time-line text-blue-500 mr-2"></i>
              Launch in Q2 2024
            </div>
            <div className="flex items-center justify-center">
              <i className="ri-user-add-line text-blue-500 mr-2"></i>
              Join 15,000+ early users
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
