
import type { Metadata } from "next";
import { Suspense } from 'react';
import SignupForm from './SignupForm';

export const metadata: Metadata = {
  title: "Sign Up | Join TalentFlow - AI-Powered Recruitment Platform",
  description: "Create your free TalentFlow account and join thousands of professionals and companies using AI-powered recruitment. Sign up as talent or recruiter to get started today.",
  keywords: ["sign up TalentFlow", "create account", "join recruitment platform", "free registration", "talent signup", "recruiter signup"],
  openGraph: {
    title: "Sign Up | Join TalentFlow AI Recruitment Platform",
    description: "Create your free TalentFlow account and join thousands using AI-powered recruitment. Sign up as talent or recruiter today.",
    url: "https://talentflow.com/signup",
    images: [
      {
        url: "/signup-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sign Up for TalentFlow - AI Recruitment Platform",
      },
    ],
  },
  twitter: {
    title: "Sign Up | Join TalentFlow AI Recruitment Platform",
    description: "Create your free TalentFlow account and join thousands using AI-powered recruitment. Sign up as talent or recruiter today.",
    images: ["/signup-og-image.jpg"],
  },
  alternates: {
    canonical: "https://talentflow.com/signup",
  },
};

function SignupPageContent() {
  return <SignupForm />;
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SignupPageContent />
    </Suspense>
  );
}
