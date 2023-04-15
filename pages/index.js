import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import { useRouter } from "next/router";

import {FaFacebook, FaInstagram, FaSpotify, FaYoutube, FaMusic, FaAmazon} from "react-icons/fa";

const inter = Inter({ subsets: ['latin'] })
import placeholder from '../public/placeholder.png'

import menu from '@/json/menu.json'


export default function Home() {

  const { locale, locales, defaultLocale } = useRouter();

  return (
    <main className="relative flex h-screen w-screen overflow-hidden flex-col items-center justify-between">
      <div className='absolute inset-0'>
        <Image src={placeholder} alt="" fill className='w-full brightness-[0.9] object-cover' sizes="100vw" style={{
            objectFit: 'cover',
          }} priority/>
      </div>

      <div className='flex flex-col max-w-3xl w-full h-full items-center justify-between py-10 relative z-10 text-white'>
        <h1 className='text-4xl font-semibold pt-10'>Marc Cortese</h1>

        <ul className='text-2xl text-center font-light'>
          {
            menu.map((item, index) => {
              return (   
                <li key={index} className='cursor-pointer'>
                  <Link href={`/${item}`} locale="it">
                    <p className='p-2 capitalize hover:text-black transition-all duration-100 ease-in'>{item}</p>
                  </Link>
                </li>   
              )
            })
          }
        </ul>


        <div className='flex flex-row flex-wrap items-center justify-center w-full pb-10 px-10'>

          <Link href={"/facebook"}>
          <FaFacebook className='socialIcon'/>
          </Link>
          <Link href={"/instagram"}>
          <FaInstagram className='socialIcon'/>
          </Link>
          <Link href={"/spotify"}>
          <FaSpotify className='socialIcon'/>
          </Link>
          <Link href={"/youtube"}>
          <FaYoutube className='socialIcon'/>
          </Link>
          <Link href={"/"}>
          <FaMusic className='socialIcon'/>
          </Link>
          <Link href={"/amazon"}>
          <FaAmazon className='socialIcon'/>
          </Link>

        </div>
      </div>
    </main>
  )
}