# Ghost - Web3 Platform

A responsive multi-page web application built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Dark Theme**: Black background with shadcn/ui dark mode styling
- **Responsive Design**: Fully responsive on mobile and desktop devices
- **Typography**: Geist font family for modern, clean text
- **Navigation**: Black navbar with uppercase navigation items
- **Interactive Guide**: Expandable MISTFIELD GUIDE component (home page only)
- **Connect Wallet**: Integrated wallet connection functionality

## Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4+
- **Components**: shadcn/ui
- **Fonts**: Geist family

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles with CSS variables
│   ├── layout.tsx       # Root layout with dark theme
│   └── page.tsx         # Home page with navbar and guide
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Navbar.tsx       # Main navigation component
│   └── MistfieldGuide.tsx # Expandable guide component
└── lib/
    └── utils.ts         # Utility functions
```

## Navigation Items

- **MISTFIELD** - Main dashboard
- **WHISPER** - Communication hub
- **SEANCE** - Ritual interface
- **HELP** - Support center
- **EDICT LEDGER** - Transaction history

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Design Features

- **Black Background**: Pure black (#000000) background throughout
- **Uppercase Text**: All navigation and button text in uppercase
- **No Borders**: Navbar has no borders, shadows, or dividers
- **Mobile Responsive**: Hamburger menu on mobile devices
- **Interactive Guide**: Bottom-right expandable info section
- **Hover Effects**: Subtle hover states on interactive elements
# ghost
