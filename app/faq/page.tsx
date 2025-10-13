import type { Metadata } from "next";
import FAQHero from './FAQHero';
import FAQAccordion from './FAQAccordion';
import FAQCTASection from './FAQCTASection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions About TalentFlow AI Recruitment",
  description: "Find answers to common questions about TalentFlow's AI-powered recruitment platform. Learn about features, pricing, how it works, and how to get started with intelligent hiring.",
  keywords: ["TalentFlow FAQ", "recruitment questions", "AI hiring help", "talent platform guide", "recruitment support", "hiring automation FAQ"],
  openGraph: {
    title: "FAQ | TalentFlow AI Recruitment Questions & Answers",
    description: "Find answers to common questions about TalentFlow's AI-powered recruitment platform and intelligent hiring features.",
    url: "https://talentflow.com/faq",
    images: [
      {
        url: "/faq-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TalentFlow FAQ - AI Recruitment Questions",
      },
    ],
  },
  twitter: {
    title: "FAQ | TalentFlow AI Recruitment Questions & Answers",
    description: "Find answers to common questions about TalentFlow's AI-powered recruitment platform and intelligent hiring features.",
    images: ["/faq-og-image.jpg"],
  },
  alternates: {
    canonical: "https://talentflow.com/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQAccordion />
      <FAQCTASection />
      <Footer />
    </>
  );
}