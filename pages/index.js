import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import localFont from '@next/font/local'
import { useRouter } from "next/router";

import facebook from '@/public/icons/Facebook.svg'
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

      <div className='flex flex-col max-w-3xl w-full h-full items-center justify-between pt-[4vh] pb-[8vh] lg:pt-[6vh] relative z-10 text-white'>
        <span className='text-center inline-block relative'>
          <h1 className={`text-[5vh] lg:text-[10vh] ${marcFont.className} pt-[4vh]`}>Marc Cortese</h1>
          <Image src={lineSvg} alt='' fill className='mt-[6vh] lg:mt-[8vh] z-0' priority/>
        </span>

        <ul className='text-[3vh] text-center font-light flex flex-col justify-around pt-[4vh] z-10'>
          {
            menu.map((item, index) => {
              return (   
                <li key={index} className='cursor-pointer py-[1vh]'>
                  <Link href={`/${item}`} locale="it">
                    <p className='capitalize hover:text-white/80 dark:text-white transition-all duration-100 ease-in'>{item}</p>
                  </Link>
                </li>   
              )
            })
          }
        </ul>


        <div className='grid grid-cols-5 gap-[8vw] w-full px-10 py-[5vh]'>

          <Link href={"https://www.facebook.com/marc.cortese.9/?locale=it_IT"} className='socialIcon'>
            <Image src={facebook} alt='Facebook' priority/>
          </Link>
          <Link href={"https://instagram.com/marccortese_musix?igshid=YmMyMTA2M2Y="} className='socialIcon'>
            <Image src={instagram} alt='Instagram' priority/>
          </Link>
          <Link href={"https://open.spotify.com/artist/08pTM5TPyqCYEeFFthnoLr?si=wuasu9SLRuK-j4SV64PXHg"} className='socialIcon'>
            <Image src={spotify} alt='Spotify' priority/>
          </Link>
          <Link href={"https://www.youtube.com/@marccortese"} className='socialIcon'>
            <Image src={youtube} alt='YouTube' priority/>
          </Link>
          <Link href={"https://music.apple.com/it/artist/marc-cortese/598073934"} className='socialIcon'>
            <Image src={apple} alt='Apple Music' priority/>
          </Link>

        </div>
      </div>
    </main>
  )
}