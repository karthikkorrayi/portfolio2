import { Briefcase, ChevronLeft, ChevronRight, FileBadge2, GraduationCap, User, Mail, FolderKanban, Sparkles, Moon, Sun } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}
const navItems = [
  { id: 'about', label: 'About', mobile: 'About', icon: User },
  { id: 'skills', label: 'Skills', mobile: 'Skills', icon: Sparkles },
  { id: 'experience', label: 'Experience', mobile: 'Work', icon: Briefcase },
  { id: 'projects', label: 'Projects', mobile: 'Projects', icon: FolderKanban },
  { id: 'education', label: 'Education', mobile: 'Study', icon: GraduationCap },
  { id: 'contact', label: 'Contact', mobile: 'Contact', icon: Mail },
];
const resumeUrl = 'public/resume.pdf';

export default function Sidebar({ activeSection, onSectionChange, isExpanded, onToggleExpand, isDarkMode, onThemeToggle }: SidebarProps) {
  const ThemeIcon = isDarkMode ? Moon : Sun;
  const themeButton = <button type="button" className="theme-button" onClick={onThemeToggle} aria-label="Dark mode" aria-pressed={isDarkMode}><ThemeIcon size={19} aria-hidden="true" /></button>;
  return <>
    <header className="nav-surface fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between gap-3 border-b px-4 pt-[env(safe-area-inset-top)] md:hidden">
      <a href="#about" onClick={(event) => { event.preventDefault(); onSectionChange('about'); }} className="flex min-w-0 items-center gap-3 rounded-lg">
        <img src={`${import.meta.env.BASE_URL}images/photo.jpeg`} alt="" width={44} height={44} className="profile-photo h-11 w-11" />
        <div className="min-w-0"><h1 className="text-sm font-semibold">Karthik Korrayi</h1><p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">DevOps Engineer</p></div>
      </a>
      {themeButton}
    </header>
    <aside aria-label="Profile and navigation" className={`nav-surface fixed inset-y-0 left-0 z-40 hidden border-r md:flex md:flex-col ${isExpanded ? 'w-80' : 'w-24'}`}>
      <div className={`shrink-0 border-b border-slate-200 text-center dark:border-slate-700 ${isExpanded ? 'px-6 py-6' : 'px-3 py-5'}`}>
        <img src={`${import.meta.env.BASE_URL}images/photo.jpeg`} alt="Portrait of Karthik Korrayi" width={112} height={112} className={`profile-photo mx-auto ${isExpanded ? 'mb-4 h-28 w-28' : 'mb-3 h-14 w-14'}`} />
        {isExpanded ? <><h1 className="text-2xl font-semibold tracking-tight">Karthik Korrayi</h1><p className="mt-2 text-sm font-medium text-cyan-800 dark:text-cyan-200">DevOps Engineer</p><p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Platform Engineer</p></> : <p className="text-xs font-semibold">Karthik</p>}
      </div>
      <nav aria-label="Main navigation" className="min-h-0 flex-1 space-y-1 overflow-y-auto p-3">
        {navItems.map(({ id, label, icon: Icon }) => <button type="button" key={id} aria-label={label} aria-current={activeSection === id ? 'location' : undefined} onClick={() => onSectionChange(id)} title={!isExpanded ? label : undefined} className={`flex min-h-11 w-full items-center rounded-xl px-3 py-3 ${isExpanded ? 'gap-3' : 'justify-center'} ${activeSection === id ? 'bg-cyan-800 text-white dark:bg-cyan-200 dark:text-slate-950' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`}><Icon size={19} aria-hidden="true" />{isExpanded && <span className="text-sm font-medium">{label}</span>}</button>)}
      </nav>
      <div className="flex shrink-0 flex-col gap-3 border-t border-slate-200 p-3 dark:border-slate-700">
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" aria-label="Open resume in a new tab" className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-800 px-3 text-sm font-semibold text-white dark:bg-cyan-200 dark:text-slate-950"><FileBadge2 size={18} aria-hidden="true" />{isExpanded && 'Resume'}</a>
        <div className={`flex gap-2 ${isExpanded ? 'justify-between' : 'flex-col items-center'}`}>{themeButton}<button type="button" onClick={onToggleExpand} aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'} aria-expanded={isExpanded} className="theme-button">{isExpanded ? <ChevronLeft size={18} aria-hidden="true" /> : <ChevronRight size={18} aria-hidden="true" />}</button></div>
      </div>
    </aside>
    <nav aria-label="Mobile navigation" className="nav-surface fixed inset-x-0 bottom-0 z-50 border-t px-2 pb-[calc(.5rem+env(safe-area-inset-bottom))] pt-2 md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-6 gap-1">{navItems.map(({ id, label, mobile, icon: Icon }) => <button type="button" key={id} aria-label={label} aria-current={activeSection === id ? 'location' : undefined} onClick={() => onSectionChange(id)} className={`flex min-h-12 min-w-0 flex-col items-center justify-center gap-1.5 rounded-xl px-1 py-2 ${activeSection === id ? 'bg-cyan-800 text-white dark:bg-cyan-200 dark:text-slate-950' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`}><Icon size={18} aria-hidden="true" /><span className="text-[10px] font-medium leading-none">{mobile}</span></button>)}</div>
    </nav>
  </>;
}
