import { Construction } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="section-shell pattern-zigzag px-4 py-16 sm:px-8 lg:px-12">
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mb-12">
          <h2 className="mb-2 flex items-center gap-3 text-4xl font-bold text-slate-900 dark:text-slate-100">
            <div className="h-10 w-1 rounded-full bg-gradient-to-b from-blue-600 to-cyan-600"></div>
            Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-300">This section is being refreshed with new case studies.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-xl backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/70">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                <div className="flex items-center gap-3">
                  <Construction className="h-7 w-7" />
                  <h3 className="text-2xl font-bold">Under Update</h3>
                </div>
              </div>

              <div className="space-y-4 p-6">
                <p className="text-lg text-slate-700 dark:text-slate-300">
                  I'm currently updating this Projects section with recent production work, architecture notes,
                  and measurable outcomes.
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  A refreshed set of project stories and visuals is coming soon with better mobile readability.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden border-t border-slate-200 bg-slate-100/70 p-4 dark:border-slate-700 dark:bg-slate-950/60 lg:border-l lg:border-t-0">
              <img
                src={`${import.meta.env.BASE_URL}images/project-vector.png`}
                alt="Illustration of project dashboard and cards"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}