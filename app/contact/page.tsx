
import type { Metadata } from "next";
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Contact TalentFlow | Get in Touch with Our Recruitment Experts",
  description: "Contact TalentFlow for support, partnerships, or questions about our AI-powered recruitment platform. Our team is here to help you transform your hiring process.",
  keywords: ["contact TalentFlow", "recruitment support", "hiring consultation", "AI recruitment help", "talent platform support", "recruitment partnership"],
  openGraph: {
    title: "Contact TalentFlow | Get in Touch with Our Experts",
    description: "Contact TalentFlow for support, partnerships, or questions about our AI-powered recruitment platform.",
    url: "https://talentflow.com/contact",
    images: [
      {
        url: "/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact TalentFlow - AI Recruitment Platform",
      },
    ],
  },
  twitter: {
    title: "Contact TalentFlow | Get in Touch with Our Experts",
    description: "Contact TalentFlow for support, partnerships, or questions about our AI-powered recruitment platform.",
    images: ["/contact-og-image.jpg"],
  },
  alternates: {
    canonical: "https://talentflow.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <Footer />
    </>
  );
}
