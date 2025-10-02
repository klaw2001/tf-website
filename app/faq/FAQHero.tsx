
'use client';

export default function FAQHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 pt-32">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: '#EBF4FF', color: '#2563EB' }}>
          <i className="ri-question-line mr-2"></i>
          Frequently Asked Questions
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Got Questions?
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">We've Got Answers.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
          We've simplified how hiring works, but we know you may still have a few questions. Here's everything you need to know.
        </p>

        <div className="mb-12">
          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20digital%20customer%20support%20team%20helping%20clients%20with%20friendly%20conversation%20bubbles%20floating%20around%2C%20professional%20support%20agents%20with%20headsets%20in%20bright%20office%20environment%2C%20question%20and%20answer%20symbols%20in%20blue%20and%20white%20design%2C%20people%20smiling%20while%20providing%20assistance%2C%20clean%20contemporary%20workspace%20with%20help%20desk%20concept&width=600&height=300&seq=faq-support-hero&orientation=landscape"
            alt="FAQ Digital Q&A Concept"
            className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
      
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-blue-300/30 to-indigo-300/30 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-full blur-2xl"></div>
    </section>
  );
}
