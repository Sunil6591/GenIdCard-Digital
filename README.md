# FootfallIQ Marketing Website

A clean, professional marketing website for FootfallIQ - Smart Digital Event Pass & Access System.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Getting Started

### Prerequisites

- Node.js 18 (specified in `.nvmrc`)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Typewriter.tsx   # Typewriter animation component
│   ├── Hero.tsx         # Hero section
│   ├── WhoItsFor.tsx    # Target audience section
│   ├── HowItWorks.tsx   # 4-step workflow
│   ├── WhyGenIdCard.tsx # Benefits section
│   ├── Pricing.tsx      # Pricing plans
│   ├── Trust.tsx        # Trust & security section
│   ├── ContactForm.tsx  # Contact/demo form
│   └── Footer.tsx       # Footer component
└── public/              # Static assets
```

## Features

- ✅ Typewriter animation on hero text
- ✅ Fully responsive design
- ✅ SEO-optimized with proper meta tags
- ✅ Accessible components
- ✅ Clean, minimal design
- ✅ Contact form with validation

## Deployment

This project is ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- Any platform supporting Next.js

## Build

```bash
npm run build
npm start
```

