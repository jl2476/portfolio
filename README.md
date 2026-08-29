# ✨ Pixel Portfolio

A cozy, pixel-art styled developer portfolio built with **Next.js**, **React**, and **TypeScript**. Features a starry night sky background, retro OS window aesthetic, interactive terminal console, and a dreamy purple color palette.

![Preview](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js) ![Preview](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript) ![Preview](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.18+ ([download](https://nodejs.org/))
- **npm** (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/pixel-portfolio.git
cd pixel-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The dev server uses **Turbopack HMR** — any file changes will instantly hot-reload.

---

## 📁 Project Structure

```
pixel-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css            # Design system (colors, animations, layout)
│   │   ├── layout.tsx             # Root layout, SEO metadata, fonts
│   │   └── page.tsx               # Main page — assembles all sections
│   ├── components/
│   │   ├── StarryBackground.tsx   # Animated twinkling stars + shooting stars
│   │   ├── RetroWindow.tsx        # Retro OS-style window container
│   │   ├── BottomNav.tsx          # Icon-based bottom navigation bar
│   │   ├── SocialIcons.tsx        # GitHub & LinkedIn icon links
│   │   ├── Console.tsx            # Interactive terminal emulator
│   │   ├── HomeSection.tsx        # Welcome / landing page
│   │   ├── AboutSection.tsx       # About me bio
│   │   ├── ProjectsSection.tsx    # Project cards grid
│   │   ├── SkillsSection.tsx      # Animated skill progress bars
│   │   ├── ResumeSection.tsx      # Timeline + download button
│   │   └── ContactSection.tsx     # Contact form + links
│   └── data/
│       └── portfolio.ts           # ⭐ All your content lives here
├── public/                        # Static assets (favicon, images)
├── next.config.ts                 # Next.js configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies & scripts
```

---

## ✏️ Customizing Your Content

All personal content is centralized in **one file** for easy editing:

### [`src/data/portfolio.ts`](src/data/portfolio.ts)

| Section | What to edit |
|---|---|
| **Name & Bio** | `personalInfo.name`, `personalInfo.bio`, `personalInfo.title` |
| **Social Links** | `personalInfo.github`, `personalInfo.linkedin`, `personalInfo.email` |
| **Resume** | `personalInfo.resumeUrl` (link to your PDF) |
| **Projects** | `projects` array — add/remove project objects |
| **Skills** | `skills` array — name, level (0-100), category |
| **Experience** | `experience` array — title, company, period, description |
| **Console** | `consoleCommands` — customize terminal command outputs |
| **whoami** | `personalInfo.whoami` — your terminal bio blurb |

### Adding a New Project

```typescript
// In src/data/portfolio.ts → projects array
{
  title: "My Cool Project",
  description: "A brief description of what it does.",
  techStack: ["React", "TypeScript", "Node.js"],
  githubUrl: "https://github.com/you/project",
  liveUrl: "https://project.example.com",    // optional
  emoji: "🎮",
}
```

### Adding a New Skill

```typescript
// In src/data/portfolio.ts → skills array
{ name: "Docker", level: 70, category: "Tools" }
```

### Adding a Console Command

```typescript
// In src/data/portfolio.ts → consoleCommands
"secret": {
  description: "A secret command",
  output: "  🎉 You found the secret!",
}
```

---

## 🎨 Customizing the Theme

All styling lives in [`src/app/globals.css`](src/app/globals.css). Key CSS variables to tweak:

```css
:root {
  /* Main background gradient */
  --bg-deep: #0a0618;
  --bg-dark: #140e2a;

  /* Purple accent palette */
  --purple-light: #c77dff;
  --purple-mid: #9d4edd;
  --purple-dark: #7b2cbf;

  /* Pink accents */
  --pink-accent: #ff6bcb;

  /* Text colors */
  --text-primary: #e8d5ff;
  --text-secondary: #b8a0d4;

  /* Console colors */
  --text-console: #a8e6a3;
  --text-console-prompt: #c77dff;
}
```

### Fonts

The site uses two Google Fonts loaded via CSS `@import`:

- **[Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)** — pixel headings & labels
- **[VT323](https://fonts.google.com/specimen/VT323)** — monospace body text

To change fonts, edit the `@import` line at the top of `globals.css`.

---

## 🖥️ Console Commands

The built-in terminal supports these commands:

| Command | Description |
|---|---|
| `whoami` | Short personal summary |
| `ls projects` | List all projects |
| `cat resume` | View resume entries |
| `skills` | Show skill bars |
| `contact` | Display contact info |
| `neofetch` | Fun system info card |
| `echo <msg>` | Echo back a message |
| `date` | Show current date |
| `sudo hire-me` | 🎉 Easter egg |
| `help` | List all commands |
| `clear` | Clear the console |

Use **↑ / ↓ arrow keys** to navigate command history.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack HMR |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run linter |

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Click **Deploy** — Vercel auto-detects Next.js

### Other Platforms

```bash
# Build the production bundle
npm run build

# The output is in .next/ — deploy with:
npm run start
```

Works with: **Netlify**, **Railway**, **AWS Amplify**, **Docker**, or any Node.js host.

---

## 🛠️ Tech Stack

- **[Next.js 16](https://nextjs.org/)** — React framework with App Router
- **[React 19](https://react.dev/)** — UI components
- **[TypeScript 5](https://www.typescriptlang.org/)** — Type safety
- **[Turbopack](https://turbo.build/pack)** — Blazing-fast dev server
- **Vanilla CSS** — No CSS framework, full control
- **[Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)** & **[VT323](https://fonts.google.com/specimen/VT323)** — Pixel fonts

---

## 📄 License

MIT — feel free to use this as a template for your own portfolio!

---

<p align="center">
  Built with 💜 under the stars ✨
</p>
