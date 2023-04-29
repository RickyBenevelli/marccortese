import React, {useState} from 'react'
import Image from 'next/image'


const ImageBackground = ({children, imageBackground}) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <section className="max-w-[1240] m-auto relative flex  w-screen  flex-col items-center justify-between h-full">
      <div className='fixed z-[-1] inset-0'>
        <Image src={imageBackground} alt="" fill className={`w-full brightness-[0.9] object-cover ${isLoading ? "blur-lg grayscale" : "blur-0 grayscale-0"}`} sizes="100vw" style={{
            objectFit: 'cover',
          }} priority onLoadingComplete={() => setIsLoading(false)}/>
      </div>

      <div className='h-full max-w-[1240px] w-full m-auto flex flex-col items-start pt-28 md:pt-40 relative z-10 text-white font-light'>
        {children}
      </div>
    </section>
  )
}

export default ImageBackground