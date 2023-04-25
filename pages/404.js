import React from 'react'
import Image from 'next/image'

import PageLayout from '@/components/PageLayout'

import imageBackground from '@/public/images/Error.webp'

const Error = () => {
  return (
    <div className='h-screen'>
        <PageLayout imageBackground={imageBackground}>
            <div className='w-full flex-col items-center justify-center text-center'>
                <div className='text-6xl pt-[20vh] font-light'>
                    Error | 404
                </div>
            </div>
        </PageLayout>
    </div>
  )
}

export default Error