# GCreatives Solutions – Front-end

React + TypeScript + Vite front-end for the [GCreatives Solutions](../README.md) portfolio and booking website.

## Tech Stack

| Tool | Version | Role |
|------|---------|------|
| React | 19 | UI library |
| TypeScript | 5.7 | Static typing |
| Vite | 6 | Build tool & dev server |
| React Router DOM | 7 | Client-side routing |
| Material UI (MUI) | 7 | Component library & design system |
| Framer Motion | 12 | Animations |
| React Hook Form | 7 | Form state management |
| tsParticles | 3 | Particle animations (hero section) |
| React Slick | 0.30 | Client-logos carousel |

## Getting Started

```bash
npm install
npm run dev        # → http://localhost:5173
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server with HMR |
| `npm run build` | Type-check with `tsc` then bundle for production |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across all source files |

## Source Structure

```
src/
├── main.tsx                  ← ReactDOM entry point
├── App.tsx                   ← Root component, routing (React Router)
├── pages/                    ← Top-level route components
│   ├── Homepage.tsx          ← / – landing page
│   ├── Portfoliopage.tsx     ← /portfolio
│   └── BookExpertSession.tsx ← /book-expert
├── components/               ← Reusable page-section components
│   ├── Navbar.tsx
│   ├── Hero.tsx              ← tsParticles animation
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── PortfolioHero.tsx
│   ├── PortfolioSection.tsx
│   ├── Clients.tsx           ← React Slick carousel
│   ├── ContactCTA.tsx
│   ├── ServiceCTA.tsx
│   ├── ProjectInquiryCTA.tsx
│   └── Footer.tsx
├── book_components/          ← Booking flow components
│   ├── ExpertSessionHero.tsx
│   └── ExpertSessionForm.tsx ← React Hook Form + MUI Date Pickers
├── styles/
│   └── global.css
├── types/
│   └── index.ts              ← Shared TypeScript types
└── utilis/
    └── scrollToSection.ts    ← Smooth-scroll helper
```

## ESLint

The project uses `eslint` with `typescript-eslint` and `eslint-plugin-react-hooks`. Configuration lives in `eslint.config.js`.

To enable stricter type-aware lint rules, update `eslint.config.js`:

```js
import tseslint from 'typescript-eslint'

export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```
