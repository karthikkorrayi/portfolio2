import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with real-time inventory management, secure payment processing, and admin dashboard. Features include user authentication, product search, shopping cart, and order tracking.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
      objectives: [
        'Build scalable marketplace for 10K+ concurrent users',
        'Implement secure payment gateway integration',
        'Create intuitive admin panel for inventory management'
      ],
      outcomes: [
        'Successfully deployed with 99.9% uptime',
        'Processed 500+ transactions in first month',
        'Reduced page load time to under 2 seconds'
      ],
      github: 'https://github.com/karthikkorrayi/ecommerce-platform',
      demo: 'https://ecommerce-demo.example.com'
    },
    {
      title: 'Real-Time Collaboration Tool',
      description: 'WebSocket-based collaboration platform enabling teams to work together in real-time. Features include live document editing, video conferencing integration, and project management tools.',
      technologies: ['TypeScript', 'React', 'Socket.io', 'MongoDB', 'AWS', 'WebRTC'],
      objectives: [
        'Enable seamless real-time collaboration',
        'Support multiple concurrent editing sessions',
        'Integrate video conferencing capabilities'
      ],
      outcomes: [
        'Achieved sub-100ms latency for real-time updates',
        'Supported 50+ simultaneous collaborators per room',
        'Deployed to 200+ beta users with positive feedback'
      ],
      github: 'https://github.com/karthikkorrayi/collab-tool',
      demo: 'https://collab-demo.example.com'
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-2 flex items-center gap-3">
            <div className="w-1 h-10 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full"></div>
            Featured Projects
          </h2>
          <p className="text-slate-600">Key projects showcasing technical expertise and impact</p>
        </div>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-blue-50">{project.description}</p>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Objectives
                  </h4>
                  <ul className="space-y-1 text-slate-700">
                    {project.objectives.map((obj, objIdx) => (
                      <li key={objIdx} className="flex items-start gap-2 text-sm">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                    Outcomes
                  </h4>
                  <ul className="space-y-1 text-slate-700">
                    {project.outcomes.map((outcome, outIdx) => (
                      <li key={outIdx} className="flex items-start gap-2 text-sm">
                        <span className="text-emerald-600 mt-0.5">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-white text-slate-700 rounded-lg text-sm font-medium border border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
