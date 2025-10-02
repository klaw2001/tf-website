
import Header from '@/components/Header';
import RecruiterHeroSection from '@/components/RecruiterHeroSection';
import RecruiterStatsSection from '@/components/RecruiterStatsSection';
import RecruiterCRMSection from '@/components/RecruiterCRMSection';
import RecruiterTestimonialsSection from '@/components/RecruiterTestimonialsSection';
import RecruiterFeaturesSection from '@/components/RecruiterFeaturesSection';
import RecruiterPricingSection from '@/components/RecruiterPricingSection';
import RecruiterCTASection from '@/components/RecruiterCTASection';
import Footer from '@/components/Footer';

export default function Recruiters() {
  return (
    <>
      <Header />
      <RecruiterHeroSection />
      <RecruiterStatsSection />
      <RecruiterCRMSection />
      <RecruiterTestimonialsSection />
      <RecruiterFeaturesSection />
      <RecruiterPricingSection />
      <RecruiterCTASection />
      <Footer />
    </>
  );
}
