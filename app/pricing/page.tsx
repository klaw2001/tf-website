import type { Metadata } from "next";
import Header from '@/components/Header';
import PricingComparisonTable from '@/components/PricingComparisonTable';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Pricing | Affordable AI Recruitment Plans for Every Business Size",
  description: "Choose the perfect TalentFlow plan for your recruitment needs. Compare pricing for AI-powered hiring, talent matching, and recruitment automation. Start with our free plan today.",
  keywords: ["TalentFlow pricing", "recruitment software cost", "AI hiring plans", "talent platform pricing", "recruitment automation pricing", "hiring software plans"],
  openGraph: {
    title: "TalentFlow Pricing | AI Recruitment Plans for Every Business",
    description: "Choose the perfect TalentFlow plan for your recruitment needs. Compare pricing for AI-powered hiring and talent matching.",
    url: "https://talentflow.com/pricing",
    images: [
      {
        url: "/pricing-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TalentFlow Pricing - AI Recruitment Plans",
      },
    ],
  },
  twitter: {
    title: "TalentFlow Pricing | AI Recruitment Plans for Every Business",
    description: "Choose the perfect TalentFlow plan for your recruitment needs. Compare pricing for AI-powered hiring and talent matching.",
    images: ["/pricing-og-image.jpg"],
  },
  alternates: {
    canonical: "https://talentflow.com/pricing",
  },
};

export default function Pricing() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <PricingComparisonTable />
      </main>
      <Footer />
    </>
  );
}