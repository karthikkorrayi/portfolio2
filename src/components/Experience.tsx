import { Calendar, MapPin } from 'lucide-react';

interface ExperienceEntry {
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  startDate: string;
  endDate?: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const getDurationLabel = (startDate: string, endDate?: string) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  const elapsedMs = end.getTime() - start.getTime();

  if (elapsedMs <= 0) {
    return '0.0 years';
  }

  const years = elapsedMs / (1000 * 60 * 60 * 24 * 365.25);

  if (years >= 1) {
    return `${years.toFixed(1)} years`;
  }

  const months = Math.max(1, Math.round(years * 12));
  return `${months} month${months === 1 ? '' : 's'}`;
};

export default function Experience() {
  const experiences: ExperienceEntry[] = [
    {
      title: 'Associate IT Consultant',
      company: 'ITC Infotech',
      companyLogo: `${import.meta.env.BASE_URL}images/1631308626797.jpeg`,
      location: 'Bangalore, Karnataka, India',
      startDate: '2023-09-01',
      period: 'Sept 2023 - Present',
      description: 'Worked across three projects focusing on IT operations optimization, DevOps automation, and frontend application development.',
      achievements: [
        'Designed and implemented CI/CD pipelines to automate build and deployment processes',
        'Automated infrastructure provisioning using Terraform and ARM templates, optimizing resource utilization and reducing setup time',
        'Developed and enhanced frontend features using Angular, including UI components and API integrations',
        'Utilized Nexthink automation tools to optimize IT operations and improve end-user experience across enterprise environments',
      ],
      technologies: ['CI/CD', 'Terraform', 'AWS', 'Docker', 'ARM Templates', 'Nexthink', 'Angular', 'Azure DevOps'],
    },
    {
      title: 'Intern',
      company: 'Highradius',
      companyLogo: `${import.meta.env.BASE_URL}images/1200x630wa.jpg`,
      location: 'Remote',
      startDate: '2022-01-01',
      endDate: '2022-04-30',
      period: 'Jan 2022 - Apr 2022',
      description: 'Developed applications focused on operational management and AI-enabled process automation to improve efficiency and streamline workflows.',
      achievements: [
        'Developed a web application to manage product receipts and customer returns, improving support team efficiency',
        'Contributed to an AI-enabled management application to automate business processes',
        'Collaborated with senior developers and worked in an Agile environment to maintain code quality and ensure deployment readiness',
        'Participated in code reviews and sprint planning sessions',
      ],
      technologies: ['Java', 'REST APIs', 'React.js', 'Python', 'Machine Learning', 'Agile Development'],
    },
  ];

  return (
    <section id="experience" className="section-shell pattern-grid px-4 py-16 sm:px-8 lg:px-12">
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mb-12">
          <h2 className="mb-2 flex items-center gap-3 text-4xl font-bold text-slate-900 dark:text-slate-100">
            <div className="h-10 w-1 rounded-full bg-gradient-to-b from-blue-600 to-cyan-600"></div>
            Professional Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-300">2.6 years of hands-on experience in software development</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg transition-all hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 overflow-hidden rounded-xl border border-white/30 bg-white/10 p-1.5">
                      <img src={exp.companyLogo} alt={`${exp.company} logo`} className="h-full w-full rounded-lg object-cover" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-2xl font-bold">{exp.title}</h3>
                      <p className="text-xl text-blue-100">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-blue-50">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                      <span className="rounded bg-white/95 px-2 py-0.5 text-sm font-semibold text-slate-700 shadow-sm dark:bg-slate-900/90 dark:text-slate-100">
                        {getDurationLabel(exp.startDate, exp.endDate)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="mb-4 text-lg text-slate-600 dark:text-slate-300">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="mb-3 font-semibold text-slate-900 dark:text-slate-100">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIdx) => (
                      <li key={achIdx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <span className="mt-1 text-blue-600">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 font-semibold text-slate-900 dark:text-slate-100">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-700/60 dark:text-slate-100"
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