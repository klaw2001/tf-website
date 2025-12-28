
import type { Metadata } from "next";
import AboutHero from './AboutHero';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import MissionSection from './MissionSection';
import EarlyAccessSection from './EarlyAccessSection';
import PageFAQSection from '@/components/PageFAQSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "About TalentFlip | Revolutionizing Recruitment with AI Technology",
  description: "Learn about TalentFlip's mission to transform recruitment through AI-powered matching, automated screening, and intelligent talent acquisition. Discover how we're building the future of hiring.",
  keywords: ["about TalentFlip", "recruitment technology", "AI hiring", "talent acquisition mission", "recruitment innovation", "hiring automation"],
  openGraph: {
    title: "About TalentFlip | Revolutionizing Recruitment with AI",
    description: "Learn about TalentFlip's mission to transform recruitment through AI-powered matching and intelligent talent acquisition.",
    url: "https://talentflip.com/about",
    images: [
      {
        url: "/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About TalentFlip - AI Recruitment Platform",
      },
    ],
  },
  twitter: {
    title: "About TalentFlip | Revolutionizing Recruitment with AI",
    description: "Learn about TalentFlip's mission to transform recruitment through AI-powered matching and intelligent talent acquisition.",
    images: ["/about-og-image.jpg"],
  },
  alternates: {
    canonical: "https://talentflip.com/about",
  },
};

const aboutFAQs = [
  {
    id: 'about-1',
    question: 'What makes TalentFlip different from other recruitment platforms?',
    answer: 'TalentFlip flips the traditional model - instead of candidates applying, recruiters invite them. Our AI-powered matching ensures quality connections, and we focus on short intro calls rather than lengthy interview processes, saving time for everyone.'
  },
  {
    id: 'about-2',
    question: 'How was TalentFlip founded?',
    answer: 'TalentFlip was created to solve the broken recruitment process. We saw talented professionals struggling with endless applications and recruiters drowning in unqualified resumes. Our platform bridges this gap with intelligent matching and a streamlined approach.'
  },
  {
    id: 'about-3',
    question: 'What is TalentFlip\'s mission?',
    answer: 'Our mission is to transform recruitment by making it faster, fairer, and more efficient. We believe that talented professionals should be discovered, not lost in application queues, and that companies should compete for talent, not the other way around.'
  },
  {
    id: 'about-4',
    question: 'How does TalentFlip ensure quality matches?',
    answer: 'We use advanced AI algorithms that analyze skills, experience, preferences, and cultural fit. Our system only shows profiles when there\'s a strong match, ensuring both candidates and recruiters see relevant opportunities, leading to higher success rates.'
  }
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ProblemSection />
      <SolutionSection />
      <MissionSection />
      <EarlyAccessSection />
      <PageFAQSection faqs={aboutFAQs} />
      <Footer />
    </>
  );
}
