import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

