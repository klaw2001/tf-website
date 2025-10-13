
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
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mr-2 sm:mr-3 bg-tf-gradient">
                <i className="ri-rocket-2-line text-white text-base sm:text-lg"></i>
              </div>
              <span className="text-lg sm:text-xl font-bold text-tf-black">TalentFlow</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className={`hover:text-tf-secondary transition-colors cursor-pointer text-sm lg:text-base ${pathname === '/' ? 'text-tf-secondary font-semibold' : 'text-tf-text-light'}`}>
              Talent
            </Link>
            <Link href="/recruiters" className={`hover:text-tf-secondary transition-colors cursor-pointer text-sm lg:text-base ${pathname === '/recruiters' ? 'text-tf-secondary font-semibold' : 'text-tf-text-light'}`}>
              Recruiters
            </Link>
            <Link href="/about" className={`hover:text-tf-secondary transition-colors cursor-pointer text-sm lg:text-base ${pathname === '/about' ? 'text-tf-secondary font-semibold' : 'text-tf-text-light'}`}>
              About Us
            </Link>
            <Link href="/pricing" className={`hover:text-tf-secondary transition-colors cursor-pointer text-sm lg:text-base ${pathname === '/pricing' ? 'text-tf-secondary font-semibold' : 'text-tf-text-light'}`}>
              Pricing
            </Link>
            <Link href="/contact" className={`hover:text-tf-secondary transition-colors cursor-pointer text-sm lg:text-base ${pathname === '/contact' ? 'text-tf-secondary font-semibold' : 'text-tf-text-light'}`}>
              Contact
            </Link>
            <Link href="/faq" className={`hover:text-tf-secondary transition-colors cursor-pointer text-sm lg:text-base ${pathname === '/faq' ? 'text-tf-secondary font-semibold' : 'text-tf-text-light'}`}>
              FAQ
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Link 
              href="/signup" 
              className="font-medium transition-colors duration-200 hover:text-tf-secondary text-tf-text-light text-sm lg:text-base"
            >
              Sign In
            </Link>
            <Link 
              href="/signup?role=talent" 
              className="btn text-white px-3 lg:px-4 py-1.5 rounded-full transition-all duration-200 hover:shadow-lg whitespace-nowrap cursor-pointer text-sm lg:text-base bg-tf-gradient"
            >
              Get Started
            </Link>
          </div>

          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer text-tf-text-light"
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
                className={`font-medium text-sm ${pathname === '/' ? 'text-tf-secondary' : 'text-tf-text-light'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Talent
              </Link>
              <Link 
                href="/recruiters" 
                className={`font-medium text-sm ${isRecruiterPage ? 'text-tf-secondary' : 'text-tf-text-light'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Recruiters
              </Link>
              <Link 
                href="/about" 
                className={`font-medium text-sm ${pathname === '/about' ? 'text-tf-secondary' : 'text-tf-text-light'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/pricing" 
                className={`font-medium text-sm ${pathname === '/pricing' ? 'text-tf-secondary' : 'text-tf-text-light'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/contact" 
                className={`font-medium text-sm ${pathname === '/contact' ? 'text-tf-secondary' : 'text-tf-text-light'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/faq" 
                className={`font-medium text-sm ${pathname === '/faq' ? 'text-tf-secondary' : 'text-tf-text-light'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/signup" 
                className="font-medium text-tf-text-light text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                href="/signup?role=talent" 
                className="btn text-white px-3 py-1.5 rounded-full text-center whitespace-nowrap cursor-pointer text-sm bg-tf-gradient"
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
