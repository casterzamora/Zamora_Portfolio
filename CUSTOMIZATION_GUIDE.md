# Customization Examples

This file shows exactly what to update to make your portfolio unique.

## 1. Hero Section Customization

**File**: [components/HeroSection.tsx](components/HeroSection.tsx)

### Change Your Name
```tsx
// Line ~18: Replace "Your Name"
<h2 className="text-5xl md:text-6xl font-bold text-white">
  Sarah Chen  {/* ← Your name here */}
</h2>
```

### Choose Your Hero Statement
Pick ONE of these options and replace the current text:

**Option 1: Confident & Professional**
```tsx
<p className="text-2xl md:text-3xl text-accent font-semibold">
  Full-stack developer crafting elegant solutions to complex problems, with proven expertise in modern web technologies.
</p>
```

**Option 2: Growth-Focused**
```tsx
<p className="text-2xl md:text-3xl text-accent font-semibold">
  Developer on a mission to build better software every day—constantly learning, shipping, and improving.
</p>
```

**Option 3: Personal & Approachable**
```tsx
<p className="text-2xl md:text-3xl text-accent font-semibold">
  I turn curiosity into code, building things I'd want to use and learning from every mistake along the way.
</p>
```

### Update Your Bio
```tsx
// Lines ~25-29
<p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
  I'm a full-stack developer based in [Your City] with [X] years of experience.
  Passionate about clean code and user-centered design. Currently focused on [your focus area].
</p>
```

### Add Your Photo
```tsx
// Replace the emoji avatar
import Image from 'next/image';

<Image
  src="/images/your-photo.jpg"  // Add your photo to public/images/
  alt="Your Name"
  width={128}
  height={128}
  className="w-32 h-32 rounded-full border-4 border-accent"
/>
```

---

## 2. Projects Customization

**File**: [components/ProjectsSection.tsx](components/ProjectsSection.tsx)

### Add Your Projects
Replace the example projects array (lines ~13-48):

```tsx
const projects: Project[] = [
  {
    id: '1',
    category: 'what-i-know',
    title: 'Task Manager App',
    description: 'A React app with drag-and-drop functionality, local storage, and filter capabilities.',
    technologies: ['React', 'JavaScript', 'CSS Grid', 'Local Storage'],
    link: 'https://your-project-live-demo.com',
    github: 'https://github.com/yourname/task-manager',
    image: '/images/task-manager.png',
    keyLearning: 'Solid React hooks and state management',
  },
  {
    id: '2',
    category: 'what-i-learned',
    title: 'Weather API Integration',
    description: 'Real-time weather dashboard using OpenWeatherMap API. Learned async/await and error handling.',
    technologies: ['Next.js', 'TypeScript', 'REST APIs', 'Tailwind CSS'],
    link: 'https://weather-app-demo.vercel.app',
    github: 'https://github.com/yourname/weather-app',
    image: '/images/weather-app.png',
    keyLearning: 'Mastered async data fetching and error boundaries',
  },
  {
    id: '3',
    category: 'what-i-aspire',
    title: 'AI Chat Application',
    description: 'Full-stack app with real-time messaging using WebSockets and OpenAI API integration.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'OpenAI API', 'Socket.io'],
    github: 'https://github.com/yourname/ai-chat-app',
    image: '/images/ai-chat.png',
    keyLearning: 'Aiming to master full-stack development and AI integration',
  },
];
```

### Project Structure
Each project needs:
- **id**: Unique identifier (e.g., '1', '2', '3')
- **category**: Must be one of:
  - `'what-i-know'` (foundational)
  - `'what-i-learned'` (growth projects)
  - `'what-i-aspire'` (ambitious goals)
- **title**: Project name
- **description**: 1-2 sentences about what it does
- **technologies**: Array of tech stack used
- **link** (optional): URL to live demo
- **github** (optional): GitHub repository URL
- **image** (optional): Path to project screenshot
- **keyLearning** (optional): What you learned

---

## 3. Currently Learning Section

**File**: [components/CurrentlyLearning.tsx](components/CurrentlyLearning.tsx)

### Update Learning Goals
Replace the `learningItems` array (lines ~8-50):

```tsx
const learningItems: LearningItem[] = [
  {
    id: '1',
    skill: 'React Advanced Patterns',
    description: 'Mastering compound components, render props, and hooks patterns for scalable React apps.',
    estimatedCompletion: 'February 2026',
    resources: ['Epic React Course', 'React Patterns Book', 'Advanced React Dev'],
    progress: 70,
  },
  {
    id: '2',
    skill: 'AWS Cloud Services',
    description: 'Learning EC2, S3, Lambda, and deployment strategies for scalable cloud applications.',
    estimatedCompletion: 'March 2026',
    resources: ['AWS Certified Solutions Architect', 'Hands-on AWS Labs'],
    progress: 40,
  },
  {
    id: '3',
    skill: 'GraphQL',
    description: 'Building efficient APIs with GraphQL, learning Apollo Client and Server.',
    estimatedCompletion: 'April 2026',
    resources: ['GraphQL Official Docs', 'Apollo Tutorials', 'GraphQL Best Practices'],
    progress: 25,
  },
];
```

