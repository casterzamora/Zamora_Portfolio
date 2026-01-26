# Getting Started (5-Minute Quick Start)

## Step 1: Install Node.js (One-Time Setup)

If you don't have Node.js installed:

1. Visit: https://nodejs.org/
2. Download the **LTS** (Long-Term Support) version
3. Run the installer and follow defaults
4. Restart your computer

**Verify installation**:
```bash
node --version  # Should show v18+ or v20+
npm --version   # Should show version number
```

---

## Step 2: Open Terminal in VS Code

1. Open this portfolio folder in VS Code
2. Press `Ctrl + `` (backtick) to open terminal at bottom
3. You're ready!

---

## Step 3: Install Dependencies (2 minutes)

In the terminal, run:

```bash
npm install
```

This downloads all required packages. Wait for it to finish (~2-3 minutes).

---

## Step 4: Start Development Server

In the same terminal:

```bash
npm run dev
```

You'll see:
```
✓ Ready in 1.23s
➜  Local:   http://localhost:3000
```

---

## Step 5: View Your Portfolio

1. Open browser to: **http://localhost:3000**
2. You see the live portfolio! (with placeholder content)
3. The page auto-updates when you save files

---

## Step 6: Customize Your Content

### Open these files and update them:

1. **[components/HeroSection.tsx](components/HeroSection.tsx)**
   - Change "Your Name" to your name
   - Choose a hero statement
   - Update your description

2. **[components/ProjectsSection.tsx](components/ProjectsSection.tsx)**
   - Replace example projects with yours
   - Update project titles, descriptions, tech stack

3. **[components/CurrentlyLearning.tsx](components/CurrentlyLearning.tsx)**
   - Add your learning goals
   - Update progress percentages

4. **[components/Footer.tsx](components/Footer.tsx)**
   - Add your GitHub URL
   - Add your LinkedIn URL
   - Add your email

**See [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) for detailed examples of what to change.**

---

## Step 7: Test Your Changes

As you edit files, the site auto-refreshes in your browser. Press `Ctrl + Shift + R` if it doesn't.

---

## Step 8: Deploy to Vercel (5 minutes)

### Option A: Simple (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" → Connect GitHub
3. Click "New Project" → Select this portfolio repo
4. Click "Deploy"
5. **Done!** Your site is live

### Option B: Via CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts and your site deploys.

---

## Useful Terminal Commands

| Command | What it does |
|---------|------------|
| `npm run dev` | Start local preview (Ctrl+C to stop) |
| `npm run build` | Test production build |
| `npm start` | Run production locally |
| `npm install package-name` | Add new package |
| `git init` | Start git tracking (for GitHub) |

---

## Stop & Restart Development

**To stop the server:**
```
Press Ctrl + C
```

**To start again:**
```
npm run dev
```

---

## Troubleshooting

### "npm: command not found"
→ Node.js not installed. See Step 1.

### "Port 3000 is already in use"
→ Run: `npm run dev -- -p 3001` (uses port 3001 instead)

### Changes not showing in browser
→ Press Ctrl+Shift+R to hard refresh

### Build errors
→ Check terminal for error messages, check file syntax

---

## Next Steps

1. ✅ Install Node.js (Step 1)
2. ✅ Install dependencies (Step 3: `npm install`)
3. ✅ Start dev server (Step 4: `npm run dev`)
4. ✅ Customize content (Step 6 - see [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md))
5. ✅ Deploy to Vercel (Step 8 - see [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md))

---

## File Structure Overview

```
portfolio/
├── app/                    # Main application
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Page wrapper
│   └── globals.css        # Styles
├── components/            # Reusable components
│   ├── HeroSection.tsx    # Edit: Your name & bio
│   ├── ProjectsSection.tsx # Edit: Your projects
│   ├── CurrentlyLearning.tsx # Edit: Learning goals
│   ├── Navigation.tsx     # Top menu
│   └── Footer.tsx         # Edit: Social links
├── public/                # Static files (add images here)
├── package.json          # Dependencies
├── tailwind.config.ts    # Colors & styles
└── README.md             # Full documentation
```

---

## Pro Tips

💡 **Hot Reload**: Save a file → browser updates automatically

💡 **Copy-Paste**: Use the examples in [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md)

💡 **Colors**: Edit [tailwind.config.ts](tailwind.config.ts) to change accent color

💡 **Images**: Add project images to `public/images/` folder

💡 **Test Before Deploy**: Always run `npm run build` locally first

---

**You're all set! Start with Step 1 if you haven't installed Node.js yet. 🚀**
