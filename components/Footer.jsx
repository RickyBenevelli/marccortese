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
    <section className='w-full max-w-[1240px] mx-auto bottom-0 flex flex-col-reverse sm:flex-row items-center sm:items-end mt-10 text-white px-5 pb-4 font-light'>

        <div className='w-full sm:w-2/5 py-2 flex flex-col sm:flex-row items-end'>
          
          <div className='w-full flex flex-col items-start justify-around sm:w-4/5 md:pr-5 md:pt-4'> {/* CONTATTI */}
            <div >
              <Link href={"/contacts"} className='flex flex-row items-center' target="_blank">
              <h5 className='text-[6vw] sm:text-[2vw] xl:text-[25px]'>CONTATTI</h5>
              <Image src={arrow} className='w-[6vw] h-[6vw] sm:w-[2vw] sm:h-[2vw] xl:w-[25px] xl:h-[25px] ml-[5vw] sm:ml-[2vw] xl:ml-[25px]' alt='' />
              </Link>
            </div>

            <div className='grid grid-cols-2 w-full text-[3.5vw] sm:text-[1vw] xl:text-[13px] pt-2 pb-2 sm:pb-0'>
              <div className='text-left'>
                <p>Marc Cortese</p>
                <Link href="mailto:marccortese@yahoo.com">
                  <p>marccortese@yahoo.com</p>
                </Link>
              </div>
              <div className='text-right sm:text-left'>
                <p>Ben Fatto Media</p>
                <Link href="mailto:benfattomgmt@gmail.com">
                  <p>benfattomgmt@gmail.com</p>
                </Link>
              </div>
            </div>
          </div>

          <div className='text-center text-xs sm:text-[1vw] xl:text-[13px] sm:1/5 pt-1'>
            <Link href="/cookie" className='' target="_blank">Cookie</Link>
            <Link href="/privacy" className='' target="_blank">Privacy Policy</Link>
          </div>
        </div>

        <div className='w-full sm:w-1/5 text-center text-[3.5vw] sm:text-[2vw] xl:text-[14px] lg:text-sm py-2 md:pb-1 max-sm:order-first font-light'>
            <p>
                &copy; Marc Cortese
            </p>
            <p className='sm:text-[1vw] xl:text-[12.75px]'>
                Designed by <p className='font-medium inline'>BEN FATTO MEDIA</p>
            </p>
            <p className='sm:text-[1vw] xl:text-[12.75px]'>
                Developed by <Link href={"https://www.riccardobenevelli.com"} className='font-medium inline' target="_blank">Riccardo Benevelli</Link> 
            </p>
        </div>

        <div className='w-full sm:w-2/5 flex flex-row items-center justify-between sm:justify-around py-2'>
          <Link href={"https://www.facebook.com/marc.cortese.9/?locale=it_IT"} target="_blank">
              <Image src={facebook} alt='Facebook' className='socialIconFooter'/>
            </Link>
            <Link href={"https://instagram.com/marccortese_musix?igshid=YmMyMTA2M2Y="} target="_blank">
              <Image src={instagram} alt='Instagram' className='socialIconFooter'/>
            </Link>
            <Link href={"https://open.spotify.com/artist/08pTM5TPyqCYEeFFthnoLr?si=wuasu9SLRuK-j4SV64PXHg"} target="_blank">
              <Image src={spotify} alt='Spotify' className='socialIconFooter'/>
            </Link>
            <Link href={"https://www.youtube.com/@marccortese"} target="_blank">
              <Image src={youtube} alt='YouTube' className='socialIconFooter'/>
            </Link>
            <Link href={"https://music.apple.com/it/artist/marc-cortese/598073934"} target="_blank">
              <Image src={apple} alt='Apple Music' className='socialIconFooter'/>
            </Link>

        </div>
    </section>
  )
}

export default Footer