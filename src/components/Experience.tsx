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
      title: 'DevOps Engineer',
      company: 'ITC Infotech',
      companyLogo: `${import.meta.env.BASE_URL}images/1631308626797.jpeg`,
      location: 'Hyderabad, Telangana, India',
      startDate: '2023-09-01',
      period: 'Sept 2023 - Present',
      description: 'Worked across three projects focusing on IT operations optimization, DevOps automation, and frontend application development.',
      achievements: [
        'Designed and implemented CI/CD pipelines to automate build and deployment processes.',
        'Automated infrastructure provisioning using Terraform and ARM templates, optimizing resource utilization and reducing setup time.',
        'Developed and enhanced frontend features using Angular, including UI components and API integrations.',
        'Utilized Nexthink automation tools to optimize IT operations and improve end-user experience across enterprise environments.',
      ],
      technologies: ['Azure DevOps', 'CI/CD', 'Terraform', 'AWS', 'Docker', 'ARM Templates', 'YAML', 'Python', 'Jenkins', 'Git', 'Nexthink', 'PowerShell', 'Angular', 'REST APIs'],
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
        'Developed a web application to manage product receipts and customer returns, improving support team efficiency.',
        'Contributed to an AI-enabled management application to automate business processes.',
        'Collaborated with senior developers and worked in an Agile environment to maintain code quality and ensure deployment readiness.',
        'Participated in code reviews and sprint planning sessions.',
      ],
      technologies: ['Java', 'REST APIs', 'React.js', 'Python', 'Machine Learning', 'Agile Development', 'Scrums'],
    },
  ];

  return (
    <section id="experience" aria-labelledby="experience-heading" className="portfolio-section px-4 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="portfolio-eyebrow">03 / The journey</p>
          <h2 id="experience-heading" className="portfolio-heading">Experience that makes a difference.</h2>
          <p className="mt-3 max-w-xl leading-7 text-slate-600 dark:text-slate-300">From frontend development to enterprise automation, a journey of learning and delivering.</p>
        </div>
        <div className="grid gap-4 xl:grid-cols-2">
          {experiences.map((exp) => (
            <article key={`${exp.company}-${exp.startDate}`} className="portfolio-glass flex min-w-0 flex-col p-6 sm:p-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div className="company-logo"><img src={exp.companyLogo} alt={`${exp.company} logo`} loading="lazy" width={160} height={96} className={`h-full w-full object-contain ${exp.company === 'ITC Infotech' ? 'scale-[1.65]' : 'scale-[1.15]'}`} /></div>
                <span className={`rounded-full border px-3 py-1 text-xs font-medium ${exp.endDate ? 'border-slate-200 dark:border-white/15 bg-slate-100/80 dark:bg-white/5 text-slate-600 dark:text-slate-300' : 'border-emerald-300/20 bg-emerald-300/10 text-emerald-800 dark:text-emerald-200'}`}>{exp.endDate ? 'Previous role' : 'Current role'}</span>
              </div>
              <p className="text-sm font-medium text-cyan-800 dark:text-cyan-200">{exp.company}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">{exp.title}</h3>
              <div className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <p className="flex flex-wrap items-center gap-2"><Calendar size={16} className="shrink-0 text-slate-500 dark:text-slate-400" aria-hidden="true" /><span>{exp.period}</span><span className="text-slate-500 dark:text-slate-400">· {getDurationLabel(exp.startDate, exp.endDate)}</span></p>
                <p className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-slate-500 dark:text-slate-400" aria-hidden="true" />{exp.location}</p>
              </div>
              <p className="mt-6 border-t border-slate-200 dark:border-white/10 pt-6 text-sm leading-7 text-slate-600 dark:text-slate-300">{exp.description}</p>
              <h4 className="mb-4 mt-6 text-sm font-semibold text-slate-900 dark:text-white">Key contributions</h4>
              <ul className="space-y-4">
                {exp.achievements.map((achievement) => <li key={achievement} className="flex items-start gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" /><span>{achievement}</span></li>)}
              </ul>
              <div className="mt-auto pt-8">
                <h4 className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">Technologies</h4>
                <ul className="flex flex-wrap gap-2">{exp.technologies.map((tech) => <li key={tech} className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1.5 text-xs font-medium leading-5 text-slate-700 dark:text-slate-200">{tech}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
