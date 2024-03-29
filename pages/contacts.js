import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from "next/router";

import PageLayout from '@/components/PageLayout'
import PageTitle from '@/components/PageTitle'

import facebook from '@/public/icons/Facebook.svg'
import apple from '@/public/icons/Applemusic.svg'
import instagram from '@/public/icons/Instagram.svg'
import spotify from '@/public/icons/Spotify.svg'
import youtube from '@/public/icons/Youtube.svg'


import imageBackground from '@/public/images/Contacts.webp'
import ContactForm from '@/components/ContactForm'

const Contacts = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10 w-full'>

          <PageTitle>Contacts</PageTitle>

          <div className='w-full flex flex-col md:flex-row items-start'>
            <div className='md:w-1/2 w-full'>
              <p className='font-light text-xl'>
                {
                  locale === 'en' ?
                  "For general inquiries please fill out the form below." :
                  "Per richieste di carattere generale si prega di compilare il modulo sottostante."
                }
              </p>
              <p className='pt-5 md:pt-10'>Contact me</p>
              <ContactForm />
            </div>

            <div className='md:w-1/2 flex flex-col items-start max-md:pt-10 w-full'>
              <div className='flex flex-col items-start m-auto'>
                
                <Link href={"https://www.facebook.com/marc.cortese.9/?locale=it_IT"} className='flex flex-row items-center text-lg'>
                  <Image src={facebook} alt='Facebook' className='socialIconContacts' priority/>
                  <span className='text-lg'>Facebook</span>
                </Link>
                <Link href={"https://instagram.com/marccortese_musix?igshid=YmMyMTA2M2Y="} className='flex flex-row items-center text-lg'>
                  <Image src={instagram} alt='Instagram' className='socialIconContacts' priority/>
                  <span className='text-lg'>Instagram</span>
                </Link>
                <Link href={"https://open.spotify.com/artist/08pTM5TPyqCYEeFFthnoLr?si=wuasu9SLRuK-j4SV64PXHg"} className='flex flex-row items-center text-lg'>
                  <Image src={spotify} alt='Spotify' className='socialIconContacts' priority/>
                  <span className='text-lg'>Spotify</span>
                </Link>
                <Link href={"https://www.youtube.com/@marccortese"} className='flex flex-row items-center text-lg'>
                  <Image src={youtube} alt='YouTube' className='socialIconContacts' priority/>
                  <span className='text-lg'>YouTube</span>
                </Link>
                <Link href={"https://music.apple.com/it/artist/marc-cortese/598073934"} className='flex flex-row items-center text-lg'>
                  <Image src={apple} alt='Apple Music' className='socialIconContacts' priority/>
                  <span className='text-lg'>Apple Music</span>
                </Link>

                <div className='lg:pl-6 text-lg'>
                  <div className='py-2'>
                    <p>Marc Cortese</p>
                    <Link href="mailto:marccortese@yahoo.com">
                      <p>marccortese@yahoo.com</p>
                    </Link>
                  </div>

                  <div className='py-2'>
                    <p>Ben Fatto mgmt</p>
                    <Link href="mailto:benfattomgmt@gmail.com">
                      <p>benfattomgmt@gmail.com</p>
                    </Link>
                    <p>Tel. +39 389 6612652</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
    </PageLayout>
  )
}

export default Contacts