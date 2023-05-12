import React, {useState} from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";

import PageLayout from '@/components/PageLayout'
import PageTitle from '@/components/PageTitle'
import DownloadButton from '@/components/DownloadButton'

import imageBackground from '@/public/images/Mix.webp'
import ContactForm from '@/components/ContactForm'

const Mix = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  
  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10 text-base md:text-lg'>

          <PageTitle>Mix</PageTitle>

          <p className='py-5'>
            {locale == 'en' ?
              (
                <>
                  Mixing is a creative process and every song is different. Because of this, there is no 'one size fits all' price for my mixing services. I work remotely as well as on site but the process is still the same.
                  <br /><br />
                  First send me an MP3 of the rough mix/demo version of your song as well as a brief description of what DAW you are using, how many tracks/stems there are in the project, how you would like the end result to sound, and the timeframe that you would like your mix to be delivered in.
                  <br /><br />
                  Once I listen to it and get a feel for what is needed, I will get in touch so that we can speak in detail about the project and the price. Generally the price range for a mix will be between 50 and 200 euros depending on the characteristics of the song.
                  <br /><br />
                  Favourite Mixing Plugins: Kramer Tape by Waves, Nectar by Izotope, CLA-76 Compressor by Waves
                </>
              ):(
                <>
                  Il mix è un processo creativo e di conseguenza è diverso per ogni canzone. Per questo non c’è un prezzo fisso. Lavoro sia da remoto che in zona Venezia e il processo è sempre lo stesso.
                  <br /><br />
                  Per prima cosa scrivimi e mandami un MP3 della demo della tua canzone grezza accompagnato da una breve descrizione di che DAW stai usando. Specifica anche quante tracce/stems ci sono nel progetto, come vorresti il risultato finale e per quando ti serve il mix finito.
                  <br /><br />
                  Una volta che l'avrò ascoltato e mi sarò fatto un'idea di ciò che è necessario, mi metterò in contatto con te in modo da poter parlare in dettaglio del progetto e del prezzo. Generalmente la fascia di prezzo per un mix è compresa tra i 50 e i 200 euro a seconda delle caratteristiche del brano.
                  <br /><br />
                  Mixing Plugin preferiti: Kramer Tape by Waves, Nectar by Izotope, CLA-76 Compressor by Waves
                </>
              )
            }
          
          </p>
        
          {
            locale == 'en' ? (
                <p className='pt-5 md:pt-10'>Contact me</p>
            ):(
                <p className='pt-5 md:pt-10'>Contattami</p>
            )
          }

        <ContactForm />

        </div>
    </PageLayout>
  )
}

export default Mix