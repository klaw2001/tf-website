
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isRecruiterPage = pathname === '/recruiters';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/95 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mr-2 sm:mr-3" style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)' }}>
                <i className="ri-rocket-2-line text-white text-base sm:text-lg"></i>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900">TalentFlip</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className={`hover:text-blue-600 transition-colors cursor-pointer text-sm lg:text-base ${pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
              Talent
            </Link>
            <Link href="/recruiters" className={`hover:text-blue-600 transition-colors cursor-pointer text-sm lg:text-base ${pathname === '/recruiters' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
              Recruiters
            </Link>
            <Link href="/about" className={`hover:text-blue-600 transition-colors cursor-pointer text-sm lg:text-base ${pathname === '/about' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
              About Us
            </Link>
            <Link href="/pricing" className={`hover:text-blue-600 transition-colors cursor-pointer text-sm lg:text-base ${pathname === '/pricing' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
              Pricing
            </Link>
            <Link href="/contact" className={`hover:text-blue-600 transition-colors cursor-pointer text-sm lg:text-base ${pathname === '/contact' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
              Contact
            </Link>
            <Link href="/faq" className={`hover:text-blue-600 transition-colors cursor-pointer text-sm lg:text-base ${pathname === '/faq' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
              FAQ
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Link 
              href="#" 
              className="font-medium transition-colors duration-200 hover:text-blue-600 text-gray-700 text-sm lg:text-base"
            >
              Sign In
            </Link>
            <Link 
              href="/signup?role=talent" 
              className="text-white px-4 lg:px-6 py-2 rounded-full font-medium transition-all duration-200 hover:shadow-lg whitespace-nowrap cursor-pointer text-sm lg:text-base"
              style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)' }}
            >
              Get Started
            </Link>
          </div>

          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className={`font-medium text-sm ${pathname === '/' ? 'text-blue-600' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Talent
              </Link>
              <Link 
                href="/recruiters" 
                className={`font-medium text-sm ${isRecruiterPage ? 'text-blue-600' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Recruiters
              </Link>
              <Link 
                href="/about" 
                className={`font-medium text-sm ${pathname === '/about' ? 'text-blue-600' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/pricing" 
                className={`font-medium text-sm ${pathname === '/pricing' ? 'text-blue-600' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/contact" 
                className={`font-medium text-sm ${pathname === '/contact' ? 'text-blue-600' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/faq" 
                className={`font-medium text-sm ${pathname === '/faq' ? 'text-blue-600' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="#" 
                className="font-medium text-gray-700 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                href="/signup?role=talent" 
                className="text-white px-4 py-2 rounded-full font-medium text-center whitespace-nowrap cursor-pointer text-sm"
                style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
