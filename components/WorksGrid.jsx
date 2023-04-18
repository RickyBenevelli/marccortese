import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import placeholder from '../public/placeholder.png'

const WorksGrid = ({albums}) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-8 w-full'>

        {
            albums.map((album, index) => (
                <Link href={`/works/${album.idAlbum}`} className='relative aspect-square' key={index}>
                    <Image src={album.cover} alt='' fill style={{objectFit: 'cover'}} />
                </Link>
                ))}
        
    </div>
  )
}

export default WorksGrid

