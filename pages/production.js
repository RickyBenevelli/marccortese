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

            <p className='text-base md:text-lg py-5'>
            Do you have a great 'hook' for a song that you are having trouble developing? Maybe you have a song you want to add instrumentation to? Or maybe you just want to have someone produce a beat from scratch that will be all yours?
            <br/>
            Well, if you find yourself in any of these scenarios you are in the right place! Services I offer:
            </p>

            <div className='w-full text-center text-2xl md:text-4xl font-light pt-10 uppercase'>
                <h2>Arrangement</h2>
            </div>
            
            <p className='text-base md:text-lg py-5'>
            If you have a partially formed idea for a song I will help get you past your writers block! For example, you may have a song that is lacking a bridge. In that case you will send me a recording of the melody and the chord structure after which I will work with you to come up with different options for a potential bridge until we strike magic! All publishing rights for the song will remain 100% yours!
            </p>

            <div className='w-full text-center text-2xl md:text-4xl font-light pt-10 uppercase'>
                <h2>Lyrics</h2>
            </div>
            
            <p className='text-base md:text-lg py-5'>
            Do you have a song with a killer melody that you can't find words for? You will send me a recording of the song with your melody of choice and I will write lyrics for you. It is preferable to supply me with a theme to write about as well, but in the case that you can't think of one I will think it up myself! All publishing rights for the song will remain 100% yours!
            </p>

            <div className='w-full text-center text-2xl md:text-4xl font-light pt-10 uppercase'>
                <h2>Instrumentation</h2>
            </div>
            
            <p className='text-base md:text-lg py-5'>
            I will record and add any of the following instruments to your song: acoustic guitar, electric guitar, electric bass, synthesizer, percussion, drums. I play all these instruments on my own songs and I'd be happy to add any one of them to yours!
            </p>

            <div className='w-full text-center text-2xl md:text-4xl font-light pt-10 uppercase'>
                <h2>Vocals</h2>
            </div>
            
            <p className='text-base md:text-lg py-5'>
            Have you heard my golden voice (haha ;)) and thought to yourself- man, I need that voice on one of my tunes!! I will sing lead vocals, background vocals, voiceovers, ect. into my trusty Audio Tecnica AT4040 condenser mic! Also, if you are looking for female backing vocals I can organize to have them recorded with the lovely ladies I collaborate with on a regular basis in my studio.
            </p>

            <div className='w-full text-center text-2xl md:text-4xl font-light pt-10 uppercase'>
                <h2>Beats</h2>
            </div>
            
            <p className='text-base md:text-lg py-5'>
            Do you need a beat, a backing track, or a full fledged song? I will craft one specifically for you based on your needs and requirements. Once I make the track that suits your purpose the rights to the song will remain 100% yours!
            </p>

            <div className='w-full text-center text-2xl md:text-4xl font-light pt-10 uppercase'>
                <h2>Lessons</h2>
            </div>
            
            <p className='text-base md:text-lg py-5'>
            1-2-1 lessons
            Logic X pro, Mixing, Mastering, Music Production, Songwriting. 30 euros per hour or 50 euros for a two hour block.
            </p>

            <p className='text-base md:text-lg py-5'>
            Most of these services are subjective and the prices vary greatly depending on the situation. For more information on the process get in touch with me directly to discuss your idea.
            </p>
            
            <ContactForm />
        </div>
    </PageLayout>
  )
}

export default Production