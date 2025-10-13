
import type { Metadata } from "next";
import Header from '@/components/Header';
import RecruiterHeroSection from '@/components/RecruiterHeroSection';
import RecruiterStatsSection from '@/components/RecruiterStatsSection';
import RecruiterCRMSection from '@/components/RecruiterCRMSection';
import RecruiterTestimonialsSection from '@/components/RecruiterTestimonialsSection';
import RecruiterFeaturesSection from '@/components/RecruiterFeaturesSection';
import RecruiterPricingSection from '@/components/RecruiterPricingSection';
import RecruiterCTASection from '@/components/RecruiterCTASection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "For Recruiters | AI-Powered Talent Acquisition & Candidate Management",
  description: "Transform your recruitment process with TalentFlow's AI-powered platform for recruiters. Streamline candidate sourcing, automated screening, and intelligent matching to find the best talent faster.",
  keywords: ["recruiter platform", "AI recruitment tools", "talent acquisition software", "candidate management", "recruitment automation", "hiring software for recruiters"],
  openGraph: {
    title: "For Recruiters | AI-Powered Talent Acquisition Platform",
    description: "Transform your recruitment process with TalentFlow's AI-powered platform. Streamline candidate sourcing and automated screening.",
    url: "https://talentflow.com/recruiters",
    images: [
      {
        url: "/recruiters-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TalentFlow for Recruiters - AI Recruitment Platform",
      },
    ],
  },
  twitter: {
    title: "For Recruiters | AI-Powered Talent Acquisition Platform",
    description: "Transform your recruitment process with TalentFlow's AI-powered platform. Streamline candidate sourcing and automated screening.",
    images: ["/recruiters-og-image.jpg"],
  },
  alternates: {
    canonical: "https://talentflow.com/recruiters",
  },
};

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
      <RecruiterCTASection />
      <Footer />
    </>
  );
}
