import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import localFont from '@next/font/local'
import { useRouter } from "next/router";

import facebook from '@/public/icons/Facebook.svg'
import amazon from '@/public/icons/Amazonmusic.svg'
import apple from '@/public/icons/Applemusic.svg'
import instagram from '@/public/icons/Instagram.svg'
import spotify from '@/public/icons/Spotify.svg'
import youtube from '@/public/icons/Youtube.svg'
import lineSvg from '@/public/icons/Line.svg'

const inter = Inter({ subsets: ['latin'] })
import backgroundImage from '../public/images/Home.webp'

const marcFont = localFont({ src: '../public/MarcCortese.otf' })

import menu from '@/json/menu.json'


export default function Home() {

  const { locale, locales, defaultLocale } = useRouter();

  return (
    <main className="relative flex h-screen w-screen overflow-hidden flex-col items-center justify-between">

      <div className='absolute inset-0'>
        <Image src={backgroundImage} alt="" fill className='w-full brightness-[0.9] object-cover' sizes="100vw" style={{
            objectFit: 'cover',
          }} priority/>
      </div>

      <div className='flex flex-col max-w-3xl w-full h-full items-center justify-between py-[2vh] lg:py-[6vh] relative z-10 text-white'>
        <span className='text-center inline-block relative'>
          <h1 className={`text-[5vh] lg:text-[10vh] ${marcFont.className} pt-[4vh]`}>Marc Cortese</h1>
          <Image src={lineSvg} alt='' fill className='mt-[6vh] lg:mt-[8vh] z-0' priority/>
        </span>

        <ul className='grow text-[3vh] text-center font-light flex flex-col justify-around pt-[4vh] z-10'>
          {
            menu.map((item, index) => {
              return (   
                <li key={index} className='cursor-pointer'>
                  <Link href={`/${item}`} locale="it">
                    <p className='capitalize hover:text-white/80 transition-all duration-100 ease-in'>{item}</p>
                  </Link>
                </li>   
              )
            })
          }
        </ul>


        <div className='flex flex-row flex-wrap items-center justify-center w-full px-10'>

          <Link href={"/facebook"}>
            <Image src={facebook} alt='Facebook' className='socialIcon' priority/>
          </Link>
          <Link href={"/instagram"}>
            <Image src={instagram} alt='Instagram' className='socialIcon' priority/>
          </Link>
          <Link href={"/spotify"}>
            <Image src={spotify} alt='Spotify' className='socialIcon' priority/>
          </Link>
          <Link href={"/youtube"}>
            <Image src={youtube} alt='YouTube' className='socialIcon' priority/>
          </Link>
          <Link href={"/apple"}>
            <Image src={apple} alt='Apple Music' className='socialIcon' priority/>
          </Link>
          <Link href={"/amazon"}>
            <Image src={amazon} alt='Amazon Music' className='socialIcon' priority/>
          </Link>

        </div>
      </div>
    </main>
  )
}