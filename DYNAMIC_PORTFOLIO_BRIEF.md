# 🚀 DYNAMIC PORTFOLIO - PROJECT BRIEF
**Project Name:** Dynamic Portfolio  
**Developer:** Janmejaya  
**Status:** Ready for Development  
**Date:** August 9, 2026

---

## 📋 PROJECT OVERVIEW

### **What We're Building:**
A modern, SEO-optimized, fully dynamic portfolio website built with **React (JSX) + Sanity CMS** that can be edited without touching code.

### **Current State:**
- Existing portfolio: React + Vite + Tailwind CSS
- Currently deployed on Netlify
- GitHub: https://github.com/janmejayananda955/Portfolio
- Portfolio video: 23 seconds, mobile format (1080x2400)
- Shows recent 3 projects with "View More" functionality

---

## ✨ CORE REQUIREMENTS

### **1. Features Required:**
- ✅ Modern style (clean, professional)
- ✅ SEO formatted (meta tags, structured data, Open Graph)
- ✅ Optimized for loading, scrolling, quick response (<2s load target, 90+ Lighthouse)
- ✅ Dynamic content management (Sanity CMS - no code edits needed)
- ✅ Lightweight webpage (optimized images, lazy loading)
- ✅ Dark mode + Light mode (both; priority: dark)
- ✅ Recent 3 projects visible, "View More" for additional projects

### **2. Tech Stack:**
- **Frontend:** React (JSX), Vite
- **Styling:** Tailwind CSS
- **CMS:** Sanity.io (headless CMS)
- **Deployment:** Single deployment (then edit via Sanity only)
- **Hosting:** Netlify (or Vercel)

### **3. Dynamic Content Management:**
- **Full Sanity setup:** Schema, Studio, API configuration
- **Editable via:** Sanity Studio admin panel
- **No code changes needed** to update:
  - Skills/Tech Stack
  - Projects
  - About section
  - Contact info
  - Social links
  - Any other content

---

## 📂 FOLDER STRUCTURE (PLANNED)

```
dynamic-portfolio/
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ThemeToggle.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── AllProjects.jsx
│   ├── hooks/
│   │   ├── useSanityData.js
│   │   ├── useTheme.js
│   │   └── useScrollAnimation.js
│   ├── lib/
│   │   ├── sanityClient.js
│   │   ├── sanityQueries.js
│   │   └── seoHelpers.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── sanity/
│   ├── schemaTypes/
│   │   ├── project.js
│   │   ├── skill.js
│   │   ├── about.js
│   │   ├── contact.js
│   │   └── socialLink.js
│   ├── sanity.config.js
│   └── structure.js
├── .env.local (Sanity API keys)
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 🎯 PORTFOLIO SECTIONS (FROM VIDEO ANALYSIS)

**Video Info:**
- Duration: 23 seconds
- Resolution: 1080x2400 (mobile)
- **Sections to confirm from video:**
  - [ ] Hero section (with intro/CTA)
  - [ ] About section
  - [ ] Skills/Tech Stack
  - [ ] Recent 3 Projects (main display)
  - [ ] View More Projects link
  - [ ] Contact section
  - [ ] Social links
  - [ ] Footer

**Pending:** Exact structure details from video need user description.

---

## 🔧 SANITY SETUP REQUIRED

### **Schemas to Create:**
1. **Project** - Title, Description, Image, Tech Stack, GitHub Link, Live Link
2. **Skill** - Name, Category (Frontend/Backend/Tools), Icon
3. **About** - Title, Bio, Highlights
4. **Contact** - Email, Phone, Form configuration
5. **SocialLink** - Platform, URL, Icon
6. **Portfolio** - Global settings (name, title, intro text, CV link)

### **Sanity Studio:**
- Deployed at: `[project-id].sanity.studio`
- Admin access only (protected with credentials)
- Real-time updates to portfolio

---

## 📱 PERFORMANCE TARGETS

| Metric | Target |
|--------|--------|
| Page Load Time | < 2 seconds |
| Lighthouse Score | 90+ |
| Core Web Vitals | Green |
| Image Optimization | WebP with fallbacks |
| Bundle Size | < 150KB (gzipped) |

---

## 🎨 DESIGN REQUIREMENTS

- **Color Scheme:** Dark mode primary (with light mode toggle)
- **Typography:** Modern, readable (Geist, Inter, or Poppins)
- **Animations:** Smooth scroll, fade-in on element visibility
- **Responsive:** Mobile-first, works on all devices
- **Accessibility:** WCAG 2.1 AA compliant

---

## 🚀 DEPLOYMENT SETUP

### **Phase 1: Sanity Setup** (~10 mins)
1. Create Sanity account (sanity.io)
2. Create new project
3. Define all schemas
4. Configure API access
5. Generate API tokens

### **Phase 2: React Integration** (~30 mins)
1. Create React project with Vite
2. Install dependencies (sanity client, axios, etc.)
3. Integrate Sanity client
4. Build components with dynamic data
5. Add theme toggle, animations, SEO

### **Phase 3: Deployment** (~5 mins)
1. Deploy Sanity Studio
2. Deploy React app to Netlify
3. Connect Sanity API to production
4. Test all functionality

### **Phase 4: Admin Access** (Ongoing)
- User accesses Sanity Studio at `/admin`
- Edits content via UI forms
- Changes instantly reflect on live portfolio

---

## 📝 WHAT USER NEEDS TO DO

### **Before Starting:**
1. **Describe portfolio sections** from video (what's currently shown)
2. **Create Sanity account:** https://sanity.io (free)
3. **Choose hosting:** Netlify or Vercel?
4. **Provide:**
   - Full name
   - Email
   - Current tech stack (skills list)
   - List of 3 recent projects (title, description, image, links)
   - About section text
   - Social media links
   - CV/Resume link (if any)

### **After Deployment:**
- Access Sanity Studio to edit content
- No coding required for updates
- All changes auto-update on live site

---

## 📊 CURRENT TECH STACK (EXISTING)

- React + Vite
- Tailwind CSS
- Deployed on Netlify
- GitHub repo: https://github.com/janmejayananda955/Portfolio

---

## 🎯 SUCCESS CRITERIA

- ✅ Portfolio loads in <2 seconds
- ✅ All content editable via Sanity (no code changes)
- ✅ Dark/Light mode toggle works perfectly
- ✅ Recent 3 projects show, "View More" displays all
- ✅ SEO optimized (Google indexable, meta tags present)
- ✅ Mobile responsive (mobile-first design)
- ✅ Lighthouse score 90+
- ✅ Single deployment (can edit via Sanity only)

---

## 📞 NEXT STEPS

1. **User describes portfolio sections** from video
2. **Claude builds Sanity schemas** + React setup
3. **Claude provides step-by-step deployment guide**
4. **Single deployment happens**
5. **User edits via Sanity Studio only**

---

## 🔐 IMPORTANT NOTES

- **All API keys stored in `.env.local`** (never commit to GitHub)
- **Sanity Studio protected** with authentication
- **Images hosted on Sanity CDN** (optimized automatically)
- **No database setup needed** (Sanity handles it)

---

**Status:** Awaiting portfolio section description from user to proceed with development.
