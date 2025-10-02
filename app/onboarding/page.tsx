
'use client';

import { Suspense } from 'react';
import OnboardingFlow from './OnboardingFlow';

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