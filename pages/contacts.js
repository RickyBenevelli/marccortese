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
  
  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10'>

          <PageTitle>Contacts</PageTitle>

          <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2'>
              <ContactForm />
              <p>Lorem ipsum dolor sit amet. Quo velit temporibus est facere similique est odio nihil in asperiores nemo eum possimus velit et placeat dolor. Ut nesciunt saepe in consequatur tempore qui libero enim hic accusamus tempore aut soluta quia ea tempora fugit. Et rerum voluptatem vel nisi placeat quo libero sint et facilis commodi et quia quidem!
              </p>
            </div>

            <div className='md:w-1/2 flex flex-col item-center max-md:pt-10'>
              <div className='flex flex-col item-left m-auto'>
                
                <Link href={"/facebook"} className='flex flex-row items-center text-lg'>
                  <Image src={facebook} alt='Facebook' className='socialIconContacts' priority/>
                  <span className='text-lg'>Facebook</span>
                </Link>
                <Link href={"/instagram"} className='flex flex-row items-center text-lg'>
                  <Image src={instagram} alt='Instagram' className='socialIconContacts' priority/>
                  <span className='text-lg'>Instagram</span>
                </Link>
                <Link href={"/spotify"} className='flex flex-row items-center text-lg'>
                  <Image src={spotify} alt='Spotify' className='socialIconContacts' priority/>
                  <span className='text-lg'>Spotify</span>
                </Link>
                <Link href={"/youtube"} className='flex flex-row items-center text-lg'>
                  <Image src={youtube} alt='YouTube' className='socialIconContacts' priority/>
                  <span className='text-lg'>YouTube</span>
                </Link>
                <Link href={"/apple"} className='flex flex-row items-center text-lg'>
                  <Image src={apple} alt='Apple Music' className='socialIconContacts' priority/>
                  <span className='text-lg'>Apple Music</span>
                </Link>

                <div className='pl-4 lg:pl-6 text-lg'>
                  <div className='py-2'>
                    <p>Marc Cortese</p>
                    <p>marccortese@yahoo.com</p>
                  </div>

                  <div className='py-2'>
                    <p>Ben Fatto mgmt</p>
                    <p>benfattomgmt@gmail.com</p>
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