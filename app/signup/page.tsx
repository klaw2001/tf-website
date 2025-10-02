
'use client';

import { Suspense } from 'react';
import SignupForm from './SignupForm';

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
