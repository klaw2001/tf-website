import type { Metadata } from "next";
import FAQHero from './FAQHero';
import FAQAccordion from './FAQAccordion';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions About TalentFlip AI Recruitment",
  description: "Find answers to common questions about TalentFlip's AI-powered recruitment platform. Learn about features, pricing, how it works, and how to get started with intelligent hiring.",
  keywords: ["TalentFlip FAQ", "recruitment questions", "AI hiring help", "talent platform guide", "recruitment support", "hiring automation FAQ"],
  openGraph: {
    title: "FAQ | TalentFlip AI Recruitment Questions & Answers",
    description: "Find answers to common questions about TalentFlip's AI-powered recruitment platform and intelligent hiring features.",
    url: "https://talentflip.com/faq",
    images: [
      {
        url: "/faq-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TalentFlip FAQ - AI Recruitment Questions",
      },
    ],
  },
  twitter: {
    title: "FAQ | TalentFlip AI Recruitment Questions & Answers",
    description: "Find answers to common questions about TalentFlip's AI-powered recruitment platform and intelligent hiring features.",
    images: ["/faq-og-image.jpg"],
  },
  alternates: {
    canonical: "https://talentflip.com/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQAccordion />
      <Footer />
    </>
  );
}