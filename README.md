# Abdurezak | Full-Stack Developer & AI Engineer Portfolio

A premium, interactive personal portfolio website showcasing the projects, skills, services, experience, certifications, and testimonials of **Abdurezak** — a Full-Stack Developer, AI Engineer, and Network Specialist.

This project is built using **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and modern animation libraries including **Framer Motion**, **GSAP**, and **Three.js** (via **React Three Fiber** and **Drei**).

---

## 🌟 Features

*   **Preloading Experience:** A sleek custom loading screen (`LoadingScreen.tsx`) that reveals the application once loaded.
*   **Custom Interactivity:** A custom magnetic cursor effect (`CustomCursor.tsx`) that follows mouse movement with responsive tracking.
*   **Immersive 3D Elements:** Integrated **Three.js** via React Three Fiber/Drei for rich 3D interactions.
*   **Aesthetic & Dynamic Animations:** Fine-grained animations powered by **Framer Motion** and **GSAP** scroll triggers, offering scroll progress indication, marquee banners, and 3D card tilts.
*   **Modular Architecture:** Fully typed data structures, highly reusable UI components, and tailored custom React hooks.
*   **SEO Optimized:** Handled through Next.js Metadata API, preconfigured with robots.ts, sitemaps, OpenGraph meta-tags, and preloaded premium typography (Syne & DM Mono).
*   **Fully Responsive & Accessible:** Designed with mobile-first layouts, keyboard navigation, and semantic HTML elements.

---

## 🛠️ Tech Stack

*   **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
*   **Animations:** 
    *   [Framer Motion](https://www.framer.com/motion/) (Micro-interactions, Page-in transitions)
    *   [GSAP](https://gsap.com/) (Scroll-driven animations)
    *   [Three.js](https://threejs.org/) / [@react-three/fiber](https://r3f.docs.pmnd.rs/getting-started/introduction) (3D canvas renders)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Utilities:** `clsx`, `tailwind-merge`

---

## 📂 Project Structure

```text
portfolio/
├── app/                  # Next.js App Router (Layouts, Pages, SEO)
│   ├── layout.tsx        # Base template, font configurations, SEO metadata
│   ├── page.tsx          # Main entry page assembling all sections
│   ├── robots.ts         # Robot search index directives
│   └── sitemap.ts        # Dynamic sitemap configuration
├── components/           # Component-driven architecture
│   ├── layout/           # Base layouts (Navbar, Footer)
│   ├── sections/         # Portfolio page sections (Hero, About, Skills, Projects, etc.)
│   └── ui/               # Reusable atomic UI elements (MagneticButton, TiltCard, ScrollProgress)
├── data/                 # Static data configurations (nav, projects, skills, certificates)
│   └── index.ts          # Core static configurations for portfolio content
├── hooks/                # Custom React hooks
│   └── index.ts          # useMousePosition, useScrollProgress, useActiveSection, useCounter, etc.
├── styles/               # Global CSS & Tailwind configuration styles
│   └── globals.css       # Tailwind directives, theme variables, and keyframe designs
├── types/                # TypeScript interface declarations
│   └── index.ts          # Custom Type/Interface definitions (Project, Skill, NavItem, etc.)
├── utils/                # Helper utility functions
│   └── index.ts          # Tailwind CSS merger (cn), Math helpers (lerp, clamp, mapRange), and debounce
├── tailwind.config.ts    # Tailwind customization (fonts, colors, keyframes, transitions)
├── tsconfig.json         # TypeScript configurations
├── package.json          # Script commands and project dependencies
└── next.config.mjs       # Next.js bundler settings (experimental optimizations, image domains)
```

---

## ⚡ Custom React Hooks

The project utilizes several tailor-made custom React hooks found in `hooks/index.ts`:

*   [`useMousePosition()`](file:///c:/Users/HP/Downloads/files/abdurezak-portfolio/portfolio/hooks/index.ts#L4): Tracks Client X/Y mouse cursor coordinates for cursor-attached interactive states.
*   [`useScrollProgress()`](file:///c:/Users/HP/Downloads/files/abdurezak-portfolio/portfolio/hooks/index.ts#L18): Computes vertical scroll percentage from 0 to 1 for progress indicators.
*   [`useActiveSection(sections)`](file:///c:/Users/HP/Downloads/files/abdurezak-portfolio/portfolio/hooks/index.ts#L33): Identifies the viewport's currently active ID section using an Intersection Observer.
*   [`useCounter(target, duration, start)`](file:///c:/Users/HP/Downloads/files/abdurezak-portfolio/portfolio/hooks/index.ts#L56): Animates counter values using cubic easing for statistics displays.
*   [`useInView(threshold)`](file:///c:/Users/HP/Downloads/files/abdurezak-portfolio/portfolio/hooks/index.ts#L79): Monitors viewport entry of elements for lazy-triggering animations.
*   [`useTheme()`](file:///c:/Users/HP/Downloads/files/abdurezak-portfolio/portfolio/hooks/index.ts#L102): Controls theme local storage and manages the dark/light DOM element class toggle.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.x or later recommended) and [npm](https://www.npmjs.com/) (or yarn / pnpm) installed.

### Installation

1. Navigate to the project root directory:
   ```bash
   cd portfolio
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the local development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application. The page will auto-reload when you modify any source files.

### Production Build

To compile a production build of the project:
```bash
npm run build
```

This compiles optimized client bundles, generates static pages, and outputs deployment-ready assets.

To preview the production build locally:
```bash
npm run start
```

### Code Quality & Linting

Run ESLint rules to identify code quality or stylistic improvements:
```bash
npm run lint
```
