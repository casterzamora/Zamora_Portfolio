# Deployment Guide: From Local to Vercel

## Quick Start (5 Minutes)

### Option 1: Deploy with Vercel CLI

```bash
# 1. Install Vercel CLI globally (one time)
npm install -g vercel

# 2. From your project directory
vercel

# Follow the prompts:
# - Link to your Vercel account (or create one)
# - Select "Create a new project"
# - Accept default settings
# - Done! Your site is live
```

### Option 2: Deploy via GitHub (Recommended)

This method is the most popular and gives you automatic deployments on every push.

#### Step 1: Push to GitHub
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial portfolio commit"

# Create a GitHub repository at github.com/new
# Then push your code:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

#### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" (use GitHub to sign up)
3. Click "New Project"
4. Select your portfolio repository
5. Vercel auto-detects Next.js and shows these settings:
   - **Framework Preset**: Next.js ✓
   - **Build Command**: next build ✓
   - **Output Directory**: .next ✓
   - **Install Command**: npm install ✓
6. Click "Deploy"
7. **Wait 3-5 minutes**
8. You'll get a live URL: `https://your-portfolio-xxxx.vercel.app`

#### Step 3: Custom Domain (Optional)
1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain (e.g., yourname.com)
3. Point your domain registrar's DNS to Vercel
4. Vercel provides DNS instructions

---

## Local Development

### First Time Setup
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

### Ongoing Development
```bash
# Each time you work on it:
npm run dev

# Make changes to files in:
# - components/*.tsx
# - app/*.tsx
# - tailwind.config.ts (for colors)

# Changes auto-refresh in browser (hot reload)
```

### Before Pushing to Production
```bash
# Test the production build locally
npm run build
npm start

# Visit http://localhost:3000
# Check that everything works
```

---

## Environment Variables

If your portfolio uses API keys (e.g., for contact forms, analytics):

### Local Development
Create `.env.local` in project root:
```
NEXT_PUBLIC_API_KEY=your_key_here
NEXT_PUBLIC_ANALYTICS_ID=your_id_here
```

**Note**: `NEXT_PUBLIC_` prefix makes it available in browser. Use without prefix for server-only secrets.

### Production (Vercel)
1. Go to Vercel project dashboard
2. Settings → Environment Variables
3. Add variable name and value
4. Select which environments (Production, Preview, Development)
5. Redeploy for changes to take effect

---

## Troubleshooting

### Build Fails on Vercel
**Error**: "Build failed"

**Solution**:
1. Check Vercel build logs (click on the failed deployment)
2. Common issues:
   - Missing dependencies: run `npm install` locally and push package-lock.json
   - TypeScript errors: run `npm run lint` to check
   - Check [app/page.tsx](app/page.tsx) for syntax errors

### Site Shows Old Content After Deploying

**Solution**:
1. Vercel caches aggressively
2. Click "Redeploy" button in Vercel dashboard
3. Or force refresh browser (Ctrl+Shift+R on Windows)

### Custom Domain Not Working
1. Wait 24-48 hours for DNS to propagate
2. Use `nslookup yourname.com` to verify DNS records
3. Check Vercel domain settings match your registrar

---

## Automatic Deployments

Once connected to GitHub:
- **Every push** to `main` branch → automatic deployment
- **Pull requests** get preview URLs
- **Rollbacks** available by selecting previous deployment

### Disable Auto-Deploy (if needed)
1. Vercel Dashboard → Settings → Git
2. Uncheck "Automatic deployments"

---

## Performance Optimization

Your Next.js portfolio is already optimized, but you can:

### 1. Image Optimization
Replace emoji avatars with real images:
```tsx
// In components/HeroSection.tsx
import Image from 'next/image';

<Image
  src="/images/avatar.jpg"
  alt="Your Name"
  width={128}
  height={128}
  className="rounded-full"
/>
```

### 2. Add Analytics
1. In Vercel dashboard → Settings → Analytics
2. Enable Web Analytics (free tier available)
3. View visitor stats and performance

### 3. Bundle Analysis
```bash
npm install -D @next/bundle-analyzer

# Then modify next.config.js to use it
# More info: nextjs.org/docs/advanced-features/measuring-performance
```

---

## Security Checklist

- ✅ No API keys in code (use environment variables)
- ✅ `.gitignore` excludes `.env.local`
- ✅ HTTPS enabled by default (Vercel)
- ✅ No sensitive data in git history
- ✅ Regularly update dependencies: `npm update`

---

## Next Steps

1. **Customize Content**
   - [ ] Update hero statement
   - [ ] Add your projects
   - [ ] Update learning goals
   - [ ] Add your GitHub/LinkedIn links

2. **Deploy**
   - [ ] Push to GitHub
   - [ ] Connect Vercel
   - [ ] Get live URL

3. **Polish**
   - [ ] Add project images
   - [ ] Write compelling project descriptions
   - [ ] Add custom domain
   - [ ] Set up analytics

---

## Useful Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start local dev server |
| `npm run build` | Create production build |
| `npm start` | Run production build locally |
| `npm run lint` | Check for code errors |
| `npm install <package>` | Add new package |

---

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Getting Started](https://docs.github.com/en/get-started)
- [Tailwind CSS Docs](https://tailwindcss.com)

---

**Your portfolio is production-ready! 🚀**
