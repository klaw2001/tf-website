
import type { Metadata } from "next";
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import LeadMagnetSection from '@/components/LeadMagnetSection';
import StatsSection from '@/components/StatsSection';
import TalentCRMSection from '@/components/TalentCRMSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import PageFAQSection from '@/components/PageFAQSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "AI-Powered Recruitment Platform | Connect Top Talent with Innovative Companies",
  description: "Join TalentFlip's revolutionary AI-powered recruitment platform. Get matched with top companies, streamline your hiring process, and discover your next career opportunity with intelligent job matching.",
  keywords: ["AI recruitment", "job matching", "career opportunities", "talent platform", "hiring automation", "job search", "recruitment technology"],
  openGraph: {
    title: "AI-Powered Recruitment Platform | TalentFlip",
    description: "Join TalentFlip's revolutionary AI-powered recruitment platform. Get matched with top companies and discover your next career opportunity.",
    url: "https://talentflip.com",
    images: [
      {
        url: "/home-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TalentFlip AI-Powered Recruitment Platform",
      },
    ],
  },
  twitter: {
    title: "AI-Powered Recruitment Platform | TalentFlip",
    description: "Join TalentFlip's revolutionary AI-powered recruitment platform. Get matched with top companies and discover your next career opportunity.",
    images: ["/home-og-image.jpg"],
  },
  alternates: {
    canonical: "https://talentflip.com",
  },
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
  }
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <LeadMagnetSection />
      <StatsSection />
      <TalentCRMSection />
      <TestimonialsSection />
      <PageFAQSection faqs={talentFAQs} />
      <CTASection />
      <Footer />
    </>
  );
}
