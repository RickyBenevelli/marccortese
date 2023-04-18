import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from "next/router";

import PageLayout from '@/components/PageLayout'
import PageTitle from '@/components/PageTitle'

import facebook from '@/public/icons/Facebook.svg'
import amazon from '@/public/icons/Amazonmusic.svg'
import apple from '@/public/icons/Applemusic.svg'
import instagram from '@/public/icons/Instagram.svg'
import spotify from '@/public/icons/Spotify.svg'
import youtube from '@/public/icons/Youtube.svg'


import imageBackground from '@/public/images/Contacts.webp'
import ContactForm from '@/components/ContactForm'

const Contacts = () => {
  
  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10'>

          <PageTitle>Contacts</PageTitle>

          <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2'>
              <ContactForm />
              <p>Lorem ipsummm Lorem ipsummm Lorem ipsummm Lorem ipsummm Lorem ipsummm Lorem ipsummm Lorem ipsummm Lorem ipsummm Lorem ipsummm Lorem ipsummm Lorem ipsummm Lorem ipsummm</p>
            </div>

            <div className='md:w-1/2 flex flex-col item-center'>

              <div className='flex flex-col item-center m-auto'>
                <Link href={"/facebook"} className='flex flex-row items-center'>
                  <Image src={facebook} alt='Facebook' className='socialIconContacts' priority/>
                  <span className='text-lg'>Facebook</span>
                </Link>
                <Link href={"/instagram"}>
                  <Image src={instagram} alt='Instagram' className='socialIconContacts' priority/>
                </Link>
                <Link href={"/spotify"}>
                  <Image src={spotify} alt='Spotify' className='socialIconContacts' priority/>
                </Link>
                <Link href={"/youtube"}>
                  <Image src={youtube} alt='YouTube' className='socialIconContacts' priority/>
                </Link>
                <Link href={"/apple"}>
                  <Image src={apple} alt='Apple Music' className='socialIconContacts' priority/>
                </Link>
                <Link href={"/amazon"}>
                  <Image src={amazon} alt='Amazon Music' className='socialIconContacts' priority/>
                </Link>
              </div>

              <div className='flex flex-col'>
                <p>Marc Cortese</p>
                <p>Ben Fatto</p>
              </div>

            </div>
          </div>


        </div>
    </PageLayout>
  )
}

export default Contacts