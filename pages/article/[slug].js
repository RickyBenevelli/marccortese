import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import PageLayout from "@/components/PageLayout";
import PageTitle from "@/components/PageTitle";
import imageBackground from '@/public/images/Works.webp'

import readingTime from "reading-time";
import dayjs from "dayjs";

import articles from "@/json/articles.json";

const Article = ({article}) => {

  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10 w-full'>

            <PageTitle>Blog</PageTitle>

            <div>
                <h2 className="text-2xl md:text-4xl font-light py-2">
                    {article.title}
                </h2>
                <p className="uppercase text-sm font-light">
                    {dayjs(article.date).format('D MMMM YYYY')}
                </p>
            </div>
            
            <div className="w-full flex flex-col-reverse md:flex-row">
                <div className="md:w-2/3 pr-10 text-base md:text-lg font-light">
                    {article.text}
                </div>

                <div className="md:w-1/3 flex flex-col items-end">
                    <div className={`relative aspect-square duration-500 ease-in-out`}>
                        <Image src={article.cover} alt='' fill style={{objectFit: 'cover'}} />
                    </div>
                    <div className="uppercase text-sm font-light pt-5 pb-10">
                      reading time: {Math.round(readingTime(article.text).minutes)}
                    </div>
                </div>
            </div>

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