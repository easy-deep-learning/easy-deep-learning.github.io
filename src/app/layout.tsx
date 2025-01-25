import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'

import { GlobalMenu } from '@/components'

import '@/styles/global.css'

export const metadata: Metadata = {
  title: 'Easy Deep Learning',
  description: 'Education technologies, news, books, courses, videos, articles, podcasts, and more.',
}

export default function RootLayout ({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
    <body>
    <header>
      <GlobalMenu />
    </header>
    <main>
      {children}
    </main>
    <footer>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6GC4XK3S9Z"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6GC4XK3S9Z');
        `}
      </Script>
    </footer>
    </body>
    </html>
  )
}
