'use client';

import { useState } from 'react';

export default function FAQAccordion() {
  const [activeTab, setActiveTab] = useState('talent');
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  const talentFAQs = [
    {
      id: 'talent-1',
      question: 'Do I need to apply for jobs on TalentFlip?',
      answer: 'No, you don\'t apply. You simply create your profile and get invited by recruiters. This eliminates the stress of constantly applying and waiting for responses. Recruiters come to you based on your skills and experience.'
    },
    {
      id: 'talent-2',
      question: 'Is TalentFlip free for job seekers?',
      answer: 'Yes, it\'s 100% free. You\'ll never be charged to showcase your skills. We believe talented professionals shouldn\'t pay to find opportunities - companies should compete for your talent instead.'
    },
    {
      id: 'talent-3',
      question: 'Will I have to attend long interview rounds?',
      answer: 'No, recruiters connect via short intro calls instead of multiple interview stages. This saves you time and reduces interview fatigue while still allowing both parties to assess mutual fit effectively.'
    }
  ];

  const recruiterFAQs = [
    {
      id: 'recruiter-1',
      question: 'How does TalentFlip save me time?',
      answer: 'Instead of filtering thousands of resumes, you directly access pre-qualified talent ready for a short call. Our platform eliminates the resume screening bottleneck and connects you with candidates who match your specific requirements.'
    },
    {
      id: 'recruiter-2',
      question: 'What pricing options are available?',
      answer: 'Flexible subscriptions or pay-per-contact plans, with enterprise options available. We offer scalable solutions whether you\'re a startup hiring your first employees or an enterprise managing hundreds of positions.'
    },
    {
      id: 'recruiter-3',
      question: 'Can I trust the talent profiles?',
      answer: 'Yes, we ensure profiles are authentic, with skills and achievements verified. Our verification process includes professional background checks and skill assessments to maintain the highest quality of talent on our platform.'
    }
  ];

  const currentFAQs = activeTab === 'talent' ? talentFAQs : recruiterFAQs;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActiveTab('talent')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeTab === 'talent'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <i className="ri-user-line mr-2"></i>
              For Talent
            </button>
            <button
              onClick={() => setActiveTab('recruiters')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeTab === 'recruiters'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <i className="ri-briefcase-line mr-2"></i>
              For Recruiters
            </button>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-lg">
          <div className="space-y-4">
            {currentFAQs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <i className={`ri-${openItem === faq.id ? 'subtract' : 'add'}-line text-blue-600 text-xl transition-transform duration-200 ${
                    openItem === faq.id ? 'rotate-180' : ''
                  }`}></i>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${
                  openItem === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}