
'use client';

export default function SolutionSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
            <i className="ri-lightbulb-line mr-2"></i>
            The TalentFlip Solution
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We flip the script with
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> smart connections</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TalentFlip eliminates the noise and creates direct, meaningful connections between qualified talent and the right opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* For Talent */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full p-3 mr-4">
                <i className="ri-user-star-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">For Talent: Showcase & Get Invited</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <i className="ri-check-line text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Create Your Profile Once</h4>
                  <p className="text-gray-600">Showcase your skills, experience, and career goals in one comprehensive profile</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <i className="ri-mail-line text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Receive Direct Invitations</h4>
                  <p className="text-gray-600">Companies reach out to you with relevant opportunities, not spam</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <i className="ri-phone-line text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quick Intro Calls</h4>
                  <p className="text-gray-600">Skip lengthy processes and jump straight to meaningful conversations</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <i className="ri-award-line text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Choose Your Path</h4>
                  <p className="text-gray-600">You're in control - decide which opportunities align with your goals</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">0 Applications</div>
                <div className="text-sm text-blue-700 font-medium">Just opportunities that come to you</div>
              </div>
            </div>
          </div>

          {/* For Recruiters */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full p-3 mr-4">
                <i className="ri-search-eye-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">For Recruiters: Cut Noise, Find Talent</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-2 mr-4 mt-1">
                  <i className="ri-target-line text-indigo-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Pre-Qualified Talent Pool</h4>
                  <p className="text-gray-600">Access vetted professionals who match your specific requirements</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-2 mr-4 mt-1">
                  <i className="ri-filter-line text-indigo-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Smart Matching</h4>
                  <p className="text-gray-600">AI-powered recommendations based on skills, experience, and culture fit</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-2 mr-4 mt-1">
                  <i className="ri-calendar-check-line text-indigo-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Book Direct Calls</h4>
                  <p className="text-gray-600">Skip the resume review and schedule intro calls with interested candidates</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-2 mr-4 mt-1">
                  <i className="ri-speed-line text-indigo-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Faster Hiring</h4>
                  <p className="text-gray-600">Reduce time-to-hire from months to weeks with streamlined processes</p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 mb-1">10x Faster</div>
                <div className="text-sm text-indigo-700 font-medium">From first contact to hire</div>
              </div>
            </div>
          </div>
        </div>

        {/* Central Connection Visual */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200 max-w-4xl mx-auto">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20recruiter%20and%20talented%20candidate%20shaking%20hands%20on%20video%20call%2C%20split%20screen%20showing%20happy%20faces%20during%20virtual%20meeting%2C%20modern%20office%20backgrounds%2C%20professional%20attire%2C%20successful%20connection%20moment%2C%20handshake%20gesture%20through%20computer%20screens%2C%20positive%20hiring%20interaction%2C%20digital%20collaboration&width=800&height=500&seq=solution-handshake&orientation=landscape"
              alt="Recruiter and Talent Connection"
              className="w-full h-64 object-cover rounded-2xl shadow-lg mb-8"
            />
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">The Result: Perfect Connections</h3>
            <p className="text-xl text-gray-600 mb-8">
              When talent meets opportunity directly, magic happens. No more guesswork, no more wasted time - just meaningful connections that benefit everyone.
            </p>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                <div className="text-gray-700">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">5x</div>
                <div className="text-gray-700">Better Matches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-700">Relevant Opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
