import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Finsentric - Sentiment at the centre of Finance',
  description: 'Revolutionary platform bringing sentiment analysis to the forefront of financial decision-making. Coming Soon!',
  keywords: ['finance', 'sentiment analysis', 'fintech', 'financial technology'],
  authors: [{ name: 'Finsentric' }],
  creator: 'Finsentric',
  openGraph: {
    title: 'Finsentric - Sentiment at the centre of Finance',
    description: 'Revolutionary platform bringing sentiment analysis to the forefront of financial decision-making. Coming Soon!',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finsentric - Sentiment at the centre of Finance',
    description: 'Revolutionary platform bringing sentiment analysis to the forefront of financial decision-making. Coming Soon!',
  },
  robots: 'index, follow',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}