import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Script from "next/script";

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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZN5HHQ9S3J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZN5HHQ9S3J');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}