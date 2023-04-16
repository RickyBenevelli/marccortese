import React from 'react'

import {Monoton} from 'next/font/google'

const monoton = Monoton(
  { 
    weight: '400',
    subsets: ['latin'],
    variable: '--font-monoton',
  }
)

const PageTitle = ({children}) => {
  return (
    <div className={`w-full py-10 ${monoton.className}`}>
        <h1 className='text-6xl font-semibold'>{children}</h1>
    </div>
  )
}

export default PageTitle