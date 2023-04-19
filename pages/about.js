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
            <div className='text-lg py-5'>
            <p>
            I am Marc Cortese and I am happy to welcome you to my website!
            <br/>
            With over ten years of experience as a live performer, session musician, and artist in my own right, I've had the opportunity to play and record in different kinds of projects in varying genres and cultures.
            <br/>
            Over the years, I have seen the same pattern play out. It goes something like this:
            <br/>
            <br/>
            A band invests years of rehearsal time into a project. Finally they decide to record it and take it to a local studio. The recording process, consisting in blood sweat and tears on the part of the band, is met with a smugly aloof 'sound engineer' that is counting a clock, and who personally, couldn't give a shit about the project itself, as long as the money comes in. The band spends thousands on recording/production costs, but when the mix comes back, they are not happy with it. They ask for revisions and the studio says that revisions are not included in the price. The band, disheartened, finishes the project without even liking it. The project is never shown to the world. It collects digital dust on some forgotten hard disk.
            <br/>
            <br/>
            I have been there unfortunately.
            <br/>
            And there is where my journey into the universe of music production began!
            <br/>
            <br/>
            After years of study, research and experimentation with my own creations and those of others, I have arrived at an approach to production that is artist-centric. This means that for me to produce a song firstly entails getting into the head of the artist to understand what they want to communicate. Only after that can I implement the technical methods at mix-down that support and manifest that vision to the highest degree.
            <br/>
            <br/>
            In creating this service I hope to offer:
            </p>
            <ol className='list-decimal px-4'>
                <li>Artists a safe place to be themselves and create freely</li>
                <li>The technical knowhow for artists to craft their own sound while still being competitive and up to date with current industry standards.</li>
                <li>Passion! Not the cold, soulless standardization so predominant in music production today.</li>
                <li>Affordability (especially to smaller artists just getting started).</li>
            </ol>
            </div>

            <DownloadButton/>
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
            <DownloadButton/>
        </div>
    </PageLayout>
  )
}

export default About