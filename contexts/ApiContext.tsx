'use client';

import { createContext, useContext, ReactNode } from 'react';

// API Base URL from environment variables
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000/api';

// API Response Types
interface ApiResponse<T = any> {
  status: boolean;
  message: string;
  data?: T;
  error?: string;
}

interface SignupRequest {
  user_full_name: string;
  user_email: string;
  user_mobile: string;
  user_password: string;
  role_id: number;
}

interface SignupResponse {
  user: {
    user_id: number;
    user_full_name: string;
    user_email: string;
    user_mobile: string;
    role_id: number;
    status: boolean;
    is_verified: boolean;
    is_active: boolean;
    created_at: string;
    user_role: {
      role_name: string;
    };
  };
  token: string;
}

interface UploadResponse {
  fileName: string;
  originalName: string;
  filePath: string;
  fileSize: number;
  uploadType: string;
  profileId: number;
}

interface CompanyProfileRequest {
  rc_name: string;
  rc_website?: string;
  rc_industry: string;
  rc_size: string;
  rc_role: string;
  rc_description?: string;
}

interface IndividualProfileRequest {
  ri_full_name: string;
  ri_email: string;
  ri_mobile?: string;
  ri_linkedin_url?: string;
  ri_portfolio?: string;
  ri_about?: string;
}

interface ResumeParseResponse {
  experience_years: number;
  ai_detected_personality_traits: string[];
  short_profile: {
    job_title: string;
    experience_summary: string;
    summary: string;
    skills: string[];
    personality_traits: string[];
    employment_type: string;
    industry: string;
  };
  full_profile: {
    job_title: string;
    experience_summary: string;
    summary: string;
    core_skills: string[];
    personality_profile: string[];
    location: string;
    work_history: string;
    education: string;
    achievements: string;
  };
}

// API Context
interface ApiContextType {
  signup: (data: SignupRequest) => Promise<ApiResponse<SignupResponse>>;
  uploadResume: (file: File) => Promise<ApiResponse<UploadResponse>>;
  uploadProfileImage: (file: File) => Promise<ApiResponse<UploadResponse>>;
  uploadRecruiterProfileImage: (file: File, rpType: 'company' | 'individual') => Promise<ApiResponse<UploadResponse>>;
  createCompanyProfile: (data: CompanyProfileRequest) => Promise<ApiResponse<any>>;
  createIndividualProfile: (data: IndividualProfileRequest) => Promise<ApiResponse<any>>;
  parseResume: () => Promise<ApiResponse<ResumeParseResponse>>;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

// API Functions
const apiCall = async <T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> => {
  try {
    const url = `${BASE_URL}${endpoint}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        status: false,
        message: data.message || 'An error occurred',
        error: data.error || 'Request failed',
        data: data.data || null
      };
    }

    return {
      status: data.status === true || data.status === 'success',
      message: data.message || 'Success',
      data: data.data || data
    };
  } catch (error) {
    console.error('API call error:', error);
    return {
      status: false,
      message: 'Network error occurred',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

// API Methods
const signup = async (data: SignupRequest): Promise<ApiResponse<SignupResponse>> => {
  return apiCall<SignupResponse>('/auth/signup', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

const uploadResume = async (file: File): Promise<ApiResponse<UploadResponse>> => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    return {
      status: false,
      message: 'No authentication token found',
      error: 'User not authenticated'
    };
  }

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(`${BASE_URL}/talent/upload/resume/?type=resume`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        status: false,
        message: data.message || 'Upload failed',
        error: data.error || 'Upload failed',
        data: data.data || null
      };
    }

    return {
      status: data.status === true || data.status === 'success',
      message: data.message || 'Upload successful',
      data: data.data || data
    };
  } catch (error) {
    console.error('Upload error:', error);
    return {
      status: false,
      message: 'Network error occurred',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

const uploadProfileImage = async (file: File): Promise<ApiResponse<UploadResponse>> => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    return {
      status: false,
      message: 'No authentication token found',
      error: 'User not authenticated'
    };
  }

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch(`${BASE_URL}/talent/upload/profile-image?type=profile-image`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        status: false,
        message: data.message || 'Upload failed',
        error: data.error || 'Upload failed',
        data: data.data || null
      };
    }

    return {
      status: data.status === true || data.status === 'success',
      message: data.message || 'Upload successful',
      data: data.data || data
    };
  } catch (error) {
    console.error('Upload error:', error);
    return {
      status: false,
      message: 'Network error occurred',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

const uploadRecruiterProfileImage = async (file: File, rpType: 'company' | 'individual'): Promise<ApiResponse<UploadResponse>> => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    return {
      status: false,
      message: 'No authentication token found',
      error: 'User not authenticated'
    };
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('rp_type', rpType);

  try {
    const response = await fetch(`${BASE_URL}/recruiter/upload/profile-image?type=profile-image`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        status: false,
        message: data.message || 'Upload failed',
        error: data.error || 'Upload failed',
        data: data.data || null
      };
    }

    return {
      status: data.status === true || data.status === 'success',
      message: data.message || 'Upload successful',
      data: data.data || data
    };
  } catch (error) {
    console.error('Upload error:', error);
    return {
      status: false,
      message: 'Network error occurred',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

const createCompanyProfile = async (data: CompanyProfileRequest): Promise<ApiResponse<any>> => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    return {
      status: false,
      message: 'No authentication token found',
      error: 'User not authenticated'
    };
  }

  return apiCall<any>('/recruiter/company-profile', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

const createIndividualProfile = async (data: IndividualProfileRequest): Promise<ApiResponse<any>> => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    return {
      status: false,
      message: 'No authentication token found',
      error: 'User not authenticated'
    };
  }

  return apiCall<any>('/recruiter/individual-profile', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

const parseResume = async (): Promise<ApiResponse<ResumeParseResponse>> => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    return {
      status: false,
      message: 'No authentication token found',
      error: 'User not authenticated'
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/talent/parse-resume`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        status: false,
        message: data.message || 'Resume parsing failed',
        error: data.error || 'Resume parsing failed',
        data: data.data || null
      };
    }

    return {
      status: data.status === true || data.status === 'success',
      message: data.message || 'Resume parsed successfully',
      data: data.data || data
    };
  } catch (error) {
    console.error('Resume parsing error:', error);
    return {
      status: false,
      message: 'Network error occurred',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

// Context Provider
export const ApiProvider = ({ children }: { children: ReactNode }) => {
  const value: ApiContextType = {
    signup,
    uploadResume,
    uploadProfileImage,
    uploadRecruiterProfileImage,
    createCompanyProfile,
    createIndividualProfile,
    parseResume,
  };

  return (
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  );
};

// Hook to use API context
export const useApi = () => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};

export default ApiContext;
