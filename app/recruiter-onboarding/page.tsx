'use client';

import type { Metadata } from "next";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApi } from '@/contexts/ApiContext';

export const metadata: Metadata = {
  title: "Recruiter Onboarding | Set Up Your AI-Powered Recruitment Profile",
  description: "Complete your recruiter profile setup on TalentFlow. Upload your company details, set your hiring preferences, and start connecting with top talent using our AI-powered platform.",
  keywords: ["recruiter onboarding", "recruitment profile setup", "hiring platform setup", "recruiter dashboard", "talent acquisition setup"],
  robots: {
    index: false,
    follow: false,
  },
};

interface OnboardingData {
  profileType: 'company' | 'individual' | null;
  profileImage: File | null;
  profileImageUrl: string | null;
  companyData: {
    rc_name: string;
    rc_website: string;
    rc_industry: string;
    rc_size: string;
    rc_role: string;
    rc_description: string;
  };
  individualData: {
    ri_full_name: string;
    ri_email: string;
    ri_mobile: string;
    ri_linkedin_url: string;
    ri_portfolio: string;
    ri_about: string;
  };
}

const initialCompanyData = {
  rc_name: '',
  rc_website: '',
  rc_industry: '',
  rc_size: '',
  rc_role: '',
  rc_description: '',
};

const initialIndividualData = {
  ri_full_name: '',
  ri_email: '',
  ri_mobile: '',
  ri_linkedin_url: '',
  ri_portfolio: '',
  ri_about: '',
};

