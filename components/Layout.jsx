import React from 'react'
import Head from 'next/head'

import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>Marc Cortese</title>
        <meta name="description" content="Marc Cortese" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta> 

      </Head>
        {children}
    </div>
  )
}

export default Layout