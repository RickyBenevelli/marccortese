import React from 'react'

import ArticleGridElement from './ArticleGridElement'

const ArticlesGrid = ({articles}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 w-full'>

        {
          articles.map((article, index) => (
              <ArticleGridElement article={article} key={index} />
          ))}
        
    </div>
  )
}

export default ArticlesGrid