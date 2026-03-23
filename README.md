# GCreatives Solutions

A full-stack portfolio and booking website for a creative design & consultancy agency. The project is split into two separate sub-projects:

| Directory | Description |
|-----------|-------------|
| [`g_frontend/`](./g_frontend/) | React + TypeScript + Vite front-end |
| [`g_backend/`](./g_backend/) | Python Flask REST API back-end |

---

## Table of Contents

1. [Application Overview](#application-overview)
2. [Repository Structure](#repository-structure)
3. [Key Technologies](#key-technologies)
4. [Architecture](#architecture)
5. [Pages & Routes](#pages--routes)
6. [API Endpoints](#api-endpoints)
7. [Getting Started](#getting-started)
8. [Environment Variables](#environment-variables)

---

## Application Overview

**GCreatives Solutions** is a professional creative-agency website that lets visitors:

- Learn about the agency's brand, story, and team
- Browse services (Brand Identity & Logo Design, Web & UI Design, Marketing & Strategy)
- View a portfolio of past client projects
- See a showcase of current clients
- Book a paid expert consultation session (stored in a SQLite database via the Flask API)

---

## Repository Structure

```
g-creatives/
├── README.md                      ← You are here
│
├── g_frontend/                    ← React / TypeScript / Vite
│   ├── index.html                 ← HTML entry point
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig*.json
│   ├── eslint.config.js
│   ├── public/                    ← Static assets served as-is
│   │   ├── logo.png / logo 0.png  ← Brand logos
│   │   ├── profile.jpg            ← Team profile image
│   │   ├── signature.png          ← Signature graphic
│   │   ├── clients/               ← Client logo images (KCB, Safcom, …)
│   │   └── portfolio/             ← Portfolio project images
│   └── src/
│       ├── main.tsx               ← React DOM entry point
│       ├── App.tsx                ← Root component + React Router setup
│       ├── pages/                 ← Top-level route components
│       │   ├── Homepage.tsx
│       │   ├── Portfoliopage.tsx
│       │   └── BookExpertSession.tsx
│       ├── components/            ← Reusable page-section components
│       │   ├── Navbar.tsx
│       │   ├── Hero.tsx
│       │   ├── About.tsx
│       │   ├── Services.tsx
│       │   ├── Portfolio.tsx
│       │   ├── PortfolioHero.tsx
│       │   ├── PortfolioSection.tsx
│       │   ├── Clients.tsx
│       │   ├── ContactCTA.tsx
│       │   ├── ServiceCTA.tsx
│       │   ├── ProjectInquiryCTA.tsx
│       │   └── Footer.tsx
│       ├── book_components/       ← Expert-session booking flow
│       │   ├── ExpertSessionHero.tsx
│       │   └── ExpertSessionForm.tsx
│       ├── styles/
│       │   └── global.css
│       ├── types/
│       │   └── index.ts           ← Shared TypeScript type definitions
│       └── utilis/
│           └── scrollToSection.ts ← Smooth-scroll helper
│
└── g_backend/                     ← Python / Flask
    ├── run.py                     ← Dev-server entry point
    ├── .env                       ← Environment variables (not committed)
    └── app/
        ├── __init__.py            ← Flask app factory + CORS + DB init
        ├── config.py              ← Configuration classes
        ├── models.py              ← SQLAlchemy ORM models
        ├── routes.py              ← REST API route handlers
        └── database.db            ← SQLite database file
```

---

## Key Technologies

### Front-end (`g_frontend/`)

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev/) | 19 | UI component library |
| [TypeScript](https://www.typescriptlang.org/) | 5.7 | Static typing |
| [Vite](https://vitejs.dev/) | 6 | Build tool & dev server |
| [React Router DOM](https://reactrouter.com/) | 7 | Client-side routing |
| [Material UI (MUI)](https://mui.com/) | 7 | Design system & components |
| [Emotion](https://emotion.sh/) | 11 | CSS-in-JS (used by MUI) |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Animations & transitions |
| [React Hook Form](https://react-hook-form.com/) | 7 | Form state & validation |
| [tsParticles](https://particles.js.org/) | 3 | Hero particle animation |
| [React Slick](https://react-slick.neostack.com/) | 0.30 | Client-logos carousel |
| [MUI X Date Pickers](https://mui.com/x/react-date-pickers/) | 8 | Date/time selection in booking |
| [dayjs](https://day.js.org/) | 1.11 | Date manipulation |

### Back-end (`g_backend/`)

| Technology | Purpose |
|------------|---------|
| [Python](https://www.python.org/) | Server language |
| [Flask](https://flask.palletsprojects.com/) | Micro web framework |
| [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/) | ORM & database integration |
| [Flask-CORS](https://flask-cors.readthedocs.io/) | Cross-Origin Resource Sharing |
| [SQLite](https://www.sqlite.org/) | File-based relational database |
| [python-dotenv](https://pypi.org/project/python-dotenv/) | `.env` configuration loading |

---

## Architecture

```
Browser
   │
   │  HTTP (React Router – client-side)
   ▼
g_frontend  (Vite dev: http://localhost:5173)
   │
   │  Fetch / XHR  POST /api/bookings
   │                GET  /api/bookings
   ▼
g_backend  (Flask dev: http://localhost:5000)
   │
   │  SQLAlchemy ORM
   ▼
SQLite  (app/database.db)
```

### Front-end Component Hierarchy

```
App.tsx  (BrowserRouter)
└── MainLayout  (Navbar + Footer wrapper)
    ├── Homepage.tsx
    │   ├── Hero
    │   ├── About
    │   ├── Services
    │   ├── Portfolio
    │   ├── Clients
    │   └── ContactCTA
    ├── Portfoliopage.tsx
    │   ├── PortfolioHero
    │   └── PortfolioSection
    └── BookExpertSession.tsx
        ├── ExpertSessionHero
        └── ExpertSessionForm
```

### Back-end Application Factory

```
run.py
└── create_app()  (app/__init__.py)
    ├── Load config  (app/config.py)
    ├── Init SQLAlchemy  (db)
    ├── Register CORS
    ├── Create DB tables
    └── Register routes  (app/routes.py)
```

---

## Pages & Routes

| URL | Page Component | Description |
|-----|---------------|-------------|
| `/` | `Homepage` | Landing page — hero, about, services, portfolio, clients, CTA |
| `/portfolio` | `Portfoliopage` | Full portfolio gallery with project images |
| `/book-expert` | `BookExpertSession` | Expert consultation booking form |

---

## API Endpoints

### `POST /api/bookings`

Creates a new expert-session booking.

**Request body (JSON):**

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+254700000000",
  "service": "Brand Identity Design",
  "meetingPlatform": "Zoom",
  "date": "2024-06-15",
  "time": "10:00",
  "notes": "Optional context",
  "privacy": true
}
```

**Responses:**

| Status | Meaning |
|--------|---------|
| `201 Created` | Booking saved successfully |
| `400 Bad Request` | One or more required fields missing |

---

### `GET /api/bookings`

Returns a JSON array of all stored bookings.

**Response (200 OK):**

```json
[
  {
    "id": 1,
    "name": "Jane Doe",
    "email": "jane@example.com",
    "phone": "+254700000000",
    "service": "Brand Identity Design",
    "meeting_platform": "Zoom",
    "date": "2024-06-15",
    "time": "10:00",
    "notes": "",
    "privacy": true
  }
]
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18 and **npm** ≥ 9
- **Python** ≥ 3.9

### 1. Front-end

```bash
cd g_frontend
npm install
npm run dev          # dev server → http://localhost:5173
```

Other available scripts:

```bash
npm run build        # TypeScript compile + Vite production build
npm run preview      # Preview the production build locally
npm run lint         # Run ESLint
```

### 2. Back-end

```bash
cd g_backend
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install flask flask-sqlalchemy flask-cors python-dotenv
python run.py                 # dev server → http://localhost:5000
```

---

## Environment Variables

Create `g_backend/.env` (already gitignored) with:

```ini
SECRET_KEY=your-secret-key-here
SQLALCHEMY_DATABASE_URI=sqlite:///database.db
```

The front-end reads no environment variables by default; the backend URL is hard-coded to `http://localhost:5000` during development.
