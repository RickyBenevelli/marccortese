import React from 'react'

const PageTitle = ({children}) => {
  return (
    <div className='w-full py-10'>
        <h1 className='text-6xl font-semibold'>{children}</h1>
    </div>
  )
}

export default PageTitle