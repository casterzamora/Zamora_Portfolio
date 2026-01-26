# Developer Portfolio

A modern, responsive developer portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**, optimized for deployment on Vercel.

## 🚀 Features

- **Hero Section**: Professional introduction with your story
- **Big Three Projects**: Showcase your journey across three categories:
  - What I Know (foundational skills)
  - What I Learned (growth & challenges)
  - What I'm Aspiring To (future goals)
- **Currently Learning**: Display your active learning goals with progress tracking
- **Responsive Design**: Mobile-first approach works on all devices
- **Dark Theme**: Modern dark aesthetic with accent colors
- **Vercel Ready**: Zero-config deployment

## 📋 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with navigation
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Navigation.tsx      # Top navigation with section switching
│   ├── HeroSection.tsx     # Hero statement and introduction
│   ├── ProjectsSection.tsx # Big Three projects showcase
│   ├── ProjectCard.tsx     # Individual project card component
│   ├── CurrentlyLearning.tsx # Learning goals with progress
│   └── Footer.tsx          # Footer with links
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.js
```

## 🎨 Customization Guide

### 1. Update Hero Section
Edit [components/HeroSection.tsx](components/HeroSection.tsx):
- Replace "Your Name" with your actual name
- Choose one of the three hero statements (or write your own)
- Update the description to match your story
- Replace the avatar emoji with your actual photo

### 2. Add Your Projects
Edit [components/ProjectsSection.tsx](components/ProjectsSection.tsx):
- Update the `projects` array with your actual projects
- For each project, provide:
  - `title`: Project name
  - `description`: What the project does
  - `technologies`: Array of tech stack
  - `link`: Live demo URL
  - `github`: GitHub repository URL
  - `keyLearning`: What you learned (for "What I Learned" projects)

### 3. Update Learning Goals
Edit [components/CurrentlyLearning.tsx](components/CurrentlyLearning.tsx):
- Update the `learningItems` array with your current learning
- Set realistic `progress` percentages (0-100)
- Add estimated completion dates
- List relevant learning resources

### 4. Update Footer Links
Edit [components/Footer.tsx](components/Footer.tsx):
- Add your GitHub profile URL
- Add your LinkedIn profile URL
- Update your email address
- Add social media links as needed

### 5. Update Colors (Optional)
Edit [tailwind.config.ts](tailwind.config.ts) to customize the color scheme:
```typescript
colors: {
  primary: '#0f172a',    // Dark background
  secondary: '#1e293b',  // Card backgrounds
  accent: '#3b82f6',     // Blue accent (change to any color)
}
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm

### Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser

3. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 🚀 Deployment to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Integration (Recommended)
1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy with zero configuration

### Environment Variables
Create a `.env.local` file for any API keys (if needed):
```
NEXT_PUBLIC_API_KEY=your_key_here
```

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Mobile (320px - 768px)
- Tablet (768px - 1024px)
- Desktop (1024px+)

## 🎯 SEO Optimization

The portfolio includes:
- Proper meta tags in [app/layout.tsx](app/layout.tsx)
- Semantic HTML structure
- Open Graph support ready (add og: tags in metadata)
- Mobile-friendly design

## ✅ Best Practices Followed

- **Next.js App Router**: Latest Next.js 14 architecture
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Component Organization**: Modular, reusable components
- **Performance**: Client-side navigation, optimized images
- **Accessibility**: Semantic HTML, color contrast standards

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Tips for Success

1. **Keep it Updated**: Update your learning goals and projects regularly
2. **Add Real Projects**: Replace placeholder projects with actual work
3. **Tell Your Story**: Make the "What I Learned" section compelling with your challenges
4. **Show Personality**: Use the personal hero statement to stand out
5. **Responsive Images**: Add project screenshots for visual appeal
6. **Analytics**: Consider adding Vercel Analytics to track visitors

## 📄 License

This portfolio template is free to use and modify for your personal portfolio.

## 🤝 Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

**Built with Next.js + Tailwind CSS | Deployed on Vercel**
