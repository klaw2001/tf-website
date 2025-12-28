import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Terms of Service | TalentFlip",
  description: "TalentFlip's Terms of Service - Read our terms and conditions for using our AI-powered recruitment platform.",
  alternates: {
    canonical: "https://talentflip.com/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-12">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using TalentFlip's platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TalentFlip is an AI-powered recruitment platform that connects experienced professionals with opportunities. Our service includes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Profile creation and management for talent</li>
                <li>AI-powered matching between talent and opportunities</li>
                <li>Recruiter tools for finding and contacting qualified candidates</li>
                <li>Communication tools for connecting talent and recruiters</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Account Creation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To use certain features of our platform, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Account Security</h3>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Conduct</h2>
              <p className="text-gray-700 leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Use the platform for any illegal or unauthorized purpose</li>
                <li>Provide false, misleading, or inaccurate information</li>
                <li>Impersonate any person or entity</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Interfere with or disrupt the platform or servers</li>
                <li>Attempt to gain unauthorized access to any portion of the platform</li>
                <li>Use automated systems to access the platform without permission</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Content and Intellectual Property</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Your Content</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You retain ownership of any content you submit to the platform. By submitting content, you grant TalentFlip a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content for the purpose of operating and promoting the platform.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Platform Content</h3>
              <p className="text-gray-700 leading-relaxed">
                All content on the platform, including text, graphics, logos, and software, is the property of TalentFlip or its licensors and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. AI Matching and Recommendations</h2>
              <p className="text-gray-700 leading-relaxed">
                Our AI-powered matching system provides recommendations based on algorithms and data analysis. While we strive for accuracy, we do not guarantee the quality, suitability, or accuracy of matches. You are responsible for evaluating opportunities and making your own decisions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Certain features of the platform may require payment. By purchasing a subscription or service, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Pay all fees associated with your account</li>
                <li>Provide accurate payment information</li>
                <li>Authorize us to charge your payment method</li>
                <li>Understand that fees are non-refundable unless otherwise stated</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your account and access to the platform immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may terminate your account at any time by contacting us or using the account deletion feature in your settings.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimers and Limitation of Liability</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 Service Availability</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The platform is provided "as is" and "as available" without warranties of any kind. We do not guarantee that the platform will be uninterrupted, secure, or error-free.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">9.2 Limitation of Liability</h3>
              <p className="text-gray-700 leading-relaxed">
                To the maximum extent permitted by law, TalentFlip shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify and hold harmless TalentFlip, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of your use of the platform, violation of these terms, or infringement of any rights of another.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date. Your continued use of the platform after such modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Email:</strong> legal@talentflip.com<br />
                <strong>Address:</strong> TalentFlip, San Francisco, CA 94102
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

