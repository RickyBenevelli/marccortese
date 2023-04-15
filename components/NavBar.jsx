import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

import menu from '@/json/menu.json'

const NavBar = () => {
  const router = useRouter();
  const { locale, locales, asPath } = router;
//   const t = locale === 'en' ? en : it;


  return (
    <nav className='fixed top-0 h-20 bg-transparent flex flex-row items-center justify-between'>
        <div className='max-w-[1240px] w-full m-auto flex flex-row items-center justify-between'>

            <Link href={"/"}>
                <div className='m-5 text-black'>
                    LOGO
                </div>
            </Link>


            <ul className='grow flex-row text-black text-sm font-light xl:text-lg hidden md:flex justify-around lg:px-10'>
                {
                    menu.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link href={`/${item}`}>
                                    <p className='px-2 lg:px-5 capitalize hover:text-slate-800 transition-colors'>
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
                    activeClassName={locale === "it"}
                    href={asPath}
                    locale="it"
                    className='p-2'
                >
                    IT
                </Link>

                <Link
                    activeClassName={locale === "en"}
                    href={asPath}
                    locale="en"
                    className='p-2'
                >
                    ENG
                </Link>
            </div>

        </div>
    </nav>
  )
}

export default NavBar