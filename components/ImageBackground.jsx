import React from 'react'
import Image from 'next/image'
import placeholder from '../public/placeholder.png'


const ImageBackground = ({children}) => {
  return (
    <section className="max-w-[1240] m-auto relative flex  w-screen  flex-col items-center justify-between">
      <div className='fixed z-[-1] inset-0 h-screen'>
        <Image src={placeholder} alt="" fill className='w-full brightness-[0.9] object-cover' sizes="100vw" style={{
            objectFit: 'cover',
          }} priority/>
      </div>

      <div className='h-full max-w-[1240px] w-full m-auto flex flex-col items-start pt-40 relative z-10 text-white'>
        {children}
      </div>
    </section>
  )
}

export default ImageBackground