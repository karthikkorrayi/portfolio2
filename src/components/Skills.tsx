import {
  Braces,
  Cloud,
  Code,
  Database,
  GitBranch,
  Globe,
  Layers,
  LucideIcon,
  Server,
  ShieldCheck,
  Terminal,
  Wrench,
} from 'lucide-react';

type SkillCategory = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: 'blue' | 'cyan' | 'emerald' | 'teal' | 'sky';
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    subtitle: 'Core language stack for product development',
    icon: Terminal,
    skills: ['JavaScript', 'TypeScript', 'Java', 'C++', 'SQL', 'HTML/CSS'],
    color: 'blue',
  },
  {
    title: 'Frameworks & Libraries',
    subtitle: 'Modern UI and backend frameworks',
    icon: Layers,
    skills: ['React', 'Node.js', 'Express', 'Django', 'Spring Boot', 'Tailwind CSS', 'Next.js'],
    color: 'cyan',
  },
  {
    title: 'Cloud & DevOps',
    subtitle: 'Deployment, automation, and delivery tooling',
    icon: Cloud,
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Jenkins', 'Terraform'],
    color: 'emerald',
  },
  {
    title: 'Databases & Tools',
    subtitle: 'Data layer and backend integration tools',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'Supabase', 'Firebase', 'REST APIs'],
    color: 'teal',
  },
  {
    title: 'Methodologies',
    subtitle: 'Engineering practices and team collaboration',
    icon: ShieldCheck,
    skills: ['Agile/Scrum', 'Microservices', 'Code Review'],
    color: 'sky',
  },
];

const categoryColorClasses: Record<SkillCategory['color'], { accent: string; chip: string; chipText: string; chipBorder: string }> = {
  blue: {
    accent: 'from-blue-600 to-indigo-600',
    chip: 'bg-blue-50 dark:bg-blue-500/10',
    chipText: 'text-blue-700 dark:text-blue-300',
    chipBorder: 'border-blue-200 dark:border-blue-500/30',
  },
  cyan: {
    accent: 'from-cyan-600 to-sky-600',
    chip: 'bg-cyan-50 dark:bg-cyan-500/10',
    chipText: 'text-cyan-700 dark:text-cyan-300',
    chipBorder: 'border-cyan-200 dark:border-cyan-500/30',
  },
  emerald: {
    accent: 'from-emerald-600 to-teal-600',
    chip: 'bg-emerald-50 dark:bg-emerald-500/10',
    chipText: 'text-emerald-700 dark:text-emerald-300',
    chipBorder: 'border-emerald-200 dark:border-emerald-500/30',
  },
  teal: {
    accent: 'from-teal-600 to-cyan-600',
    chip: 'bg-teal-50 dark:bg-teal-500/10',
    chipText: 'text-teal-700 dark:text-teal-300',
    chipBorder: 'border-teal-200 dark:border-teal-500/30',
  },
  sky: {
    accent: 'from-sky-600 to-blue-600',
    chip: 'bg-sky-50 dark:bg-sky-500/10',
    chipText: 'text-sky-700 dark:text-sky-300',
    chipBorder: 'border-sky-200 dark:border-sky-500/30',
  },
};

const skillIconMap: Record<string, LucideIcon> = {
  JavaScript: Code,
  TypeScript: Braces,
  Java: Code,
  'C++': Terminal,
  SQL: Database,
  'HTML/CSS': Globe,
  React: Code,
  'Node.js': Server,
  Express: GitBranch,
  Django: ShieldCheck,
  'Spring Boot': Layers,
  'Tailwind CSS': Braces,
  'Next.js': Globe,
  AWS: Cloud,
  Azure: Cloud,
  Docker: Server,
  Kubernetes: Layers,
  'CI/CD': GitBranch,
  Git: GitBranch,
  Jenkins: Wrench,
  Terraform: Cloud,
  MongoDB: Database,
  MySQL: Database,
  Supabase: Database,
  Firebase: Database,
  'REST APIs': Globe,
  'Agile/Scrum': ShieldCheck,
  Microservices: Layers,
  'Code Review': Braces,
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell pattern-dots py-16 px-6 sm:px-8 lg:px-12">
      <div className="relative z-10 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-3">
            <div className="w-1 h-10 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full"></div>
            Technical Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-300">Expertise across multiple technologies and platforms</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const colors = categoryColorClasses[category.color];

            return (
              <article
                key={category.title}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/85 dark:bg-slate-900/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`rounded-t-2xl bg-gradient-to-r ${colors.accent} px-6 py-5 text-white`}>
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-white/20 p-2.5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold">{category.title}</h3>
                      <p className="text-sm text-white/85 mt-1">{category.subtitle}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill) => {
                      const SkillIcon = skillIconMap[skill] ?? Code;

                      return (
                        <div
                          key={skill}
                          className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 ${colors.chip} ${colors.chipText} ${colors.chipBorder}`}
                        >
                          <SkillIcon className="h-4 w-4 shrink-0" />
                          <span className="text-sm font-medium">{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}