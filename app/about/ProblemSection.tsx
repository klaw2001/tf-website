
'use client';

export default function ProblemSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
            <i className="ri-alert-line mr-2"></i>
            The Problem We're Solving
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The hiring process is
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> fundamentally broken</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Both talent and recruiters are trapped in an outdated system that wastes time, creates frustration, and misses great opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Talent Pain Points */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200">
            <div className="mb-8">
              <img 
                src="https://readdy.ai/api/search-image?query=Stressed%20job%20seeker%20surrounded%20by%20countless%20resumes%20and%20rejection%20letters%2C%20overwhelmed%20person%20at%20computer%20with%20multiple%20application%20windows%20open%2C%20papers%20scattered%20around%20desk%2C%20exhausted%20expression%2C%20modern%20office%20setting%20with%20cluttered%20workspace%20showing%20job%20search%20frustration%20and%20burnout&width=600&height=400&seq=talent-pain-points&orientation=landscape"
                alt="Talent Struggles"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 rounded-full p-3 mr-4">
                <i className="ri-user-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">For Talent: The Endless Struggle</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <i className="ri-close-line text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Endless Applications</h4>
                  <p className="text-gray-600">Spending hours crafting applications that disappear into black holes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <i className="ri-ghost-line text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Getting Ghosted</h4>
                  <p className="text-gray-600">No feedback, no updates, just silence after investing time and energy</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <i className="ri-time-line text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Lengthy Processes</h4>
                  <p className="text-gray-600">Multiple rounds of interviews, tests, and assessments that drag on for months</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <i className="ri-spam-line text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Irrelevant Opportunities</h4>
                  <p className="text-gray-600">Getting matched with roles that don't fit skills or career goals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recruiter Pain Points */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 border border-indigo-200">
            <div className="mb-8">
              <img 
                src="https://readdy.ai/api/search-image?query=Overwhelmed%20recruiter%20buried%20in%20paperwork%20and%20resumes%2C%20stressed%20HR%20professional%20at%20desk%20with%20towers%20of%20applications%2C%20multiple%20computer%20screens%20showing%20candidate%20profiles%2C%20exhausted%20expression%2C%20cluttered%20office%20environment%20representing%20recruitment%20challenges%20and%20information%20overload&width=600&height=400&seq=recruiter-pain-points&orientation=landscape"
                alt="Recruiter Struggles"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="flex items-center mb-6">
              <div className="bg-indigo-600 rounded-full p-3 mr-4">
                <i className="ri-building-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">For Recruiters: Drowning in Noise</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-2 mr-4 mt-1">
                  <i className="ri-file-list-line text-indigo-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Resume Overload</h4>
                  <p className="text-gray-600">Drowning in hundreds of irrelevant applications for each position</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-2 mr-4 mt-1">
                  <i className="ri-search-line text-indigo-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Endless Filtering</h4>
                  <p className="text-gray-600">Wasting hours screening candidates who aren't the right fit</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-2 mr-4 mt-1">
                  <i className="ri-calendar-line text-indigo-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Scheduling Nightmares</h4>
                  <p className="text-gray-600">Complex coordination of multiple interview rounds and stakeholders</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-2 mr-4 mt-1">
                  <i className="ri-team-line text-indigo-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Missing Top Talent</h4>
                  <p className="text-gray-600">Great candidates slip through cracks or choose competitors with faster processes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-100 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Result?</h3>
            <p className="text-lg text-gray-700">
              A broken system where great talent stays hidden, top companies can't find the right people, and everyone wastes time on processes that don't work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
