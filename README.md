# Portfolio Website

A modern, interactive portfolio built with Next.js 16 (App Router): smooth animations, an interactive terminal, a Dev / ML mode switch and a responsive design.

## Features

- **Dev / ML modes**: two portfolios in one page, switchable with a toggle and shareable through `?mode=ml`
- **Interactive Terminal**: a functional terminal component with custom commands
- **Animated UI**: animations powered by [Motion](https://motion.dev)
- **Contact Form**: validated API route + Nodemailer (Gmail SMTP), honeypot anti-spam
- **Tech Showcase** and **Work Portfolio** with image galleries
- **SEO**: generated Open Graph image, `robots.txt`, `sitemap.xml`

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack) / React 19
- **Language**: TypeScript 6
- **Styling**: Tailwind CSS 4
- **Animations**: Motion
- **URL state**: nuqs
- **Validation**: Zod
- **Email**: Nodemailer
- **Analytics**: Vercel Analytics & Speed Insights, Microsoft Clarity
- **Tooling**: ESLint 10 (flat config), pnpm 12, Node.js 24 LTS

## Getting Started

### Prerequisites

- Node.js 24 LTS (22.13+ also works) — see `.nvmrc`
- pnpm 12 (`corepack enable`)

### Installation

```bash
git clone https://github.com/Kimbohy/portfolio.git
cd portfolio
cp .env.example .env.local   # then fill in the values
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command          | Description                 |
| ---------------- | --------------------------- |
| `pnpm dev`       | Development server          |
| `pnpm build`     | Production build            |
| `pnpm start`     | Run the production build    |
| `pnpm lint`      | ESLint                      |
| `pnpm typecheck` | TypeScript (`tsc --noEmit`) |

### Environment variables

See `.env.example`. `EMAIL_USER` / `EMAIL_PASSWORD` must be a Gmail address and an
[App Password](https://myaccount.google.com/apppasswords), never your account password.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/send-email/    # Contact form API route
│   ├── layout.tsx         # Root layout, metadata, providers
│   ├── page.tsx           # Main page (Server Component)
│   └── opengraph-image.tsx
├── components/
│   ├── PortfolioSections.tsx   # Sections of one mode (rendered for dev AND ml)
│   ├── ModeScene.tsx           # Dev/ML transition wrapper
│   ├── HashSync.tsx            # #anchor <-> mode handling
│   ├── FirstPage/  Terminal/  Work/  Contact/  ui/
├── context/PortfolioMode.tsx   # Mode state (+ URL sync with nuqs)
├── const/                      # Projects, tech list
├── public/                     # Static assets
└── utils/                      # Utilities (cn, email template, ...)
```

## License

This project is open source and available under the [MIT License](LICENSE).
