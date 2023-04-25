import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const WorkGridElement = ({album}) => {
    const [isLoading, setIsLoading] = useState(true)
  return (
    <Link href={`/works/${album.idAlbum}`} className={`relative aspect-square duration-500 ease-in-out ${isLoading ? "blur-lg grayscale scale-105" : "blur-0 scale-100 grayscale-0"}`}>
        <Image src={album.cover} alt='' fill style={{objectFit: 'cover'}} onLoadingComplete={() => setIsLoading(false)}/>
    </Link>
  )
}

export default WorkGridElement