import React from 'react'
import Image from 'next/image'

import PageLayout from '@/components/PageLayout'
import PageTitle from '@/components/PageTitle'

import imageBackground from '@/public/images/Works.webp'
import WorksGrid from '@/components/WorksGrid'


import albums from '@/json/albums.json'
import artists from '@/json/artists.json'
import Link from 'next/link'

const Works = () => {
    const albumsId = albums.map((album) => album.idAlbum);
    const albumsSorted = albums.sort((a, b) => (new Date(b.date) - new Date(a.date)));
    console.log(albumsSorted);
  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10 w-full'>

            <PageTitle>Works</PageTitle>
            
            <WorksGrid albums={albums}/>

            <div className='flex flex-col items-center pt-10'>
                {artists.map((artist) => (
                    // aggiungere il link all'artista
                    <div key={artist.idArtist} className='py-2'>
                        <Link href={`/artists/${artist.idArtist}`} className='hover:text-white/60'>
                            <h2 className='font-light text-xl uppercase cursor-pointer'>{artist.name}</h2>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    </PageLayout>
  )
}

export default Works
