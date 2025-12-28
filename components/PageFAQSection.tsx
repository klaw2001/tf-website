'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface PageFAQSectionProps {
  faqs: FAQItem[];
}

export default function PageFAQSection({ faqs }: PageFAQSectionProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <section data-aos="fade-up" className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Vector/Image */}
          <div className="order-2 lg:order-1">
            <div className="p-8 lg:p-12">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Frequently asked
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">questions</span>
                </h2>
                <p className="text-gray-600 text-lg mb-2">
                  Still need help?{' '}
                  <Link href="/faq" className="text-blue-600 hover:text-blue-700 font-medium transition-colors cursor-pointer">
                    Chat to us.
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="order-1 lg:order-2">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                  >
                    <span className="font-semibold text-gray-900 pr-4 text-base sm:text-lg">{faq.question}</span>
                    <i 
                      className={`ri-${openItem === faq.id ? 'subtract' : 'add'}-line text-blue-600 text-2xl flex-shrink-0 transition-transform duration-200 ${
                        openItem === faq.id ? 'rotate-180' : ''
                      }`}
                    ></i>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openItem === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

