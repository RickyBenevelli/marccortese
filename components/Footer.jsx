import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import facebook from '@/public/icons/Facebook.svg'
import amazon from '@/public/icons/Amazonmusic.svg'
import apple from '@/public/icons/Applemusic.svg'
import instagram from '@/public/icons/Instagram.svg'
import spotify from '@/public/icons/Spotify.svg'
import youtube from '@/public/icons/Youtube.svg'

const Footer = () => {
  return (
    <section className='w-full top-0 h-20 flex flex-row items-center mt-20 text-white px-10'>
        <div className='w-2/5'>

        </div>
        <div className='w-1/5 text-center text-[0.5rem] lg:text-sm'>
            <p>
                &copy; Marc Cortese
            </p>
            <p>
                WEBSITE BY BENFATTO MEDIA
            </p>
        </div>

        <div className='w-2/5 flex flex-row items-center justify-around'>
          <Link href={"/facebook"}>
              <Image src={facebook} alt='Facebook' className='socialIconFooter'/>
            </Link>
            <Link href={"/instagram"}>
              <Image src={instagram} alt='Instagram' className='socialIconFooter'/>
            </Link>
            <Link href={"/spotify"}>
              <Image src={spotify} alt='Spotify' className='socialIconFooter'/>
            </Link>
            <Link href={"/youtube"}>
              <Image src={youtube} alt='YouTube' className='socialIconFooter'/>
            </Link>
            <Link href={"/apple"}>
              <Image src={apple} alt='Apple Music' className='socialIconFooter'/>
            </Link>
            <Link href={"/amazon"}>
              <Image src={amazon} alt='Amazon Music' className='socialIconFooter'/>
            </Link>
        </div>
    </section>
  )
}

export default Footer