### Learning Item Structure
- **id**: Unique identifier
- **skill**: Name of the technology/skill
- **description**: What you're learning about it
- **estimatedCompletion** (optional): Target completion date
- **resources** (optional): Array of learning resources
- **progress** (optional): 0-100 percentage

---

## 4. Footer Links

**File**: [components/Footer.tsx](components/Footer.tsx)

### Update Social Links
Replace these URLs (around line ~50):

```tsx
{/* GitHub Link */}
<a
  href="https://github.com/yourusername"  // ← Your GitHub
  target="_blank"
  rel="noopener noreferrer"
  className="text-slate-400 hover:text-accent transition-colors"
>
  GitHub
</a>

{/* LinkedIn Link */}
<a
  href="https://linkedin.com/in/yourprofile"  // ← Your LinkedIn
  target="_blank"
  rel="noopener noreferrer"
  className="text-slate-400 hover:text-accent transition-colors"
>
  LinkedIn
</a>

{/* Email Link */}
<a
  href="mailto:your.email@example.com"  // ← Your email
  className="text-slate-400 hover:text-accent transition-colors"
>
  Email
</a>
```

---

## 5. Color & Theme Customization

**File**: [tailwind.config.ts](tailwind.config.ts)

### Change Accent Color
The blue accent appears throughout the site. Change it:

```tsx
theme: {
  extend: {
    colors: {
      primary: '#0f172a',      // Dark background (keep as is)
      secondary: '#1e293b',    // Card backgrounds (keep as is)
      accent: '#06b6d4',       // ← Change this: cyan, purple, pink, etc.
    },
  },
},
```

**Color suggestions**:
- Tech-forward: `#3b82f6` (blue) ← current
- Creative: `#ec4899` (pink)
- Modern: `#06b6d4` (cyan)
- Professional: `#8b5cf6` (purple)
- Energetic: `#f59e0b` (amber)

### Global Styles
**File**: [app/globals.css](app/globals.css)

Update background color:
```css
body {
  background-color: #0f172a;  /* ← Or your preferred dark color */
  color: #e2e8f0;
}
```

---

## 6. Project Images

### Add Project Screenshots
1. Create `public/images/` folder
2. Add your screenshots: `task-manager.png`, `weather-app.png`, etc.
3. Update project references:

```tsx
{
  // ...
  image: '/images/task-manager.png',  // ← Add this
}
```

---

## 7. Meta Data (SEO)

**File**: [app/layout.tsx](app/layout.tsx)

Update your portfolio description:

```tsx
export const metadata: Metadata = {
  title: 'Sarah Chen | Full-Stack Developer',  // ← Your name
  description: 'Portfolio showcasing web development projects and growth journey. Specialized in React and Next.js.',
  keywords: 'developer, portfolio, react, nextjs, web development',
};
```

---

## 8. Navigation (Optional)

**File**: [components/Navigation.tsx](components/Navigation.tsx)

Change portfolio title:

```tsx
<h1 className="text-2xl font-bold text-accent">
  Sarah Chen  {/* ← Your name or brand */}
</h1>
```

---

## Complete Checklist

- [ ] Update your name in HeroSection
- [ ] Choose and add your hero statement
- [ ] Update bio/description
- [ ] Add your photo to `public/images/your-photo.jpg`
- [ ] Replace 3 example projects with your actual projects
- [ ] Update all project details (title, description, tech, links, images)
- [ ] Update learning goals with 3-4 current skills
- [ ] Update GitHub, LinkedIn, email in footer
- [ ] Optionally change accent color
- [ ] Test locally: `npm run dev`
- [ ] Push to GitHub
- [ ] Deploy to Vercel

---

## Common Mistakes to Avoid

1. ❌ Leaving placeholder projects
   - ✅ Replace with real projects from your portfolio

2. ❌ Not updating social links
   - ✅ Add real GitHub and LinkedIn URLs

3. ❌ Forgetting to commit changes
   - ✅ Git commit & push before deploying

4. ❌ Not testing locally first
   - ✅ Run `npm run dev` to verify changes

5. ❌ Using outdated tech list
   - ✅ Update to current technologies you actually use

---

Need more detailed examples? See [README.md](README.md) for full documentation.
