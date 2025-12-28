
import type { Metadata } from "next";
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: "Contact TalentFlip | Get in Touch with Our Recruitment Experts",
  description: "Contact TalentFlip for support, partnerships, or questions about our AI-powered recruitment platform. Our team is here to help you transform your hiring process.",
  keywords: ["contact TalentFlip", "recruitment support", "hiring consultation", "AI recruitment help", "talent platform support", "recruitment partnership"],
  openGraph: {
    title: "Contact TalentFlip | Get in Touch with Our Experts",
    description: "Contact TalentFlip for support, partnerships, or questions about our AI-powered recruitment platform.",
    url: "https://talentflip.com/contact",
    images: [
      {
        url: "/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact TalentFlip - AI Recruitment Platform",
      },
    ],
  },
  twitter: {
    title: "Contact TalentFlip | Get in Touch with Our Experts",
    description: "Contact TalentFlip for support, partnerships, or questions about our AI-powered recruitment platform.",
    images: ["/contact-og-image.jpg"],
  },
  alternates: {
    canonical: "https://talentflip.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