export default function RecruiterOnboardingPage() {
  const router = useRouter();
  const { uploadRecruiterProfileImage, createCompanyProfile, createIndividualProfile } = useApi();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<OnboardingData>({
    profileType: null,
    profileImage: null,
    profileImageUrl: null,
    companyData: initialCompanyData,
    individualData: initialIndividualData,
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkipToDashboard = () => {
    router.push('/recruiters');
  };

  const handleComplete = async () => {
    if (!data.profileType) return;

    setIsLoading(true);
    try {
      // Upload profile image if exists
      if (data.profileImage && data.profileType) {
        await uploadRecruiterProfileImage(data.profileImage, data.profileType);
      }

      // Create profile based on type
      if (data.profileType === 'company') {
        await createCompanyProfile(data.companyData);
      } else {
        await createIndividualProfile(data.individualData);
      }

      // Redirect to dashboard
      router.push('/recruiters');
    } catch (error) {
      console.error('Error completing onboarding:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateData = (updates: Partial<OnboardingData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Stepper */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step <= currentStep
                      ? 'bg-tf-primary text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 h-0.5 mx-2 ${
                      step < currentStep ? 'bg-tf-primary' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {currentStep === 1 && (
            <Step1ProfileSetup
              data={data}
              updateData={updateData}
              onNext={handleNext}
              onSkip={handleSkipToDashboard}
            />
          )}
          
          {currentStep === 2 && (
            <Step2ProfileForm
              data={data}
              updateData={updateData}
              onNext={handleNext}
              onBack={handleBack}
              onSkip={handleSkipToDashboard}
            />
          )}
          
          {currentStep === 3 && (
            <Step3ReviewConfirm
              data={data}
              onComplete={handleComplete}
              onBack={handleBack}
              onSkip={handleSkipToDashboard}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// Step 1: Profile Image Upload and Type Selection
function Step1ProfileSetup({ 
  data, 
  updateData, 
  onNext, 
  onSkip 
}: { 
  data: OnboardingData; 
  updateData: (updates: Partial<OnboardingData>) => void; 
  onNext: () => void; 
  onSkip: () => void; 
}) {
  const [dragActive, setDragActive] = useState(false);

  const handleFileUpload = (file: File) => {
    updateData({ 
      profileImage: file,
      profileImageUrl: URL.createObjectURL(file)
    });
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
          <i className="ri-user-line text-2xl text-gray-600"></i>
        </div>
        <h1 className="text-3xl font-bold text-tf-text-main mb-2">
          Step 1 - Basic Profile Setup
        </h1>
        <p className="text-tf-text-light">
          Let's start with your core profile details.
        </p>
      </div>

      {/* Profile Image Upload */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-tf-text-main">
          Profile Image
        </label>
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive
              ? 'border-tf-primary bg-blue-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {data.profileImageUrl ? (
            <div className="space-y-4">
              <img
                src={data.profileImageUrl}
                alt="Profile preview"
                className="w-24 h-24 rounded-full mx-auto object-cover"
              />
              <p className="text-sm text-tf-text-light">Profile image uploaded</p>
            </div>
          ) : (
            <div className="space-y-4">
              <i className="ri-camera-line text-4xl text-gray-400"></i>
              <div>
                <p className="text-tf-text-main font-medium">Upload your profile image</p>
                <p className="text-sm text-tf-text-light">
                  Company logo or personal profile picture
                </p>
              </div>
            </div>
          )}
        </div>
        <button
          onClick={() => document.getElementById('file-upload')?.click()}
          className="w-full bg-tf-primary text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Choose Image
        </button>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
        />
      </div>

      {/* Profile Type Selection */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-tf-text-main">
          Recruiter Type
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => updateData({ profileType: 'company' })}
            className={`p-6 border-2 rounded-lg text-center transition-colors ${
              data.profileType === 'company'
                ? 'border-tf-primary bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <i className="ri-building-line text-3xl text-gray-600 mb-3"></i>
            <h3 className="font-semibold text-tf-text-main mb-1">Company</h3>
            <p className="text-sm text-tf-text-light">
              Recruiting for an organization
            </p>
          </button>
          
          <button
            onClick={() => updateData({ profileType: 'individual' })}
            className={`p-6 border-2 rounded-lg text-center transition-colors ${
              data.profileType === 'individual'
                ? 'border-tf-primary bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <i className="ri-user-line text-3xl text-gray-600 mb-3"></i>
            <h3 className="font-semibold text-tf-text-main mb-1">Individual</h3>
            <p className="text-sm text-tf-text-light">
              Personal projects or freelance
            </p>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6">
        <button
          onClick={onSkip}
          className="text-tf-text-light hover:text-tf-primary transition-colors"
        >
          Skip to Dashboard
        </button>
        <button
          onClick={onNext}
          disabled={!data.profileType}
          className="bg-tf-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          <span>Continue</span>
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  );
}

// Step 2: Profile Form (Company or Individual)
function Step2ProfileForm({ 
  data, 
  updateData, 
  onNext, 
  onBack, 
  onSkip 
}: { 
  data: OnboardingData; 
  updateData: (updates: Partial<OnboardingData>) => void; 
  onNext: () => void; 
  onBack: () => void; 
  onSkip: () => void; 
}) {
  const isCompany = data.profileType === 'company';

  const handleCompanyChange = (field: string, value: string) => {
    updateData({
      companyData: { ...data.companyData, [field]: value }
    });
  };

  const handleIndividualChange = (field: string, value: string) => {
    updateData({
      individualData: { ...data.individualData, [field]: value }
    });
  };

  const isFormValid = () => {
    if (isCompany) {
      return data.companyData.rc_name && 
             data.companyData.rc_industry && 
             data.companyData.rc_size && 
             data.companyData.rc_role;
    } else {
      return data.individualData.ri_full_name && 
             data.individualData.ri_email;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
          <i className={`${isCompany ? 'ri-building-line' : 'ri-user-line'} text-2xl text-gray-600`}></i>
        </div>
        <h1 className="text-3xl font-bold text-tf-text-main mb-2">
          {isCompany ? 'Tell us about your company' : 'Tell us about yourself'}
        </h1>
        <p className="text-tf-text-light">
          {isCompany 
            ? 'Help candidates learn about your organization' 
            : 'Introduce yourself to potential candidates'
          }
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {isCompany ? (
          <CompanyForm 
            data={data.companyData} 
            onChange={handleCompanyChange} 
          />
        ) : (
          <IndividualForm 
            data={data.individualData} 
            onChange={handleIndividualChange} 
          />
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6">
        <button
          onClick={onSkip}
          className="text-tf-text-light hover:text-tf-primary transition-colors"
        >
          Skip to Dashboard
        </button>
        <div className="flex space-x-4">
          <button
            onClick={onBack}
            className="px-6 py-2 border border-gray-300 text-tf-text-main rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
          >
            <i className="ri-arrow-left-line"></i>
            <span>Back</span>
          </button>
          <button
            onClick={onNext}
            disabled={!isFormValid()}
            className="bg-tf-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            <span>Continue</span>
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

// Company Form Component
function CompanyForm({ 
  data, 
  onChange 
}: { 
  data: OnboardingData['companyData']; 
  onChange: (field: string, value: string) => void; 
}) {
  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Education', 'Manufacturing',
    'Retail', 'Real Estate', 'Consulting', 'Media', 'Other'
  ];

  const companySizes = [
    '1-10 employees', '11-50 employees', '51-200 employees',
    '201-500 employees', '501-1000 employees', '1000+ employees'
  ];

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-tf-text-main mb-2">
          Company Name *
        </label>
        <input
          type="text"
          value={data.rc_name}
          onChange={(e) => onChange('rc_name', e.target.value)}
          placeholder="Enter the registered or brand name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tf-primary focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-tf-text-main mb-2">
          Website URL
        </label>
        <input
          type="url"
          value={data.rc_website}
          onChange={(e) => onChange('rc_website', e.target.value)}
          placeholder="https://yourcompany.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tf-primary focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-tf-text-main mb-2">
          Industry *
        </label>
        <select
          value={data.rc_industry}
          onChange={(e) => onChange('rc_industry', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tf-primary focus:border-transparent"
        >
          <option value="">Select industry</option>
          {industries.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-tf-text-main mb-2">
          Company Size *
        </label>
        <select
          value={data.rc_size}
          onChange={(e) => onChange('rc_size', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tf-primary focus:border-transparent"
        >
          <option value="">Select company size</option>
          {companySizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-tf-text-main mb-2">
          Your Role *
        </label>
        <input
          type="text"
          value={data.rc_role}
          onChange={(e) => onChange('rc_role', e.target.value)}
          placeholder="e.g., Founder, HR Manager, Recruiter"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tf-primary focus:border-transparent"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-tf-text-main">
            Company Description
          </label>
          <button
            type="button"
            className="text-sm text-tf-primary hover:text-opacity-80 flex items-center space-x-1"
          >
            <i className="ri-magic-line"></i>
            <span>Optimize with AI</span>
          </button>
        </div>
        <textarea
          value={data.rc_description}
          onChange={(e) => onChange('rc_description', e.target.value)}
          placeholder="A short summary (2-3 lines) about what your company does"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tf-primary focus:border-transparent resize-none"
        />
      </div>
    </div>
  );
}

// Individual Form Component
function IndividualForm({ 
  data, 
  onChange 
}: { 
  data: OnboardingData['individualData']; 
  onChange: (field: string, value: string) => void; 
}) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-tf-text-main mb-2">
          Full Name *
        </label>
        <input
          type="text"
          value={data.ri_full_name}
          onChange={(e) => onChange('ri_full_name', e.target.value)}
          placeholder="Enter your complete name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tf-primary focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-tf-text-main mb-2">
          Email Address *
        </label>
        <input
          type="email"
          value={data.ri_email}
          onChange={(e) => onChange('ri_email', e.target.value)}
          placeholder="Enter your email address"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tf-primary focus:border-transparent"
        />
        <p className="text-sm text-tf-text-light mt-1">Used for candidate communication</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-tf-text-main mb-2">
          Mobile Number
        </label>
        <input
          type="tel"
          value={data.ri_mobile}
          onChange={(e) => onChange('ri_mobile', e.target.value)}
          placeholder="Enter your mobile number"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tf-primary focus:border-transparent"
        />
        <p className="text-sm text-tf-text-light mt-1">Optional but recommended</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-tf-text-main mb-2">
          LinkedIn Profile URL
        </label>
        <input
          type="url"
          value={data.ri_linkedin_url}
          onChange={(e) => onChange('ri_linkedin_url', e.target.value)}
          placeholder="https://linkedin.com/in/yourprofile"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tf-primary focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-tf-text-main mb-2">
          Portfolio or Website
        </label>
        <input
          type="url"
          value={data.ri_portfolio}
          onChange={(e) => onChange('ri_portfolio', e.target.value)}
          placeholder="e.g., GitHub, project link"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tf-primary focus:border-transparent"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-tf-text-main">
            About You / Your Project
          </label>
          <button
            type="button"
            className="text-sm text-tf-primary hover:text-opacity-80 flex items-center space-x-1"
          >
            <i className="ri-magic-line"></i>
            <span>Optimize with AI</span>
          </button>
        </div>
        <textarea
          value={data.ri_about}
          onChange={(e) => onChange('ri_about', e.target.value)}
          placeholder="e.g., I'm building an AI SaaS and hiring a React dev."
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tf-primary focus:border-transparent resize-none"
        />
      </div>
    </div>
  );
}

// Step 3: Review & Confirm
function Step3ReviewConfirm({ 
  data, 
  onComplete, 
  onBack, 
  onSkip, 
  isLoading 
}: { 
  data: OnboardingData; 
  onComplete: () => void; 
  onBack: () => void; 
  onSkip: () => void; 
  isLoading: boolean; 
}) {
  const isCompany = data.profileType === 'company';

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
          <i className="ri-check-line text-2xl text-green-600"></i>
        </div>
        <h1 className="text-3xl font-bold text-tf-text-main mb-2">
          Review & Confirm
        </h1>
        <p className="text-tf-text-light">
          Final verification before submission
        </p>
      </div>

      {/* Review Sections */}
      <div className="space-y-6">
        {/* Basic Profile */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-tf-text-main">Basic Profile</h3>
            <button className="text-tf-primary hover:text-opacity-80 text-sm">
              Edit
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <i className={`${isCompany ? 'ri-building-line' : 'ri-user-line'} text-xl text-gray-600`}></i>
            </div>
            <div>
              <p className="font-medium text-tf-text-main capitalize">
                {isCompany ? 'Company' : 'Individual'}
              </p>
              <p className="text-sm text-tf-text-light">
                Profile image uploaded
              </p>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-tf-text-main">
              {isCompany ? 'Company Details' : 'Individual Details'}
            </h3>
            <button className="text-tf-primary hover:text-opacity-80 text-sm">
              Edit
            </button>
          </div>
          <div className="space-y-3">
            {isCompany ? (
              <>
                <div className="flex justify-between">
                  <span className="text-tf-text-light">Company:</span>
                  <span className="text-tf-text-main">{data.companyData.rc_name || 'Not provided'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tf-text-light">Industry:</span>
                  <span className="text-tf-text-main">{data.companyData.rc_industry || 'Not provided'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tf-text-light">Size:</span>
                  <span className="text-tf-text-main">{data.companyData.rc_size || 'Not provided'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tf-text-light">Your Role:</span>
                  <span className="text-tf-text-main">{data.companyData.rc_role || 'Not provided'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tf-text-light">Website:</span>
                  <span className="text-tf-text-main">{data.companyData.rc_website || 'Not provided'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tf-text-light">Description:</span>
                  <span className="text-tf-text-main">{data.companyData.rc_description || 'Not provided'}</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between">
                  <span className="text-tf-text-light">Name:</span>
                  <span className="text-tf-text-main">{data.individualData.ri_full_name || 'Not provided'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tf-text-light">Email:</span>
                  <span className="text-tf-text-main">{data.individualData.ri_email || 'Not provided'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tf-text-light">Mobile:</span>
                  <span className="text-tf-text-main">{data.individualData.ri_mobile || 'Not provided'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tf-text-light">LinkedIn:</span>
                  <span className="text-tf-text-main">{data.individualData.ri_linkedin_url || 'Not provided'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tf-text-light">Portfolio:</span>
                  <span className="text-tf-text-main">{data.individualData.ri_portfolio || 'Not provided'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tf-text-light">About:</span>
                  <span className="text-tf-text-main">{data.individualData.ri_about || 'Not provided'}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="terms"
          className="mt-1 w-4 h-4 text-tf-primary border-gray-300 rounded focus:ring-tf-primary"
        />
        <label htmlFor="terms" className="text-sm text-tf-text-light">
          I confirm that the information provided is accurate and I agree to the terms of service.
        </label>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6">
        <button
          onClick={onSkip}
          className="text-tf-text-light hover:text-tf-primary transition-colors"
        >
          Skip to Dashboard
        </button>
        <div className="flex space-x-4">
          <button
            onClick={onBack}
            className="px-6 py-2 border border-gray-300 text-tf-text-main rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
          >
            <i className="ri-arrow-left-line"></i>
            <span>Back</span>
          </button>
          <button
            onClick={onComplete}
            disabled={isLoading}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {isLoading ? (
              <>
                <i className="ri-loader-4-line animate-spin"></i>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <i className="ri-check-line"></i>
                <span>Complete Profile Setup</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
