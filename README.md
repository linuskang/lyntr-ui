# Lyntr UI - Micro Blogging Platform

A modern micro-blogging social media platform built with Next.js 14, TypeScript, and Tailwind CSS. This project converts the UI components from the [linuskang/lyntr](https://github.com/linuskang/lyntr) Svelte application into React/TSX components for a deployable Next.js application.

![Lyntr UI Homepage](https://github.com/user-attachments/assets/b1e7bfca-a0da-4194-9a3d-7afa5fbf1398)

## Features

- 🚀 Built with Next.js 14 (App Router)
- 💎 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🌓 Dark mode support
- 📱 Responsive design
- 🎭 Modern UI components
- ⚡ Fast and optimized

## UI Components

The following components have been converted from Svelte to React/TSX:

### Core UI Components
- **Button** - Versatile button component with multiple variants
- **Input** - Text input with validation support
- **Textarea** - Multi-line text input
- **Card** - Container component with header, content, and footer
- **Avatar** - User profile pictures with fallback
- **Badge** - Labels and status indicators
- **Label** - Form labels
- **Separator** - Visual dividers

### Feature Components
- **Lynt (Post)** - Social media post component with likes, comments, reposts
- **Post Composer** - Create new posts with character limit
- **Navigation** - Sidebar navigation with theme toggle
- **Avatar Component** - Reusable avatar wrapper

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/linuskang/lyntr-ui.git
cd lyntr-ui
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/linuskang/lyntr-ui)

Or manually:

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
lyntr-ui/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Core UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── lynt.tsx           # Post component
│   ├── post-composer.tsx  # Post creation
│   ├── navigation.tsx     # Sidebar navigation
│   └── avatar-component.tsx
├── lib/
│   └── utils.ts           # Utility functions
└── package.json
```

## Theme Customization

The app uses CSS variables for theming. Customize colors in `app/globals.css`:

```css
:root {
  --background: 53 24% 93%;
  --foreground: 20 14.3% 4.1%;
  --primary: 22 100% 15%;
  /* ... */
}
```

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Custom components with class-variance-authority
- **Icons:** Lucide React

## Original Project

This UI library is based on the [Lyntr](https://github.com/linuskang/lyntr) micro-blogging platform originally built with SvelteKit.

## License

See [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
