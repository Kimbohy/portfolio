# Portfolio Website

A modern, interactive portfolio website built with Next.js 15, featuring smooth animations, an interactive terminal, and a responsive design.

## Features

- **Interactive Terminal**: A fully functional terminal component with custom commands
- **Animated UI**: Smooth animations powered by Framer Motion
- **Responsive Design**: Mobile-friendly layout with adaptive navigation
- **Contact Form**: Email integration using Nodemailer
- **Tech Showcase**: Display of technical skills and projects
- **Work Portfolio**: Showcase of projects with image galleries

## Tech Stack

- **Framework**: Next.js 15.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1
- **Animations**: Framer Motion (motion)
- **Icons**: Lucide React
- **Email**: Nodemailer
- **Analytics**: Vercel Analytics & Speed Insights
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10.15.1+

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Kimbohy/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
# or for turbopack
pnpm turbo
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── FirstPage/         # Landing section components
│   ├── Terminal/          # Terminal component
│   ├── Work/              # Portfolio section
│   ├── Contact/           # Contact form
│   └── ui/                # Reusable UI components
├── const/                 # Constants and configuration
├── public/                # Static assets
└── utils/                 # Utility functions
```

## License

This project is open source and available under the [MIT License](LICENSE).
