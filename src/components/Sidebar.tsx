import { useMemo } from 'react';
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  FileBadge2,
  FilePenLine,
  GraduationCap,
  User,
  Mail,
  Github,
  Linkedin,
  FolderKanban,
  Sparkles,
} from 'lucide-react';

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
  const elapsedMs = now.getTime() - EXPERIENCE_START_DATE.getTime();

  if (elapsedMs <= 0) {
    return '0.0 years';
};

  const years = elapsedMs / (1000 * 60 * 60 * 24 * 365.25);
  return `${years.toFixed(1)} years`;
};

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const navItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Sparkles },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Sidebar({
  activeSection,
  onSectionChange,
  isExpanded,
  onToggleExpand,
}: SidebarProps) {
  const experience = useMemo(() => calculateExperience(), []);
  const activeNavItem = navItems.find(({ id }) => id === activeSection) ?? navItems[0];
  const sidebarWidth = isExpanded ? 'w-80' : 'w-24';

  return (
    <>
      <div className="fixed left-4 right-4 top-4 z-50 md:hidden">
        <div className="rounded-3xl border border-white/30 bg-white/80 px-4 py-3 shadow-lg backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/80">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}images/profile.jpg?v=${Date.now()}`}
                alt="Karthik Korrayi"
                className="h-10 w-10 rounded-2xl object-cover shadow-md"
              />
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Portfolio</p>
                <h1 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Karthik Korrayi</h1>
              </div>
            </div>

            <button
              onClick={() => onSectionChange(activeNavItem.id)}
              className="flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white dark:bg-cyan-500"
            >
              <activeNavItem.icon className="h-3.5 w-3.5" />
              {activeNavItem.label}
            </button>
          </div>
        </div>
      </div>

      <aside
        className={`fixed left-0 top-0 hidden h-screen ${sidebarWidth} bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 shadow-2xl transition-all duration-300 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-white md:block`}
      >
        <div className="flex h-full flex-col">
          <div
            className={`border-b border-slate-200 bg-gradient-to-b from-white to-slate-100 dark:border-slate-700 dark:from-slate-900 dark:to-slate-800 ${
              isExpanded ? 'p-8' : 'p-4'
            }`}
          >
            <div className={`${isExpanded ? 'mb-6' : 'mb-3'}`}>
              <div
                className={`mx-auto overflow-hidden rounded-full shadow-2xl transition-all duration-300 ${
                  isExpanded ? 'mb-6 h-32 w-32' : 'h-14 w-14'
                }`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/profile.jpg?v=${Date.now()}`}
                  alt="Karthik Korrayi"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            {isExpanded ? (
              <>
                <h1 className="mb-2 text-center text-3xl font-bold">Karthik Korrayi</h1>
                <p className="mb-2 text-center text-sm font-semibold text-cyan-500">Associate IT Consultant</p>
                <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                  Platform Engineer • {experience} Experience
                </p>
              </>
            ) : (
              <p className="text-center text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-500">Karthik</p>
            )}

          </div>

          <nav className="flex-1 space-y-2 px-4 py-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onSectionChange(id)}
                className={`group flex w-full items-center rounded-lg py-3 transition-all duration-300 ${
                  isExpanded ? 'gap-4 px-6' : 'justify-center px-2'
                } ${
                  activeSection === id
                    ? 'scale-105 bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700/50 dark:hover:text-white'
                }`}
                title={label}
              >
                <Icon className="h-5 w-5 transition-transform group-hover:rotate-12" />
                {isExpanded && <span className="text-sm font-medium">{label}</span>}
              </button>
            ))}
          </nav>

          <div
            className={`border-t border-slate-200 bg-gradient-to-t from-white to-slate-100 dark:border-slate-700 dark:from-slate-900 dark:to-slate-800 ${
              isExpanded ? 'p-6' : 'p-4'
            }`}
          >

            <div className={`flex items-center gap-2 ${isExpanded ? '' : 'justify-center'}`}>
              <button
                onClick={() => window.open('https://drive.google.com/file/d/1FmGpjU4SV63frBhxu9O4ZBS3hmEiUuUm/view?usp=sharing', '_blank')}
                className={`group flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-semibold text-white transition-all hover:shadow-lg ${
                  isExpanded ? 'w-full' : 'w-14 text-xs'
                }`}
                title="Resume"
              >
                <FileBadge2 className={`${isExpanded ? 'h-4 w-4' : 'h-3.5 w-3.5'}`} />
                {isExpanded ? 'Resume' : ''}
              </button>

              {!isExpanded && (
                <button
                  onClick={onToggleExpand}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300/80 bg-white/70 text-slate-700 transition-all hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-700"
                  aria-label="Expand sidebar"
                  title="Expand"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
            {isExpanded && (
              <button
                onClick={onToggleExpand}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300/80 bg-white/70 px-3 py-2 text-xs font-medium text-slate-700 transition-all hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-700"
                aria-label="Collapse sidebar"
                title="Compact"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </aside>

      <nav className="fixed bottom-3 left-3 right-3 z-50 rounded-3xl border border-white/40 bg-white/85 p-2 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.65)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/85 md:hidden">
        <div className="grid grid-cols-6 gap-1">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onSectionChange(id)}
              className={`flex flex-col items-center justify-center gap-1 rounded-2xl px-1 py-2 transition-all ${
                activeSection === id
                  ? 'bg-gradient-to-b from-blue-600 to-cyan-600 text-white shadow-md'
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-[10px] font-medium leading-none">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}