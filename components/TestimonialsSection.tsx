
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
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

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
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
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-lg text-yellow-400"></i>
                    ))}
                  </div>
                  
                  <blockquote className="text-sm text-gray-900 mb-6 leading-relaxed italic flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-blue-200"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-xs">
                        {testimonial.role}
                      </div>
                      <div className="text-blue-600 text-xs font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 rounded-full text-blue-600 text-xs font-medium w-fit">
                    <i className="ri-trophy-line mr-1.5"></i>
                    {testimonial.metrics}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
