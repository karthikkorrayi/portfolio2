import { useEffect, useRef, useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

const sectionIds = ['about', 'skills', 'experience', 'projects', 'education', 'contact'] as const;
type SectionId = (typeof sectionIds)[number];

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('about');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDarkMode = savedTheme ? savedTheme === 'dark' : prefersDark;

    setIsDarkMode(shouldUseDarkMode);
    document.documentElement.classList.toggle('dark', shouldUseDarkMode);
  }, []);

  useEffect(() => {
    const mainElement = mainRef.current;

    if (!mainElement) {
      return;
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id as SectionId);
        }
      },
      {
        root: mainElement,
        threshold: [0.2, 0.4, 0.6],
        rootMargin: '-20% 0px -45% 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSectionChange = (section: string) => {
    const target = document.getElementById(section);

    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(section as SectionId);
  };

  const handleThemeToggle = () => {
    const nextThemeIsDark = !isDarkMode;

    setIsDarkMode(nextThemeIsDark);
    document.documentElement.classList.toggle('dark', nextThemeIsDark);
    localStorage.setItem('theme', nextThemeIsDark ? 'dark' : 'light');
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 transition-colors duration-500">
      <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />

      <main ref={mainRef} className="flex-1 overflow-y-auto scroll-smooth pt-24 pb-28 md:ml-80 md:pt-0 md:pb-0">
        <div className="min-h-screen">
          <About isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle} />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;