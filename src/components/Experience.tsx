import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Associate IT Consultant',
      company: 'ITC Infotech',
      location: 'Banglore, Karnataka, India',
      period: 'Sept 2023 - Present',
      duration: '2.5 years',
      description: 'Leading development of microservices architecture and cloud-native applications.',
      achievements: [
        'Architected and deployed scalable microservices handling 100K+ daily requests',
        'Reduced API response time by 40% through optimization and caching strategies',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored 3 junior developers in best practices and code review processes'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      title: 'Intern',
      company: 'Highradius',
      location: 'Remote',
      period: 'Jan 2022 - Apr 2022',
      duration: '4 months',
      description: 'Contributed to product development and learned industry best practices.',
      achievements: [
        'Developed features for mobile-responsive dashboard using React',
        'Wrote comprehensive unit tests achieving 85% code coverage',
        'Participated in code reviews and sprint planning sessions',
        'Automated manual testing processes saving 10 hours per week'
      ],
      technologies: ['React', 'Python', 'Django', 'Jest', 'GitHub']
    }
  ];

  return (
    <section id="experience" className="section-shell pattern-grid py-16 px-6 sm:px-8 lg:px-12">
      <div className="relative z-10 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-3">
            <div className="w-1 h-10 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full"></div>
            Professional Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-300">2.6 years of hands-on experience in software development</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-xl text-blue-100">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-blue-50">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                      <span className="bg-white dark:bg-slate-800/20 px-2 py-0.5 rounded text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-lg">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIdx) => (
                      <li key={achIdx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <span className="text-blue-600 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
