import React, {useState} from 'react'
import Image from 'next/image'
import fs from 'fs';
import sizeOf from 'image-size';
import path from 'path'

import PageLayout from '@/components/PageLayout'
import PageTitle from '@/components/PageTitle'
import imageBackground from '@/public/images/Media.webp'
import GalleryImage from '@/components/GalleryImage'


const Media = ({photos}) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  // console.log(photos)
  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='w-full px-5 md:px-10'>

          <PageTitle>Media</PageTitle>

          <div className='w-full text-left text-4xl font-light pt-10'>
            <h2>PHOTO GALLERY</h2>
          </div>

          <div className="w-full mx-auto pt-10">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {photos.map((photo) => (
                <GalleryImage
                  key={photo.src}
                  src={photo.src}
                  width={photo.width}
                  height={photo.height}
                  onClick={() => setSelectedPhoto(photo)}
                />
              ))}
            </div>
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
