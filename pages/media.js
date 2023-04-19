import React, {useState} from 'react'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'

import PageLayout from '@/components/PageLayout'
import PageTitle from '@/components/PageTitle'
import imageBackground from '@/public/images/Media.webp'


const Media = ({images}) => {
  
  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10'>

          <PageTitle>Media</PageTitle>

          <div className='w-full text-left text-4xl font-light pt-10'>
            <h2>PHOTO GALLERY</h2>
          </div>

          <div className='flex overflow-x-scroll hide-scroll-bar'>
            <div className='flex flex-nowrap'>

              {images.map((image, index) => (
                <Image src={`/media-images/${image}`} alt='' width={300} height={250} key={index} className='inline-block m-4' style={{objectFit: 'cover'}}/>
              ))}

            </div>
          </div>

          <div className='w-full text-left text-4xl font-light pt-10'>
            <h2>VIDEO</h2>
          </div>

        </div>
    </PageLayout>
  )
}

export default Media

export async function getStaticProps() {
  const images = fs.readdirSync(path.join('public', 'media-images'))

  return {
    props: {
      images
    }
  }
}