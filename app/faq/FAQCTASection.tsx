'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQCTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://readdy.ai/api/receive-data/cm5zrkzlm001h2s8yw5w2mjfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: ''
        });
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
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Still have questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our team is here to help! Get in touch and we'll answer any questions you have about TalentFlip.
            </p>
            
            <Link href="/contact">
              <button className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg whitespace-nowrap cursor-pointer transform hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)' }}>
                <i className="ri-customer-service-line mr-2"></i>
                Contact Us
              </button>
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-vip-crown-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Early Access</h3>
              <p className="text-gray-600">Join now to get early access and exclusive hiring insights</p>
            </div>

            <form id="faq-signup" data-readdy-form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }}
              >
                {isSubmitting ? 'Signing up...' : 'Get Early Access'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-green-800 text-center text-sm">
                    Thank you! You're now on our early access list.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-800 text-center text-sm">
                    Sorry, there was an error. Please try again.
                  </p>
                </div>
              )}

              <p className="text-xs text-gray-500 text-center">
                By signing up, you agree to receive updates and early access notifications. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}