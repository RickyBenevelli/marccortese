import React from 'react'

import NavBar from './NavBar'
import Footer from './Footer'
import ImageBackground from './ImageBackground'

const PageLayout = ({children, imageBackground}) => {
  return (
    <section className='flex flex-col items-center'>
        <NavBar />
        <ImageBackground imageBackground = {imageBackground}>
            {children}
        </ImageBackground>
        <Footer />
    </section>
  )
}

export default PageLayout