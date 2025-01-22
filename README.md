# R1 Chat

A modern, responsive chat application featuring a comprehensive landing page with advanced features, SEO optimisation, and integrated advertising spaces.

## Table of Contents
- [Features](#features)
- [Technical Stack](#technical-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Development](#development)
- [Deployment](#deployment)

## Features

### Core Features
- **Responsive Layout**
  - Fully responsive design that adapts to all screen sizes
  - Dark/light mode support with system preference detection
  - Smooth transitions and animations
  
- **Interactive Elements**
  - Animated CTA button linking to chat.deepseek.com
  - Hover animations on interactive components
  - Modern gradient backgrounds and card layouts

### SEO Optimisation
- **Meta Tags**
  - Complete Open Graph integration
  - Twitter Card support
  - Custom meta descriptions and titles
  
- **Technical SEO**
  - Semantic HTML structure
  - Schema.org structured data implementation
  - Automated sitemap.xml generation
  - Configured robots.txt
  - Proper heading hierarchy (h1-h6)

### Blog Section
- **Content Layout**
  - Featured post with prominent display
  - Responsive grid layout for regular posts
  - Author information cards with avatars
  - Publication dates with timeago support
  
- **Content Organisation**
  - Category system with filtering
  - Tag-based navigation
  - Responsive image handling with lazy loading
  - Integrated ad spaces with proper placement

### Advertisement Integration
- **Ad Placement System**
  - Strategic ad space implementation
  - Lazy loading using react-intersection-observer
  - Responsive design adapting to screen sizes
  - A/B testing support for ad placement optimisation

## Technical Stack

- **Frontend Framework**
  - React 18.x
  - TypeScript 5.x
  - React Router 6.x for navigation
  - React Helmet for SEO management

- **Styling**
  - Tailwind CSS for utility-first styling
  - Custom theme configuration
  - Dark mode implementation
  - PostCSS for processing

- **Development Tools**
  - Vite for build tooling
  - ESLint for code quality
  - Prettier for code formatting
  - Husky for git hooks

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-org/r1-chat.git
cd r1-chat
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
r1-chat/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   └── types/
├── public/
├── tests/
└── config/
```

## Configuration

### Environment Variables

```env
VITE_API_URL=your_api_url
VITE_GA_TRACKING_ID=your_ga_id
VITE_AD_CLIENT_ID=your_ad_client_id
```

### Tailwind Configuration

The project uses a custom Tailwind configuration. Modify `tailwind.config.js` to adjust:
- Colour schemes
- Typography
- Breakpoints
- Custom utilities

## Development

### Code Quality

- Run linter:
```bash
npm run lint
```

- Run tests:
```bash
npm run test
```

- Format code:
```bash
npm run format
```

### Building for Production

```bash
npm run build
```

## Deployment

The application can be deployed to various platforms:

1. Vercel (recommended):
```bash
vercel deploy
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Licence

This project is licensed under the MIT Licence - see the [LICENCE](LICENCE) file for details.
