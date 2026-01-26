// components/CurrentlyLearning.tsx
interface LearningItem {
  id: string;
  skill: string;
  description: string;
  estimatedCompletion?: string;
  resources?: string[];
  progress?: number; // 0-100
}

// Learning data - UPDATE WITH YOUR CURRENT LEARNING GOALS
const learningItems: LearningItem[] = [
  {
    id: '1',
    skill: 'Advanced TypeScript',
    description: 'Deep dive into generics, decorators, and advanced type patterns for building scalable applications.',
    estimatedCompletion: 'March 2026',
    resources: ['TypeScript Handbook', 'Advanced TypeScript Course', 'TypeScript Deep Dive'],
    progress: 65,
  },
  {
    id: '2',
    skill: 'Backend Development with Node.js',
    description: 'Learning Express.js, authentication, databases, and API design patterns for full-stack development.',
    estimatedCompletion: 'April 2026',
    resources: ['Node.js Official Docs', 'Express.js Course', 'REST API Best Practices'],
    progress: 45,
  },
  {
    id: '3',
    skill: 'Machine Learning Basics',
    description: 'Exploring Python, TensorFlow, and fundamental ML concepts to integrate AI into future projects.',
    estimatedCompletion: 'June 2026',
    resources: ['Fast.ai', 'Andrew Ng ML Course', 'TensorFlow Documentation'],
    progress: 25,
  },
  {
    id: '4',
    skill: 'System Design & Scalability',
    description: 'Understanding distributed systems, caching, databases, and architectural patterns for large-scale applications.',
    estimatedCompletion: 'May 2026',
    resources: ['System Design Interview Course', 'Designing Data-Intensive Applications'],
    progress: 35,
  },
];

export default function CurrentlyLearning() {
  return (
    <section className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Currently Learning</h2>
        <p className="text-slate-400 text-lg">
          My active learning journey shows commitment to continuous growth
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {learningItems.map(item => (
          <div
            key={item.id}
            className="border-2 border-accent/30 rounded-lg p-6 bg-secondary/50 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 transition-all"
          >
            {/* Skill Title */}
            <h3 className="text-2xl font-bold text-accent mb-2">{item.skill}</h3>

            {/* Description */}
            <p className="text-slate-300 mb-4">{item.description}</p>

            {/* Progress Bar */}
            {item.progress !== undefined && (
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-400">Progress</span>
                  <span className="text-sm font-semibold text-accent">{item.progress}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-accent h-full rounded-full transition-all duration-300"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Estimated Completion */}
            {item.estimatedCompletion && (
              <p className="text-sm text-slate-400 mb-4">
                📅 Expected completion: <span className="text-accent font-semibold">{item.estimatedCompletion}</span>
              </p>
            )}

            {/* Resources */}
            {item.resources && item.resources.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-slate-300 mb-2">Resources:</p>
                <ul className="space-y-1">
                  {item.resources.map(resource => (
                    <li key={resource} className="text-sm text-slate-400">
                      • {resource}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-accent/10 border-2 border-accent/30 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Always Growing</h3>
        <p className="text-slate-300 mb-4">
          I'm passionate about continuous learning and staying ahead of the curve. If you know about exciting technologies or best practices, I'd love to hear from you!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block px-6 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
        >
          Start a Conversation
        </a>
      </div>
    </section>
  );
}
