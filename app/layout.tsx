import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const basementGrotesque = localFont({
  src: '../grotesque/BasementGrotesque-Black.ttf',
  variable: '--font-basement',
  display: 'swap',
  weight: '900',
})

export const metadata: Metadata = {
  title: 'Basement Challenge',
  description: 'E-commerce landing page',
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
