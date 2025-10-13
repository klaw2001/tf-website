import type { Metadata } from "next";
import { Suspense } from 'react';
import OnboardingFlow from './OnboardingFlow';

export const metadata: Metadata = {
  title: "Talent Onboarding | Complete Your Profile & Start Your Journey",
  description: "Complete your TalentFlow profile to get matched with top companies. Upload your resume, set your preferences, and let our AI find the perfect career opportunities for you.",
  keywords: ["talent onboarding", "profile setup", "career matching", "job search setup", "talent profile", "career opportunities"],
  robots: {
    index: false,
    follow: false,
  },
};

function OnboardingPageContent() {
  return <OnboardingFlow />;
}

export default function OnboardingPage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <OnboardingPageContent />
      </Suspense>
    </div>
  );
}