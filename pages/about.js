import React from 'react'
import Image from 'next/image'

import PageLayout from '@/components/PageLayout'
import PageTitle from '@/components/PageTitle'
import DownloadButton from '@/components/DownloadButton'

import imageBackground from '@/public/images/About.webp'

const About = () => {
  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10'>

            <PageTitle>About</PageTitle>
            <div className='text-base md:text-lg py-5'>
            <p>
            Marc Cortese is a multi-instrumentalist from the United States. In 2012 he traveled to Italy in search of his roots and since then has been traveling both Italy and Europe as a drummer/front man for various touring acts.
            <br/>
            The restrictions of the Covid era put a halt to live music but it was during this time that he adapted to the new situation by dedicating himself fully to writing, recording, and music production.
            <br/>
            This process lead to ‘six songs’ his first EP (released October 14th 2022) which he entirely self produced, both singing and playing all the instruments. The project is a wide-ranging mix of soul, psychedelia, and experimental pop.
            </p>
            </div>

            <DownloadButton text="DOWNLOAD PRESSKIT" file="/prova.pdf"/>
            <div className='flex flex-col sm:flex-row'>
                <div className='sm:w-1/4 py-4 sm:p-5 sm:pl-0'>
                    <Image src='/placeholder.png' width={1200} height={800} alt='Cover' className=''/>
                </div>
                <div className='sm:w-1/4 py-4 sm:p-5 sm:pl-0'>
                    <Image src='/placeholder.png' width={1200} height={800} alt='Cover' className=''/>
                </div>
                <div className='sm:w-1/4 py-4 sm:p-5 sm:pl-0'>
                    <Image src='/placeholder.png' width={1200} height={800} alt='Cover' className=''/>
                </div>
            </div>
            <DownloadButton text="DOWNLOAD FOTO" file="/prova.pdf"/>
        </div>
    </PageLayout>
  )
}

export default About