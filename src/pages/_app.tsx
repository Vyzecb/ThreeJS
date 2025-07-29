// src/pages/_app.tsx
import '../styles/globals.css'                // Tailwind + custom global styles
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@/context/ThemeContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="description"
          content="Ervaar een luxe 3D-webervaring met Three.js, GSAP en Next.js"
        />
        <title>My Luxury 3D Site</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
