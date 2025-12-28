
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function RecruiterTestimonialsSection() {
  const testimonials = [
    {
      quote: "TalentFlip revolutionized our hiring process. We reduced time-to-hire by 65% and found candidates we never would have discovered through traditional methods. The AI matching is incredibly accurate.",
      author: "Sarah Chen",
      role: "VP of Talent Acquisition",
      company: "TechCorp",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20executive%20in%20business%20attire%2C%20confident%20smile%2C%20modern%20office%20background%2C%20corporate%20headshot%20style&width=300&height=300&seq=testimonial1&orientation=squarish",
      rating: 5,
      metrics: '65% faster hiring'
    },
    {
      quote: "The quality of candidates from TalentFlip's pre-vetted pool is exceptional. We've made 12 successful hires in the past 6 months, and every single one has exceeded our expectations.",
      author: "Michael Rodriguez",
      role: "Head of Engineering",
      company: "InnovateTech",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20engineer%20in%20casual%20business%20attire%2C%20friendly%20expression%2C%20tech%20office%20environment%2C%20modern%20corporate%20headshot&width=300&height=300&seq=testimonial2&orientation=squarish",
      rating: 5,
      metrics: '12 successful hires'
    },
    {
      quote: "What impressed me most is how TalentFlip understands our company culture. The candidates they present aren't just technically qualified - they're perfect cultural fits too.",
      author: "Emily Watson",
      role: "Chief People Officer",
      company: "GrowthLabs",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20HR%20executive%20with%20warm%20smile%2C%20modern%20office%20setting%2C%20professional%20business%20attire%2C%20executive%20headshot%20style&width=300&height=300&seq=testimonial3&orientation=squarish",
      rating: 5,
      metrics: 'Perfect cultural fit'
    },
    {
      quote: "TalentFlip has transformed how we approach recruitment. The platform's AI matching saves us countless hours and connects us with top-tier talent we wouldn't find elsewhere.",
      author: "David Kim",
      role: "Director of Talent",
      company: "ScaleUp Inc",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20executive%20director%2C%20confident%20expression%2C%20modern%20office%20background%2C%20corporate%20headshot&width=300&height=300&seq=testimonial4&orientation=squarish",
      rating: 5,
      metrics: 'Time saved'
    },
    {
      quote: "The pre-vetted talent pool is a game-changer. We've cut our hiring time in half and improved candidate quality significantly.",
      author: "Lisa Anderson",
      role: "VP of People",
      company: "TechVenture",
      image: "https://readdy.ai/api/search-image?query=Professional%20female%20executive%20VP%2C%20warm%20smile%2C%20modern%20office%20setting%2C%20business%20professional%20attire&width=300&height=300&seq=testimonial5&orientation=squarish",
      rating: 5,
      metrics: '50% faster'
    },
    {
      quote: "Outstanding platform that delivers exactly what it promises. The candidate quality and matching accuracy are exceptional.",
      author: "Robert Taylor",
      role: "Head of Recruitment",
      company: "InnovateLabs",
      image: "https://readdy.ai/api/search-image?query=Professional%20male%20recruiter%2C%20confident%20smile%2C%20tech%20office%20background%2C%20business%20casual%20attire&width=300&height=300&seq=testimonial6&orientation=squarish",
      rating: 5,
      metrics: 'Exceptional quality'
    }
  ];

  return (
    <section data-aos="fade-up" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
            <i className="ri-chat-quote-line mr-2"></i>
            Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">What our clients</span>
            <br />
            say about us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how companies are transforming their hiring process and building exceptional teams with TalentFlip.
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
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-blue-200"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.author}
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
