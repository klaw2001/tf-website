
import type { Metadata } from "next";
import Header from '@/components/Header';
import RecruiterHeroSection from '@/components/RecruiterHeroSection';
import RecruiterStatsSection from '@/components/RecruiterStatsSection';
import RecruiterCRMSection from '@/components/RecruiterCRMSection';
import RecruiterTestimonialsSection from '@/components/RecruiterTestimonialsSection';
import RecruiterFeaturesSection from '@/components/RecruiterFeaturesSection';
import RecruiterPricingSection from '@/components/RecruiterPricingSection';
import RecruiterCTASection from '@/components/RecruiterCTASection';
import PageFAQSection from '@/components/PageFAQSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "For Recruiters | AI-Powered Talent Acquisition & Candidate Management",
  description: "Transform your recruitment process with TalentFlip's AI-powered platform for recruiters. Streamline candidate sourcing, automated screening, and intelligent matching to find the best talent faster.",
  keywords: ["recruiter platform", "AI recruitment tools", "talent acquisition software", "candidate management", "recruitment automation", "hiring software for recruiters"],
  openGraph: {
    title: "For Recruiters | AI-Powered Talent Acquisition Platform",
    description: "Transform your recruitment process with TalentFlip's AI-powered platform. Streamline candidate sourcing and automated screening.",
    url: "https://talentflip.com/recruiters",
    images: [
      {
        url: "/recruiters-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TalentFlip for Recruiters - AI Recruitment Platform",
      },
    ],
  },
  twitter: {
    title: "For Recruiters | AI-Powered Talent Acquisition Platform",
    description: "Transform your recruitment process with TalentFlip's AI-powered platform. Streamline candidate sourcing and automated screening.",
    images: ["/recruiters-og-image.jpg"],
  },
  alternates: {
    canonical: "https://talentflip.com/recruiters",
  },
};

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
  }
];

export default function Recruiters() {
  return (
    <>
      <Header />
      <RecruiterHeroSection />
      <RecruiterStatsSection />
      <RecruiterCRMSection />
      <RecruiterTestimonialsSection />
      <RecruiterFeaturesSection />
      <RecruiterPricingSection />
      <PageFAQSection faqs={recruiterFAQs} />
      <RecruiterCTASection />
      <Footer />
    </>
  );
}
