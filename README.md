# Finsentric Website

A modern, responsive website for Finsentric - a revolutionary platform bringing sentiment analysis to the forefront of financial decision-making.

## 🚀 Features

- **Dark Theme First**: Optimized for dark theme with automatic light/dark mode switching
- **Modern UI**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Fast loading with Next.js optimizations
- **Accessible**: Built with accessibility in mind

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **Theme**: Next-themes for dark/light mode
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/finsentric/finsentric_website.git
cd finsentric_website
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

## 🏗️ Project Structure

```
finsentric_website/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── ui/                # Reusable UI components
│   ├── header.tsx         # Site header
│   ├── footer.tsx         # Site footer
│   ├── hero-section.tsx   # Hero section
│   └── logo.tsx           # Logo component
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
└── public/                # Static assets
    ├── FinSentricLogo_DarkTheme.svg
    └── FinSentricLogo_LightTheme.svg
```

## 🎨 Customization

### Theme Configuration

The site uses a dark-first approach with automatic theme switching. Theme configuration is in `app/layout.tsx`:

```tsx
<ThemeProvider
  attribute="class"
  defaultTheme="dark"
  enableSystem
  disableTransitionOnChange
>
```

### Logo

The logo automatically switches between dark and light versions based on the current theme:
- Dark theme: `FinSentricLogo_DarkTheme.svg`
- Light theme: `FinSentricLogo_LightTheme.svg`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🚀 Deployment

This project can be deployed to any static hosting platform:

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Your site will be live at `https://finsentric.vercel.app`

### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`

### Static Export
For static hosting (GitHub Pages, etc.):
1. Add `output: 'export'` to `next.config.js`
2. Run `npm run build`
3. Deploy the `out` directory

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 About Finsentric

Finsentric is a revolutionary platform bringing sentiment analysis to the forefront of financial decision-making. Our mission is to provide cutting-edge sentiment analysis tools that empower financial professionals to make more informed decisions.

**Coming Soon!** 🚀 