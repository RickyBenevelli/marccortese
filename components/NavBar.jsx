import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import LOGO from '@/public/icons/LOGO.svg'
import facebook from '@/public/icons/Facebook.svg'
import apple from '@/public/icons/Applemusic.svg'
import instagram from '@/public/icons/Instagram.svg'
import spotify from '@/public/icons/Spotify.svg'
import youtube from '@/public/icons/Youtube.svg'

import menu from '@/json/menu.json'

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { locale, locales, asPath } = router;
//   const t = locale === 'en' ? en : it;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className='z-50 w-full fixed top-0 h-20 backdrop-blur flex flex-row items-center justify-between text-white font-light'>

          <div className='max-w-[1240px] w-full m-auto flex flex-row items-center justify-between'>

              <Link href={"/"} className='z-50'>
                  <div className='m-2 mx-5 text-white z-[51]'>
                    <Image src={LOGO} alt="Marc Cortese" className='w-12 h-12' />
                  </div>
              </Link>

              {/* only on desktop */}
              <ul className='grow flex-row text-white text-sm font-light xl:text-lg hidden md:flex justify-around lg:px-10'>
                  {
                      menu.map((item, index) => {
                          return (
                              <li key={index}>
                                  <Link href={`/${item}`}>
                                      <p className='px-2 lg:px-5 capitalize hover:text-white/80 transition-colors'>
                                          {item}
                                      </p>
                                  </Link>
                              </li>
                              )
                          })
                      }
                  </ul>

              <div className='pr-5 pl-2 hidden md:flex flex-row text-xs items-center'>
                  <Link
                      href={asPath}
                      locale="it"
                      className={`p-2 ${locale === 'it' ? 'text-white/80 underline' : 'text-white/40'}`}
                  >
                      IT
                  </Link>
                <p className=''>|</p>
                  <Link
                      href={asPath}
                      locale="en"
                      className={`p-2 ${locale === 'it' ? 'text-white/40' : 'text-white/80 underline'}`}
                  >
                      ENG
                  </Link>
              </div>

              {/* only on mobile */}
              <div className='md:hidden'>
                    {!isOpen && <AiOutlineMenu className='w-10 h-10 fill-white m-5 transition-all ease-in duration-200' onClick={toggleMenu}/>}
              </div>
          </div>


      </nav>

      {/* tendina del menù mobile */}
      <div className={`fixed top-0 bottom-0 w-screen h-screen bg-black/90 z-50 md:hidden ${isOpen ? "" : "hidden"}`}>
        <div className='fixed max-w-[1240px] w-full m-auto flex flex-row items-center justify-end'>
            {isOpen && <AiOutlineClose className='w-10 h-10 fill-white m-5 transition-all ease-in duration-200' onClick={toggleMenu}/>}
        </div>
        

        <div className='flex flex-col w-full h-full pt-20 pb-[10vh] items-center justify-between text-white'>

            <ul className='grow text-[3vh] text-center font-light flex flex-col justify-around pb-[2vh]'>
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

            <div className='flex flex-row text-[2vh] items-center'>
                  <Link
                      href={asPath}
                      locale="it"
                      className={`p-2 ${locale === 'it' ? 'text-white/80 underline' : 'text-white/40'}`}
                  >
                      IT
                  </Link>
                <p className=''>|</p>
                  <Link
                      href={asPath}
                      locale="en"
                      className={`p-2 ${locale === 'it' ? 'text-white/40' : 'text-white/80 underline'}`}
                  >
                      ENG
                  </Link>
            </div>
        </div>



      </div>

    </>
  )
}

export default NavBar