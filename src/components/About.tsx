import { Moon, Sun, Target } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export default function About({ isDarkMode, onThemeToggle }: AboutProps) {
  return (
    <section
      id="about"
      className="section-shell pattern-zigzag px-4 py-16 transition-colors duration-500 sm:px-8 lg:px-12"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-3">
              <div className="
                w-1 h-10
                bg-gradient-to-b from-blue-500 to-cyan-500
                rounded-full
                animate-pulse
                "></div>
              About Me
            </h2>
            <p className="text-slate-600 dark:text-slate-300">Get to know me better</p>
          </div>

          <button
            onClick={onThemeToggle}
            className="relative flex items-center w-20 h-10 rounded-full 
            bg-slate-200 dark:bg-slate-700 transition-all duration-500 p-1"
          >
            <span
              className={`absolute w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-500
              ${isDarkMode ? "translate-x-10" : "translate-x-0"}`}
            />

            <Sun className="w-4 h-4 text-yellow-500 ml-1 z-10" />
            <Moon className="w-4 h-4 text-slate-400 ml-auto mr-1 z-10" />
          </button>
        </div>

        <div className="space-y-8">
          <div className="
            bg-gradient-to-br from-blue-500/90 to-cyan-500/90
            backdrop-blur-md
            rounded-2xl
            p-6 sm:p-8 lg:p-10
            text-white
            shadow-lg
            border border-white/10
            transition-all duration-300
            hover:scale-[1.01]
            ">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3">Hello, I'm Karthik!</h3>
                <p className="text-blue-50 leading-relaxed">
                  I'm a passionate IT professional with a foundation in Computer Engineering. My journey in
                  technology has equipped me with expertise in full-stack development, cloud infrastructure,
                  and modern DevOps practices.
                </p>
              </div>
              <div>
                <p className="text-blue-50 leading-relaxed">
                  I thrive in collaborative environments where I can apply my technical skills to solve
                  real-world problems. My experience spans from developing scalable web applications to
                  implementing CI/CD pipelines and optimizing system performance.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="
              bg-white/70 dark:bg-slate-800/70
              backdrop-blur-md
              rounded-xl
              p-6 sm:p-7
              border border-slate-200 dark:border-slate-700
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
              ">
              <div className="flex items-start gap-4">
                <div className="
                bg-blue-100 dark:bg-blue-900/30
                p-3
                rounded-lg
                transition-all
                duration-300
                group-hover:scale-110
                ">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">2+ Years of Experience</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                    Seeking challenging opportunities in software engineering where I can leverage my
                    experience in building scalable applications, contribute to innovative projects, and
                    continue growing as a technical leader in a dynamic organization.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="
              bg-white/70 dark:bg-slate-800/70
              backdrop-blur-md
              rounded-xl
              p-7
              border border-slate-200 dark:border-slate-700
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
              ">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Passion & Interests</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                    Beyond coding, I'm passionate about emerging technologies like AI and Automation, cloud-native
                    architectures, and open-source contributions. I enjoy staying current with industry
                    trends and continuously expanding my technical skill set.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}