import React, {useState} from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";

import PageLayout from '@/components/PageLayout'
import PageTitle from '@/components/PageTitle'
import DownloadButton from '@/components/DownloadButton'

import imageBackground from '@/public/images/Mix.webp'

// form:
import { useForm } from "react-hook-form";
import { sendContactForm } from '@/lib/api.js'
import dayjs from 'dayjs'

const Mix = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const {pathname} = useRouter();

  const onSubmit = async (data) => {
    // add a field to the data object
    data.date = dayjs(new Date()).format('DD MMMM YYYY, HH:mm')
    data.page = pathname;
    try {
      await sendContactForm(data)
      setIsSubmitted(true)
      setIsError(false)
      reset()
    }
    catch (error) {
      setIsError(true)
      setIsSubmitted(false)
      reset()
    }
  }
  return (
    <PageLayout imageBackground={imageBackground}>
        <div className='px-5 md:px-10'>

          <PageTitle>Mix</PageTitle>

          <p className='text-lg py-5'>
          Breve testo
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet, consectetuer adipisc .
          <br/>
          Breve testo
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet, consectetuer adipisc .
          </p>
        
        <p>Contact me</p>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-end text-black'>

          <input placeholder='Name' {...register("name", { required: true })} className={`w-full mt-3 mb-1 p-2 rounded-md ${errors.name ? "border-[3px] border-[#cc0000]" : ""}`}/>
          {errors.name && <div className='w-full text-left text-[#cc0000]'>This field is required</div>}
          
          <input placeholder='Email' {...register("email", { required: true, pattern: {value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ , message: "Email is not valid"} })} className={`w-full mt-3 mb-1 p-2 rounded-md ${errors.name ? "border-[3px] border-[#cc0000]" : ""}`}/>
          {errors.email && errors.email.type === "required" && <div className='w-full text-left text-[#cc0000]'>This field is required</div>}
          {errors.email && errors.email.type === "pattern" && <div className='w-full text-left text-[#cc0000]'>{errors.email?.message}</div>}

         <textarea placeholder='Your requests' {...register("message")} className={`w-full mt-3 mb-1 p-2 rounded-md`}/>

          {errors.exampleRequired && <span>This field is required</span>}
          
          <span>
            <input type="submit" placeholder='Send' value="Send" className='text-right py-2 md:py-4 cursor-pointer text-white'/>
          </span>
          <div className='w-full flex flex-col items-center text-center text-white'>
            {isSubmitted && <p>Thank you for contacting us</p>}
            {isError && <p className='text-[#cc0000]'>Something went wrong</p>}
          </div>
        </form>

        </div>
    </PageLayout>
  )
}

export default Mix