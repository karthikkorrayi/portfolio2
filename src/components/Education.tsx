import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
            <GraduationCap className="w-10 h-10 text-blue-600" />
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Bachelor's Degree</h3>
              </div>
              <p className="text-xl text-blue-100">Computer Science Engineering</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-slate-900 text-lg">Lovely Professional University</p>
                  <p className="text-slate-600">Phagwara, Punjab, India</p>
                </div>
                <div className="flex items-center gap-4 text-slate-700">
                  <span className="font-medium">Graduated:</span>
                  <span>May 2023</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700">
                  <span className="font-medium">GPA:</span>
                  <span className="font-semibold text-blue-600">7.5/10</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Database Systems',
                      'Computer Networks',
                      'Operating Systems',
                      'Software Engineering',
                      'Web Development',
                      'Cloud Computing'
                    ].map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm border border-slate-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Certifications</h3>
                  <ul className="space-y-3">
                    <li className="border-l-4 border-blue-600 pl-4">
                      <p className="font-semibold text-slate-900">AWS Certified Devops Engineer - Professional</p>
                      <p className="text-sm text-slate-600">Amazon Web Services • 2025</p>
                    </li>
                    <li className="border-l-4 border-cyan-600 pl-4">
                      <p className="font-semibold text-slate-900">Microsoft Certified: Azure DevOps Engineer Expert</p>
                      <p className="text-sm text-slate-600">Microsoft • 2024</p>
                    </li>
                    <li className="border-l-4 border-emerald-600 pl-4">
                      <p className="font-semibold text-slate-900">Certified Nextink Administrator</p>
                      <p className="text-sm text-slate-600">Nexthink • 2025</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
