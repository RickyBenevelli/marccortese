import React from 'react'
import Image from 'next/image'

import PageLayout from '@/components/PageLayout'
import PageTitle from '@/components/PageTitle'
import DownloadButton from '@/components/DownloadButton'
import ContactForm from '@/components/ContactForm'

import imageBackground from '@/public/images/Production.webp'

const Production = () => {
  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10'>

            <PageTitle>Production</PageTitle>

            <p className='text-lg py-5'>
            Breve testo
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet, consectetuer adipisc .
            </p>

            <div className='w-full text-center text-4xl font-light pt-10'>
                <h2>RECORDING</h2>
            </div>
            
            <p className='text-lg py-5'>
            Breve testo
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet, consectetuer adipisc .
            </p>
            <div className='w-full text-center text-4xl font-light pt-10'>
                <h2>ARRANGMENT</h2>
            </div>
            
            <p className='text-lg py-5'>
            Breve testo
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet, consectetuer adipisc .
            </p>

            <div className='w-full text-center text-4xl font-light pt-10'>
                <h2>BEATS</h2>
            </div>
            
            <p className='text-lg py-5'>
            Breve testo
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet, consectetuer adipisc .
            </p>

            <div className='w-full text-center text-4xl font-light pt-10'>
                <h2>LESSONS</h2>
            </div>
            
            <p className='text-lg py-5'>
            Breve testo
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet, consectetuer adipisc .
            </p>
            
            <ContactForm />
        </div>
    </PageLayout>
  )
}

export default Production