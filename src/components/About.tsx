import { User, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-2 flex items-center gap-3">
            <div className="w-1 h-10 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full"></div>
            About Me
          </h2>
          <p className="text-slate-600">Get to know me better</p>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3">Hello, I'm Karthik!</h3>
                <p className="text-blue-50 leading-relaxed">
                  I'm a passionate IT professional with a foundation in Computer Engineering
                  and 2.6 years of experience in IT. My journey in
                  technology has equipped me with expertise in full-stack development, cloud infrastructure,
                  and modern DevOps practices.
                </p>
              </div>
              <div>
                <p className="text-blue-50 leading-relaxed">
                  I thrive in collaborative environments where I can apply my technical skills to solve
                  real-world problems. My experience spans from developing scalable web applications to
                  implementing CI/CD pipelines and optimizing system performance.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Career Goals</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Seeking challenging opportunities in software engineering where I can leverage my
                    experience in building scalable applications, contribute to innovative projects, and
                    continue growing as a technical leader in a dynamic organization.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Passion & Interests</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Beyond coding, I'm passionate about emerging technologies like AI and Automation, cloud-native
                    architectures, and open-source contributions. I enjoy staying current with industry
                    trends and continuously expanding my technical skill set.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
