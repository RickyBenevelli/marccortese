import React, {useState} from 'react'
import Image from 'next/image'
import fs from 'fs';
import sizeOf from 'image-size';
import path from 'path'

import PageLayout from '@/components/PageLayout'
import PageTitle from '@/components/PageTitle'
import imageBackground from '@/public/images/Media.webp'
import GalleryImage from '@/components/GalleryImage'

import {GrClose} from 'react-icons/gr'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Media = ({photos}) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  console.log("SELECTED: " + selectedPhoto)


  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='w-full px-5 md:px-10'>

          <PageTitle>Media</PageTitle>

          <div className='w-full text-left text-4xl font-light pt-10'>
            <h2>PHOTO GALLERY</h2>
          </div>

          <div className="w-full mx-auto pt-10">
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {photos.map((photo) => (
                <div 
                key={photo.src}
                onClick={() => setSelectedPhoto(photo)}>
                  <GalleryImage
                    src={photo.src}
                    width={photo.width}
                    height={photo.height}
                    />
                </div>
              ))}
            </div>
            
            {selectedPhoto && (
              <div className='absolute inset-0 bg-black bg-opacity-80 z-30'>
                <div className="fixed inset-x-[10vw] inset-y-[12vh] flex justify-center items-center bg-opacity-80 z-50">
                  <div className="relative w-full h-full m-auto">
                    {/* <GrClose className='w-5 h-5 absolute top-0 text-white right-0 z-[55]' onClick={() => setSelectedPhoto(null)}/> */}
                    {/* <button className="absolute top-0 right-0 m-4 text-white text-xl font-bold z-[55]" onClick={() => setSelectedPhoto(null)}>
                      X
                    </button> */}
                    <AiOutlineClose className='w-5 h-5 absolute top-0 text-white right-0 z-[55] cursor-pointer' onClick={() => setSelectedPhoto(null)}/>
                    <Image src={selectedPhoto.src} alt="" fill style={{objectFit: 'contain'}}/>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
    </PageLayout>
  )
}

export default Media

export async function getStaticProps() {
  const directory = path.join('public', 'media')
  const photoFiles = fs.readdirSync(directory)

  const photos = photoFiles.map((photoFile) => {
    const dimensions = sizeOf(`${directory}/${photoFile}`);
    const url = `/media/${photoFile}`;

    return {
      src: url,
      width: dimensions.width,
      height: dimensions.height
    };
  });


  return {
    props: {
      photos
    }
  }
}
