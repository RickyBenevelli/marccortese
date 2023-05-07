import React, {useState} from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";

import PageLayout from '@/components/PageLayout'
import PageTitle from '@/components/PageTitle'
import DownloadButton from '@/components/DownloadButton'

import imageBackground from '@/public/images/Mix.webp'
import ContactForm from '@/components/ContactForm'

const Mix = () => {
  
  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10 text-base md:text-lg'>

          <PageTitle>Mix</PageTitle>

          <p className='py-5'>
          Mixing is a creative process and every song is different. Because of this, there is no 'one size fits all' price for my mixing services. I work remotely as well as on site but the process is still the same.
          <br /><br />
          First send me an MP3 of the rough mix/demo version of your song as well as a brief description of what DAW you are using, how many tracks/stems there are in the project, how you would like the end result to sound, and the timeframe that you would like your mix to be delivered in.
          <br /><br />
          Once I listen to it and get a feel for what is needed, I will get in touch so that we can speak in detail about the project and the price. Generally the price range for a mix will be between 50 and 200 euros depending on the characteristics of the song.
          <br /><br />
          Favourite Mixing Plugins: Kramer Tape by Waves, Nectar by Izotope, CLA-76 Compressor by Waves
          </p>
        
          <p className='pt-5 md:pt-10'>Contact me</p>

        <ContactForm />

        </div>
    </PageLayout>
  )
}

export default Mix