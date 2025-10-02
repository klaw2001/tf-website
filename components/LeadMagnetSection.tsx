
'use client';

import { useState } from 'react';

export default function LeadMagnetSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    experience: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://readdy.ai/api/form/d38p2nc23rr1ef6e03s0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          firstName: formData.firstName,
          email: formData.email,
          experience: formData.experience
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', email: '', experience: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-white/30">
              <i className="ri-download-cloud-line mr-2"></i>
              Free Career Guide
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Get the Ultimate Career 
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Transformation Guide</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
              Download our comprehensive 50-page guide packed with insider strategies, salary negotiation tips, and proven techniques to accelerate your career growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 text-white">
              <div className="flex items-center justify-center sm:justify-start">
                <i className="ri-check-line text-yellow-300 mr-2 sm:mr-3 text-base sm:text-lg flex-shrink-0"></i>
                <span className="text-sm sm:text-base">Salary negotiation scripts</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <i className="ri-check-line text-yellow-300 mr-2 sm:mr-3 text-base sm:text-lg flex-shrink-0"></i>
                <span className="text-sm sm:text-base">Interview preparation checklist</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <i className="ri-check-line text-yellow-300 mr-2 sm:mr-3 text-base sm:text-lg flex-shrink-0"></i>
                <span className="text-sm sm:text-base">Career transition roadmap</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <i className="ri-check-line text-yellow-300 mr-2 sm:mr-3 text-base sm:text-lg flex-shrink-0"></i>
                <span className="text-sm sm:text-base">Industry insider secrets</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/20 backdrop-blur-sm max-w-md mx-auto lg:max-w-none">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <i className="ri-gift-line text-white text-xl sm:text-2xl"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Free Download</h3>
                <p className="text-gray-600 text-sm sm:text-base">Join 50,000+ professionals who've transformed their careers</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" data-readdy-form id="career-guide-form">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-gray-900 bg-white text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Work Email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-gray-900 bg-white text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <select 
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-6 sm:pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-gray-900 bg-white text-sm sm:text-base"
                    required
                  >
                    <option value="">Years of Experience</option>
                    <option value="1-3 years">1-3 years</option>
                    <option value="4-7 years">4-7 years</option>
                    <option value="8-12 years">8-12 years</option>
                    <option value="13+ years">13+ years</option>
                  </select>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                    <div className="text-green-600 font-medium text-sm">
                      <i className="ri-check-circle-line mr-2"></i>
                      Guide sent to your email!
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                    <div className="text-red-600 font-medium text-sm">
                      <i className="ri-error-warning-line mr-2"></i>
                      Something went wrong. Please try again.
                    </div>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold text-sm sm:text-lg whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line mr-2 animate-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="ri-download-line mr-2"></i>
                      Download Free Guide
                    </>
                  )}
                </button>
                <p className="text-xs text-gray-500 text-center px-2">
                  By downloading, you agree to receive career tips and updates. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000 hidden lg:block"></div>
    </section>
  );
}
