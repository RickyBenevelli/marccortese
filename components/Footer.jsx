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
    <section className='w-full max-w-[1240px] m-auto top-0  flex flex-col-reverse sm:flex-row items-center sm:items-end mt-10 text-white px-5 pb-4'>

        <div className='w-full sm:w-2/5 py-2 flex flex-row items-end'>
          <div className='flex flex-col items-start justify-around pr-5 pt-4'> {/* CONTATTI */}
            <h4>CONTATTI</h4>
            <div className='flex flex-col w-full md:flex-row items-start text-xs md:justify-between'>
              <div className='max-md:py-2 mr-4'>
                <p>Marc Cortese</p>
                <p>marccortese@yahoo.com</p>
              </div>
              <div className='max-md:py-2'>
                <p>Ben Fatto Media</p>
                <p>benfattomgmt@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='text-center'>
            privacy policy
          </div>
        </div>

        <div className='max-sm:w-full sm:w-1/5 text-center text-[0.5rem] lg:text-sm py-2 max-sm:order-first'>
            <p>
                &copy; Marc Cortese
            </p>
            <p>
                WEBSITE BY BEN FATTO MEDIA
            </p>
        </div>

        <div className='w-full sm:w-2/5 flex flex-row items-center justify-between sm:justify-around py-2'>
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