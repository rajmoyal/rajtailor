# Raj Tailor — Portfolio (Next.js)

A modern, dark-themed personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

---

## 📁 Project Structure

```
raj-portfolio-next/
├── src/
│   ├── app/
│   │   ├── globals.css        ← Global styles + Tailwind
│   │   ├── layout.tsx         ← Root layout + SEO metadata
│   │   └── page.tsx           ← Main page (imports all sections)
│   ├── components/
│   │   ├── Navbar.tsx         ← Sticky nav + mobile menu
│   │   ├── Hero.tsx           ← Typewriter + avatar + CTAs
│   │   ├── About.tsx          ← Bio + stats + feature cards
│   │   ├── Skills.tsx         ← Categorized skill cards
│   │   ├── Projects.tsx       ← Project cards with hover effects
│   │   ├── Experience.tsx     ← Timeline layout
│   │   ├── Contact.tsx        ← Contact form + social links
│   │   └── Footer.tsx         ← Footer with nav + social icons
│   └── data/
│       └── siteData.ts        ← ⭐ ALL your content lives here
├── public/
│   └── resume.pdf             ← Drop your resume PDF here
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## 🚀 Running Locally

### Step 1 — Install dependencies

Make sure you have **Node.js 18+** installed. Then:

```bash
cd raj-portfolio-next
npm install
```

### Step 2 — Start dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. 🎉

### Step 3 — Build for production

```bash
npm run build
npm run start
```

---

## ✏️ How to Customize (Easy!)

### 👤 Update your personal info
Open `src/data/siteData.ts` — **this is the only file you need to edit** for content changes:

```ts
export const siteData = {
  name: "Raj Tailor",
  email: "rajtailor9694@gmail.com",
  linkedin: "https://linkedin.com/in/YOUR_LINKEDIN",  // ← update this
  github: "https://github.com/YOUR_GITHUB",            // ← update this
  resume: "/resume.pdf",                               // ← drop PDF in /public
  ...
}
```

### 📁 Add your resume
Place your resume PDF at:
```
public/resume.pdf
```

### 🖼️ Add a profile photo
1. Add your image to `public/profile.jpg`
2. In `src/components/Hero.tsx`, find the avatar section and replace with:
```tsx
<img
  src="/profile.jpg"
  alt="Raj Tailor"
  className="w-full h-full object-cover rounded-full"
/>
```

### 🗂️ Add/edit projects
In `src/data/siteData.ts`, find the `projects` array and add/edit entries:
```ts
{
  id: 5,
  name: "Your Project",
  subtitle: "Project Type",
  description: "What this project does...",
  tech: ["React", "Node.js"],
  live: "https://your-live-url.com",
  github: "https://github.com/your-repo",
  gradient: "from-blue-500/20 to-cyan-500/10",
  accent: "#4F8EF7",
}
```

### 💼 Add/edit experience
In `src/data/siteData.ts`, find the `experience` array and update accordingly.

---

## 🌐 Deploy to Vercel (Recommended)

```bash
# Option A — Vercel CLI
npm i -g vercel
vercel

# Option B — GitHub
# 1. Push this folder to GitHub
# 2. Go to vercel.com → New Project → Import your repo
# 3. Framework: Next.js (auto-detected)
# 4. Click Deploy — done!
```

## 🌐 Deploy to Netlify

```bash
# Build command: npm run build
# Publish directory: .next
# Or use @netlify/plugin-nextjs (auto-configured)
```

---

## 📬 Contact Form

The form uses `mailto:` — it opens the user's default email client with a pre-filled message. No backend needed.

**Want a real backend form?** Try:
- [Formspree](https://formspree.io) — free, easy, works with Next.js
- [Resend](https://resend.com) — developer-friendly email API
- [EmailJS](https://emailjs.com) — client-side email sending

---

## 🛠 Tech Stack

| Tech | Purpose |
|------|---------|
| Next.js 14 | React framework + routing |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Lucide React | Icon library |
| Google Fonts | Sora + JetBrains Mono |

---

## 🎨 Design System

- **Primary font**: Sora (headings + body)
- **Mono font**: JetBrains Mono (code labels, badges)
- **Accent colors**: Blue `#4F8EF7` · Purple `#8B5CF6` · Cyan `#22D3EE`
- **Background**: Deep navy `#080B14` + `#0D1120`
- **Style**: Glassmorphism cards, gradient text, subtle grid background

---

*Built with ❤️ by Raj Tailor*
