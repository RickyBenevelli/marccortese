import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import facebook from '@/public/icons/Facebook.svg'
import apple from '@/public/icons/Applemusic.svg'
import instagram from '@/public/icons/Instagram.svg'
import spotify from '@/public/icons/Spotify.svg'
import youtube from '@/public/icons/Youtube.svg'
import arrow from '@/public/icons/Arrow.svg'

const Footer = () => {
  return (
    <section className='w-full max-w-[1240px] m-auto top-0 flex flex-col-reverse sm:flex-row items-center sm:items-end mt-10 text-white px-5 pb-4 font-light'>

        <div className='w-full sm:w-2/5 py-2 flex flex-col md:flex-row items-end'>
          
          <div className='w-full flex flex-col items-start justify-around md:pr-5 md:pt-4'> {/* CONTATTI */}
            <div >
              <Link href={"/contacts"} className='flex flex-row items-center'>
              <h4 className='text-[6vw]'>CONTATTI</h4>
              <Image src={arrow} className='w-[6vw] h-[6vw] ml-[5vw]' alt='' />
              </Link>
            </div>

            <div className='grid grid-cols-2 w-full text-[3.5vw] pt-2 pb-2'>
              <div className='text-left'>
                <p>Marc Cortese</p>
                <Link href="mailto:marccortese@yahoo.com">
                  <p>marccortese@yahoo.com</p>
                </Link>
              </div>
              <div className='text-right'>
                <p>Ben Fatto Media</p>
                <Link href="mailto:benfattomgmt@gmail.com">
                  <p>benfattomgmt@gmail.com</p>
                </Link>
              </div>
            </div>
          </div>

          <div className='text-center text-xs py-1'>
            privacy policy
          </div>
          <div className='text-center text-xs py-1'>
            Cookie
          </div>
        </div>

        <div className='w-full text-center text-[3.5vw] lg:text-sm py-2 max-sm:order-first font-light'>
            <p>
                &copy; Marc Cortese
            </p>
            <p>
                Website by BEN FATTO MEDIA
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

        </div>
    </section>
  )
}

export default Footer