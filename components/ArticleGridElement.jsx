import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ArticleGridElement = ({article}) => {
    const [isLoading, setIsLoading] = useState(true)
  return (
    <div className='flex flex-col items-start'>
        <h3>{article.title}</h3>
        <p>{article.date}</p>
        <div className={`relative aspect-square duration-500 ease-in-out`}>
            <Image src={article.cover} alt='' fill style={{objectFit: 'cover'}} />
        </div>
        <button>LEGGI ARTICOLO</button>
    </div>
  )
}

export default ArticleGridElement