'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/components/Header';
import { ApiProvider } from '@/contexts/ApiContext';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isOnboardingPage = pathname === '/onboarding';
  const isSignupPage = pathname?.startsWith('/signup');

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <ApiProvider>
      {!isOnboardingPage && !isSignupPage && <Header />}
      {children}
    </ApiProvider>
  );
}