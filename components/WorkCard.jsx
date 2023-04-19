import React from 'react'
import Image from 'next/image'

import facebook from '@/public/icons/Facebook.svg'
import amazon from '@/public/icons/Amazonmusic.svg'
import apple from '@/public/icons/Applemusic.svg'
import instagram from '@/public/icons/Instagram.svg'
import spotify from '@/public/icons/Spotify.svg'
import youtube from '@/public/icons/Youtube.svg'
import Link from 'next/link'
import { stringify } from 'postcss'

import artists from '@/json/artists.json'

const WorkCard = ({album, track}) => {
  return (
    <div className='flex flex-col sm:flex-row pb-10'>
        <div className='sm:w-1/3  aspect-square '>
            <div className='relative aspect-square'>
                <Image src={album.cover} alt='' fill style={{objectFit: 'cover'}} className='p-4 sm:p-0 sm:pt-2 sm:pr-2 md:pt-4 md:pr-4' />

            </div>
        </div>
        <div className='sm:w-2/3 flex-col px-4 lg:px-10'>
            <div className='relative flex flex-row pt-10 sm:pt-2 md:pt-4'>
                {track.social.spotify &&
                    <div className='px-4 pl-0'>
                        <Link href={track.social.spotify}>
                            <Image src={spotify} alt="Spotify" className='w-10 h-10'/>
                        </Link>
                    </div>
                }
                {track.social.youtube &&
                    <div className='px-4'>
                        <Link href={track.social.youtube}>
                            <Image src={youtube} alt="youtube" className='w-10 h-10'/>
                        </Link>
                    </div>
                }
                {track.social.apple &&
                    <div className='px-4'>
                        <Link href={track.social.apple}>
                            <Image src={apple} alt="Apple Music" className='w-10 h-10'/>
                        </Link>
                    </div>
                }
                {track.social.amazon &&
                    <div className='px-4'>
                        <Link href={track.social.amazon}>
                            <Image src={amazon} alt="Amazon Music" className='w-10 h-10'/>
                        </Link>
                    </div>
                }
            </div>

            <div className='pt-4 md:pt-10 flex flex-col items-start'>
                <h1 className='font-light text-4xl py-5 uppercase'>{track.title}</h1>
                <div className='flex flex-col items-start text-lg'>
                    <span>ARTISTS:
                        {track.artistsIds.map((item, index) => (
                            <span className='px-2' key={index}>
                                <Link href={`/artists/${item}`} key={index}>
                                    {artists.find(artist => artist.idArtist === item).name}
                                </Link>
                            </span>
                        ))}
                    </span>
                    <span>PROD: {track.producer}</span>
                    <span>LIRYCS: {track.lirycs}</span>
                </div>
                <div>
                    <p className='py-5 font-light'>{track.description}</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WorkCard