import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import LOGO from '@/public/icons/LOGO.svg'

import menu from '@/json/menu.json'

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { locale, locales, asPath } = router;
//   const t = locale === 'en' ? en : it;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className='z-50 w-full fixed top-0 h-20 backdrop-blur flex flex-row items-center justify-between text-white'>
          <div className='max-w-[1240px] w-full m-auto flex flex-row items-center justify-between'>

              <Link href={"/"}>
                  <div className='m-2 text-white'>
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

              <div className='pr-5 pl-2 hidden md:flex flex-row text-sm'>
                  <Link
                      href={asPath}
                      locale="it"
                      className='p-2'
                  >
                      IT
                  </Link>

                  <Link
                      href={asPath}
                      locale="en"
                      className='p-2'
                  >
                      ENG
                  </Link>
              </div>

              {/* only on mobile */}
              <div className='md:hidden'>
                      {isOpen?
                      <AiOutlineClose className='w-10 h-10 fill-white m-5' onClick={toggleMenu}/>:
                      <AiOutlineMenu className='w-10 h-10 fill-white m-5' onClick={toggleMenu}/>
                      }
              </div>
          </div>


      </nav>

      {/* tendina del menù mobile */}
      {/* <div className='fixed top-0 bottom-0 w-screen h-screen bg-black/70 '>
                    ciao
      </div> */}

    </>
  )
}

export default NavBar