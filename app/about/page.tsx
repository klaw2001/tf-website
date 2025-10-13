
import type { Metadata } from "next";
import AboutHero from './AboutHero';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import MissionSection from './MissionSection';
import EarlyAccessSection from './EarlyAccessSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "About TalentFlow | Revolutionizing Recruitment with AI Technology",
  description: "Learn about TalentFlow's mission to transform recruitment through AI-powered matching, automated screening, and intelligent talent acquisition. Discover how we're building the future of hiring.",
  keywords: ["about TalentFlow", "recruitment technology", "AI hiring", "talent acquisition mission", "recruitment innovation", "hiring automation"],
  openGraph: {
    title: "About TalentFlow | Revolutionizing Recruitment with AI",
    description: "Learn about TalentFlow's mission to transform recruitment through AI-powered matching and intelligent talent acquisition.",
    url: "https://talentflow.com/about",
    images: [
      {
        url: "/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About TalentFlow - AI Recruitment Platform",
      },
    ],
  },
  twitter: {
    title: "About TalentFlow | Revolutionizing Recruitment with AI",
    description: "Learn about TalentFlow's mission to transform recruitment through AI-powered matching and intelligent talent acquisition.",
    images: ["/about-og-image.jpg"],
  },
  alternates: {
    canonical: "https://talentflow.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ProblemSection />
      <SolutionSection />
      <MissionSection />
      <EarlyAccessSection />
      <Footer />
    </>
  );
}
