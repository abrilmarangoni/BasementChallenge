import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const basementGrotesque = localFont({
  src: '../grotesque/BasementGrotesque-Black.ttf',
  variable: '--font-basement',
  display: 'swap',
  weight: '900',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  title: 'Basement Supply | Premium Streetwear',
  description: 'A man can\'t have enough basement swag. Shop premium streetwear hoodies, t-shirts and caps from Basement Supply. EST 2K19.',
  keywords: ['streetwear', 'fashion', 'hoodies', 'basement', 'clothing', 'apparel'],
  authors: [{ name: 'Basement Studio' }],
  creator: 'Basement Studio',
  publisher: 'Basement Studio',
  metadataBase: new URL('https://basement-challenge.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://basement-challenge.vercel.app',
    siteName: 'Basement Supply',
    title: 'Basement Supply | Premium Streetwear',
    description: 'A man can\'t have enough basement swag. Shop premium streetwear from Basement Supply.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basement Supply | Premium Streetwear',
    description: 'A man can\'t have enough basement swag. Shop premium streetwear from Basement Supply.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={basementGrotesque.variable}>
      <body>{children}</body>
    </html>
  )
}
