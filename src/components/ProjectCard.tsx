import { ArrowUpRight, Github, GitBranch, Layers, Smartphone, Database, Workflow } from 'lucide-react';
import { repositoryUrl, type Project } from '../data/projects';

const icons = { 'Full stack': Layers, Android: Smartphone, Research: Database, Applications: Workflow };
const badgeStyles = {
  language: 'border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200',
  framework: 'border-violet-200 bg-violet-50 text-violet-800 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-200',
  platform: 'border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300',
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = icons[project.area];
  return (
    <article aria-labelledby={`${project.id}-title`} className="portfolio-glass flex min-w-0 flex-col p-5 sm:p-7">
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200 bg-cyan-50 text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200"><Icon size={21} aria-hidden="true" /></span>
        {project.status ? <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-200"><span className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-300" />{project.status.label}</span> : <span className="font-mono text-xs text-slate-500 dark:text-slate-400">PROJECT / {String(index + 1).padStart(2, '0')}</span>}
      </div>
      <p className="mb-2 text-xs font-medium leading-relaxed text-cyan-800 dark:text-cyan-200">{project.category}</p>
      <h3 id={`${project.id}-title`} className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">{project.name}</h3>
      <p className="mb-5 mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.summary}</p>
      <ul aria-label={`${project.name} technologies`} className="mb-6 flex flex-wrap gap-2">
        {project.technologies.map(tech => <li key={tech.name} className={`rounded-md border px-2.5 py-1 font-mono text-[11px] leading-5 ${badgeStyles[tech.kind]}`}>{tech.name}</li>)}
      </ul>
      <details className="mb-6 rounded-xl border border-slate-200 bg-white/40 px-4 py-3 text-sm dark:border-slate-700/70 dark:bg-slate-950/30">
        <summary className="cursor-pointer font-medium text-slate-800 marker:text-cyan-600 dark:text-slate-200">Explore implementation</summary>
        <dl className="mt-4 space-y-4">
          {project.details.map(detail => <div key={detail.label}><dt className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">{detail.label}</dt><dd className="text-sm leading-6 text-slate-600 dark:text-slate-400">{detail.text}</dd></div>)}
        </dl>
        {project.status && <p className="mt-4 border-t border-slate-200 pt-4 text-xs leading-6 text-slate-600 dark:border-slate-700 dark:text-slate-400">{project.status.note}</p>}
        <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-700">
          <p className="mb-2 flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400"><GitBranch size={13} aria-hidden="true" /> Reviewed source</p>
          {project.repositories.map(repo => <a key={repo.name} href={`${repositoryUrl(repo.name)}/tree/${repo.commit}`} target="_blank" rel="noopener noreferrer" className="my-1 flex min-h-9 items-center justify-between gap-2 rounded text-xs text-cyan-800 underline decoration-cyan-600/30 underline-offset-4 hover:decoration-current dark:text-cyan-200" aria-label={`${project.name}: ${repo.label} reviewed source at ${repo.commit.slice(0, 7)} (opens in new tab)`}>{repo.name}<span className="shrink-0 font-mono">{repo.commit.slice(0, 7)} ↗</span></a>)}
        </div>
      </details>
      <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-200 pt-5 dark:border-slate-700/70">
        {project.repositories.map(repo => <a key={repo.name} href={repositoryUrl(repo.name)} target="_blank" rel="noopener noreferrer" aria-label={`${project.name}: ${repo.label} on GitHub (opens in new tab)`} className="group inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 transition-colors hover:border-cyan-600 hover:text-cyan-800 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-200"><Github size={16} aria-hidden="true" />{repo.label}<ArrowUpRight size={14} aria-hidden="true" /></a>)}
      </div>
    </article>
  );
}
