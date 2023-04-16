import React from 'react'
import Image from 'next/image'

import PageLayout from '@/components/PageLayout'
import PageTitle from '@/components/PageTitle'
import DownloadButton from '@/components/DownloadButton'

import imageBackground from '@/public/images/Mix.webp'

const Mix = () => {
  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10'>

            <PageTitle>Mix</PageTitle>

            <p className='text-lg py-5'>
            Breve testo
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet, consectetuer adipisc .
            <br/>
            Breve testo
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet, consectetuer adipisc .
            </p>
           
        </div>
    </PageLayout>
  )
}

export default Mix