import React from 'react'
import Image from 'next/image'

import PageLayout from '@/components/PageLayout'
import PageTitle from '@/components/PageTitle'
import DownloadButton from '@/components/DownloadButton'


const About = () => {
  return (
    <PageLayout>

        <PageTitle>About</PageTitle>

        <p className='text-lg py-5'>
        Marc Cortese è un polistrumentista cresciuto negli Stati Uniti. Nel 2012 è sbarcato in Italia alla ricerca delle sue radici italiane. Questo lo ha portato a viaggiare in Italia ed in Europa, dove ha collaborato con vari gruppi sia come batterista che come cantante/front man. L’avvento del Covid, delle chiusure e delle restrizioni ha portato la sua attività musicale live a un blocco totale. Il suo rapporto con la musica si è quindi adattato a questa nuova situazione, ampliandosi anche alla scrittura, alla registrazione e alla produzione dei propri pezzi.
        <br/>
        Il risultato di questi anni è “six songs”, il suo primo EP, uscito in ottobre 2022, interamente autoprodotto, dalla composizione agli strumenti alle voci fino alla postproduzione.
        <br/>
        Il suo genere spazia dal soul al pop psichedelico fino al pop sperimentale. Il primo video ufficiale della canzone “Oblivion”, prodotto da Ben Fatto media è uscito su YouTube il 15 novembre 2022.
        </p>

        <DownloadButton/>
        <div className='flex flex-row'>
            <div className='w-1/3 p-5'>
                <Image src='/placeholder.png' width={1200} height={800} alt='Cover' className='rounded-lg'/>
            </div>
            <div className='w-1/3 p-5'>
                <Image src='/placeholder.png' width={1200} height={800} alt='Cover' className='rounded-lg'/>
            </div>
            <div className='w-1/3 p-5'>
                <Image src='/placeholder.png' width={1200} height={800} alt='Cover' className='rounded-lg'/>
            </div>
        </div>
        <DownloadButton/>

    </PageLayout>
  )
}

export default About