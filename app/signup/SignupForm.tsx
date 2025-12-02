'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useApi } from '@/contexts/ApiContext';
import { getRoleIdByName } from '@/enums/roles';

type SelectionMode = 'none' | 'talent' | 'recruiter';

export default function SignupForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { signup } = useApi(); // Only needed for recruiter signup
  
  const [selectionMode, setSelectionMode] = useState<SelectionMode>('none');
  
  // Recruiter form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: ''
  });
  
  // Talent upload state
  const [uploadedResume, setUploadedResume] = useState<File | null>(null);
  const [uploadErrors, setUploadErrors] = useState<{[key: string]: string}>({});
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRecruiterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      const roleId = getRoleIdByName('recruiter');
      
      const signupData = {
        user_full_name: formData.fullName,
        user_email: formData.email,
        user_mobile: formData.phone,
        user_password: formData.password,
        role_id: roleId
      };

      const response = await signup(signupData);
      
      if (response.status === true) {
        if (response.data?.token) {
          localStorage.setItem('authToken', response.data.token);
        }
        
        // Redirect to dashboard URL from environment variable
        const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL;
        if (dashboardUrl) {
          // Force navigation to dashboard
          window.location.href = dashboardUrl;
        } else {
          console.error('NEXT_PUBLIC_DASHBOARD_URL is not configured');
          // Show error if dashboard URL is not configured
          setErrors({
            general: 'Dashboard URL not configured. Please contact support.'
          });
        }
        return;
      } else {
        setErrors({
          general: response.message || 'Signup failed. Please try again.'
        });
      }
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({
        general: 'An unexpected error occurred. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadErrors(prev => ({ ...prev, resume: '' }));
      setUploadedResume(file);
    }
  };

  const handleTalentComplete = async () => {
    if (!uploadedResume) {
      setUploadErrors({
        general: 'Please upload your resume'
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // The new API expects FormData with resume file and role_id
      const roleId = getRoleIdByName('talent');
      
      // Create FormData to send resume file
      const formData = new FormData();
      formData.append('resume', uploadedResume);
      formData.append('role_id', roleId.toString());
      
      // Call the signup API with FormData
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000/api'}/auth/signup`, {
        method: 'POST',
        body: formData,
        // Don't set Content-Type header - browser will set it with boundary for multipart/form-data
      });

      const data = await response.json();
      
      // Check for success - handle both boolean true and string "true", and also check response status
      const isSuccess = response.ok && (data.status === true || data.status === 'true' || response.status === 201 || response.status === 200);
      
      if (isSuccess) {
        // Clear any existing errors
        setUploadErrors({});
        
        // Store the token if available
        if (data.token || data.data?.token) {
          localStorage.setItem('authToken', data.token || data.data.token);
        }
        
        // Immediately redirect to success page using window.location for reliable navigation
        window.location.href = '/signup/success';
        return; // Exit early to prevent any further processing
      } else {
        setUploadErrors({
          general: data.message || data.error || 'Signup failed. Please check your resume and try again.'
        });
      }
    } catch (error) {
      console.error('Talent signup error:', error);
      setUploadErrors({
        general: 'An unexpected error occurred. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full my-8">
        
        {/* Initial State - Both Options Visible */}
        {selectionMode === 'none' && (
          <div className="space-y-8 animate-fadeIn">
        <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#0f172a' }}>
                Join TalentFlow
              </h1>
              <p className="text-base" style={{ color: '#475569' }}>
                Choose how you want to get started
          </p>
        </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Talent Card */}
              <div 
                onClick={() => setSelectionMode('talent')}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 group"
                style={{ borderColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#2563eb'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)' }}>
                    <i className="ri-user-star-line text-white text-2xl"></i>
                  </div>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: '#0f172a' }}>I'm Talent</h2>
                  <p className="text-sm" style={{ color: '#475569' }}>Get discovered by top recruiters</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}>
                      <i className="ri-check-line text-xs" style={{ color: '#2563eb' }}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base" style={{ color: '#0f172a' }}>No need to signup</h3>
                      <p className="text-xs" style={{ color: '#475569' }}>Just upload resume and you're done</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}>
                      <i className="ri-check-line text-xs" style={{ color: '#2563eb' }}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base" style={{ color: '#0f172a' }}>AI-powered profile</h3>
                      <p className="text-xs" style={{ color: '#475569' }}>Wait for recruiters to notice you</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}>
                      <i className="ri-check-line text-xs" style={{ color: '#2563eb' }}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base" style={{ color: '#0f172a' }}>Don't apply, get invited</h3>
                      <p className="text-xs" style={{ color: '#475569' }}>Let opportunities come to you</p>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 text-white py-3 rounded-xl font-semibold text-base hover:shadow-lg transition-all" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)' }}>
                  Get Started as Talent
                </button>
              </div>

              {/* Recruiter Card */}
              <div 
                onClick={() => setSelectionMode('recruiter')}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 group"
                style={{ borderColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#2563eb'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)' }}>
                    <i className="ri-briefcase-line text-white text-2xl"></i>
                  </div>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: '#0f172a' }}>I'm a Recruiter</h2>
                  <p className="text-sm" style={{ color: '#475569' }}>Find the perfect candidates faster</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}>
                      <i className="ri-check-line text-xs" style={{ color: '#2563eb' }}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base" style={{ color: '#0f172a' }}>Signup in just 2 steps</h3>
                      <p className="text-xs" style={{ color: '#475569' }}>Quick and easy registration process</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}>
                      <i className="ri-check-line text-xs" style={{ color: '#2563eb' }}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base" style={{ color: '#0f172a' }}>Add your details</h3>
                      <p className="text-xs" style={{ color: '#475569' }}>Personal or company profile setup</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}>
                      <i className="ri-check-line text-xs" style={{ color: '#2563eb' }}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base" style={{ color: '#0f172a' }}>AI-powered search</h3>
                      <p className="text-xs" style={{ color: '#475569' }}>Explore intelligent talent matching</p>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 text-white py-3 rounded-xl font-semibold text-base hover:shadow-lg transition-all" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)' }}>
                  Get Started as Recruiter
                </button>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm" style={{ color: '#475569' }}>
                Already have an account?{' '}
                <Link href="#" className="font-medium hover:opacity-80 transition-opacity" style={{ color: '#2563eb' }}>
                  Sign in
              </Link>
              </p>
            </div>
          </div>
        )}

        {/* Talent Selected - Resume Upload */}
        {selectionMode === 'talent' && (
          <div className="max-w-2xl mx-auto animate-fadeIn">
            <button 
              onClick={() => setSelectionMode('none')}
              className="mb-4 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Back to options
            </button>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)' }}>
                  <i className="ri-upload-cloud-line text-white text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#0f172a' }}>Upload Your Profile</h2>
                <p className="text-sm" style={{ color: '#475569' }}>Add your resume to get started instantly</p>
              </div>

              {uploadErrors.general && (
                <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-sm text-red-600">{uploadErrors.general}</p>
                </div>
              )}

              {/* Resume Upload - Centered */}
              <div className="max-w-md mx-auto mb-6">
                <div className="border-2 border-dashed rounded-xl p-8 hover:border-opacity-70 transition-colors" style={{ borderColor: '#4f46e5' }}>
                  <div className="text-center">
                    <i className="text-5xl mb-3 ri-file-text-line" style={{ color: '#4f46e5' }}></i>
                    <h3 className="font-semibold mb-2" style={{ color: '#0f172a' }}>Resume / CV</h3>
                    
                    {uploadedResume ? (
                      <div className="space-y-3">
                        <i className="ri-file-check-line text-5xl text-green-500"></i>
                        <p className="text-sm text-gray-600 break-all px-4">{uploadedResume.name}</p>
                        <label className="inline-block px-6 py-2 text-white rounded-lg cursor-pointer transition-all hover:shadow-lg text-sm" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)' }}>
                          Change File
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleResumeUpload}
                            className="hidden"
                          />
                        </label>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm mb-4" style={{ color: '#475569' }}>Upload your resume (PDF, DOC, DOCX)</p>
                        <label className="inline-block px-8 py-3 text-white rounded-lg cursor-pointer transition-all hover:shadow-lg" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)' }}>
                          Choose File
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleResumeUpload}
                            className="hidden"
                          />
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Security Notice - Horizontal */}
              <div className="rounded-xl p-4 mb-6" style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}>
                <div className="flex items-center justify-center gap-1 flex-wrap">
                  <i className="ri-shield-check-line text-lg mr-1" style={{ color: '#2563eb' }}></i>
                  <span className="font-medium text-sm mr-3" style={{ color: '#0f172a' }}>Your Data is Secure:</span>
                  <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(37, 99, 235, 0.15)', color: '#0f172a' }}>🔒 End-to-end encrypted</span>
                  <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(37, 99, 235, 0.15)', color: '#0f172a' }}>🤖 Anonymous by default</span>
                  <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(37, 99, 235, 0.15)', color: '#0f172a' }}>🗑️ Delete anytime</span>
                </div>
              </div>

              <button
                onClick={handleTalentComplete}
                disabled={!uploadedResume || isLoading}
                className="w-full text-white py-3 rounded-xl font-semibold text-base hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)' }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Processing...
                  </div>
                ) : (
                  <>
                    <i className="ri-magic-line mr-2"></i>
                    Complete Profile with AI
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Recruiter Selected - Signup Form */}
        {selectionMode === 'recruiter' && (
          <div className="max-w-md mx-auto animate-fadeIn">
            <button 
              onClick={() => setSelectionMode('none')}
              className="mb-4 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Back to options
            </button>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)' }}>
                  <i className="ri-briefcase-line text-white text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#0f172a' }}>Create Recruiter Account</h2>
                <p className="text-sm" style={{ color: '#475569' }}>Join as a recruiter and start hiring</p>
              </div>

              <form onSubmit={handleRecruiterSubmit} className="space-y-5">
            {errors.general && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-600">{errors.general}</p>
              </div>
            )}
                
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all ${
                  errors.fullName ? 'border-red-300' : 'border-gray-300'
                }`}
                    style={{ '--tw-ring-color': '#2563eb' } as React.CSSProperties}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                }`}
                    style={{ '--tw-ring-color': '#2563eb' } as React.CSSProperties}
                placeholder="Enter your email address"
              />
              {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all ${
                  errors.phone ? 'border-red-300' : 'border-gray-300'
                }`}
                    style={{ '--tw-ring-color': '#2563eb' } as React.CSSProperties}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all ${
                  errors.password ? 'border-red-300' : 'border-gray-300'
                }`}
                    style={{ '--tw-ring-color': '#2563eb' } as React.CSSProperties}
                placeholder="Create a strong password"
              />
              {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
                  className="w-full text-white py-3 rounded-xl font-semibold text-base hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)' }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <i className="ri-loader-4-line animate-spin mr-2"></i>
                  Creating Account...
                </div>
              ) : (
                    'Create Recruiter Account'
              )}
            </button>
          </form>

              <div className="mt-6 text-center">
                <p className="text-sm" style={{ color: '#475569' }}>
              Already have an account?{' '}
                  <Link href="#" className="font-medium hover:opacity-80 transition-opacity" style={{ color: '#2563eb' }}>
                Sign in
              </Link>
            </p>
          </div>
        </div>
          </div>
        )}
      </div>
    </div>
  );
}
