import type { AppProps } from 'next/app'
import Script from 'next/script'

import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
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
    </>

  )
}

export default MyApp
