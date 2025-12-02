import type { Metadata } from "next";
import { Suspense } from 'react';
import SignupSuccess from './SignupSuccess';

export const metadata: Metadata = {
  title: "Success | Profile Created - TalentFlow",
  description: "Your TalentFlow profile has been successfully created and enriched with your resume data.",
  robots: {
    index: false,
    follow: false,
  },
};

function SignupSuccessContent() {
  return <SignupSuccess />;
}

export default function SignupSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SignupSuccessContent />
    </Suspense>
  );
}

