import { useMemo, useState } from 'react';
import { Code, Briefcase, GraduationCap, User, Mail, Menu, X, Github, Linkedin } from 'lucide-react';

interface ImportMetaEnv {
  readonly BASE_URL: string;
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

const EXPERIENCE_START_DATE = new Date('2023-09-01T00:00:00');

const calculateExperience = () => {
  const now = new Date();

  let years = now.getFullYear() - EXPERIENCE_START_DATE.getFullYear();
  let months = now.getMonth() - EXPERIENCE_START_DATE.getMonth();

  if (now.getDate() < EXPERIENCE_START_DATE.getDate()) {
    months -= 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years < 0) {
    return '0 months';
  }

  const yearLabel = years === 1 ? 'year' : '.';
  const monthLabel = months === 1 ? 'month' : 'years';

  if (years === 0) {
    return `${months} ${monthLabel}`;
  }

  if (months === 0) {
    return `${years} ${yearLabel}`;
  }

  return `${years} ${yearLabel} ${months} ${monthLabel}`;
};

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const experience = useMemo(() => calculateExperience(), []);

  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    onSectionChange(id);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed md:hidden bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-110"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <aside
        className={`fixed left-0 top-0 h-screen w-full md:w-80 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-white shadow-2xl transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="sticky top-0 bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8 border-b border-slate-200 dark:border-slate-700">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}images/profile.jpg?v=${Date.now()}`}
                  alt="Karthik Korrayi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2 text-center">Karthik Korrayi</h1>
            <p className="text-cyan-500 text-center font-semibold text-sm mb-2">Associate IT Consultant</p>
            <p className="text-slate-500 dark:text-slate-400 text-center text-xs">
              Platform Engineer • {experience} Experience
            </p>
          </div>

          <nav className="flex-1 px-4 py-8 space-y-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`w-full flex items-center gap-4 px-6 py-3 rounded-lg transition-all duration-300 group ${
                  activeSection === id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg scale-105'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/80 dark:hover:bg-slate-700/50'
                }`}
              >
                <Icon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="font-medium text-sm">{label}</span>
              </button>
            ))}
          </nav>

          <div className="sticky bottom-0 bg-gradient-to-t from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400 text-xs mb-4 text-center">Connect With Me</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://linkedin.com/in/karthik-korrayi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-blue-600 transition-all transform hover:scale-110 group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-white" />
              </a>
              <a
                href="https://github.com/karthikkorrayi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all transform hover:scale-110 group"
              >
                <Github className="w-5 h-5 group-hover:text-white" />
              </a>
            </div>
            <a
              href="mailto:karthikkorrayii@gmail.com"
              className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2 group text-white"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
          </div>
        </div>
      </aside>

      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  );
}