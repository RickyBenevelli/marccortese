import React from 'react'

import NavBar from './NavBar'
import Footer from './Footer'
import ImageBackground from './ImageBackground'

const PageLayout = ({children}) => {
  return (
    <section>
        <ImageBackground>
            <NavBar />
            {children}
            <Footer />
        </ImageBackground>
    </section>
  )
}

export default PageLayout