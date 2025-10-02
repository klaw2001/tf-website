
'use client';

import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Senior Full Stack Developer',
      company: 'Microsoft',
      image: 'https://readdy.ai/api/search-image?query=Professional%20software%20developer%20man%2C%20confident%20smile%2C%20modern%20tech%20office%20background%2C%20business%20casual%20attire%2C%20natural%20lighting%2C%20high%20quality%20portrait&width=400&height=400&seq=alex-thompson-testimonial&orientation=squarish',
      quote: 'I was skeptical at first, but TalentFlip completely changed how I approach job searching. Instead of applying to hundreds of jobs, I got 5 quality invitations and landed my dream role at Microsoft with a 40% salary increase.',
      rating: 5,
      metrics: '40% salary increase'
    },
    {
      name: 'Maria Garcia',
      role: 'Product Manager',
      company: 'Spotify',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Hispanic%20woman%20product%20manager%2C%20confident%20expression%2C%20modern%20office%20environment%2C%20business%20professional%20attire%2C%20natural%20lighting%20headshot&width=400&height=400&seq=maria-garcia-testimonial&orientation=squarish',
      quote: 'The personalized matching is incredible. Every opportunity was relevant to my experience and career goals. I received 3 offers within 2 weeks and chose the perfect fit at Spotify.',
      rating: 5,
      metrics: '3 offers in 2 weeks'
    },
    {
      name: 'James Wilson',
      role: 'DevOps Engineer',
      company: 'Netflix',
      image: 'https://readdy.ai/api/search-image?query=Professional%20DevOps%20engineer%20man%2C%20tech%20background%2C%20confident%20smile%2C%20business%20casual%20shirt%2C%20modern%20office%20lighting%2C%20executive%20portrait%20style&width=400&height=400&seq=james-wilson-testimonial&orientation=squarish',
      quote: 'TalentFlip saved me months of job searching. The AI matching is spot-on, and I love that companies come to me. My career coach helped me negotiate a package I never thought possible.',
      rating: 5,
      metrics: 'Dream role secured'
    },
    {
      name: 'Sarah Kim',
      role: 'UX Design Lead',
      company: 'Adobe',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20woman%20UX%20designer%2C%20creative%20office%20space%20background%2C%20confident%20expression%2C%20modern%20business%20attire%2C%20natural%20professional%20lighting&width=400&height=400&seq=sarah-kim-testimonial&orientation=squarish',
      quote: 'The platform connected me with opportunities I never would have found elsewhere. The transparency around salary and company culture made decision-making so much easier.',
      rating: 5,
      metrics: 'Perfect culture fit'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
            <i className="ri-chat-quote-line mr-2"></i>
            Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What our members
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> say about us</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from professionals who have transformed their careers with TalentFlip.
          </p>
        </div>

        <div className="relative">
          <div className="bg-card rounded-3xl p-6 sm:p-8 lg:p-12 border border-border shadow-xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-xl sm:text-2xl text-yellow-400"></i>
                  ))}
                </div>
                
                <blockquote className="text-base sm:text-lg lg:text-xl text-gray-900 mb-8 leading-relaxed italic">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <img 
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mr-4 border-2 border-blue-200"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-base sm:text-lg">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonials[activeTestimonial].role}
                    </div>
                    <div className="text-blue-600 text-sm font-medium">
                      {testimonials[activeTestimonial].company}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium">
                  <i className="ri-trophy-line mr-2"></i>
                  {testimonials[activeTestimonial].metrics}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl"></div>
                  <img 
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-3xl object-cover border-4 border-card shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === activeTestimonial 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 cursor-pointer transition-all duration-200 hover:shadow-xl"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          
          <button
            onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 cursor-pointer transition-all duration-200 hover:shadow-xl"
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
