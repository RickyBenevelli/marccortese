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
        <div className='w-full px-5 md:px-10'>

          <PageTitle>Media</PageTitle>

          <div className='w-full text-left text-4xl font-light pt-10'>
            <h2>PHOTO GALLERY</h2>
          </div>

          {/* <div className='relative z-50 h-48 w-96'>
            <Image src={`/media-images/im1.webp`} alt='' fill key={1} className=' object-contain'/>
          </div> */}

          <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div class="flex flex-nowrap">
              {/* {images.map((image, index) => (
                // <Image src={`/media-images/${image}`} alt='' width={400} height={200} key={index} />

               <div className='relative z-50 h-48 w-96'>
                <Image src={`/media-images/${image}`} alt='' fill key={index} className=' object-contain'/>
               </div>
              ))} */}

             {/* {images.map((image, index) => (
                <div className='relative z-50 h-48 w-96 bg-white/20 border border-red-700' key={index}>
                  <Image src={`/media-images/${image}`} alt='' width={400} height={200} key={index} className=' object-contain'/>
                </div>
              ))} */}
              
            </div>
          </div>
          
          <div className=''>
            {images.map((image, index) => (
              <div className='w-auto' key={index}>
                <Image src={`/media-images/${image}`} alt='' height={200} width={400} key={index} className='object-contain'/>
              </div>
            ))}
          </div>

          <div className='max-h-[200]'>
            <Image src={"/media-images/im1.webp"} alt='' width={715} height={479} />
          </div>
          <div className='max-h-[200]'>
            <Image src={"/media-images/im2.png"} alt='' width={1200} height={800} />
          </div>
          <div className='max-h-[200]'>
            <Image src={"/media-images/im4.gif"} alt='' width={1920} height={1280} />
          </div>
          <div className='max-h-[200]'>
            <Image src={"/media-images/joshua-kettle-lOE036FZECI-unsplash.jpg"} alt='' width={4767} height={7150} />
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


// {images.map((image, index) => (
//   <div className='relative z-50 h-48 w-96 bg-white/20 border border-red-700' key={index}>
//     <Image src={`/media-images/${image}`} alt='' width={400} height={200} key={index} className=' object-contain'/>
//   </div>
// ))}
