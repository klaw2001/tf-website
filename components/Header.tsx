
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/tf-logo-150x40.png';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isRecruiterPage = pathname === '/recruiters';

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/95 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image 
                  src={logo}
                  alt="TalentFlow Logo"
                  width={150}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
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
              className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer text-tf-text-light z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Image 
                src={logo}
                alt="TalentFlow Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <button 
              className="w-8 h-8 flex items-center justify-center cursor-pointer text-tf-text-light"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>

          {/* Sidebar Menu Items */}
          <div className="flex-1 overflow-y-auto py-6 px-4">
            <div className="flex flex-col space-y-1">
              <Link 
                href="/" 
                className={`px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                  pathname === '/' 
                    ? 'text-tf-secondary bg-blue-50' 
                    : 'text-tf-text-light hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Talent
              </Link>
              <Link 
                href="/recruiters" 
                className={`px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                  isRecruiterPage 
                    ? 'text-tf-secondary bg-blue-50' 
                    : 'text-tf-text-light hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Recruiters
              </Link>
              <Link 
                href="/about" 
                className={`px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                  pathname === '/about' 
                    ? 'text-tf-secondary bg-blue-50' 
                    : 'text-tf-text-light hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/pricing" 
                className={`px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                  pathname === '/pricing' 
                    ? 'text-tf-secondary bg-blue-50' 
                    : 'text-tf-text-light hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/contact" 
                className={`px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                  pathname === '/contact' 
                    ? 'text-tf-secondary bg-blue-50' 
                    : 'text-tf-text-light hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/faq" 
                className={`px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                  pathname === '/faq' 
                    ? 'text-tf-secondary bg-blue-50' 
                    : 'text-tf-text-light hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200 space-y-3">
            <Link 
              href="/signup" 
              className="block w-full px-4 py-3 text-center font-medium text-tf-text-light text-base rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link 
              href="/signup?role=talent" 
              className="block w-full px-4 py-3 text-center btn text-white rounded-lg cursor-pointer text-base bg-tf-gradient hover:shadow-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
