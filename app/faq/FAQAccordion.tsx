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
    },
    {
      id: 'talent-4',
      question: 'How does the AI matching work?',
      answer: 'Our AI analyzes your profile, skills, experience, and preferences to match you with relevant opportunities. Recruiters see your profile only when there\'s a strong match, ensuring you receive quality invitations that align with your career goals.'
    },
    {
      id: 'talent-5',
      question: 'How long does it take to get matched with opportunities?',
      answer: 'Most users start receiving invitations within a few days of completing their profile. The speed depends on your skills, experience level, and market demand. Our AI continuously works to find the best matches for you.'
    },
    {
      id: 'talent-6',
      question: 'Can I remain anonymous on the platform?',
      answer: 'Yes, your profile remains anonymous until a recruiter shows genuine interest and you choose to reveal your identity. This protects your privacy while allowing you to explore opportunities without your current employer knowing.'
    },
    {
      id: 'talent-7',
      question: 'What information do I need to create my profile?',
      answer: 'You\'ll need to provide your work experience, skills, education, and career preferences. You can also upload your resume, which our AI will automatically parse to populate your profile. The more complete your profile, the better matches you\'ll receive.'
    },
    {
      id: 'talent-8',
      question: 'How do I know if an opportunity is right for me?',
      answer: 'Each invitation includes detailed information about the role, company culture, salary range, and requirements. You can review all details before deciding to engage. Our platform also provides match scores to help you understand how well an opportunity aligns with your profile.'
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
    },
    {
      id: 'recruiter-4',
      question: 'How quickly can I start finding candidates?',
      answer: 'You can start immediately after signing up. Our AI-powered matching system connects you with qualified candidates within minutes. Simply set your requirements and preferences, and we\'ll present you with matching talent profiles.'
    },
    {
      id: 'recruiter-5',
      question: 'What types of roles can I hire for?',
      answer: 'TalentFlip supports hiring across all industries and roles - from software engineers and product managers to designers, marketers, and executives. Our platform is designed to handle everything from entry-level positions to C-suite roles.'
    },
    {
      id: 'recruiter-6',
      question: 'How does the matching algorithm work?',
      answer: 'Our AI analyzes job requirements, company culture, and candidate profiles to find the best matches. The algorithm considers skills, experience, location preferences, salary expectations, and cultural fit to ensure high-quality connections.'
    },
    {
      id: 'recruiter-7',
      question: 'Can I see candidate resumes before contacting them?',
      answer: 'Yes, once you show interest in a candidate, you can access their full profile including resume, work history, skills, and portfolio. This helps you make informed decisions before reaching out.'
    },
    {
      id: 'recruiter-8',
      question: 'What if I need to hire for multiple positions?',
      answer: 'Our platform supports bulk hiring and multiple active job postings. You can manage all your open positions from a single dashboard, track candidates across different roles, and streamline your entire hiring process.'
    }
  ];

  const currentFAQs = activeTab === 'talent' ? talentFAQs : recruiterFAQs;

  return (
    <section data-aos="fade-up" className="py-24 bg-white">
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