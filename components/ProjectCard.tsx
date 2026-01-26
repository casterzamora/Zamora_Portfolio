// components/ProjectCard.tsx
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

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const categoryColors = {
    'what-i-know': 'border-green-500/30 hover:border-green-500',
    'what-i-learned': 'border-yellow-500/30 hover:border-yellow-500',
    'what-i-aspire': 'border-blue-500/30 hover:border-blue-500',
  };

  return (
    <div
      className={`border-2 rounded-lg p-6 bg-secondary/50 transition-all hover:shadow-lg hover:shadow-accent/20 ${
        categoryColors[project.category]
      }`}
    >
      {/* Project Image Placeholder */}
      {project.image && (
        <div className="w-full h-48 bg-slate-700 rounded-lg mb-4 overflow-hidden">
          {/* Replace with actual image */}
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Project Title */}
      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h4>

      {/* Project Description */}
      <p className="text-slate-300 mb-4 line-clamp-3">{project.description}</p>

      {/* Key Learning (for What I Learned projects) */}
      {project.keyLearning && (
        <div className="bg-accent/10 border-l-4 border-accent px-4 py-2 mb-4 rounded">
          <p className="text-accent font-semibold text-sm">💡 {project.keyLearning}</p>
        </div>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map(tech => (
          <span
            key={tech}
            className="text-xs md:text-sm px-3 py-1 bg-accent/20 text-accent rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {project.link && (
          <a
            href={project.link}
            className="flex-1 text-center px-4 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors text-sm"
          >
            View Live
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            className="flex-1 text-center px-4 py-2 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors text-sm"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
