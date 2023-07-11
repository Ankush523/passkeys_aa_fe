import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@fontsource/raleway'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
