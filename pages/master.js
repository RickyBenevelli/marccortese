import React, {useState} from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";

import PageLayout from '@/components/PageLayout'
import PageTitle from '@/components/PageTitle'
import DownloadButton from '@/components/DownloadButton'

import imageBackground from '@/public/images/Master.webp'
import ContactForm from '@/components/ContactForm'

const Master = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10 text-base md:text-lg'>

          <PageTitle>Master</PageTitle>

          <p className='py-5'>
            {locale == 'en' ?
              (
                <>
                The final touch of mastering is important because it is what allows your song to translate across every form of playback.
                <br /><br />
                Stereo mastering (or 'traditional mastering' as its sometimes referred to):
                <br /><br />
                I will process a WAV file of your final mix preparing it for streaming platforms, enhancing the sound quality of the file as a whole, and pushing the level as high as it can go without compromising the naturalness of the recording.
                <br /><br />
                Price: 30 euros
                <br /><br /><br />
                Stem mastering:
                <br /><br />
                Stem mastering is another process where the final mix of your song is broken down into parts (i.e stems). This allows for more precision in the mastering stage and leads to a more nuanced, professional sounding result. <br />
                For example, one common usage of stem mastering is the separation of the vocals and the instrumentation. In this case, you will have to send me two different WAV files (Vocal stem, and instrumental stem) instead of one, as in stereo mastering. The final mix can be broken down even further if needed.
                <br /><br />
                Basic stem master price: first stem 50 euros plus 10 euros per added stem.
                <br /><br />
                Before sending your track please get in touch with me so that I can communicate delivery specifications to you first.
                <br /><br />
                Favorite Mastering Plugins: Ozone by Izotope, Abby Road TG Mastering Chain by Waves, RX Audio Editor by Izotope
                </>
              ):(
                <>
                Il tocco finale che da il mastering è importantissimo perché è ciò che consente alla tua canzone di tradursi nella riproduzione nei vari dispositivi.
                <br /><br />
                Stereo mastering (o ‘mastering tradizionale'):
                <br /><br />
                Elaborerò un file WAV del tuo mix finale preparandolo per le piattaforme di streaming, migliorando la qualità del suono del file nel suo insieme e spingendo il livello più in alto possibile senza compromettere la naturalezza della registrazione.
                <br /><br />
                Prezzo: 30 euro
                <br /><br /><br />
                Stem mastering:
                <br /><br />
                Stem mastering è un altro processo in cui il mix finale della tua canzone viene suddiviso in parti (gli stems). Ciò consente una maggiore precisione nella fase di mastering e porta a un risultato sonoro più sfumato e professionale. <br />
                Un uso comune dello stem mastering è ad esempio la separazione della voce e della strumentazione. In questo caso, dovrai inviarmi due diversi file WAV (vocal stem e instrumental stem).
                <br /><br />
                Prezzo: 50 euro per il primo stem più 10 euro per ogni stem ulteriore
                <br /><br />
                Prima di inviare la tua traccia, mettiti in contatto con me in modo che io possa comunicarti in dettaglio cosa mandarmi.
                <br /><br />
                Mastering Plugins preferiti: Ozone by Izotope, Abby Road TG Mastering Chain by Waves, RX Audio Editor by Izotope
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

export default Master