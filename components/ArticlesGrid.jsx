import React from 'react'

import ArticleGridElement from './ArticleGridElement'

const ArticlesGrid = ({articles}) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-8 w-full'>

        {
          articles.map((article, index) => (
              <ArticleGridElement article={article} key={index} />
          ))}
        
    </div>
  )
}

export default ArticlesGrid