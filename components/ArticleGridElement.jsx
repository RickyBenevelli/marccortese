import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'

const ArticleGridElement = ({article}) => {
    const [isLoading, setIsLoading] = useState(true)
    const { locale, locales, asPath } = useRouter();
  return (
    <Link href={`/article/${article.slug}`}>
        <div className='flex flex-col items-start'>
            <h3 className='text-2xl my-0 uppercase'>
                {locale == 'en' ? article.title : article.title_it}
            </h3>
            <span className='my-2 flex flex-row'>DATE: <p className='px-2'>{dayjs(article.date).format('DD/MM/YY')}</p></span>
            <div className='w-full mb-5'>
                <div className={`relative aspect-square duration-500 ease-in-out`}>
                    <Image src={article.cover} alt='' fill style={{objectFit: 'cover'}} />
                </div>
            </div>
            <button className='inline-block bg-white text-black px-4 py-2 my-2 font-light text-sm'>
                {locale === 'en' ? 'READ ARTICLE' : "LEGGI ARTICOLO"}
            </button>
        </div>
    </Link>
  )
}

export default ArticleGridElement