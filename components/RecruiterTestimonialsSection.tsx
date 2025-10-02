
'use client';

import { useState, useEffect } from 'react';

export default function RecruiterTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "TalentFlip revolutionized our hiring process. We reduced time-to-hire by 65% and found candidates we never would have discovered through traditional methods. The AI matching is incredibly accurate.",
      author: "Sarah Chen",
      role: "VP of Talent Acquisition",
      company: "TechCorp",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20executive%20in%20business%20attire%2C%20confident%20smile%2C%20modern%20office%20background%2C%20corporate%20headshot%20style&width=300&height=300&seq=testimonial1&orientation=squarish"
    },
    {
      quote: "The quality of candidates from TalentFlip's pre-vetted pool is exceptional. We've made 12 successful hires in the past 6 months, and every single one has exceeded our expectations.",
      author: "Michael Rodriguez",
      role: "Head of Engineering",
      company: "InnovateTech",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20engineer%20in%20casual%20business%20attire%2C%20friendly%20expression%2C%20tech%20office%20environment%2C%20modern%20corporate%20headshot&width=300&height=300&seq=testimonial2&orientation=squarish"
    },
    {
      quote: "What impressed me most is how TalentFlip understands our company culture. The candidates they present aren't just technically qualified - they're perfect cultural fits too.",
      author: "Emily Watson",
      role: "Chief People Officer",
      company: "GrowthLabs",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20HR%20executive%20with%20warm%20smile%2C%20modern%20office%20setting%2C%20professional%20business%20attire%2C%20executive%20headshot%20style&width=300&height=300&seq=testimonial3&orientation=squarish"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
            <i className="ri-chat-quote-line mr-2"></i>
            Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">What our clients</span>
            <br />
            say about us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how companies are transforming their hiring process and building exceptional teams with TalentFlip.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-200">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover object-top shadow-lg"
                        />
                      </div>
                      
                      <div className="flex-grow text-center lg:text-left">
                        <div className="flex justify-center lg:justify-start mb-6">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
                          ))}
                        </div>
                        
                        <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 italic">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <div>
                          <div className="font-bold text-xl text-gray-900 mb-1">
                            {testimonial.author}
                          </div>
                          <div className="text-blue-600 font-medium mb-1">
                            {testimonial.role}
                          </div>
                          <div className="text-gray-600">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors duration-200 cursor-pointer z-10"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors duration-200 cursor-pointer z-10"
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 cursor-pointer ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
