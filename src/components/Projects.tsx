import { useState } from 'react';
import { ArrowUpRight, Github, Terminal } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { githubProfile, projects, type ProjectArea } from '../data/projects';

const filters: ('All projects' | ProjectArea)[] = ['All projects', 'Full stack', 'Android', 'Research', 'Applications'];

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All projects');
  const visibleProjects = projects.filter(project => filter === 'All projects' || project.area === filter);
  const repositoryCount = projects.reduce((total, project) => total + project.repositories.length, 0);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="portfolio-section relative isolate px-4 py-16 sm:px-8 lg:px-12">
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mb-8 flex flex-col justify-between gap-5 xl:flex-row xl:items-end">
          <div className="max-w-2xl">
            <p className="portfolio-eyebrow flex items-center gap-2"><Terminal size={15} aria-hidden="true" /> Engineering / Selected work</p>
            <h2 id="projects-heading" className="portfolio-heading">Projects<span className="text-cyan-600 dark:text-cyan-300">.</span></h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">From mobile capture to full-stack workflows. A closer look at the applications I build and the engineering behind them.</p>
          </div>
          <a href={githubProfile} target="_blank" rel="noopener noreferrer" aria-label="Explore karthikkorrayi on GitHub (opens in new tab)" className="inline-flex min-h-11 w-fit items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition-colors hover:border-cyan-600 hover:text-cyan-800 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-200"><Github size={17} aria-hidden="true" />Explore GitHub<ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>

        <div className="mb-8 grid grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white/60 py-5 dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900/70">
          {[{ value: projects.length, label: 'Projects' }, { value: repositoryCount, label: 'Repositories' }, { value: projects.filter(project => project.status).length, label: 'Current focus' }].map(item => <div key={item.label} className="px-2 text-center"><p className="font-mono text-2xl font-medium text-slate-900 dark:text-white">{String(item.value).padStart(2, '0')}</p><p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{item.label}</p></div>)}
        </div>

        <div role="group" aria-label="Filter projects by discipline" className="mb-4 flex flex-wrap gap-2">
          {filters.map(option => <button key={option} type="button" aria-pressed={filter === option} aria-controls="project-grid" onClick={() => setFilter(option)} className={`min-h-11 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${filter === option ? 'border-cyan-700 bg-cyan-800 text-white dark:border-cyan-300 dark:bg-cyan-300 dark:text-slate-950' : 'border-slate-200 bg-white/70 text-slate-600 hover:border-cyan-600 hover:text-cyan-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-200'}`}>{option}<span className={`ml-2 font-mono text-xs ${filter === option ? 'opacity-80' : 'text-slate-500 dark:text-slate-400'}`}>{option === 'All projects' ? projects.length : projects.filter(project => project.area === option).length}</span></button>)}
        </div>
        <p role="status" aria-live="polite" aria-atomic="true" className="mb-5 font-mono text-xs text-slate-500 dark:text-slate-400">Showing {visibleProjects.length} of {projects.length} projects</p>
        <div id="project-grid" className="grid items-stretch gap-5 lg:grid-cols-2">
          {visibleProjects.map(project => <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} />)}
        </div>
        <p className="mt-6 text-xs leading-6 text-slate-500 dark:text-slate-400">Descriptions and technology stacks are reviewed against repository source. Explore each implementation for technical context and its reviewed commit.</p>
      </div>
    </section>
  );
}
