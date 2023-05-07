import React, {useState} from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";

import PageLayout from '@/components/PageLayout'
import PageTitle from '@/components/PageTitle'
import DownloadButton from '@/components/DownloadButton'

import imageBackground from '@/public/images/Master.webp'
import ContactForm from '@/components/ContactForm'

const Master = () => {
  
  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10 text-base md:text-lg'>

          <PageTitle>Master</PageTitle>

          <p className='py-5'>
          The final touch of mastering is important because it is what allows your song to translate across every form of playback.
          <br /><br />
          Stereo mastering (or 'traditional mastering' as its sometimes referred to):
          <br /><br />
          I will process a WAV file of your final mix preparing it for streaming platforms, enhancing the sound quality of the file as a whole, and pushing the level as high as it can go without compromising the naturalness of the recording.
          <br /><br />
          Price: 30 euros
          <br /><br /><br />
          Stem Mastering:
          <br /><br />
          Stem mastering is another process where the final mix of your song is broken down into parts (i.e stems). This allows for more precision in the mastering stage and leads to a more nuanced, professional sounding result. <br />
          For example, one common usage of stem mastering is the separation of the vocals and the instrumentation. In this case, you will have to send me two different WAV files (Vocal stem, and instrumental stem) instead of one, as in stereo mastering. The final mix can be broken down even further if needed.
          <br /><br />
          Basic stem master price: first stem 50 euros plus 10 euros per added stem.
          <br /><br />
          Before sending your track please get in touch with me so that I can communicate delivery specifications to you first.
          <br /><br />
          Favorite Mastering Plugins: Ozone by Izotope, Abby Road TG Mastering Chain by Waves, RX Audio Editor by Izotope
          </p>
        
        <p className='pt-5 md:pt-10'>Contact me</p>

        <ContactForm />

        </div>
    </PageLayout>
  )
}

export default Master