import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import WorkGridElement from './WorkGridElement'

const WorksGrid = ({albums}) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-8 w-full'>

        {
          albums.map((album, index) => (
              <WorkGridElement key={index} album={album} />
          ))}
        
    </div>
  )
}

export default WorksGrid

