// components/Navigation.tsx
'use client';

interface NavigationProps {
  activeSection: 'home' | 'projects' | 'learning';
  setActiveSection: (section: 'home' | 'projects' | 'learning') => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-accent">Portfolio</h1>
        
        <div className="flex gap-6">
          <button
            onClick={() => setActiveSection('home')}
            className={`transition-colors ${
              activeSection === 'home' ? 'text-accent' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveSection('projects')}
            className={`transition-colors ${
              activeSection === 'projects' ? 'text-accent' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveSection('learning')}
            className={`transition-colors ${
              activeSection === 'learning' ? 'text-accent' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Learning
          </button>
        </div>
      </div>
    </nav>
  );
}
