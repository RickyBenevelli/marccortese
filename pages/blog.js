import React from 'react'
import Image from 'next/image'

import PageLayout from '@/components/PageLayout'
import PageTitle from '@/components/PageTitle'

import imageBackground from '@/public/images/Blog.webp'


import albums from '@/json/albums.json'
import artists from '@/json/artists.json'
import Link from 'next/link'

import articles from '@/json/articles.json'
import ArticlesGrid from '@/components/ArticlesGrid'

const Blog = () => {
    // const albumsId = albums.map((album) => album.idAlbum);
    const articlesSorted = articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    
  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10 w-full'>

            <PageTitle>Blog</PageTitle>
            
            <ArticlesGrid articles={articlesSorted}/>

        </div>
    </PageLayout>
  )
}

export default Blog
