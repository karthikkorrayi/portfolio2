import { Code } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Java', 'C++', 'SQL', 'HTML/CSS'],
      color: 'blue'
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Node.js', 'Express', 'Django', 'Spring Boot', 'Tailwind CSS', 'Next.js'],
      color: 'cyan'
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS','Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Jenkins', 'Terraform'],
      color: 'emerald'
    },
    {
      title: 'Databases & Tools',
      skills: ['MongoDB', 'MySQL', 'Supabase', 'Firebase', 'REST APIs'],
      color: 'teal'
    },
    {
      title: 'Methodologies',
      skills: ['Agile/Scrum', 'Microservices', 'Code Review'],
      color: 'sky'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
      cyan: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200' },
      emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
      teal: { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200' },
      sky: { bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-200' }
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-2 flex items-center gap-3">
            <div className="w-1 h-10 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full"></div>
            Technical Skills
          </h2>
          <p className="text-slate-600">Expertise across multiple technologies and platforms</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {skillCategories.map((category, idx) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${colors.bg} ${colors.text} ${colors.border}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
