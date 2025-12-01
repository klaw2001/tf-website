
'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useApi } from '@/contexts/ApiContext';

export default function OnboardingFlow() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { uploadResume, uploadProfileImage, parseResume } = useApi();
  const role = searchParams.get('role') || 'talent';
  const initialStep = parseInt(searchParams.get('step') || '1');
  
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [uploadedPhoto, setUploadedPhoto] = useState<File | null>(null);
  const [uploadedResume, setUploadedResume] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadErrors, setUploadErrors] = useState<{[key: string]: string}>({});
  const [uploadProgress, setUploadProgress] = useState<{[key: string]: boolean}>({});
  const [parsedResumeData, setParsedResumeData] = useState<any>(null);

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Clear previous errors
      setUploadErrors(prev => ({ ...prev, photo: '' }));
      setUploadProgress(prev => ({ ...prev, photo: true }));
      
      try {
        const response = await uploadProfileImage(file);
        
        if (response.status === true) {
          setUploadedPhoto(file);
          const reader = new FileReader();
          reader.onload = (e) => {
            setPhotoPreview(e.target?.result as string);
          };
          reader.readAsDataURL(file);
        } else {
          setUploadErrors(prev => ({ ...prev, photo: response.message || 'Upload failed' }));
        }
      } catch (error) {
        setUploadErrors(prev => ({ ...prev, photo: 'Upload failed. Please try again.' }));
      } finally {
        setUploadProgress(prev => ({ ...prev, photo: false }));
      }
    }
  };

  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Clear previous errors
      setUploadErrors(prev => ({ ...prev, resume: '' }));
      setUploadProgress(prev => ({ ...prev, resume: true }));
      
      try {
        const response = await uploadResume(file);
        
        if (response.status === true) {
          setUploadedResume(file);
        } else {
          setUploadErrors(prev => ({ ...prev, resume: response.message || 'Upload failed' }));
        }
      } catch (error) {
        setUploadErrors(prev => ({ ...prev, resume: 'Upload failed. Please try again.' }));
      } finally {
        setUploadProgress(prev => ({ ...prev, resume: false }));
      }
    }
  };

  const handleGenerateProfile = () => {
    if (uploadedPhoto && uploadedResume) {
      setCurrentStep(2);
    }
  };

  const handleStartProcessing = async () => {
    setIsProcessing(true);
    
    try {
      const response = await parseResume();
      
      if (response.status === true && response.data) {
        // Store the parsed resume data
        setParsedResumeData(response.data);
        // Resume parsing successful, proceed to next step
        setCurrentStep(3);
      } else {
        // Handle parsing error
        console.error('Resume parsing failed:', response.message);
        // For now, still proceed to next step, but you can add error handling here
        setCurrentStep(3);
      }
    } catch (error) {
      console.error('Error during resume parsing:', error);
      // For now, still proceed to next step, but you can add error handling here
      setCurrentStep(3);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleGoToDashboard = () => {
    const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || '/dashboard';
    window.location.href = dashboardUrl;
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-6 sm:mb-8">
      <div className="flex items-center space-x-2 sm:space-x-4">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-medium text-sm sm:text-base ${
                currentStep >= step
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {step}
            </div>
            {step < 3 && (
              <div
                className={`w-8 sm:w-16 h-1 mx-1 sm:mx-2 ${
                  currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-6 sm:mb-8">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
          <i className="ri-magic-line text-blue-600 text-xl sm:text-2xl"></i>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Let AI Create Your Profile</h1>
        <p className="text-sm sm:text-base text-gray-600">Upload your photo and resume - we'll handle the rest</p>
        <p className="text-xs sm:text-sm text-gray-500 mt-2">Your data is encrypted and secure. We never share personal information.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Professional Photo Upload */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <i className="ri-camera-line text-blue-600 text-lg sm:text-xl mr-2"></i>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Professional Photo</h3>
          </div>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center hover:border-blue-400 transition-colors">
            {photoPreview ? (
              <div className="space-y-3 sm:space-y-4">
                <img
                  src={photoPreview}
                  alt="Profile preview"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover"
                />
                <p className="text-xs sm:text-sm text-gray-600 break-all">{uploadedPhoto?.name}</p>
                <label className={`inline-block px-3 sm:px-4 py-2 rounded-lg cursor-pointer transition-colors text-sm ${
                  uploadProgress.photo 
                    ? 'bg-gray-400 text-white cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}>
                  {uploadProgress.photo ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Uploading...
                    </>
                  ) : (
                    'Change Photo'
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                    disabled={uploadProgress.photo}
                  />
                </label>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                <i className="ri-camera-line text-3xl sm:text-4xl text-gray-400"></i>
                <div>
                  <p className="text-sm sm:text-base text-gray-600 mb-2">Upload your photo</p>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">AI will analyze facial features for personality insights and recommendations</p>
                  <label className={`inline-block px-4 sm:px-6 py-2 rounded-lg cursor-pointer transition-colors text-sm ${
                    uploadProgress.photo 
                      ? 'bg-gray-400 text-white cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}>
                    {uploadProgress.photo ? (
                      <>
                        <i className="ri-loader-4-line animate-spin mr-2"></i>
                        Uploading...
                      </>
                    ) : (
                      'Choose Photo'
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                      disabled={uploadProgress.photo}
                    />
                  </label>
                </div>
              </div>
            )}
            {uploadErrors.photo && (
              <p className="text-red-600 text-xs mt-2">{uploadErrors.photo}</p>
            )}
          </div>
        </div>

        {/* Resume Upload */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <i className="ri-file-text-line text-purple-600 text-lg sm:text-xl mr-2"></i>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Resume / CV</h3>
          </div>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center hover:border-purple-400 transition-colors">
            {uploadedResume ? (
              <div className="space-y-3 sm:space-y-4">
                <i className="ri-file-check-line text-3xl sm:text-4xl text-green-500"></i>
                <p className="text-xs sm:text-sm text-gray-600 break-all">{uploadedResume.name}</p>
                <p className="text-xs text-gray-500">AI will extract skills, experience, and achievements</p>
                <label className={`inline-block px-3 sm:px-4 py-2 rounded-lg cursor-pointer transition-colors text-sm ${
                  uploadProgress.resume 
                    ? 'bg-gray-400 text-white cursor-not-allowed' 
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}>
                  {uploadProgress.resume ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Uploading...
                    </>
                  ) : (
                    'Change File'
                  )}
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeUpload}
                    className="hidden"
                    disabled={uploadProgress.resume}
                  />
                </label>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                <i className="ri-file-upload-line text-3xl sm:text-4xl text-gray-400"></i>
                <div>
                  <p className="text-sm sm:text-base text-gray-600 mb-2">Upload your resume</p>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">AI will extract skills, experience, and achievements</p>
                  <label className={`inline-block px-4 sm:px-6 py-2 rounded-lg cursor-pointer transition-colors text-sm ${
                    uploadProgress.resume 
                      ? 'bg-gray-400 text-white cursor-not-allowed' 
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}>
                    {uploadProgress.resume ? (
                      <>
                        <i className="ri-loader-4-line animate-spin mr-2"></i>
                        Uploading...
                      </>
                    ) : (
                      'Choose File'
                    )}
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeUpload}
                      className="hidden"
                      disabled={uploadProgress.resume}
                    />
                  </label>
                </div>
              </div>
            )}
            {uploadErrors.resume && (
              <p className="text-red-600 text-xs mt-2">{uploadErrors.resume}</p>
            )}
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div className="bg-blue-50 rounded-lg p-4 mt-6 sm:mt-8 flex items-start">
        <i className="ri-shield-check-line text-blue-600 text-lg sm:text-xl mr-3 mt-0.5 flex-shrink-0"></i>
        <div>
          <h4 className="font-medium text-blue-900 mb-1 text-sm sm:text-base">Your Data is Secure</h4>
          <div className="text-xs sm:text-sm text-blue-700 space-y-1">
            <p>🔒 End-to-end encrypted</p>
            <p>🤖 Anonymous by default</p>
            <p>🗑️ Delete anytime</p>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="text-center mt-6 sm:mt-8">
        <button
          onClick={handleGenerateProfile}
          disabled={!uploadedPhoto || !uploadedResume}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium text-sm sm:text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          <i className="ri-magic-line mr-2"></i>
          Generate My Profile with AI
        </button>
        
        {/* Skip to Dashboard Link */}
        <div className="mt-4">
          <a
            href={process.env.NEXT_PUBLIC_DASHBOARD_URL || '/dashboard'}
            className="text-gray-600 hover:text-gray-800 text-sm underline transition-colors"
          >
            Skip to dashboard
          </a>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-6 sm:mb-8">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
          <i className="ri-eye-line text-green-600 text-xl sm:text-2xl"></i>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Review Your Uploads</h1>
        <p className="text-sm sm:text-base text-gray-600">Confirm your photo and resume before AI processing</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Photo Preview */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center">
            <i className="ri-camera-line text-blue-600 mr-2"></i>
            Profile Photo Preview
          </h3>
          
          <div className="text-center space-y-3 sm:space-y-4">
            {photoPreview && (
              <img
                src={photoPreview}
                alt="Profile preview"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto object-cover shadow-lg"
              />
            )}
            <p className="text-xs sm:text-sm text-gray-600 break-all">{uploadedPhoto?.name}</p>
            <p className="text-xs text-gray-500">This will be your professional profile photo</p>
          </div>
        </div>

        {/* Resume Preview */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center">
            <i className="ri-file-text-line text-purple-600 mr-2"></i>
            Resume Preview
          </h3>
          
          <div className="text-center space-y-3 sm:space-y-4">
            <div className="w-16 h-20 sm:w-20 sm:h-24 bg-gray-100 rounded-lg mx-auto flex items-center justify-center">
              <i className="ri-file-text-line text-2xl sm:text-3xl text-gray-400"></i>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 break-all">{uploadedResume?.name}</p>
            <p className="text-xs text-gray-500">AI will analyze this document for skills and experience</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8">
        <button
          onClick={() => setCurrentStep(1)}
          className="px-4 sm:px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
        >
          <i className="ri-arrow-left-line mr-2"></i>
          Go Back
        </button>
        <button
          onClick={handleStartProcessing}
          disabled={isProcessing}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-sm sm:text-base"
        >
          {isProcessing ? (
            <>
              <i className="ri-loader-4-line animate-spin mr-2"></i>
              Processing...
            </>
          ) : (
            <>
              <i className="ri-play-line mr-2"></i>
              Start AI Processing
            </>
          )}
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center">
            <i className="ri-check-line text-green-600 text-xl sm:text-2xl"></i>
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Profile Created Successfully!</h1>
        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">AI has generated two versions of your profile for optimal visibility</p>
      </div>

      {/* AI-Detected Personality Traits */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 mb-6 sm:mb-8">
        <div className="flex items-center mb-3 sm:mb-4">
          <i className="ri-brain-line text-blue-600 text-lg sm:text-xl mr-2"></i>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">AI-Detected Personality Traits</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {(parsedResumeData?.ai_detected_personality_traits || ['Analytical', 'Leadership', 'Detail-oriented', 'Collaborative']).map((trait: string) => (
            <span key={trait} className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
              {trait}
            </span>
          ))}
        </div>
      </div>

      {/* Profile Previews */}
      <div className="space-y-4 sm:space-y-6">
        {/* Short Profile */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-4 sm:p-6 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
            <div>
              <h3 className="text-base sm:text-lg font-semibold">Short Profile (Public Preview)</h3>
              <p className="text-green-100 text-xs sm:text-sm">What recruiters see when browsing talent</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center mt-2 sm:mt-0">
              <i className="ri-eye-line text-white text-lg sm:text-xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 sm:p-6 text-gray-900">
            <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-xl mx-auto sm:mx-0 flex-shrink-0">
                SS
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                  {parsedResumeData?.short_profile?.job_title || 'Senior Software Engineer'}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
                  {parsedResumeData?.short_profile?.experience_summary || '10+ years • Technology'}
                </p>
                <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4">
                  {parsedResumeData?.short_profile?.summary || 'Experienced software engineer with a strong background in developing scalable applications and leading teams.'}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 justify-center sm:justify-start">
                  {(parsedResumeData?.short_profile?.skills || ['Java', 'Python', 'Cloud Computing']).slice(0, 3).map((skill: string) => (
                    <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">{skill}</span>
                  ))}
                  {(parsedResumeData?.short_profile?.skills || []).length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">+{(parsedResumeData?.short_profile?.skills || []).length - 3} more</span>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                  <div className="flex flex-wrap gap-1 sm:gap-2 text-xs text-gray-600 justify-center sm:justify-start">
                    {(parsedResumeData?.short_profile?.personality_traits || ['Analytical', 'Leadership']).map((trait: string) => (
                      <span key={trait} className="px-2 py-1 bg-purple-100 text-purple-800 rounded">{trait}</span>
                    ))}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-right">
                    {parsedResumeData?.short_profile?.employment_type || 'Full-time'}
                  </div>
                </div>
              </div>
              <button className="bg-purple-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-purple-700 transition-colors whitespace-nowrap mx-auto sm:mx-0">
                View Profile
              </button>
            </div>
          </div>
        </div>

        {/* Full Profile */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-4 sm:p-6 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
            <div>
              <h3 className="text-base sm:text-lg font-semibold">Full Profile (Detailed View)</h3>
              <p className="text-purple-100 text-xs sm:text-sm">Complete profile unlocked by recruiters</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center mt-2 sm:mt-0">
              <i className="ri-lock-line text-white text-lg sm:text-xl"></i>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 sm:p-6 text-gray-900">
            <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-2xl mx-auto sm:mx-0 flex-shrink-0">
                SS
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                  {parsedResumeData?.full_profile?.job_title || 'Senior Software Engineer'}
                </h4>
                <p className="text-gray-600 mb-2 text-sm sm:text-base">
                  {parsedResumeData?.full_profile?.experience_summary || '12 years • San Francisco, CA'}
                </p>
                <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm">
                  {parsedResumeData?.full_profile?.summary || 'Dedicated software engineer with over a decade of experience in building robust applications and managing development teams. Proven track record in delivering high-quality software solutions on time and within budget.'}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Core Skills</h5>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {(parsedResumeData?.full_profile?.core_skills || ['Java', 'Python', 'Cloud Computing', 'Agile Methodologies', 'Team Leadership']).map((skill: string) => (
                    <span key={skill} className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Personality Profile</h5>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {(parsedResumeData?.full_profile?.personality_profile || ['Analytical', 'Detail-oriented', 'Collaborative']).map((trait: string) => (
                    <span key={trait} className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm">{trait}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center">
              <p className="text-xs sm:text-sm text-gray-600">This detailed profile includes work history, projects, education, achievements, and contact information</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="text-center mt-6 sm:mt-8">
        <button 
          onClick={handleGoToDashboard}
          className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium text-sm sm:text-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
        >
          <i className="ri-dashboard-line mr-2"></i>
          Go to Dashboard
        </button>
        <p className="text-gray-600 text-xs sm:text-sm mt-3 sm:mt-4">You can edit and customize your profile anytime</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Step Indicator */}
        {renderStepIndicator()}

        {/* Step Content */}
        <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 lg:p-12">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
        </div>
      </div>
    </div>
  );
}
