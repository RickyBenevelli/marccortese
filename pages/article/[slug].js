import React, {useState} from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import PageLayout from "@/components/PageLayout";
import PageTitle from "@/components/PageTitle";
import imageBackground from '@/public/images/Blog.webp'

import readingTime from "reading-time";
import dayjs from "dayjs";
import {AiOutlineClose } from "react-icons/ai";

import articles from "@/json/articles.json";

const Article = ({article}) => {
  const [openImage, setOpenImage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const createMarkup = () => {
    return { __html: article.text };
  };

  const toggleImage = () => {
    setOpenImage(!openImage);
    setIsLoading(true);
  };

  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10 w-full'>

            <PageTitle>Blog</PageTitle>

            <div>
                <h2 className="text-2xl md:text-4xl font-light py-2">
                    {article.title}
                </h2>
                <p className="uppercase text-sm font-light pb-5 md:pb-14">
                    {dayjs(article.date).format('D MMMM YYYY')}
                </p>
            </div>
            
            <div className="w-full flex flex-col-reverse md:flex-row">
                <div className="md:w-2/3 md:pr-10 text-base md:text-lg font-light" dangerouslySetInnerHTML={createMarkup()}/>

                <div className="w-full md:w-1/3">
                    <div className={`relative aspect-square`}>
                        <Image src={article.cover} alt='' fill style={{objectFit: 'cover'}} onClick={toggleImage} />
                    </div>
                    <div className="text-sm font-light pt-5 pb-10 text-right">
                      Reading time: {Math.round(readingTime(article.text).minutes)}'
                    </div>
                    
                </div>
            </div>

            {openImage && (
              <div className='absolute inset-0 bg-black bg-opacity-80 z-30'>
                <div className={`fixed inset-x-[10vw] inset-y-[12vh] flex justify-center items-center bg-opacity-80 z-50 ${isLoading ? "blur-xl grayscale" : "blur-0 grayscale-0"}`} >
                  
                  <div className={`relative w-full h-full m-auto `}>
                    
                    <AiOutlineClose className='w-5 h-5 absolute top-0 text-white right-0 z-[55] cursor-pointer' onClick={toggleImage}/>

                    <Image src={article.cover} alt="" fill style={{objectFit: 'contain'}} onLoadingComplete={() => setIsLoading(false)} />

                  </div>
                </div>
              </div>
            )}

        </div>
    </PageLayout>
  )
};

export default Article;

export async function getStaticPaths({locales}) {
  const articlesSlug = articles.map((article) => (locales.map((locale) => ({ params: { slug: article.slug}, locale})))).flat();
  
  return {
    paths: articlesSlug,
    fallback: false,
  };
}

export async function getStaticProps({ params: {slug} }) {
  const article = articles.find((article) => article.slug === slug);

  return{
    props: {
        article
    }
  }
}