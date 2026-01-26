// components/ProjectsSection.tsx
import ProjectCard from './ProjectCard';

// Define project data structure
interface Project {
  id: string;
  category: 'what-i-know' | 'what-i-learned' | 'what-i-aspire';
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  keyLearning?: string;
}

// Project data - UPDATE WITH YOUR ACTUAL PROJECTS
const projects: Project[] = [
  {
    id: '1',
    category: 'what-i-know',
    title: 'Todo Application',
    description: 'A fully functional task manager demonstrating fundamental React and state management concepts.',
    technologies: ['React', 'JavaScript', 'CSS', 'Local Storage'],
    link: '#',
    github: 'https://github.com',
    keyLearning: 'Solid understanding of component lifecycle and hooks',
  },
  {
    id: '2',
    category: 'what-i-learned',
    title: 'Weather Dashboard',
    description: 'Real-time weather app built with REST APIs. Overcame async/await challenges and API integration obstacles.',
    technologies: ['Next.js', 'TypeScript', 'REST APIs', 'Tailwind CSS'],
    link: '#',
    github: 'https://github.com',
    keyLearning: 'Mastered async data fetching and error handling',
  },
  {
    id: '3',
    category: 'what-i-aspire',
    title: 'AI-Powered Content Platform',
    description: 'Aspiring to build a full-stack application with AI integration, real-time collaboration, and complex state management.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'OpenAI API', 'WebSockets'],
    link: '#',
    github: 'https://github.com',
    keyLearning: 'Aiming to master full-stack development and ML integration',
  },
];

export default function ProjectsSection() {
  const whatIKnow = projects.filter(p => p.category === 'what-i-know');
  const whatILearned = projects.filter(p => p.category === 'what-i-learned');
  const whatIAspire = projects.filter(p => p.category === 'what-i-aspire');

  return (
    <section className="space-y-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Journey</h2>
        <p className="text-slate-400 text-lg">
          Three categories that showcase my growth as a developer
        </p>
      </div>

      {/* What I Know */}
      <div className="space-y-8">
        <div className="border-l-4 border-green-500 pl-6">
          <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-2">What I Know</h3>
          <p className="text-slate-300">Projects demonstrating foundational skills and solid understanding</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatIKnow.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* What I Learned */}
      <div className="space-y-8">
        <div className="border-l-4 border-yellow-500 pl-6">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">What I Learned</h3>
          <p className="text-slate-300">Projects where I overcame challenges and expanded my capabilities</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatILearned.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* What I'm Aspiring To */}
      <div className="space-y-8">
        <div className="border-l-4 border-blue-500 pl-6">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">What I'm Aspiring To</h3>
          <p className="text-slate-300">Ambitious projects that demonstrate my vision for the future</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatIAspire.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
