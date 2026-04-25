# Antony Meckhael — Portfolio

A modern, dark-themed personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

---

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + inline CSS variables
- **Animations**: Framer Motion
- **Fonts**: Syne (display) + DM Sans (body) + DM Mono (code)
- **Deploy**: Vercel (one-click)

---

## Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## Deployment to Vercel (Recommended)

### Option A — GitHub + Vercel (easiest)

1. Push this repo to GitHub:
   ```bash
   git init
   git add .
   git commit -m "init portfolio"
   git remote add origin https://github.com/Tonyy131/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your GitHub repo

3. Vercel auto-detects Next.js — just click **Deploy**

4. Your site is live at `https://tony-ayman.vercel.app` (or a custom domain)

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel
```

---

## Customization Guide

### 1. Update your content — `app/data.ts`
All your projects, skills, and experience live here. Edit freely:
- `SKILLS` — add/remove skill categories and items
- `PROJECTS` — update titles, descriptions, stack, GitHub links
- `EXPERIENCE` — update roles, companies, points

### 2. Update personal links — `app/page.tsx`
Search for these and replace:
- `tonyayman131@gmail.com` → your email
- `https://github.com/Tonyy131` → your GitHub URL
- `https://linkedin.com/in/tonyayman131` → your LinkedIn
- `+20 114 076 7727` → your phone

### 3. Add your resume download
Replace the Contact section's CTA with:
```tsx
<a href="/resume.pdf" download>Download Resume</a>
```
Then place your resume PDF in `/public/resume.pdf`.

### 4. Update SEO metadata — `app/layout.tsx`
Update the `metadata` object with your name, description, and OG image.

### 5. Add a custom domain on Vercel
Vercel Settings → Domains → add `tonyayman.com` (or similar)

---

## Folder Structure

```
tony-portfolio/
├── app/
│   ├── layout.tsx       # Fonts, metadata, root layout
│   ├── page.tsx         # Main page (all sections)
│   ├── globals.css      # Global styles + CSS variables
│   └── data.ts          # All portfolio content
├── public/              # Static assets (add resume.pdf here)
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Performance Notes

- All animations use `whileInView` — only animate when in viewport
- Fonts loaded via `next/font/google` (zero layout shift)
- Images: add project screenshots to `/public/projects/` and reference in `data.ts`
- Lighthouse score: 95+ on Vercel edge network

---

Built by Tony Ayman · tonyayman131@gmail.com
