import React from 'react'
import Head from 'next/head'
import { NextSeo, DefaultSeo } from 'next-seo';
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>Marc Cortese</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta> 

      </Head>
      <DefaultSeo
        title="Marc Cortese"
        description="Marc Cortese is a multi-instrumentalist from the United States. In 2012 he traveled to Italy in search of his roots and since then has been traveling both Italy and Europe as a drummer/front man for various touring acts."
        canonical="https://www.marccortese.com"
        defaultTitle="Marc Cortese"
        languageAlternates={[
          {
            hrefLang: 'it-IT',
            href: 'https://www.marccortese.com',
          },
          {
            hrefLang: 'en-US',
            href: 'https://www.marccortese.com',
          }
        ]}
        openGraph={{
          type: 'website',
          locale: 'it_IT',
          url: 'https://www.marccortese.com',
          site_name: 'Marc Cortese',
          images: [
            {
              url: '/icons/logoMC.png',
              width: 407,
              height: 407,
              alt: 'Marc Cortese',
            },
          ],
        }}
        twitter={{
          handle: '',
          site: '',
          cardType: 'summary_large_image',
        }}
      />

        {children}
    </div>
  )
}

export default Layout