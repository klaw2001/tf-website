
import type { Metadata } from "next";
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import LeadMagnetSection from '@/components/LeadMagnetSection';
import StatsSection from '@/components/StatsSection';
import TalentCRMSection from '@/components/TalentCRMSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "AI-Powered Recruitment Platform | Connect Top Talent with Innovative Companies",
  description: "Join TalentFlow's revolutionary AI-powered recruitment platform. Get matched with top companies, streamline your hiring process, and discover your next career opportunity with intelligent job matching.",
  keywords: ["AI recruitment", "job matching", "career opportunities", "talent platform", "hiring automation", "job search", "recruitment technology"],
  openGraph: {
    title: "AI-Powered Recruitment Platform | TalentFlow",
    description: "Join TalentFlow's revolutionary AI-powered recruitment platform. Get matched with top companies and discover your next career opportunity.",
    url: "https://talentflow.com",
    images: [
      {
        url: "/home-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TalentFlow AI-Powered Recruitment Platform",
      },
    ],
  },
  twitter: {
    title: "AI-Powered Recruitment Platform | TalentFlow",
    description: "Join TalentFlow's revolutionary AI-powered recruitment platform. Get matched with top companies and discover your next career opportunity.",
    images: ["/home-og-image.jpg"],
  },
  alternates: {
    canonical: "https://talentflow.com",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <LeadMagnetSection />
      <StatsSection />
      <TalentCRMSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}
