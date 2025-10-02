
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 lg:py-16" style={{ backgroundColor: '#0B1426' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white font-['Pacifico']">TalentFlip</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting experienced professionals with opportunities through AI-powered matching. No applications needed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">For Talent</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Create Profile
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Browse Opportunities
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Career Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">For Companies</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/recruiters" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Post Jobs
                </Link>
              </li>
              <li>
                <Link href="/recruiters" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Find Talent
                </Link>
              </li>
              <li>
                <Link href="/recruiters" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/recruiters" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 TalentFlip. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                Terms of Service
              </a>
              <a href="https://readdy.ai/?origin=logo" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                Made with Readdy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
