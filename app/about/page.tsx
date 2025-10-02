
import AboutHero from './AboutHero';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import MissionSection from './MissionSection';
import EarlyAccessSection from './EarlyAccessSection';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ProblemSection />
      <SolutionSection />
      <MissionSection />
      <EarlyAccessSection />
      <Footer />
    </>
  );
}
