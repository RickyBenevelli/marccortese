import React from 'react'

import NavBar from './NavBar'
import Footer from './Footer'
import ImageBackground from './ImageBackground'

const PageLayout = ({children}) => {
  return (
    <section className='flex flex-col items-center'>
        <NavBar />
        <ImageBackground>
            {children}
            <Footer />
        </ImageBackground>
    </section>
  )
}

export default PageLayout