'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import { ApiProvider } from '@/contexts/ApiContext';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isOnboardingPage = pathname === '/onboarding';

  return (
    <ApiProvider>
      {!isOnboardingPage && <Header />}
      {children}
    </ApiProvider>
  );
}