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
        <Image src={placeholder} alt="" className='w-full brightness-[0.9]' priority/>
      </div>

      <div className='flex flex-col max-w-xl w-full h-full items-center justify-between py-10 relative z-10 text-white'>
        <h1 className='text-6xl font-semibold pt-10'>Marc Cortese</h1>

        <ul className='text-2xl text-center'>
          {
            menu.map((item, index) => {
              return (   
                <li>
                  <Link href={`/${item}`} locale="it">
                    <p className='p-2 capitalize'>{item}</p>
                  </Link>
                </li>   
              )
            })
          }
        </ul>


        <div className='flex flex-row items-center justify-between w-full pb-10'>

          <FaFacebook size={35}/>
          <FaInstagram size={35}/>
          <FaSpotify size={35}/>
          <FaYoutube size={35}/>
          <FaMusic size={35}/>
          <FaAmazon size={35}/>

        </div>
      </div>
    </main>
  )
}