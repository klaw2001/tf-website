'use client';

import { useRouter } from 'next/navigation';

export default function SignupSuccess() {
  const router = useRouter();

  const handleGoToDashboard = () => {
    const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL;
    if (dashboardUrl) {
      window.location.href = dashboardUrl;
    } else {
      console.error('NEXT_PUBLIC_DASHBOARD_URL is not configured');
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 animate-fadeIn">
          {/* Success Icon */}
          <div className="text-center mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce" 
                 style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}>
              <i className="ri-checkbox-circle-line text-white text-5xl sm:text-6xl"></i>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#0f172a' }}>
              🎉 Registration Successful!
            </h1>
            
            <div className="max-w-md mx-auto mb-8">
              <p className="text-lg sm:text-xl font-medium mb-3" style={{ color: '#059669' }}>
                Your profile has been created
              </p>
              <p className="text-base text-gray-600 mb-4">
                We've successfully processed your resume and enriched your profile with AI-powered insights. Your credentials have been sent to your email.
              </p>
            </div>
          </div>

          {/* Dashboard Navigation Button */}
          <div className="text-center">
            <button
              onClick={handleGoToDashboard}
              className="w-full sm:w-auto px-8 py-4 text-white rounded-xl font-semibold text-base hover:shadow-lg transition-all group"
              style={{ background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)' }}
            >
              <i className="ri-dashboard-line mr-2"></i>
              Go to Dashboard
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform inline-block"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

