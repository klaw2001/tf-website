import Header from '@/components/Header';
import PricingComparisonTable from '@/components/PricingComparisonTable';
import Footer from '@/components/Footer';

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