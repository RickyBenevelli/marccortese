import React, {useState} from 'react'
import Image from 'next/image'
import fs from 'fs';
import sizeOf from 'image-size';
import path from 'path'

import YouTube from 'react-youtube';

import PageLayout from '@/components/PageLayout'
import PageTitle from '@/components/PageTitle'
import imageBackground from '@/public/images/Media.webp'
import GalleryImage from '@/components/GalleryImage'


import {AiOutlineClose } from "react-icons/ai";

const videos = [
  { id: 'R_AswG9geqU' },
  { id: 'SyHB3mDU7W8' },
  { id: 'jYDVZo9T9bY' },
  { id: 'MKuuCG3bQKY' },
  { id: 'WDBNh0YVXrw' },
  { id: 'K63zdx3llwY' },
  { id: 'ZzauRCKcyfs' }
]


const Media = ({photos}) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleSelectedPhoto = (photo) => {
    setSelectedPhoto(photo)
    setIsLoading(true)
  }

  const removeSelectedPhoto = () => {
    setSelectedPhoto(null)
    setIsLoading(true)
  }

  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='w-full px-5 md:px-10'>

          <PageTitle>Media</PageTitle>

          <div className='w-full text-left text-4xl font-light pt-10'>
            <h2>VIDEO GALLERY</h2>
          </div>
          
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10">
            {videos.map((video) => (
              <div key={video.id} class="aspect-video">

                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className='w-full h-full'
                ></iframe>

              </div>
            ))}
          </div>


          <div className='w-full text-left text-4xl font-light pt-10'>
            <h2>PHOTO GALLERY</h2>
          </div>

          <div className="w-full mx-auto pt-10">
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {photos.map((photo) => (
                <div 
                key={photo.src}
                onClick={() => handleSelectedPhoto(photo)}>
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
                <div className={`fixed inset-x-[10vw] inset-y-[12vh] flex justify-center items-center bg-opacity-80 z-50 ${isLoading ? "blur-xl grayscale scale-105" : "blur-0 scale-100 grayscale-0"}`} onClick={() => setSelectedPhoto(null)}>
                  
                  <div onClick={() => setSelectedPhoto(null)} className={`relative w-full h-full m-auto `}>
                    
                    <AiOutlineClose className='w-5 h-5 absolute top-0 text-white right-0 z-[55] cursor-pointer' onClick={() => setSelectedPhoto(null)}/>
                    <Image src={selectedPhoto.src} alt="" fill style={{objectFit: 'contain'}} onLoadingComplete={() => setIsLoading(false)} />
                  
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
  // inverti l'ordine delle foto
  photos.reverse()

  return {
    props: {
      photos
    }
  }
}
